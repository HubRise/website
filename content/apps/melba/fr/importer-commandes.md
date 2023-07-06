---
title: Importer les commandes
position: 4
layout: documentation
meta:
  title: Importer les commandes | Melba by Foodmeup | HubRise
  description: Comment importer un catalogue HubRise dans votre solution de gestion Melba, et détail des informations reçues dans Melba lors de l'importation des commandes HubRise.
---

## Importer les commandes dans Melba

Pour importer les commandes HubRise dans Melba, suivez les étapes suivantes :

1. Depuis le back-office de Melba, cliquez sur l'icône **EXTENSIONS** dans le menu à gauche.

1. Trouvez HubRise dans la liste des extensions. Si HubRise est connecté, vous voyez le label **Installée**. A droite de ce label, cliquez sur l'icône avec les 3 points verticaux, puis sur **Importer les ventes**.
   ![Paramètres import](../images/006-fr-parametres-import-commandes.png)

## Déroulement de l'importation

L'importation des commandes HubRise dans Melba se produit à deux moments différents :

- Lors de la connexion de Melba à HubRise, les commandes des 2 derniers mois sont importées dans Melba.
- Les commandes peuvent être importées à tout moment, sur action explicite de l'utilisateur, comme décrit ci-dessus. Melba importe alors toutes les commandes depuis la dernière importation.

Les commandes HubRise ne sont pas importées de manière automatique dans Melba, mais seulement sur demande de l'utilisateur.

## Informations reçues dans Melba

Lors de l'importation des commandes, Melba reçoit les informations suivantes :

- Prénom et nom du client
- Heure de livraison
- Nom, quantité et prix des articles
- Remises sur la commande
- Frais

Les articles faisant partie d'une promotion sont importés avec le prix incluant la promotion, mais sans les informations sur la promotion elle-même.

Les options des articles, comme les suppléments, ne sont pas reçues dans Melba. Une mise à jour est néanmoins prévue pour permettre l'importation des options.

Le mode de paiement et le type de service ne sont pas importés dans Melba.
