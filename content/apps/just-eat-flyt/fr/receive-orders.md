---
title: Recevoir des commandes
path_override: recevoir-commandes
position: 5
layout: documentation
meta:
  title: Recevoir des commandes | Just Eat Flyt | HubRise
  description: Découvrez les détails techniques sur la récupération des commandes de Just Eat à HubRise, et quels champs sont transmis ou non.
---

En connectant Just Eat à HubRise, vous pouvez recevoir des commandes directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

L'OrderPad Just Eat doit rester allumé pour recevoir les commandes dans HubRise. Pour plus d'informations, voir [Puis-je désactiver la tablette ?](/apps/just-eat-flyt/faqs/turn-off-orderpad) Les commandes doivent être acceptées, soit manuellement depuis l'OrderPad, soit automatiquement sur certains marchés Just Eat. Pour plus d'informations, voir [Pourquoi activer l'acceptation automatique sur Just Eat ?](/apps/just-eat-flyt/faqs/auto-accept)

Cette page décrit les informations que Just Eat envoie à HubRise. Elle peut vous aider à comprendre comment les commandes seront reçues dans votre logiciel de caisse.

## Articles et options

Les commandes Just Eat contiennent des informations complètes sur les articles et les options, y compris le nom, le code ref du produit, la quantité et le prix.

De même, les avis formulés par les clients sur des produits individuels ne sont pas pris en charge dans Just Eat. Si vous comptez sur ces avis pour les instructions de préparation ou de présentation (par exemple "Cuisson à point" ou "Couper en tranches"), vous devez ajouter les articles correspondants dans votre logiciel de caisse, puis les inclure en tant qu'options dans le menu Just Eat. Ils seront ainsi correctement encodés.

## Statuts de commande

---

**REMARQUE IMPORTANTE :** Dans cette section, nous mettons en majuscule la première lettre des statuts Just Eat pour les distinguer plus facilement des noms de statuts HubRise. Par exemple, `Successful` (Réussite) est un statut Just Eat, tandis que `accepted` (acceptée) est un statut HubRise.

---

### Statuts Just Eat

Les commandes Just Eat peuvent être marquées comme suit :

- `Successful` (Réussite) : la commande a été acceptée par le logiciel de caisse.
- `Failed` (Échec) : l'envoi de la commande au logiciel de caisse a échoué.

Les nouvelles commandes doivent être identifiées comme `Successful` ou `Failed` dans les trois minutes. Sinon, Just Eat les marque automatiquement comme `Failed`.

Vous ne pouvez actualiser le statut d'une commande qu'une seule fois. Les modifications ultérieures sont ignorées par Just Eat.

### Lorsque le statut change dans HubRise

Lorsque le statut d'une commande passe à `rejected` (rejetée) ou `cancelled` (annulée) dans HubRise, Just Eat Bridge notifie Just Eat du changement de statut de commande à `Failed`.

Just Eat Bridge vous permet de décider quel statut HubRise déclenche le statut `Successful` dans Just Eat. Cette option est utile pour gérer différents scénarios lorsque votre logiciel de caisse actualise le statut de la commande. Par exemple, si votre logiciel de caisse marque une commande acceptée comme `received` (reçue) dans HubRise, vous pouvez toujours signaler à Just Eat que la commande a été acceptée.

Les autres valeurs de statut HubRise ne sont pas prises en charge ni envoyées à Just Eat.

### Lorsque le statut change dans Just Eat

Just Eat Bridge ne modifie pas le statut des commandes dans HubRise. Si une commande est annulée par Just Eat, HubRise ne sera pas notifié.

## Types de service

Just Eat prend en charge trois types de service :

- Livraison par un coursier Just Eat
- Livraison par un livreur du restaurant
- Retrait par les clients.

Ils sont généralement associés à des codes ref spécifiques dans votre logiciel de caisse, que vous pouvez définir sur la page de configuration du bridge. Pour plus d'informations sur les codes ref, consultez la documentation de votre logiciel de caisse sur notre [page Apps](/apps).

## Horaires des commandes

Just Eat envoie les commandes à HubRise lorsqu’un coursier est assigné, ou lorsque le coursier se trouve à une distance correspondant au temps de préparation défini pour le point de vente.

- Vous pouvez modifier le temps de préparation directement dans le portail Just Eat.
- Si vous souhaitez que Just Eat envoie les commandes à HubRise dès qu’elles sont passées, contactez-nous à support@hubrise.com.

Pour les commandes livrées par le restaurant, Just Eat fournit l'heure à laquelle le client attend la livraison de sa commande. Pour les autres types de commande, il fournit l'heure à laquelle la commande doit être prête à emporter, que ce soit par le client ou par un livreur. Dans les deux cas, l'horaire est transmis à HubRise via le champ `expected_time` (heure prévue). Cet horaire ne peut pas être modifié par le logiciel de caisse.

## Données clients

Les coordonnées du client fournies par Just Eat dépendent du type de service associé à la commande.

- Pour les commandes livrées par le restaurant, HubRise reçoit le nom et l'adresse du client.
- Pour les commandes à emporter, seul le nom du client est reçu.
- Pour les commandes livrées par Just Eat, le nom du client peut être reçu, en fonction du marché. L'adresse n'est par contre jamais reçue.

## Remises

Les remises ne sont pas prises en charge dans Just Eat, et aucune information n'est fournie dans l'API.

## Frais

Just Eat Flyt Bridge encode deux types de frais : les frais de livraison et les suppléments.

## Référence technique

Cette section décrit la manière dont les commandes sont encodées dans les requêtes JSON reçues en provenance de Just Eat Flyt Bridge.

### Identifiant de commande Just Eat

Lorsqu'une nouvelle commande est créée dans HubRise, l'identifiant de la commande Just Eat est consigné dans le champ `collection_code`.
Il s'agit de l'identifiant de référence de la commande que le client voit s'afficher sur la plateforme.

### Encodage des articles

Pour chaque article inclus dans la commande, Just Eat Flyt Bridge indique les informations suivantes :

- `sku_ref` : code ref de l'article
- `product_name` : nom du produit
- `price` : prix unitaire de l'article
- `quantity` : quantité d'articles dans la commande
- `options` : options associées à l'article

### Encodage des options

Pour chaque option incluse dans la commande, Just Eat Flyt Bridge indique les informations suivantes :

- `option_list_name` : emplacement réservé pour le nom de la liste d'options, avec la valeur par défaut `Options`
- `ref` : code ref de l'option
- `name` : nom de l'option
- `price` : prix unitaire de l'option

Chaque option a une quantité égale à 1. Les options multiples identiques sont encodées dans des objets d'option distincts.

<details>

<summary>Exemple de JSON pour un article unique avec une option</summary>

```json
"items": [
  {
    "product_name": "Poulet au curry",
    "sku_ref": "2473",
    "price": "12.95 EUR",
    "quantity": "1",
    "options": [
      {
        "option_list_name": "Options",
        "name": "Riz thaï",
        "ref": "2043",
        "price": "0.35 EUR"
      }
    ]
  }
]
```

</details>

### Client

Just Eat Flyt Bridge ne crée jamais de client dans HubRise pour les commandes Just Eat, mais inclut toujours les coordonnées du client dans l'objet `customer`, lorsqu'elles sont disponibles.

Le prénom et le nom du client sont indiqués dans les champs `first_name` et `last_name`. Un client peut décider de ne pas renseigner l'un des deux champs, auquel cas le champ reste vide dans les requêtes.

L'emplacement par défaut `customer@email.hidden` sert à alimenter le champ `email` pour tous les clients.

Pour les commandes avec livraison par le restaurant uniquement, Just Eat Flyt Bridge reçoit les informations suivantes en provenance de Just Eat :

- `address_1` : première ligne de l'adresse
- `address_2` : deuxième ligne de l'adresse
- `city` : ville
- `postal_code` : code postal
- `latitude` : latitude de l'adresse
- `longitude` : longitude de l'adresse
- `phone` : numéro d'assistance de Just Eat. Remarque : Il ne s'agit pas du numéro de téléphone du client.
- `delivery_notes` : notes de livraison que le client laisse au moment du paiement

<details>

<summary>Exemple de requête JSON avec les coordonnées du client</summary>

```json
"customer": {
    "email": "customer@email.hidden",
    "first_name": "Jeanne",
    "last_name": "Black",
    "phone": "0131 000 0000",
    "address_1": "2 rue Dagobert",
    "address_2": "",
    "postal_code": "35 560",
    "city": "Rennes",
    "delivery_notes": "Ne pas sonner",
    "latitude": "55.949779",
    "longitude": "-3.190822"
  }
```

</details>

### Frais de livraison

Des frais de livraison s'appliquent aux commandes livrées par le restaurant.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais, par défaut `Frais de livraison`.
- `type` : type de frais. La valeur est toujours `delivery` (livraison).
- `ref` : code ref des frais. La valeur par défaut peut être définie à partir de la page de configuration de Just Eat Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price` : montant total des frais de livraison

### Frais de service Just Eat

Just Eat applique un supplément forfaitaire à toutes les commandes.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais, par défaut `Frais de service`.
- `type` : type de frais. La valeur est toujours `other` (autre).
- `ref` : code ref des frais. La valeur par défaut peut être définie à partir de la page de configuration de Just Eat Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price` : montant total du petit supplément à la commande

<details>

<summary>Exemple de JSON pour les frais</summary>

```json
{
  "charges": [
    {
      "type": "delivery",
      "name": "Delivery charge",
      "ref": "1111",
      "price": "3.50 EUR"
    },
    {
      "type": "other",
      "name": "Service charge",
      "ref": 2222,
      "price": "0.50 EUR"
    }
  ]
}
```

</details>

### Prix total

Le prix global réglé pour la commande, y compris les frais appliqués, est encodé dans le champ `total`.

## Mise en pause {#pause}

Lorsque la synchronisation de l'acceptation des commandes est activée, Just Eat Flyt Bridge synchronise le champ `order_acceptance` de HubRise vers Just Eat.

Le champ `order_acceptance.mode` contrôle le statut du magasin : `normal` ou `busy` garde le magasin ouvert, tandis que `paused` le ferme.
