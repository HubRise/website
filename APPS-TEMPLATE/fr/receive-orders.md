---
title: Recevoir des commandes
path_override: recevoir-commandes
position: 6
layout: documentation
meta:
  title: Recevoir les commandes | SOLUTION | HubRise
  description: Recevez et mettez à jour le statut des commandes HubRise dans la SOLUTION. Connectez vos applications et synchronisez vos données.
---

Lorsque SOLUTION est connectée à HubRise, elle reçoit des commandes en temps réel.
**OU**
Lorsque SOLUTION est connectée à HubRise, elle récupère les commandes de HubRise toutes les [X] secondes.

Si vous ne recevez pas de commandes, vérifiez [HubRise les commandes n'arrivent pas dans SOLUTION. Que dois-je faire ?](/applications/SOLUTION/faqs/orders-not-received-errors).

## Interface utilisateur

### Liste des commandes {#order-list}

Les nouvelles commandes apparaissent [immédiatement] dans la liste des commandes. Pour afficher la liste des commandes, suivez ces étapes :

1. Depuis l'écran d'accueil, cliquez sur **SECTION**.
2. Sélectionnez **SUBSECTION**.
3. Cliquez sur **BOUTON**.

[Inclure une capture d'écran de la liste de commandes]

### Détails de la commande

Pour afficher les détails d'une commande, suivez ces étapes :

1. Depuis l'écran d'accueil, cliquez sur **SECTION**.
2. Sélectionnez **SUBSECTION**.
3. Cliquez sur **BOUTON**.

[Inclure une capture d'écran des détails d'une commande]

### Modifier le statut d'une commande

Pour mettre à jour les détails d'une commande, suivez ces étapes :

1. Accédez à la liste des commandes en suivant les étapes décrites dans [Voir la liste des commandes](#order-list).
2. Cliquez sur la colonne **STATUS**.
3. Sélectionner le nouveau statut de commande.

[Inclure une capture d'écran des options de statut de commande]

## Reçus

Voici un exemple de reçu généré par SOLUTION pour une commande HubRise :

[Inclure une capture d'écran du reçu]

## Détails techniques

### Articles et options

Les articles des commandes HubRise sont associés aux produits de SOLUTION, en fonction de leurs codes ref. Si le code ref d'un article n'est pas trouvé, [un produit par défaut est utilisé].

De la même manière, les options dans les commandes de HubRise sont associés à des [modificateurs] dans SOLUTION. La même logique d'association est utilisée pour les options que pour les articles.

### Statuts de commande

La SOLUTION change automatiquement le statut des nouvelles commandes en \*\* Received\*\* (Reçu).

Lorsque vous mettez à jour un statut de commande dans SOLUTION, la commande est automatiquement mise à jour dans HubRise, selon le mapping suivant:
[DESCRIBER MAPPING]

### Remises

Les remises dans les commandes HubRise sont appliquées comme des [remises] dans SOLUTION.

SOLUTION utilise le code ref de remise pour identifier la [remise] correspondante. Si le code ref n'est pas trouvé, [la remise est ignorée].
**OU**
SOLUTION utilise uniquement le nom de la remise et son montant. Le code ref est ignoré.

### Remises

Les frais dans les commandes HubRise apparaissent comme des [produits] sur SOLUTION.

SOLUTION utilise le code ref des frais pour identifier le [produit] correspondant. Si le code ref n'est pas trouvé, [les frais sont ignorés].
**OU**
SOLUTION utilise uniquement le nom des frais et son montant. Le code ref est ignoré.

### Paiements

Les paiements dans les commandes HubRise sont associés à des [paiements] dans SOLUTION.

SOLUTION utilise le code ref des paiements pour [DECRIRE LE COMPORTEMENT]. Si le code ref n'est pas trouvé, la commande est marquée comme non payée.

### Informations client

SOLUTION utilise les informations du client dans les commandes de HubRise. Le nom, l'e-mail et le numéro de téléphone du client sont affichés dans les détails de la commande.

### Notes de préparation du client

Les notes de préparation dans les commandes HubRise sont utilisées par SOLUTION à la fois au niveau de la commande et au niveau de l'article. Ces notes sont affichées dans les détails de la commande.
