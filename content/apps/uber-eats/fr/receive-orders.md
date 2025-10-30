---
title: Recevoir des commandes
path_override: recevoir-commandes
position: 6
layout: documentation
meta:
  title: Recevoir des commandes | Uber Eats | HubRise
  description: Découvrez les détails techniques sur la récupération des commandes d'Uber Eats à HubRise, et quels champs sont transmis ou non.
---

En connectant Uber Eats à HubRise, vous pouvez recevoir des commandes directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Votre tablette Uber Eats peut être éteinte si vous avez activé l'intégration sans tablette. Pour plus de détails, voir [Puis-je recevoir les commandes directement sur mon logiciel de caisse sans utiliser les tablettes Uber Eats ?](/apps/uber-eats/faqs/send-orders-to-epos-without-tablet)

Cette page décrit les informations qu'Uber Eats envoie à HubRise et la manière dont les informations de livraison sont synchronisées entre les deux plateformes. Elle peut vous aider à comprendre comment les commandes seront reçues dans votre logiciel de caisse et comment fonctionne le suivi des livraisons si vous utilisez vos propres livreurs (BYOC — _Bring Your Own Courier_).

## Transmission des commandes

Uber Eats envoie les commandes à HubRise à l’heure de retrait diminuée du temps de préparation.

Par exemple, si le temps de préparation est de 7 minutes et que la commande doit être prête à 19h00, elle sera envoyée à HubRise à 18h53.

L'heure de retrait est définie comme suit :

- Pour les commandes à emporter, il s’agit du moment où le client vient récupérer la commande.
- Pour les commandes en livraison, il s’agit du moment où le coursier sort du restaurant.

Vous pouvez ajuster l’heure de transmission en modifiant le temps de préparation via l’API HubRise. Voir [Mise en pause et temps de préparation](#pause-and-preparation-time) pour plus de détails. Vous pouvez également modifier ce temps dans le tableau de bord restaurant Uber Eats.

## Statuts de commande

---

**REMARQUE IMPORTANTE :** Dans cette section, nous mettons en majuscule la première lettre des statuts Uber Eats pour les distinguer plus facilement des noms de statuts HubRise. Par exemple, `Accepted` (Accepté) est un statut Uber Eats, tandis que `accepted` est un statut HubRise.

---

### Statuts Uber Eats

Les commandes Uber Eats peuvent être mises à jour avec les statuts suivants :

- `Accepted` : la commande a été acceptée par le logiciel de caisse.
- `Denied` : l'envoi de la commande au logiciel de caisse a échoué.
- `Cancelled` : la commande a été annulée.
- `Ready` : la commande est prête pour la livraison.

Règles de mise à jour du statut :

1. Les nouvelles commandes doivent être basculées en `Accepted`, `Denied` ou `Cancelled` dans les 10 minutes. Les commandes qui sont encore en attente à l'issue de ce délai sont automatiquement annulées par Uber Eats.
2. Vous pouvez seulement marquer comme `Denied` (refusée) une commande qui n'a pas été acceptée.
3. Une commande peut être annulée à tout moment par tous les acteurs (le client via l'assistance Uber, ou le restaurant par son intégration ou sa tablette), même après avoir été acceptée.
4. Une fois qu'une commande atteint son état terminal (terminée, annulée ou échouée), aucune nouvelle mise à jour de l'état n'est possible.

### Lorsque le statut change dans HubRise

Uber Eats Bridge vous permet de décider quel statut HubRise déclenche le statut `Accepted` dans Uber Eats. Cette option est utile pour gérer différents scénarios lorsque votre logiciel de caisse actualise le statut de la commande. Par exemple, si votre logiciel de caisse marque une commande acceptée comme `received` (reçue) dans HubRise, vous pouvez toujours signaler à Uber Eats que la commande a été acceptée.

Lorsque le statut d'une commande passe à `rejected` (rejetée) dans HubRise, Uber Eats Bridge notifie Uber Eats du changement de statut de commande à `Denied` (Refusée), mais seulement si la commande n'a pas encore été acceptée.

Lorsque le statut d'une commande passe à `cancelled` (annulée) dans HubRise, Uber Eats Bridge notifie Uber Eats du changement de statut de commande à `Cancelled` (Annulée). Cela peut être fait à tout moment, même après l'acceptation de la commande.

Lorsque le statut d'une commande passe à `awaiting_shipment` (en attente de livraison), Uber Eats Bridge avertit Uber Eats que la commande est `Ready` (Prête) pour la livraison. Marquer les commandes comme prêtes ne concerne que les commandes livrées par Uber. L'effet est alors identique à l'activation du bouton **Order Ready** (Commande prête) sur la tablette Uber Eats :

1. Si Uber n'a pas encore envoyé de livreur parce que le temps de préparation n'a pas expiré, cela permet à Uber de savoir qu'il peut en envoyer un immédiatement.
2. Les prévisions du temps de préparation seront plus précises lors des prochaines commandes.

Il n'est pas obligatoire de marquer les commandes comme prêtes. Par défaut, Uber Eats le fait automatiquement après l'expiration du temps de préparation.

Les autres statuts HubRise ne sont ni pris en charge, ni envoyés à Uber Eats.

### Lorsque le statut change dans Uber Eats

Uber Eats actualise les statuts de commande dans HubRise dans les cas suivants :

- Quand un client annule une commande, Uber Eats la marque immédiatement comme `cancelled` (annulée) dans HubRise.
- Pour les commandes livrées par Uber Eats, le statut est actualisé en `in_delivery` (en livraison) quand le livreur quitte le restaurant, et en `completed` (terminée) une fois la commande livrée.
- Si la livraison échoue, Uber Eats actualise le statut en `delivery_failed` (échec de livraison).

Cependant, si Uber Eats rejette une commande qui n'a pas été acceptée à temps, le statut n'est pas actualisé dans HubRise.

## Suivi de livraison {#delivery-tracking}

HubRise et Uber Eats synchronisent le statut de livraison et la position du livreur. Le sens des mises à jour dépend de l'opérateur de la livraison :

- Livraison par Uber : Uber Eats envoie le statut et la position du livreur à HubRise.
- Livraison par le restaurant : HubRise envoie le statut et la position du livreur à Uber Eats.

### Livraison par Uber

À chaque changement d'état de la livraison (par exemple, en route, arrivé, livré), le Bridge met à jour la ressource Delivery correspondante liée à la commande HubRise :

- Le champ `status` de la livraison est mis à jour selon la correspondance suivante :

| Statut Uber Eats      | Statut HubRise Delivery |
| --------------------- | ----------------------- |
| `SCHEDULED`           | `pending`               |
| `EN_ROUTE_TO_PICKUP`  | `pickup_enroute`        |
| `ARRIVED_AT_PICKUP`   | `pickup_waiting`        |
| `EN_ROUTE_TO_DROPOFF` | `dropoff_enroute`       |
| `ARRIVED_AT_DROPOFF`  | `dropoff_waiting`       |
| `COMPLETED`           | `delivered`             |
| `FAILED`              | `cancelled`             |

- Les informations sur le livreur et la livraison sont enregistrées dans les champs suivants de l'objet Delivery lorsqu'elles sont fournies par Uber Eats :
  - `status` (avec le mapping ci-dessus)
  - `estimated_pickup_at`
  - `estimated_dropoff_at`
  - `driver_pickup_url`
  - `driver_name`
  - `driver_phone`
  - `driver_phone_access_code`
  - `driver_latitude`
  - `driver_longitude`

### Livraison par le restaurant

Si vous utilisez vos propres livreurs (BYOC), vous pouvez mettre à jour le statut de la livraison et la position du livreur dans HubRise. Le Bridge relaie alors cette information à Uber Eats.

#### Mise à jour du statut de livraison

Le Bridge mappe le champ `status` de la livraison HubRise au statut Uber Eats correspondant :

| Statut HubRise Delivery                  | Statut Uber Eats BYOC |
| ---------------------------------------- | --------------------- |
| `dropoff_enroute`                        | `started`             |
| `dropoff_approaching`, `dropoff_waiting` | `arriving`            |
| `delivered`                              | `delivered`           |

#### Mise à jour de la position du livreur

Lorsque les coordonnées du livreur (`driver_latitude`, `driver_longitude`) changent dans HubRise, le bridge transmet la nouvelle position à Uber Eats.

Si la commande est marquée comme `delivered`, Uber Eats cesse d'afficher la carte et n'accepte plus les mises à jour de position.

## Types de service

Uber Eats prend en charge quatre types de service :

- Livraison Uber
- Livraison par le restaurant
- À emporter
- Sur place

Ils sont généralement associés à des codes ref spécifiques dans votre logiciel de caisse. Pour plus d'informations, veuillez consulter la documentation de votre logiciel de caisse sur notre [page Apps](/apps).

## Horaires des commandes

Uber Eats fournit l'heure à laquelle la commande doit être prête à emporter, que ce soit par le client ou par un livreur. Dans le cas d'une livraison par le restaurant, il s'agit de l'heure à laquelle le livreur du restaurant doit récupérer la commande, et non celle à laquelle le client attend la livraison de sa commande. Uber Eats Bridge envoie cet horaire à HubRise via le champ `expected_time`.

Pour définir un horaire différent, mettez à jour le champ `confirmed_time` dans HubRise. Uber Eats Bridge enverra l'horaire mis à jour à Uber Eats lorsque le statut de la commande passera à `Accepted`. La mise à jour de ce champ après que la commande a été acceptée n'aura aucun effet.

## Client

Uber Eats ne fournit jamais le nom complet ni l'adresse e-mail du client dans son API. Par conséquent, Uber Eats Bridge ne crée jamais de client dans HubRise, mais inclut les coordonnées du client directement dans la commande.

Pour chaque type de commande, Uber Eats Bridge récupère les informations suivantes auprès d'Uber Eats :

- `first_name` : prénom du client
- `last_name` : initiale du nom de famille du client
- `phone` : numéro d'assistance d'Uber Eats. Remarque : il ne s'agit pas du numéro de téléphone du client.
- `delivery_notes` : code d'accès permettant d'identifier la commande lors de l'appel au support Uber Eats et notes de livraison laissées par le client, au format "Code d'accès téléphone : `access_code`. `note`"

De plus, pour les commandes livrées par le restaurant, Uber Eats Bridge récupère les champs suivants :

- `address_1` : première ligne de l'adresse
- `address_2` : deuxième ligne de l'adresse
- `city` : ville
- `postal_code` : code postal
- `latitude` : latitude de l'adresse
- `longitude` : longitude de l'adresse

## Articles et options

### Encodage des articles

Pour chaque article de la commande, Uber Eats Bridge fournit les informations suivantes :

- `sku_ref` : code ref de l'article
- `product_name` : nom du produit
- `sku_name` : nom de la SKU, le cas échéant. Les SKU sont un type spécifique de modificateur dans Uber Eats : leur code ref correspond toujours à `MULTISKU`.
- `price` : prix unitaire de l'article
- `quantity` : quantité d'articles dans la commande
- `options` : modificateurs associés à l'article

### Encodage des options

Pour chaque modificateur de la commande, Uber Eats Bridge fournit les informations suivantes :

- `option_list_name` : nom du groupe de modificateurs
- `name` : nom du modificateur
- `ref` : code ref du modificateur
- `price` : prix unitaire d'un modificateur

Chaque option a une quantité égale à 1. Les modificateurs identiques sont encodés dans des objets d'option distincts.

## Remises

Les remises appliquées à la commande sont transmises dans le tableau `discounts` de HubRise.

Les champs disponibles dans la requête sont les suivants :

- `name` : nom de la remise, par défaut `Discount`
- `ref` : code ref de la remise. La valeur est définie dans la page de configuration d'Uber Eats Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price_off` : montant de la remise

## Frais

Uber Eats Bridge inclut des frais uniquement pour les commandes en livraison par le restaurant. Les frais pour les autres types de commande sont perçus par Uber Eats et ne sont donc pas transmis au restaurant.

Uber Eats Bridge encode les types de frais suivants : frais de livraison, supplément petite commande et pourboire pour le restaurant.

Pour chacun des frais présents dans la commande, les champs disponibles sont les suivants :

- `name` : intitulé des frais, soit `Delivery charge`, `Tip` ou `Small order fee`
- `type` : type de frais
- `ref` : code ref des frais. La valeur est définie dans la page de configuration d'Uber Eats Bridge et doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price` : montant des frais

## Notes de préparation

Les notes de préparation au niveau du produit sont encodées dans le champ `customer_notes`.

## Mise en pause et temps de préparation {#pause-and-preparation-time}

Lorsque la synchronisation de l'acceptation des commandes et du temps de préparation est activée, Uber Eats Bridge synchronise les champs `order_acceptance` et `preparation_time` de HubRise vers Uber Eats.

Le champ `order_acceptance.mode` contrôle le statut du magasin :

- `normal` ou `busy` : Magasin ouvert
- `paused` : Magasin en pause avec raison optionnelle transmise à Uber Eats

Le temps de préparation envoyé à Uber Eats est `preparation_time` en mode normal, ou la somme de `preparation_time` et de `order_acceptance.extra_preparation_time` en mode forte affluence. Le temps de préparation maximum autorisé est de 3 heures (180 minutes).