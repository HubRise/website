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

Cette page décrit les informations qu'Uber Eats envoie à HubRise. Elle peut vous aider à comprendre comment les commandes seront reçues dans votre logiciel de caisse.

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

## Statuts de commande

---

**REMARQUE IMPORTANTE :** Dans cette section, nous mettons en majuscule la première lettre des statuts Uber Eats pour les distinguer plus facilement des noms de statuts HubRise. Par exemple, `Accepted` (Accepté) est un statut Uber Eats, tandis que `accepted` est un statut HubRise.

---

### Statuts Uber Eats

Uber Eats prend en charge trois statuts de commande :

- `Accepted` : la commande a été acceptée par le logiciel de caisse.
- `Denied` : l'envoi de la commande au logiciel de caisse a échoué.
- `Cancelled` : la commande a été annulée par le logiciel de caisse.

Les nouvelles commandes doivent passer à l'un des statuts ci-dessus dans les 10 minutes. Les commandes qui sont encore en attente à l'issue de ce délai sont automatiquement annulées par Uber Eats.

Vous ne pouvez actualiser le statut d'une commande qu'une seule fois. Les modifications ultérieures sont ignorées par Uber Eats. Vous ne pouvez donc pas annuler ni refuser une commande qui a déjà été acceptée.

### Lorsque le statut change dans HubRise

Uber Eats Bridge vous permet de décider quel statut HubRise déclenche le statut `Accepted` dans Uber Eats. Cette option est utile pour gérer différents scénarios lorsque votre logiciel de caisse actualise le statut de la commande. Par exemple, si votre logiciel de caisse marque une commande acceptée comme `received` (reçue) dans HubRise, vous pouvez toujours signaler à Uber Eats que la commande a été acceptée.

Lorsque le statut d'une commande passe à `rejected` (rejetée) ou `cancelled` (annulée) dans HubRise, Uber Eats Bridge notifie Uber Eats du changement de statut de commande à `Denied` (Refusée) ou `Cancelled`.

Lorsque le statut d'une commande passe à `awaiting_shipment` (en attente de livraison), Uber Eats Bridge avertit Uber Eats que la commande est prête pour la livraison. Marquer les commandes comme étant prêtes ne concerne que les commandes livrées par Uber. L'effet est alors identique à l'activation du bouton **Order Ready** (Commande prête) sur la tablette Uber Eats :

1. Si Uber n'a pas encore envoyé de livreur parce que le temps de préparation n'a pas expiré, cela permet à Uber de savoir qu'il peut en envoyer un immédiatement.
2. Les prévisions du temps de préparation seront plus précises lors des prochaines commandes.

Il n'est pas obligatoire de marquer les commandes comme étant prêtes. Par défaut, Uber Eats le fait automatiquement après l'expiration du temps de préparation.

Les autres statuts HubRise ne sont pas pris en charge ni envoyés à Uber Eats.

### Lorsque le statut change dans Uber Eats

Quand les clients annulent leurs commandes, Uber Eats les marque immédiatement comme `cancelled` (annulée) dans HubRise.

Lorsqu'Uber Eats rejette des commandes car l'accusé de réception n'a pas été effectué à temps, cela n'actualise pas leur statut dans HubRise.

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
