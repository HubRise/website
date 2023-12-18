---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 5
layout: documentation
meta:
  title: Envoyer le catalogue | WooCommerce | HubRise
  description: Découvrez comment envoyer le catalogue HubRise vers WooCommerce, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Avec WooCommerce Bridge, vous pouvez envoyer votre catalogue HubRise directement vers votre boutique WooCommerce, en un seul clic.

Vous pouvez également configurer le bridge de manière à envoyer votre catalogue vers WooCommerce à chaque fois qu'il est modifié dans HubRise. Pour plus d'informations, voir la section [Catalogue](/apps/woocommerce/configuration#catalog).

Cette page explique comment envoyer votre catalogue et quelles informations sont transmises à WooCommerce.

## Alimenter un catalogue HubRise

Pour pouvoir envoyer votre catalogue vers WooCommerce, vous devez préalablement alimenter un catalogue HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'exporter leur catalogue vers HubRise. Pour vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues] (/docs/catalogues).

## Envoi manuel du catalogue

Une fois que votre catalogue a été alimenté dans HubRise, vous pouvez l'envoyer manuellement vers votre boutique WooCommerce en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique WooCommerce.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **WooCommerce Bridge** dans la liste des applications connectées.
4. Dans WooCommerce Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer le catalogue**.

Lorsque vous envoyez votre catalogue, WooCommerce Bridge crée les produits qui n'existent pas encore dans WooCommerce. Il met également à jour le prix de vos produits WooCommerce, si la case **Mettre à jour le prix des produits existants** est cochée dans la page Configuration. WooCommerce Bridge ne supprime pas de produits.

## Envoi automatique du catalogue

WooCommerce Bridge peut envoyer automatiquement votre catalogue HubRise vers WooCommerce à chaque fois qu'il est modifié. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre boutique WooCommerce.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **WooCommerce Bridge** dans la liste des applications connectées.
4. Dans WooCommerce Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Catalogue**, cochez **Activer l'envoi automatique du catalogue**.
6. Cliquez sur **Enregistrer**.

## Références techniques

Les sections suivantes décrivent la manière dont les catalogues HubRise sont associés aux menus WooCommerce.

***

**REMARQUE IMPORTANTE :** WooCommerce ne prend en charge que les catégories, les produits et les SKU. Tous les autres articles des catalogues HubRise, par exemple les options, les promotions et les remises, ne sont pas envoyés à WooCommerce.

***

### Catégories

Les catégories d'un catalogue HubRise sont associées une à une à celles des produits dans WooCommerce.
L'ordre d'affichage des catégories et des produits dans HubRise est conservé dans WooCommerce.

Pour chaque catégorie, les champs HubRise suivants sont envoyés à WooCommerce :

- `name` : nom de la catégorie
- `description` : description de la catégorie

### Produits et SKU

Les produits d'un catalogue HubRise sont associés à WooCommerce de la façon suivante :

- Un produit HubRise sans SKU est associé à un **Produit simple** dans WooCommerce.
- Un produit HubRise avec des SKU est associé à un **Produit variable** dans WooCommerce.

Pour chaque produit d'un catalogue HubRise, les informations suivantes sont envoyées à WooCommerce.

- `ref` : code ref du produit, transmis dans les commandes
- `name` : nom du produit
- `description` : description du produit
- `price` : prix du produit
- `images` : images associées au produit

S'il y a des SKU, WooCommerce Bridge crée une liste d'attributs nommés "sku" rattachés au produit, dont les valeurs sont les noms des SKU.

Le bridge utilise les codes ref HubRise pour détecter les produits existants dans WooCommerce et éviter de les dupliquer.

***

**REMARQUE IMPORTANTE :** Les SKU sans code ref dans le catalogue HubRise ne sont pas envoyés à WooCommerce.

***

Pour chaque objet `sku` dans un produit, WooCommerce Bridge crée une variante avec ces informations :

- `ref` : code ref de la SKU, transmis dans les commandes
- `name` : nom de la SKU
- `price` : prix de la SKU

Les listes d'options rattachées aux produits HubRise sont ignorées.

Pour plus d'informations sur les produits et les SKU dans les catalogues HubRise, voir [Products](/developers/api/catalogs#products) et [Skus](/developers/api/catalogs#skus).
