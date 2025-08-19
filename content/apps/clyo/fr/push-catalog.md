---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | Clyo Systems | HubRise
  description: Envoyer le catalogue Clyo Systems vers HubRise. Connectez vos apps et synchronisez vos données.
---

Clyo Systems permet d'envoyer l'ensemble de vos produits vers un catalogue HubRise.

## Envoi manuel du catalogue

L'envoi du catalogue est déclenché manuellement depuis le back-office de Clyo Systems. Pour envoyer le catalogue, procédez comme suit :

1. Depuis Clyo Systems, ouvrez le menu **Paramètres**, puis cliquez sur **Commandes Web**.
2. Cliquez sur **Envoi produits**.

En fonction du nombre de produits, l'envoi du catalogue peut prendre quelques secondes à quelques minutes.

## Informations envoyées à HubRise

### Catégories

Clyo Systems n'envoie que les familles à HubRise. Les sous-familles ne sont pas envoyées.

### Produits et SKUs

Pour chaque produit, les informations suivantes sont envoyées à HubRise :

- Nom
- Catégorie
- Le prix correspondant à la liste de prix sélectionnée dans la configuration. Pour plus d'informations, consultez la section [Configuration](/apps/clyo/configuration).
- Code ref, un identifiant unique court au format numérique, tel que `123`.

Clyo Systems ne prend pas en charge :

- La notion de SKU. Chaque produit est donc envoyé à HubRise comme un produit à SKU unique.
- Les photos des produits.

### Options

Les **garnitures** et les **messages** dans Clyo Systems sont envoyés comme des options à HubRise. Les **groupes d'options** dans Clyo Systems sont envoyés à HubRise comme des listes d'options.

Pour chaque option, les informations suivantes sont envoyées à HubRise :

- Nom
- Prix
- Code ref, un identifiant unique court au format numérique, tel que `123`.

Les listes d’options identiques (mêmes options, prix et codes refs) sont encodées une seule fois et sont partagées par les produits qui les utilisent.

### Promotions

Les **menus** dans Clyo Systems sont envoyés comme des promotions à HubRise. Les promotions sont envoyées avec les informations suivantes :

- Nom
- Code ref, un identifiant unique court au format numérique, tel que `123`.
- Les lignes du menu, avec les informations suivantes :
  - Label de la ligne, par exemple "Plat principal".
  - Prix de la ligne.
  - Liste des produits sélectionnables dans la ligne.
