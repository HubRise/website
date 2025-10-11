---
title: Recevoir les commandes
path_override: recevoir-commandes
position: 5
layout: documentation
meta:
  title: Recevoir des commandes | Uber Direct | HubRise
  description: Découvrez les détails techniques sur la façon dont les commandes déclenchent des livraisons Uber Direct, comment les mises à jour du statut de livraison sont synchronisées, et comment suivre la position du coursier en temps réel.
---

Lorsque Uber Direct Bridge est connecté à HubRise, les commandes créées ou mises à jour dans HubRise déclenchent des demandes de devis ou de livraison auprès d'Uber Direct.

Cette page décrit les conditions de déclenchement des demandes de livraison, la synchronisation des statuts de livraison entre Uber Direct et HubRise, et les informations envoyées à Uber Direct lors de l'envoi d'une demande de livraison.

## Demandes de devis et de livraisons

A chaque création ou modification de commande dans HubRise, Uber Direct Bridge peut envoyer une demande de devis ou de livraison à Uber Direct en fonction des critères définis dans la page [Configuration](/apps/uber-direct/configuration#delivery-criteria).

### Demande de devis

Si la commande répond aux critères de livraison et qu'aucun devis n'a encore été créé, Uber Direct Bridge :

1. Demande un devis de livraison à Uber Direct. Voir [Informations de livraison envoyées à Uber Direct](#delivery-information) pour les informations envoyées.
2. Enregistre le devis dans HubRise en tant que _Delivery Quote_ rattaché à la commande. Les informations enregistrées incluent :

   - Le nom du transporteur : `Uber Direct`
   - Le code ref du transporteur : `uber_direct`
   - Le code ref du devis, qui est l'ID unique du devis dans Uber Direct
   - Le coût de livraison
   - L'heure de récupération
   - L'heure de livraison

### Réservation de la livraison

Selon le mode de réservation paramétré dans Uber Direct Bridge :

- **Réservation automatique des livraisons** : La livraison est créée immédiatement.
- **Demander un devis et attendre la confirmation** : La livraison est créée uniquement lorsque le devis est accepté.

Lors de l'envoi d'une demande de livraison, Uber Direct Bridge :

1. Envoie à Uber Direct l'ID du devis et les détails de la commande.
2. Attache à la commande HubRise une ressource _Delivery_, qui contient les informations du devis ainsi que les informations complémentaires suivantes :

   - Le code ref de la livraison, qui est l'ID unique de la livraison dans Uber Direct
   - Le statut de la livraison, initialisé à `pending`
   - Un URL de suivi, pour localiser le coursier en temps réel
   - Le nom du coursier
   - Le numéro de téléphone du coursier

## Informations envoyées à Uber Direct {#delivery-information}

Lors de la création d'une livraison, Uber Direct Bridge envoie les informations suivantes à Uber Direct :

### Informations pour la récupération

Ces informations proviennent de la configuration d'Uber Direct Bridge.

- Nom de l'enseigne
- Adresse de récupération, dont la latitude et la longitude
- Numéro de téléphone
- Instructions pour le coursier

### Informations pour la remise de la commande

- Nom complet du client
- Numéro de téléphone du client
- Adresse de livraison, dont la latitude et la longitude
- Notes de livraison

### Informations de livraison

Les heures ci-dessous s'appliquent à la récupération si `expected_time_pickup` est égal à `true`, ou à la livraison dans le cas contraire. Pour chaque commande, le bridge envoie :

- Heure minimale : Pour les commandes ASAP, il s'agit de l'heure actuelle plus le temps de préparation. Pour les commandes à l'avance, aucune heure de début n'est envoyée, et Uber Direct utilise uniquement l'heure limite.
- Heure limite : issue du champ `expected_time`, si présent

Les paramètres suivants définis dans la configuration du bridge sont également envoyés à Uber Direct :

- Action en cas de non-livraison : déposer devant la porte ou rapporter la commande
- Instructions de retour

### Informations sur la commande

- Référence du bordereau, indiqué dans le champ `collection_code`
- Montant total
- Liste des articles avec libellés, quantités, prix, et options

## Statut de livraison

Uber Direct envoie des mises à jour en temps réel sur le statut de livraison via des crochets Web. Le statut de livraison sur Uber Direct est défini par les champs `status` et `courier_imminent`. Le champ `courier_imminent` indique que le coursier se trouve à environ 1 minute du point de récupération ou de livraison.

Uber Direct Bridge met à jour le statut de la commande et de livraison dans HubRise selon le tableau suivant :

| Statut Uber Direct | Courier Imminent | Statut de livraison HubRise | Statut de commande HubRise |
| ------------------ | ---------------- | --------------------------- | -------------------------- |
| `pending`          | -                | `pending`                   | -                          |
| `pickup`           | `false`          | `pickup_enroute`            | -                          |
| `pickup`           | `true`           | `pickup_approaching`        | -                          |
| `pickup_complete`  | -                | `pickup_waiting`            | `in_delivery`              |
| `dropoff`          | `false`          | `dropoff_enroute`           | -                          |
| `dropoff`          | `true`           | `dropoff_approaching`       | -                          |
| `delivered`        | -                | `delivered`                 | `completed`                |
| `canceled`         | -                | `cancelled`                 | `delivery_failed`          |
| `returned`         | -                | -                           | `delivery_failed`          |

## Position du coursier

Pendant le déplacement du coursier, Uber Direct envoie des mises à jour de position toutes les 20 secondes environ.

A réception de ces mises à jour, Uber Direct Bridge modifier les champs suivants dans la ressource _Delivery_ rattachée à la commande HubRise :

- Le téléphone et le code d'accès du coursier, dès que disponibles
- La latitude et la longitude du coursier

## Livraison simulée

Uber Direct propose une fonctionnalité permettant de simuler des livraisons réelles à des fins de test. Dans ce mode, Uber Direct simule le cycle de vie complet d'une livraison, y compris les changements de statut et les mises à jour de position du coursier.

Pour activer les tests automatisés, ajoutez un _custom field_ à votre commande HubRise de la manière suivante :

```json
{
  "status": "new",
  "service_type": "delivery",
  // autres champs de commande...
  "custom_fields": {
    "uber_direct": {
      "robo_courier": {
        "mode": "auto"
      }
    }
  }
}
```

Lorsque ce _custom field_ est présent, Uber Direct simule le cycle de vie de la livraison, y compris les changements de statut de `pending` à `delivered`.

Dans le _custom field_ `robo_courier`, vous pouvez indiquer n'importe quelle valeur `robo_courier_specification` prise en charge dans la [documentation de l'API Uber Direct](https://developer.uber.com/docs/deliveries/guides/robocourier). Par exemple, vous pouvez définir le mode `custom` et indiquer les horaires souhaités de changements de statut.
