---
title: Associer les codes ref
position: 3
layout: documentation
meta:
  title: Associer les codes ref | LEO2 | HubRise
  description: Instructions pour associer les codes ref des produits LEO2 avec d'autres applications connectées à HubRise pour la synchronisation des données.
---

Une fois votre logiciel de caisse LEO2 connecté à HubRise, vous devez configurer vos autres applications connectées, afin que les différents éléments présents dans les commandes soient bien identifiés par LEO2.

LEO2 identifie chaque élément d'une commande par un code ref. Vous devez indiquer les codes ref fournis par LEO2 dans vos autres applications, afin que les commandes puissent être réceptionnées.

Il y a deux façons de procéder :

- Vous pouvez exporter le catalogue LEO2 vers HubRise, puis importer ce catalogue dans vos autres applications.
- Ou vous pouvez saisir manuellement les codes ref dans vos autres applications.

Seules certaines applications permettent l'import d'un catalogue depuis HubRise. Pour les autres, il faudra saisir manuellement les codes ref.

## Exporter le catalogue

Pour exporter manuellement un catalogue vers HubRise, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Paramètres et Réglages**.
1. Cliquez sur **HubRise**.
   ![Associer les codes ref - Paramètres HubRise](../images/003-fr-leo2-parametres-hubrise.png)
1. Cliquez sur **Envoi catalogue**.
1. Cliquez sur **Oui**.

Vous devez maintenant importer le catalogue HubRise dans vos autres applications connectées à HubRise. Pour effectuer cette opération, référez-vous à la documentation de ces applications sur le site de HubRise.

## Produits

Pour retrouver le code ref d'un produit, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Produits**.
1. Cliquez sur **Rechercher** ou appuyez sur la touche **F1**.
   ![Associer les codes ref - Recherche d'un produit](../images/005-fr-leo2-recherche-produit.png)
1. Sélectionnez dans la liste le produit désiré. Le code ref s'affiche en haut à droite de la fenêtre **FICHE PRODUIT**, dans le champ **Clé unique**.
   ![Associer les codes ref - Détails d'un produit](../images/006-fr-leo2-details-produit.png)

## SKUs

LEO2 ne permet pas de créer de SKU. Pour remplacer cette fonctionnalité, vous devez associer chaque SKU d'un produit HubRise avec un produit distinct dans LEO2.

## Options

Les options dans HubRise correspondent aux messages cuisine dans LEO2.

LEO2 supporte deux types de messages cuisine :

- Les messages simples, réservés aux options gratuites.
- Les messages produits, qui peuvent être utilisés pour les options gratuites ou payantes.

Pour retrouver le code ref d'une option, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Produits**.
1. Cliquez sur **Messages Cuisine**.
1. Dans la table **Commentaires associés**, cliquez sur le commentaire auquel appartient le message cuisine désiré. Le code ref s'affiche dans la colonne **ID**.
   ![Associer les codes ref - Messages cuisine](../images/014-fr-leo2-messages-cuisine.png)

Les messages simples sont créés avec le bouton **Insère Ligne**. Leur code ref est au format **TEXT_xx_yy**.

Les messages produits sont créés avec les boutons **Insère Produit Prix**, **Insère Produit Zéro**, ou **Insère Prod. Offert**. Leur code ref est au format **PROD_xx_yy_zz**.

---

**REMARQUE IMPORTANTE :** Le code ref d'une option payante, qui est un message produit, doit toujours être au format **PROD_xx_yy_zz**.

---

## Promotions

Les promotions dans HubRise correspondent aux menus dans LEO2. Les lignes de promotion correspondent aux choix de menu. Pour retrouver le code ref et les choix de menu dans LEO2 :

1. Ouvrez le produit correspondant au menu, en suivant les mêmes étapes que pour un [produit](/apps/leo2/associer-codes-ref#produits).
1. Le code ref du menu s'affiche en haut à droite de la fenêtre **FICHE PRODUIT**, dans le champ **Clé unique**.
   ![Associer les codes ref - Détails d'un menu](../images/015-fr-leo2-details-menu.png)
1. Pour accéder aux choix de menu, cliquez sur **Faire un Menu**.
1. Pour voir les produits associés à chaque choix de menu, cliquez sur l'onglet du choix correspondant.
   ![Associer les codes ref - Consulter les choix de menu](../images/016-fr-leo2-choix-menu.png)

## Méthodes de paiement

Les méthodes de paiement dans HubRise correspondent aux modes de règlement dans LEO2. Pour retrouver leur code ref, suivez les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Paramètres et Réglages**.
1. Cliquez sur **Modes de Règlement**. Le code ref s'affiche dans la colonne **No**.
   ![Associer les codes ref - Modes de règlement](../images/008-fr-leo2-modes-reglement.png)

## Types de service

Les types de service dans HubRise sont **Sur place**, **Emporter** et **Livraison**. Chaque type de service doit être associé à un tarif dans LEO2.

Pour associer un type de service à un tarif, suivez les étapes suivantes :

1. Depuis l'écran d'accueil de LEO2, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Paramètres et Réglages**.
1. Dans l'onglet **Généraux**, cliquez sur **HubRise**.
   ![Connexion - Paramètres HubRise](../images/003-fr-leo2-parametres-hubrise.png)
1. Dans les champs **Tarif sur place**, **Tarif à emporter** et **Tarif à livrer**, choisissez le tarif correspondant dans la liste déroulante.

## Codes ref des types de service

Les codes refs des types de service dans HubRise correspondent aux vendeurs dans LEO2. Les vendeurs permettent de connaître la provenance des commandes. Selon vos besoins, vous pouvez par exemple créer un vendeur "Uber Eats" et un vendeur "WooCommerce".

Une fois le vendeur créé, vous pouvez trouver son code ref en suivant les étapes suivantes :

1. Depuis l'écran d'accueil, cliquez sur **Gestion**.
1. Entrez le mot de passe que vous avez choisi lors de l'installation de LEO2. Par défaut, ce mot de passe est **1234**.
1. Cliquez sur **Vendeurs**. Le code ref s'affiche dans la colonne **N°**.
   ![Associer les codes ref - Vendeurs](../images/013-fr-leo2-vendeurs.png)
