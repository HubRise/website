---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | PrestaShop | HubRise
  description: Découvrez comment envoyer le catalogue HubRise vers PrestaShop, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Avec PrestaShop Bridge, vous pouvez envoyer votre catalogue HubRise vers votre boutique PrestaShop en un clic, ou automatiser l'envoi à chaque mise à jour de votre catalogue sur HubRise.

Cette page explique comment envoyer votre catalogue et quelles informations sont transmises à PrestaShop.

Si vous rencontrez des erreurs lors de l'envoi de votre catalogue, voir [Dépannage](/apps/prestashop/troubleshooting#push-catalog-errors).

Pour plus d'informations sur les catalogues HubRise, voir [Catalogues](/docs/catalog).

## Alimenter un catalogue HubRise

Pour pouvoir envoyer votre catalogue vers PrestaShop, vous devez préalablement alimenter un catalogue HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'exporter leur catalogue vers HubRise. Pour vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Vous pouvez également utiliser le Catalog Manager HubRise pour créer ou mettre à jour votre catalogue, y compris pour ajouter des codes ref. Catalog Manager est édité par HubRise, vous pouvez l'utiliser gratuitement. Pour plus d'informations, voir [Catalog Manager](/apps/catalog-manager/overview).

---

**REMARQUE IMPORTANTE :** Assurez-vous que tous les produits de votre catalogue ont un code ref. Les produits sans code ref ne seront pas envoyés à PrestaShop.

---

## Envoi manuel du catalogue

Une fois que votre catalogue a été alimenté sur HubRise, vous pouvez l'envoyer manuellement vers votre boutique PrestaShop en procédant comme suit.

1. Connectez-vous à votre compte HubRise.
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique PrestaShop.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **PrestaShop Bridge** dans la liste des applications connectées.
4. Dans PrestaShop Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer le catalogue**.

## Envoi automatique du catalogue

PrestaShop Bridge peut envoyer automatiquement votre catalogue HubRise vers PrestaShop à chaque fois qu'il est modifié. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre compte HubRise.
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique PrestaShop.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **PrestaShop Bridge** dans la liste des applications connectées.
4. Dans PrestaShop Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Catalogue**, cochez **Activer l'envoi automatique du catalogue**.
6. Cliquez sur **Enregistrer**.

## Référence technique

Les sections suivantes décrivent comment un envoi du catalogue affecte votre boutique PrestaShop.

### Catégories

PrestaShop Bridge crée les catégories qui n'existent pas déjà dans PrestaShop, en les identifiant par leur nom.

Le nom de la catégorie et sa description sont envoyés à PrestaShop.

### Produits et SKU

PrestaShop Bridge crée les produits qui n'existent pas déjà dans PrestaShop. Ces produits sont identifiés par leurs codes ref, et seuls les produits avec un code ref sont envoyés à PrestaShop. Les produits nouvellement créés sont inactifs par défaut, permettant une révision manuelle avant publication sur votre site internet.

PrestaShop Bridge ne supprime ni ne met à jour les produits existants.

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

Pour plus d'informations sur les produits et les SKU dans les catalogues HubRise, voir notre documentation API, rubriques [Products](/developers/api/catalogs#products) et [Skus](/developers/api/catalogs#skus) (en anglais).

### Options

Les options ne sont pas prises en charge dans PrestaShop. Celles qui sont présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à PrestaShop.

### Promotions et remises

Les promotions et les remises ne sont pas prises en charge dans PrestaShop. Celles qui sont présentes dans votre catalogue HubRise sont ignorées et ne sont pas envoyées à PrestaShop.
