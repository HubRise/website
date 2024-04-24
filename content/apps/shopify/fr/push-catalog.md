---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | Shopify | HubRise
  description: Découvrez comment envoyer le catalogue HubRise vers Shopify, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Avec Shopify Bridge, vous pouvez envoyer votre catalogue HubRise vers votre boutique Shopify en un clic, ou automatiser l'envoi à chaque mise à jour de votre catalogue sur HubRise.

Cette page explique comment envoyer votre catalogue et quelles informations sont transmises à Shopify.

Pour plus d'informations sur les catalogues HubRise, voir [Catalogues](/docs/catalog).

## Alimenter un catalogue HubRise

Pour pouvoir envoyer votre catalogue vers Shopify, vous devez préalablement alimenter un catalogue HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'exporter leur catalogue vers HubRise. Pour vérifier, référez-vous à la documentation de votre logiciel de caisse sur la [page Apps](/apps) du site internet de HubRise.

Vous pouvez également utiliser le Catalog Manager HubRise pour créer ou mettre à jour votre catalogue, y compris pour ajouter des codes ref. Catalog Manager est édité par HubRise, vous pouvez l'utiliser gratuitement. Pour plus d'informations, voir [Catalog Manager](/apps/catalog-manager/overview).

---

**REMARQUE IMPORTANTE :** Assurez-vous que tous les produits de votre catalogue ont un code ref. Les produits sans code ref ne seront pas envoyés à Shopify.

---

## Envoi manuel du catalogue

Une fois que votre catalogue a été alimenté dans HubRise, vous pouvez l'envoyer manuellement vers votre boutique Shopify en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique Shopify.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Shopify Bridge** dans la liste des applications connectées.
4. Dans Shopify Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer le catalogue**.

## Envoi automatique du catalogue

Shopify Bridge peut envoyer automatiquement votre catalogue HubRise vers Shopify à chaque fois qu'il est modifié. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique Shopify.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Shopify Bridge** dans la liste des applications connectées.
4. Dans Shopify Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Catalogue**, cochez **Activer l'envoi automatique du catalogue**.
6. Cliquez sur **Enregistrer**.

## Références techniques

Les sections suivantes décrivent comment un envoi du catalogue affecte votre boutique Shopify.

### Catégories

Shopify ne prend pas en charge les catégories. Lorsque vous envoyez des produits HubRise vers Shopify, ils ne sont pas divisés en catégories distinctes.

### Produits et SKU

Shopify Bridge crée les produits qui n'existent pas encore dans Shopify. Ces produits sont identifiés par leurs codes ref, et seuls les produits avec un code ref sont envoyés à Shopify. Les produits nouvellement créés sont placés en mode brouillon par défaut, permettant une révision manuelle avant publication sur votre site internet.

Si la case à cocher **Mettre à jour les prix des produits existants** est sélectionnée dans la page Configuration, Shopify Bridge mettra également à jour le prix de vos produits Shopify existants. Shopify Bridge ne supprime pas les produits existants.

Les produits HubRise et les SKU sont associés un à un aux produits et variantes Shopify.

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

Pour plus d'informations sur les produits et les SKU dans les catalogues HubRise, voir notre documentation API, rubriques [Products](/developers/api/catalogs#products) et [Skus](/developers/api/catalogs#skus) (en anglais).

### Options

Les options ne sont pas prises en charge dans Shopify. Les options présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à Shopify.

### Promotions et remises

Les promotions et les remises ne sont pas prises en charge dans Shopify. Les promotions et les remises présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à Shopify.
