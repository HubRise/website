---
title: Envoyer des commandes
path_override: envoyer-commandes
position: 5
layout: documentation
meta:
  title: Envoyer des commandes | Smood | HubRise
  description: Découvrez les détails techniques concernant l'envoi des commandes de Smood à HubRise, et quels champs sont transmis ou non.
---

Lorsque vous connectez Smood à HubRise, vos commandes sont automatiquement envoyées à HubRise, qui les transmet à votre logiciel de caisse ou à toute autre solution connectée à HubRise.

Cette page décrit les informations que Smood envoie dans les commandes.

## Statut

Les mises à jour des statuts de commande circulent de Smood vers HubRise et inversement.

### Lorsque le statut change dans HubRise

Lorsque le statut d'une commande change dans HubRise, par exemple lorsque le logiciel de caisse marque la commande comme terminée, HubRise envoie le nouveau statut à Smood.

Smood met alors le statut de la commande à jour dans son back-office, en fonction du statut reçu de HubRise :

- `cancelled`, `delivery_failed` ou `rejected` : la commande est identifiée pour un traitement manuel. Un opérateur Smood contactera le restaurant.
- `awaiting_collection` ou `awaiting_shipment` : la commande est prête à être récupérée par le chauffeur ou le client.
- `in_delivery` : la commande est en cours de livraison. Synchronisation uniquement pour les livraisons par le restaurant.
- `completed` : la commande a été livrée. Synchronisation uniquement pour les livraisons par le restaurant.

Les autres statuts, par exemple `received`, sont ignorés par Smood.

### Lorsque le statut change dans Smood

Smood envoie les statuts suivants à HubRise :

- `cancelled` : le client annule la commande.
- `in_preparation` : le statut est mis à jour depuis la tablette du restaurant.
- `awaiting_shipment` et `awaiting_collection` : le statut est mis à jour depuis la tablette du restaurant, en fonction du type de service.
- `in_delivery` : un chauffeur Smood récupère la commande.
- `completed` : le restaurant termine la commande sur la tablette Smood ou le chauffeur marque la commande comme livrée sur l'application mobile.

Smood informe toujours HubRise de l'annulation d'une commande en envoyant le statut `cancelled`. Les autres statuts ne sont synchronisés que si l'option **Activer la synchronisation automatique du statut de Smood à HubRise** est activée dans la [page de configuration](/apps/smood/configuration#synchronisation-settings).

## Informations générales

Smood envoie à HubRise les informations générales suivantes sur les commandes :

- `service_type` : soit `delivery` (livraison), soit `collection` (à emporter).
- `service_type_ref` : code ref du type de service, s'il est défini dans la [page de configuration](/apps/smood/configuration#types-de-service).
- `collection_code` : numéro de commande composé de 3 lettres et 4 chiffres séparés par un tiret, par exemple `ABC-1234`.
- `customer_notes` : notes de préparation saisies par le client.

## Articles et options

Smood inclut toutes les informations sur les articles, y compris : `name`, `ref`, `quantity` et `price`.

Les commandes contiennent également des informations complètes sur les options, y compris : `name`, `option_list_name`, `ref`, `price` et `quantity`.

## Promotions

Smood envoie deux types de promotions à HubRise :

- Promotions créées dans le back-office Smood, dans la section **Marketing** > **Promotions**. Il peut s'agir d'offres "1 produit acheté, 1 offert" ou de pourcentages de remise.
- Promotions importées depuis un catalogue HubRise.

Les deux types de promotions sont envoyées dans HubRise en tant que `deals`, avec les champs suivants :

- `name` : nom de la promotion.
- `ref` : **code ref de la promotion** défini dans la [page de configuration](/apps/smood/configuration#remises), pour les promotions, ou code ref pour les promotions importées depuis HubRise.

## Frais

Pour les commandes via le restaurant, Smood envoie des frais de livraison à HubRise en tant que `charges` :

- `name` : Smood envoie `Delivery fee` dans ce champ.
- `ref` : **code ref des frais de livraison** défini dans la [page de configuration](/apps/smood/configuration#frais).
- `price` : frais de livraison.

## Remises

Les remises sont configurées dans le back-office Smood, dans la section **Marketing** > **Bons de réduction**.

Elles sont envoyées à HubRise en tant que `discounts` :

- `name` : description du bon défini dans le back-office Smood.
- `ref` : **code ref de la remise** défini dans la [page de configuration](/apps/smood/configuration#remises).
- `amount` : montant de la remise.

## Payments (Paiements)

Smood envoie un paiement avec les champs suivants :

- `ref` : **code ref du paiement en ligne** défini dans la [page de configuration](/apps/smood/configuration#paiements).
- `amount` : montant total payé par le client.

## Client

Smood envoie les commandes à HubRise avec les informations clients suivantes : `first_name`, `last_name`, `email`, `phone`, `address_1`, `city`, `postal_code`, `country`, `delivery_notes`, `latitude` et `longitude`. Smood n'utilise pas `address_2` ni `company_name`.
