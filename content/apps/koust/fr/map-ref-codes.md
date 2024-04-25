---
title: Associer les codes ref
path_override: associer-codes-ref
position: 4
layout: documentation
meta:
  title: Associer les codes ref | Koust | HubRise
  description: Instructions pour associer les codes ref des produits Koust avec d'autres applications connectées à HubRise pour la synchronisation des données.
---

Une fois Koust connecté à HubRise, les commandes provenant de HubRise sont importées automatiquement. Pour vous assurer de la bonne synchronisation des articles, suivez les instructions détaillées sur cette page.

## Importer le catalogue

À tout moment, vous pouvez importer manuellement le catalogue depuis HubRise :

1. Ouvrez votre tableau de bord Koust, et dans la barre de menu, cliquez sur le nom de votre entreprise.
1. Dans le menu déroulant, sélectionnez **Paramètres**. La page **Paramètres de l'établissement** s'affiche.
1. Sélectionnez l'onglet **Intégrations**.
   ![Associer les codes ref - Onglet Intégrations](./images/004-koust-connected.png)
1. Cliquez sur le bloc **HubRise** présent dans la liste des intégrations. Une boîte de dialogue s'ouvre.
   ![Associer les codes ref - Informations](./images/005-koust-hubrise-information.png)
1. Cliquez sur **Importer le catalogue**. Le message **Catalogue importé avec succès.** s'affiche.
   ![Associer les codes ref - Catalogue importé](./images/006-koust-catalog-imported.png)

---

**REMARQUE IMPORTANTE :** Le catalogue est importé automatiquement dans Koust au moment de la connexion avec HubRise.

---

## Produits {#products}

Un produit dans HubRise correspond à un article dans Koust. Pour retrouver le code ref d'un article, suivez ces étapes :

1. Dans le menu latéral, sélectionnez **Ventes - Conso.** > **Historique ventes**.
   ![Associer les codes ref - Liste des articles](./images/010-koust-item-list.png)
1. Sélectionnez l'icône de modification ou le nom de l'article. Le code ref s'affiche dans le champ **Référence distante (SKU_REF)**.
   ![Associer les codes ref - Détail article](./images/011-koust-item-detail.png)

## SKUs

Une SKU (_Stock Keeping Unit_) dans HubRise correspond aussi à un article dans Koust. Par exemple, si un produit dans HubRise comprend 3 SKUs, 3 articles sont créés dans Koust lors de l'import du catalogue.

Pour retrouver le code ref d'un article, suivez les mêmes étapes que pour un [produit](/apps/koust/map-ref-codes#products).

## Options

Une option dans HubRise correspond aussi à un article dans Koust. Pour retrouver le code ref d'un article, suivez les mêmes étapes que pour un [produit](/apps/koust/map-ref-codes#products).
