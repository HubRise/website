---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | PrestaShop | HubRise
  description: Découvrez comment envoyer le catalogue HubRise vers PrestaShop, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Avec PrestaShop Bridge, vous pouvez envoyer votre catalogue HubRise vers votre boutique PrestaShop en un clic, ou automatiser l'envoi à chaque mise à jour de votre catalogue sur HubRise. De plus, vous pouvez synchroniser la disponibilité de vos articles dans PrestaShop avec votre inventaire HubRise.

Cette page explique comment envoyer votre catalogue, quelles informations sont transmises à PrestaShop et comment synchroniser votre inventaire.

Pour plus d'informations sur les catalogues HubRise, voir [Catalogues](/docs/catalog).

## Envoyer le catalogue

Avec PrestaShop Bridge, vous pouvez envoyer votre catalogue HubRise à PrestaShop. Vous pouvez laisser PrestaShop Bridge envoyer automatiquement votre catalogue chaque fois qu'il est mis à jour dans HubRise, ou l'envoyer manuellement lorsque vous en avez besoin.

Si vous rencontrez des erreurs lors de l'envoi de votre catalogue, voir [Dépannage](/apps/prestashop/troubleshooting#push-catalog-errors).

### Alimenter un catalogue HubRise

Pour pouvoir envoyer votre catalogue vers PrestaShop, vous devez préalablement alimenter un catalogue HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'exporter leur catalogue vers HubRise. Pour vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Vous pouvez également utiliser le Catalog Manager HubRise pour créer ou mettre à jour votre catalogue, y compris pour ajouter des codes ref. Catalog Manager est édité par HubRise, vous pouvez l'utiliser gratuitement. Pour plus d'informations, voir [Catalog Manager](/apps/catalog-manager/overview).

### Envoi manuel du catalogue

Une fois que votre catalogue a été alimenté dans HubRise, vous pouvez l'envoyer manuellement vers votre boutique PrestaShop en suivant ces étapes :

1. Connectez-vous à votre compte HubRise.
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique PrestaShop.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **PrestaShop Bridge** dans la liste des applications connectées.
4. Dans PrestaShop Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer le catalogue**.

### Envoi automatique du catalogue

PrestaShop Bridge peut envoyer automatiquement votre catalogue HubRise vers PrestaShop à chaque fois qu'il est modifié. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre compte HubRise.
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique PrestaShop.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **PrestaShop Bridge** dans la liste des applications connectées.
4. Dans PrestaShop Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Catalogue**, cochez **Activer l'envoi automatique du catalogue**.
6. Cliquez sur **Enregistrer**.

## Référence technique pour l'envoi du catalogue

Les sections suivantes décrivent la manière dont les catalogues HubRise sont associés à PrestaShop.

### Catégories

PrestaShop Bridge crée les catégories qui n'existent pas déjà dans PrestaShop, en les identifiant par leur nom.

Le nom de la catégorie et sa description sont envoyés à PrestaShop.

### Produits et SKU

PrestaShop Bridge crée les produits qui n'existent pas déjà dans PrestaShop, en les identifiant par leurs codes ref. Les nouveaux produits sont inactifs par défaut, vous permettant de les réviser avant de les rendre disponibles sur votre site Web. PrestaShop Bridge ne supprime ni ne met à jour les produits existants.

Les produits HubRise et les SKU sont associés un à un aux produits et variantes PrestaShop.

Pour chaque objet `product` HubRise, PrestaShop Bridge envoie les informations suivantes à PrestaShop :

- `name` : nom du produit
- `description` : description du produit
- `image_ids` : ID des images associées au produit
- `skus` : liste des SKU associées au produit

Pour chaque SKU dans le tableau `skus`, PrestaShop Bridge envoie les informations suivantes à PrestaShop :

- `ref` : code ref de la SKU, transmis dans les commandes
- `name` : nom de la SKU
- `price` : prix de la SKU

Pour plus d'informations sur les produits contenus dans les catalogues HubRise, voir [Products](/developers/api/catalogs#products) (en anglais).

### Options

Les options ne sont pas prises en charge dans PrestaShop. Celles qui sont présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à PrestaShop.

### Promotions et remises

Les promotions et les remises ne sont pas prises en charge dans PrestaShop. Celles qui sont présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à PrestaShop.

## Synchroniser l'inventaire

PrestaShop Bridge permet de mettre à jour les compteurs d'inventaire de vos produits PrestaShop, en fonction de votre inventaire HubRise. Vous pouvez laisser PrestaShop Bridge mettre à jour l'inventaire automatiquement ou le mettre à jour manuellement.

### Mise à jour automatique de l'inventaire

PrestaShop Bridge peut automatiquement mettre à jour votre inventaire PrestaShop chaque fois qu'il est mis à jour sur HubRise. Par défaut, cette option est désactivée. Pour l'activer, suivez ces étapes :

1. Connectez-vous à votre compte HubRise.
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique PrestaShop.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **PrestaShop Bridge** dans la liste des applications connectées.
4. Dans PrestaShop Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Inventaire**, cochez **Activer l'envoi automatique de l'inventaire**.
6. Cliquez sur **Enregistrer**.

### Mise à jour manuelle de la disponibilité de l'inventaire

Pour mettre à jour manuellement votre inventaire sur PrestaShop, suivez ces étapes :

1. Connectez-vous à votre compte HubRise.
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique PrestaShop.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **PrestaShop Bridge** dans la liste des applications connectées.
4. Dans PrestaShop Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer l'inventaire**.
