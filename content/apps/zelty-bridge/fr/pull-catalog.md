---
title: Récupérer le catalogue
path_override: recuperer-catalogue
position: 6
layout: documentation
meta:
  title: Récupérer le catalogue | Zelty Bridge | HubRise
  description: Découvrez comment récupérer le catalogue Zelty dans HubRise, les informations importées et les références techniques.
---

Avec Zelty Bridge, vous pouvez récupérer votre catalogue Zelty dans HubRise. Cette opération importe vos catégories, produits, options et menus depuis Zelty.

## Récupérer le catalogue dans HubRise

Il existe deux méthodes pour récupérer votre catalogue Zelty dans HubRise :

### Via Zelty Bridge

Pour récupérer votre catalogue via Zelty Bridge :

1. Ouvrez Zelty Bridge depuis votre back-office HubRise
2. Cliquez sur l'onglet **Actions**
3. Dans la section **Récupérer le catalogue depuis Zelty**, cliquez sur **Récupérer le catalogue**
4. Confirmez l'action

L'opération peut prendre quelques minutes selon la taille de votre catalogue.

### Via le back-office Zelty {#via-zelty-bo}

Si vous avez activé la récupération automatique du catalogue dans la [configuration](/apps/zelty-bridge/configuration#catalogue), vous pouvez également déclencher l'import depuis le back-office Zelty.

Pour déclencher une mise à jour du catalogue depuis Zelty :

1. Ouvrez le back-office Zelty
2. Allez dans **La carte** > **Les catalogues**
3. Choisissez n'importe quel catalogue (pas nécessairement celui spécifié dans la configuration)
4. Cliquez sur les 3 points verticaux à droite
5. Sélectionnez **Envoyer vers**
6. Cochez **HubRise V2**
7. Cliquez sur **Suivant**

![Envoi du catalogue depuis Zelty](./images/005-2x-zelty-push-catalog.png)

---

**REMARQUE IMPORTANTE :** Le catalogue HubRise existant sera écrasé par cette opération.

---

## Informations envoyées à HubRise

### Catégories

Les catégories Zelty sont importées avec les informations suivantes :

- Nom de la catégorie
- Code ref (identifiant unique Zelty)
- Description de la catégorie

Les catégories imbriquées sont conservées avec leur structure hiérarchique.

### Produits

Pour chaque produit Zelty, les informations suivantes sont importées :

- Nom du produit tel qu'affiché dans Zelty
- Description du produit
- Catégorie associée
- Code ref (identifiant unique du produit dans Zelty)
- Prix standards et, si activées, les variantes de prix (livraison, à emporter, Happy Hour)
- Taux de TVA pour consommation sur place, à emporter et livraison
- Listes d'options associées au produit
- Image principale du produit

### Options

Les options sont importées avec leur structure complète :

- Nom de la liste d'options (par exemple "Taille", "Suppléments")
- Options disponibles avec leur nom, prix et code ref
- Contraintes de sélection (nombre minimum et maximum de sélections)

### Menus (Deals)

Les menus Zelty sont convertis en deals HubRise avec :

- Nom du menu tel qu'affiché dans Zelty
- Code ref (identifiant unique du menu)
- Prix total du menu
- Lignes du deal, pour chaque partie du menu :
  - Nom de la catégorie (entrées, plats, desserts...)
  - Produits disponibles dans cette catégorie
  - Suppléments éventuels pour certains produits

### Inventaire

Si la synchronisation de l'inventaire est activée dans la configuration, l'état de rupture de stock est également importé :

- Les produits en rupture dans Zelty sont marqués avec un stock de 0 dans HubRise
- Les produits disponibles sont marqués avec un stock illimité

## Références techniques

### Structure du catalogue

Zelty Bridge utilise deux sources de données pour construire le catalogue HubRise :

1. **Le data lake Zelty** : Contient toutes les informations produits (noms, descriptions, options, images)
2. **Les catalogues spécifiques** : Fournissent la structure, les prix et les tags

### Gestion des variantes

Lorsque l'option **Créer des variantes pour les prix livraison, à emporter et Happy Hour** est activée, Zelty Bridge crée automatiquement des variantes dans HubRise pour :

- À emporter (utilise le prix `price_togo`)
- Livraison (utilise le prix `price_delivery`)
- Happy Hour (utilise le prix `happy_price`)

### Catégories spéciales

Zelty Bridge peut créer automatiquement des catégories spéciales :

- "Produits cachés pour les menus" pour les produits utilisés uniquement dans les menus. Chacun de ces produits est marqué avec le tag `deal_only`.
- "Produits sans tag" pour les produits sans tag dans Zelty.
