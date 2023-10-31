---
title: Recevoir les commandes
path_override: recevoir-commandes
position: 4
layout: documentation
meta:
  title: Recevoir les commandes | Carré POS | HubRise
  description: Réceptionner et modifier le statut des commandes HubRise reçues dans Carré POS. Connectez vos apps et synchronisez vos données.
---

Lorsque Carré POS est connecté à HubRise, les commandes envoyées à HubRise arrivent automatiquement dans votre logiciel de caisse.

## Liste des commandes

### Depuis le back-office

Pour voir la liste des commandes dans le back-office de Carré POS, sélectionnez **HubRise** > **Résumé des commandes** dans le menu principal.

![Commandes - Résumé des commandes](./images/011-carre-pos-order-summary.png)

Pour voir le détail d'une commande, cliquez sur **Details** :

![Commandes - Détails d'une commande](./images/012-carre-pos-order-details.png)

### Depuis le logiciel de caisse

Pour voir la liste des nouvelles commandes dans le logiciel de caisse, suivez les étapes suivantes :

1. Depuis l'écran de démarrage de Carré POS, cliquez sur **ACCUEIL**.
1. Sélectionnez un utilisateur.
   ![Commandes - Menu d'accueil](./images/013-carre-pos-home-menu.png)
1. Cliquez sur **ECRANS DE PREPARATION**.
1. Sélectionnez un écran. Les nouvelles commandes reçues sont listées ici.
   ![Commandes - Écran de cuisine](./images/014-carre-pos-kds.png)

## Synchronisation des statuts de commande

Lorsqu'une commande est reçue, Carré POS modifie automatiquement son statut à `received` sur HubRise.

Si vous mettez à jour le statut d'une commande via l'écran cuisine Carré POS, le changement de statut se reflétera sur HubRise de la manière suivante :

- **En Préparation** : Le statut passe à `in_preparation`.
- **Servie** : Le statut passe à `awaiting_collection`.
- **Terminée** : Le statut passe à `completed`.

## Cas particuliers

### Commande avec des produits inconnus

Les produits non reconnus d'une commande sont remplacés par un produit générique nommé **Divers**.

A noter que ce produit générique doit être créé dans Carré POS, sinon les commandes contenant des produits inconnus sont rejetées. L'équipe de Carré POS se charge généralement de créer ce produit lors de la connexion à HubRise.

### Produits avec des prix différents

Lorsqu'une commande contient des produits dont le prix ne correspond pas à celui de Carré POS, un produit **Frais** ou **Remise** est ajouté à la commande en fonction de la différence de prix. Tout comme le produit **Divers**, l'équipe de Carré POS crée ces produits dans le catalogue du restaurateur lors de la connexion à HubRise.

Par exemple, si une _Margarita Grande_ est à 11.00 € dans la commande, mais que son prix est 10.00 € dans le catalogue Carré POS, un produit **Frais** avec un prix de 1.00 € est ajouté à la commande.
