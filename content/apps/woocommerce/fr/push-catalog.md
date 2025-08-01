---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | WooCommerce | HubRise
  description: Découvrez comment envoyer le catalogue HubRise vers WooCommerce, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Avec WooCommerce Bridge, vous pouvez envoyer votre catalogue HubRise vers votre boutique WooCommerce en un clic, ou automatiser l'envoi à chaque mise à jour de votre catalogue sur HubRise.

Cette page explique comment envoyer votre catalogue et quelles informations sont transmises à WooCommerce.

Pour plus d'informations sur les catalogues HubRise, voir notre aide en ligne, rubrique [Catalogues](/docs/catalog).

## Alimenter un catalogue HubRise

Pour pouvoir envoyer votre catalogue vers WooCommerce, vous devez préalablement alimenter un catalogue HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'exporter leur catalogue vers HubRise. Pour vérifier, référez-vous à la documentation de votre logiciel de caisse sur la [page Apps](/apps) du site internet de HubRise.

Vous pouvez également utiliser le Catalog Manager HubRise pour créer ou mettre à jour votre catalogue, y compris pour ajouter des codes ref. Catalog Manager est édité par HubRise, vous pouvez l'utiliser gratuitement. Pour plus d'informations, voir [Catalog Manager](/apps/catalog-manager/overview).

---

**REMARQUE IMPORTANTE :** Assurez-vous que tous les produits de votre catalogue ont un code ref. Les produits sans code ref ne seront pas envoyés à WooCommerce.

---

## Envoi manuel du catalogue {#manual-catalog-push}

Une fois que votre catalogue a été alimenté dans HubRise, vous pouvez l'envoyer manuellement vers votre boutique WooCommerce en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique WooCommerce.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **WooCommerce Bridge** dans la liste des applications connectées, puis cliquez sur **Ouvrir**.
4. Dans WooCommerce Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer le catalogue**.

## Envoi automatique du catalogue

WooCommerce Bridge peut envoyer automatiquement votre catalogue HubRise vers WooCommerce à chaque fois qu'il est modifié. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique WooCommerce.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **WooCommerce Bridge** dans la liste des applications connectées, puis cliquez sur **Ouvrir**.
4. Dans WooCommerce Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Catalogue**, cochez **Activer l'envoi automatique du catalogue** vers WooCommerce lorsqu'il est mis à jour dans HubRise.
6. Cochez **Mettre à jour le prix des produits existants** pour mettre à jour les prix des produits déjà présents sur votre enseigne WooCommerce.
7. Cliquez sur **Enregistrer**.

Les mêmes règles de mise à jour s'appliquent que pour l'[envoi manuel du catalogue](#manual-catalog-push).

## Références techniques

Les sections suivantes décrivent comment un envoi du catalogue affecte votre boutique WooCommerce.

### Catégories

Les catégories d'un catalogue HubRise sont associées une à une à celles des produits dans WooCommerce.
L'ordre d'affichage des catégories et des produits dans HubRise est conservé dans WooCommerce.

Pour chaque catégorie, les champs HubRise suivants sont envoyés à WooCommerce :

- `name` : nom de la catégorie
- `description` : description de la catégorie

### Produits et SKU

WooCommerce Bridge crée les produits qui n'existent pas encore dans WooCommerce. Ces produits sont identifiés par leurs codes ref, et seuls les produits avec un code ref sont envoyés à WooCommerce. Les produits nouvellement créés sont placés en mode `En attente de relecture` par défaut, permettant une révision manuelle avant publication sur votre site internet.

Si la case à cocher **Mettre à jour les prix des produits existants** est sélectionnée dans la page Configuration, WooCommerce Bridge mettra également à jour le prix de vos produits WooCommerce existants. WooCommerce Bridge ne supprime pas les produits existants.

Les produits d'un catalogue HubRise sont associés à WooCommerce de deux façons différentes.

- Les produits HubRise mono-SKU sont associés à des **produits simples**.
- Les produits HubRise multi-SKU sont associés à des **produits variables**.

Pour chaque produit du catalogue HubRise, les informations suivantes sont envoyées à WooCommerce :

- `name` : nom du produit
- `description` : description du produit
- `images` : images associées au produit

#### Produits mono-SKU

Les produits mono-SKU reçoivent également ces informations :

- `ref` : le code ref de la SKU unique, qui est transmis dans les commandes
- `price` : le prix de la SKU
- `barcodes` : le premier code-barres de la SKU, si elle en possède

#### Produits multi-SKU

Si le produit a plusieurs SKUs, WooCommerce Bridge crée une liste d'attributs et de variations, et les associe au produit. Le nom de la liste est la valeur configurée dans **Clé(s) de métadonnées nom de la SKU** sur la page de configuration du bridge. Les variations sont les noms des SKUs.

Pour chaque objet `sku` dans un produit, WooCommerce Bridge crée une variation avec ces informations :

- `ref` : le code ref de la SKU, transmis dans les commandes
- `name` : le nom de la SKU
- `price` : le prix de la SKU
- `barcodes` : le premier code-barres de la SKU, si elle en possède

Pour plus d'informations sur les produits et les SKU dans les catalogues HubRise, voir notre documentation API, rubriques [Products](/developers/api/catalogs#products) et [Skus](/developers/api/catalogs#skus) (en anglais).

### Options

Les options ne sont pas prises en charge dans WooCommerce. Les options présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à WooCommerce.

### Promotions et remises

Les promotions et les remises ne sont pas prises en charge dans WooCommerce. Les promotions et les remises présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à WooCommerce.
