---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | Shopify | HubRise
  description: Découvrez comment envoyer le catalogue HubRise vers Shopify, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Vous pouvez utiliser Shopify Bridge pour envoyer votre catalogue HubRise directement dans votre boutique Shopify. De plus, vous pouvez mettre à jour l'inventaire de vos articles dans Shopify, chaque fois qu'il est modifié dans HubRise.

Cette page explique comment envoyer votre catalogue, quelles informations sont envoyées à Shopify et comment synchroniser votre inventaire.

## Alimenter un catalogue HubRise

Pour pouvoir envoyer votre catalogue vers Shopify, vous devez préalablement alimenter un catalogue HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'exporter leur catalogue vers HubRise. Pour vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Pour plus d'informations sur les catalogues HubRise, voir [Catalogues](/docs/catalog).

## Envoi manuel du catalogue

Une fois que votre catalogue a été alimenté dans HubRise, vous pouvez l'envoyer manuellement vers votre boutique Shopify en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique Shopify.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Shopify Bridge** dans la liste des applications connectées.
4. Dans Shopify Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer le catalogue**.

Lorsque vous envoyez votre catalogue, Shopify Bridge crée les produits qui n'existent pas encore dans Shopify. Il met également à jour le prix de vos produits Shopify, si la case **Mettre à jour le prix des produits existants** est cochée dans la page Configuration. Shopify Bridge ne supprime pas de produits.

## Envoi automatique du catalogue

Shopify Bridge peut envoyer automatiquement votre catalogue HubRise vers Shopify à chaque fois qu'il est modifié. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique Shopify.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Shopify Bridge** dans la liste des applications connectées.
4. Dans Shopify Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Catalogue**, cochez **Activer l'envoi automatique du catalogue**.
6. Cliquez sur **Enregistrer**.

## Références techniques

Les sections suivantes décrivent la manière dont les catalogues HubRise sont associés à Shopify.

### Catégories

Shopify ne prend pas en charge les catégories. Lorsque vous envoyez des produits HubRise vers Shopify, ils ne sont pas divisés en catégories distinctes.

### Produits et SKU

Les produits HubRise et les SKU sont associés un à un aux produits et variantes Shopify.
Pour plus d'informations sur les produits contenus dans les catalogues HubRise, voir [Products](/developers/api/catalogs#products) (en anglais).

Pour chaque objet `product` HubRise, Shopify Bridge envoie les informations suivantes à Shopify :

- `name` : nom du produit
- `description` : description du produit
- `tags` : tags associés au produit
- `image_ids` : ID des images associées au produit
- `skus` : liste des SKU associées au produit

Pour chaque SKU dans le tableau `skus`, Shopify Bridge envoie les informations suivantes à Shopify :

- `ref` : code ref de la SKU, qui sera transmis dans les commandes
- `name` : nom de la SKU
- `price` : prix de la SKU

Pour plus d'informations sur les SKU dans le catalogue HubRise, voir [Skus](/developers/api/catalogs#skus) (en anglais).

### Options

Les options ne sont pas prises en charge dans Shopify. Les options présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à Shopify.

### Promotions et remises

Les promotions et les remises ne sont pas prises en charge dans Shopify. Les promotions et les remises présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à Shopify.

## Synchroniser l'inventaire

Chaque fois que votre inventaire HubRise est mis à jour, Shopify Bridge met automatiquement à jour les compteurs d'inventaire des produits dans Shopify.
