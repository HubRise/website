---
title: Associer les codes ref
path_override: associer-codes-ref
position: 5
layout: documentation
meta:
  title: Associer les codes ref | Popina | HubRise
  description: Comment récupérer les codes ref depuis Popina pour permettre la synchronisation de données avec d'autres applications connectées à HubRise.
---

Une fois votre logiciel de caisse Popina connecté à HubRise, vous devez configurer vos autres applications connectées, afin que les différents éléments présents dans les commandes soient bien identifiés par Popina.

Popina identifie chaque élément d'une commande par un code ref. Vous devez indiquer les codes ref fournis par Popina dans vos autres applications, afin que les commandes puissent être réceptionnées.

Il y a deux façons de procéder :

- Vous pouvez exporter le catalogue Popina vers HubRise, puis importer ce catalogue dans vos autres applications.
- Ou vous pouvez saisir manuellement les codes ref dans vos autres applications.

Seules certaines applications permettent l'import d'un catalogue depuis HubRise. Pour les autres, il faudra saisir manuellement les codes ref.

## Exporter le catalogue {#export-catalog}

---

**REMARQUE IMPORTANTE :** Cette opération va écraser le catalogue HubRise connecté à Popina.

---

Pour exporter manuellement un catalogue vers HubRise, suivez ces étapes :

1. Ouvrez [Delivera](https://delivera-popina.web.app). Pour plus d'informations, voir la section [Delivera](/apps/popina/connect-hubrise#delivera) de cette documentation.
2. Dans le menu, sélectionnez **HubRise**.
3. Cliquez sur **ENVOYER LA CARTE VERS HUBRISE**. En fonction de la taille de votre catalogue, l'opération peut prendre quelques minutes.

Vous devez maintenant importer le catalogue HubRise dans vos autres applications connectées à HubRise. Pour effectuer cette opération, référez-vous à la documentation de ces applications sur le site de HubRise.

## Produits {#products}

Pour retrouver le code ref d'un produit, suivez ces étapes :

1. Ouvrez [Delivera](https://delivera-popina.web.app). Pour plus d'informations, voir la section [Delivera](/apps/popina/connect-hubrise#delivera) de cette documentation.
2. Dans le menu, sélectionnez **Carte**, puis **Produits**.
3. Identifiez le produit désiré dans la liste, puis cliquez sur le bouton **Détail**.
4. Le code ref s'affiche en haut de la fenêtre, à côté de la mention **Identifiant**.

Pour voir les codes ref pour les options, les menus et les modes de paiement, sélectionnez l'onglet correspondant, et relevez le code apparaissant entre parenthèses à côté du nom de l'article.

## SKUs

Popina ne permet pas de créer de SKU. Pour remplacer cette fonctionnalité, vous devez associer chaque SKU d'un produit HubRise avec un produit distinct dans Popina.

## Options

Pour retrouver le code ref d'une option, suivez ces étapes :

1. Ouvrez [Delivera](https://delivera-popina.web.app). Pour plus d'informations, voir la section [Delivera](/apps/popina/connect-hubrise#delivera) de cette documentation.
2. Dans le menu, sélectionnez **Carte**, puis **Produits**.
3. Identifiez la catégorie contenant l'option désirée dans la liste, puis consultez la liste des options.
4. Le code ref de chaque option apparaît entre parenthèses à côté du nom de l'option.

## Promotions

Les promotions dans HubRise correspondent aux **menus** et aux **promotions** dans Popina :

- Un **menu** est un groupe de produits vendu à un prix fixe. Il est possible d'ajouter un supplément sur certains produits.
- Une **promotion** est une réduction en pourcentage ou en valeur fixe sur un ensemble de produits.

Seuls les menus ont un code ref dans Popina. Les promotions n'ont en pas besoin : elles sont identifiées par leur nom dans les commandes.

Pour retrouver le code ref d'un menu, suivez ces étapes :

1. Ouvrez [Delivera](https://delivera-popina.web.app). Pour plus d'informations, voir la section [Delivera](/apps/popina/connect-hubrise#delivera) de cette documentation.
2. Dans le menu, sélectionnez **Carte**, puis **Menus**.
3. Identifiez le menu désiré dans la liste. Le code ref du menu apparaît à côté de la mention **Identifiant**.

## Remises

Les remises n'ont pas de code ref dans Popina. Elles sont identifiés par leur nom dans les commandes.

## Frais

Les frais n'ont pas de code ref dans Popina. Ils sont identifiés par leur nom dans les commandes.

## Méthodes de paiement

Les méthodes de paiement dans HubRise correspondent aux **modes de paiement** dans Popina. Pour retrouver le code ref d'un mode de paiement, suivez ces étapes :

1. Ouvrez [Delivera](https://delivera-popina.web.app). Pour plus d'informations, voir la section [Delivera](/apps/popina/connect-hubrise#delivera) de cette documentation.
2. Dans le menu, sélectionnez **Carte**, puis **Modes de paiement**.
3. Identifiez le mode de paiement désiré dans la liste. Le code ref du mode de paiement apparaît entre parenthèses à côté du nom du mode de paiement.

## Types de service

Popina n'a pas de code ref pour les types de service. Lorsqu'un code ref de type de service est présent dans une commande, il est enregistré dans le champ **Provider** sur Popina.
