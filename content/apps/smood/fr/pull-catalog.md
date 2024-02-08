---
title: Récupérer le catalogue
path_override: recuperer-catalogue
position: 6
layout: documentation
meta:
  title: Récupérer le catalogue | Smood | HubRise
  description: Découvrez comment récupérer votre catalogue HubRise dans Smood, comment les articles et les options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Cette page explique comment récupérer votre catalogue HubRise dans Smood, quelles informations sont envoyées à Smood et comment synchroniser votre inventaire.

## Récupérer le catalogue

Tout d'abord, vous devez alimenter votre catalogue HubRise. Ensuite, vous pouvez configurer Smood pour recevoir automatiquement votre catalogue dans Smood lorsque celui-ci est mis jour dans HubRise ou le récupérer manuellement lorsque vous en avez besoin.

### Alimenter le catalogue HubRise

Certains logiciels de caisse permettent d'exporter le catalogue vers HubRise. Pour vérifier, référez-vous à la documentation de votre logiciel de caisse sur la [page Apps](/apps) du site internet de HubRise. Si votre logiciel de caisse n'offre pas cette fonctionnalité, vous pouvez créer votre catalogue HubRise manuellement, en utilisant le HubRise [Catalog Manager](/apps/catalog-manager/overview).

Si vous utilisez le même catalogue sur plusieurs plateformes, envisagez de créer des variantes de catalogue pour personnaliser le prix et la disponibilité de vos produits pour chaque plateforme.

Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues](/docs/catalog).

### Sélectionnez la variante de catalogue à récupérer

Si vous créez une variante de catalogue pour Smood sur HubRise, vous devez la sélectionner depuis le back-office Smood avant de récupérer votre catalogue. Suivez ces étapes :

1. Connectez-vous à votre [back-office Smood](https://manager.smood.ch).
1. Sélectionnez le restaurant.
1. Cliquez sur l'onglet **Paramètres**, puis dans la section **Intégrations**, cliquez sur **Paramètres**.
1. Dans la boîte de dialogue **Réglages des références de commandes POS ** qui apparaît, depuis la section **Variante du catalogue à récupérer**, sélectionnez la variante du catalogue.
1. Pour confirmer, cliquez sur **Sauvegarder**.

La variante de catalogue sélectionnée est utilisée à la fois pour la récupération manuelle et automatique du catalogue.

### Récupérer le catalogue manuellement {#manual-pull}

Une fois que votre catalogue a été alimenté dans HubRise, vous pouvez l'envoyer dans votre restaurant Smood en suivant ces étapes :

1. Connectez-vous à votre [back-office Smood](https://manager.smood.ch).
1. Sélectionnez le restaurant.
1. Cliquez sur l'onglet **Paramètres**, puis dans la section **Intégrations**, cliquez sur **Récupérer le catalogue HubRise**.
1. Pour confirmer, cliquez sur **Oui**.

Pour comprendre comment le catalogue HubRise est associé à Smood, consultez la rubrique [références techniques](#technical-reference) ci-dessous.

### Récupérer le catalogue automatiquement

Smood peut récupérer automatiquement votre catalogue HubRise à chaque fois qu'il est mis à jour dans HubRise. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [back-office Smood](https://manager.smood.ch).
1. Sélectionnez le restaurant.
1. Cliquez sur l'onglet **Paramètres**, puis dans la section **Intégrations**, cliquez sur **Paramètres**.
1. Dans la boîte de dialogue **Réglages des références de commandes POS**, sélectionnez l'option **Enable automatic sync of the catalog** (Activer la synchronisation automatique du catalogue), puis cliquez sur **Sauvegarder**.

## Synchroniser l'inventaire

Smood peut indiquer que vos produits sont indisponibles en se basant sur votre inventaire HubRise. Vous pouvez laisser Smood mettre à jour l'inventaire automatiquement ou le mettre à jour manuellement.

Les produits avec un stock de `0` dans HubRise sont marqués comme indisponibles dans Smood et supprimés du menu. Lorsque le stock est mis à jour dans HubRise, le produit est à nouveau indiqué comme disponible.

### Mise à jour automatique de l'inventaire

Smood peut mettre à jour automatiquement la disponibilité de vos produits lorsque votre inventaire est mis à jour dans HubRise. Par défaut, cette option est désactivée. Pour l'activer, suivez ces étapes :

1. Connectez-vous à votre [back-office Smood](https://manager.smood.ch).
1. Sélectionnez le restaurant pour lequel vous souhaitez modifier les produits.
1. Cliquez sur l'onglet **Paramètres**, puis dans la section **Intégrations**, cliquez sur **Paramètres**.
1. Dans la boîte de dialogue **Réglages des références de commandes POS**, sélectionnez l'option **Enable automatic sync of the catalog** (Activer la synchronisation automatique du catalogue), puis cliquez sur **Sauvegarder**.

### Mise à jour manuelle de l'inventaire

Pour mettre à jour manuellement votre inventaire Smood, suivez ces étapes :

1. Connectez-vous à votre [back-office Smood](https://manager.smood.ch).
1. Sélectionnez le restaurant pour lequel vous souhaitez modifier les produits.
1. Cliquez sur l'onglet **Paramètres**, puis dans la section **Intégrations**, cliquez sur **Récupérer l'inventaire HubRise**.
1. Pour confirmer, cliquez sur **Oui**.

## Références techniques {#technical-reference}

Les sections suivantes décrivent la manière dont les catalogues HubRise sont associés aux menus Smood.

### Catégories

Chaque catégorie HubRise correspond à une seule catégorie Smood. Smood utilise les champs `nom` et `description` des catégories.

Smood ne prend en charge qu'un niveau de catégories. Si vous utilisez des sous-catégories dans votre catalogue HubRise, elles seront associées aux catégories principales dans Smood.

### Produits et SKU

Pour chaque SKU HubRise, Smood crée un produit avec les informations suivantes :

- `product.name` et `skus.name` : nom du produit. Par exemple, si le nom du produit HubRise est `Pizza margherita` et le nom du SKU est `33 cm`, Smood crée un produit nommé `Pizza margherita 33 cm`.
- `product.description` : description du produit.
- `product.image_ids` : ID des images associées au produit.
- `skus.ref` : code ref du SKU, qui sera transmis dans les commandes.
- `skus.price` : prix correspondant au SKU.

Notez que Smood ne prend pas en charge de façon native les produits avec des SKU. Un produit avec des SKU dans HubRise sera donc associé à plusieurs produits dans Smood.

### Options

Pour chaque liste d'options du catalogue, Smood utilise les informations suivantes :

- `name` : nom de la liste d'options.
- `min_selections` et `max_selections` : nombre minimum et maximum d'options qui peuvent être sélectionnées.

Pour chaque option d'une liste, Smood utilise les informations suivantes :

- `ref` : code ref de l'option.
- `name` : nom de l'option.
- `price` : prix unitaire de l'option.

### Promotions {#deals}

Dans HubRise, les promotions s'appliquent à un ensemble spécifique de produits. Par exemple, une promotion **Déjeuner** peut inclure une pizza et un dessert.

Les promotions dans HubRise sont associées à des produits avec options dans Smood. Smood utilisera les informations HubRise suivantes :

- `ref` : code ref du produit.
- `name` : nom du produit.
- `description` : description du produit.
- `lines[].label` : le cas échéant, nom du groupe d'options.
- `lines[].skus[]` : options du groupe.

Les options des produits de la promotion sont ignorées. Par exemple, si une promotion inclut une pizza, les clients ne peuvent pas choisir la garniture.

---

**REMARQUE IMPORTANTE** : Smood ignore les options des produits dans les promotions. De plus, si une option est requise pour un produit, la promotion ne sera pas importée.

---

Il n'est pas possible de créer manuellement des promotions dans le back-office Smood. Pour utiliser des promotions, vous devez récupérer un catalogue depuis HubRise.

### Remises

Les remises ne sont pas importées dans Smood.

### Frais

Les frais ne sont pas importés dans Smood.
