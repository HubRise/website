---
title: Commandes
position: 4
layout: documentation
meta:
  title: Commandes | Carré POS | HubRise
  description: Réceptionner et modifier le statut des commandes HubRise reçues dans Carré POS. Connectez vos apps et synchronisez vos données.
---

Lorsque Carré POS est connecté à HubRise, les commandes envoyées à HubRise arrivent automatiquement dans votre logiciel de caisse.

## Recevoir des commandes

Pour voir la liste des commandes dans le back-office de Carré POS, sélectionnez **HubRise** > **Résumé des commandes** dans le menu principal.

![Commandes - Résumé des commandes](../images/011-fr-carre-pos-resume-commandes.png)

Pour voir la liste des nouvelles commandes dans le logiciel de caisse, suivez les étapes suivantes :

1. Depuis l'écran de démarrage de Carré POS, cliquez sur **ACCUEIL**.
1. Sélectionnez un utilisateur.
   ![Commandes - Menu d'accueil](../images/013-fr-carre-pos-menu-accueil.png)
1. Cliquez sur **ECRANS DE PREPARATION**.
1. Sélectionnez un écran de cuisine. Les nouvelles commandes reçues sont listées ici.
   ![Commandes - Écran de cuisine](../images/014-fr-carre-pos-ecran-cuisine.png)

### Commande avec des produits inconnus

Les produits non reconnus d'une commande sont remplacés par un produit générique nommé **Divers**.

A noter que ce produit générique doit être créé dans Carré POS, sinon les commandes contenant des produits inconnus sont rejetées. L'équipe de Carré POS se charge généralement de créer ce produit lors de la connexion à HubRise.

### Produits avec des prix différents

Lorsqu'une commande contient des produits dont le prix ne correspond pas à celui de Carré POS, un produit **Frais** ou **Remise** est ajouté à la commande en fonction de la différence de prix. Tout comme le produit **Divers**, l'équipe de Carré POS crée ces produits dans le catalogue du restaurateur lors de la connexion à HubRise.

Par exemple, si une _Margarita Grande_ est à 11.00 € dans la commande, mais que son prix est 10.00 € dans le catalogue Carré POS, un produit **Frais** avec un prix de 1.00 € est ajouté à la commande.

### Statut de la commande

Les commandes sont acceptées automatiquement à la réception dans Carré POS.

Carré POS n'envoie pas encore les mises à jour de statut vers HubRise. Cette fonctionnalité est en cours de développement et sera disponible prochainement.

### Détails de la commande

Pour voir les détails d'une commande dans Carré POS :

1. Suivez les étapes décrites dans [Recevoir des commandes](/apps/carre-pos/commandes#recevoir-des-commandes) pour accéder à la liste des commandes.
1. Cliquez sur **Details** sur la ligne correspondant à la commande.
   ![Commandes - Détails d'une commande](../images/012-fr-carre-pos-details-commande.png)

## Envoyer les commandes

Cette fonctionnalité est en cours de développement et sera disponible prochainement.
