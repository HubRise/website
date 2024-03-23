---
title: Listes de clients
path_override: listes-clients
position: 14
layout: documentation
meta:
  title: Listes de clients | HubRise
  description: Gestion des listes de clients sur HubRise.
---

La section **Liste de clients** de la page **CONFIGURATION** vous permet d'ajouter, modifier et supprimer des listes de clients.

Des listes de clients peuvent être ajoutées aux comptes et aux points de vente dans les cas suivants :

- Par défaut, les comptes définissent une seule liste de clients qui porte le nom du compte. Les points de vente ne comportent aucune liste de clients définie par défaut.
- Un compte doit impérativement comporter au moins une liste de clients. Si vous tentez de supprimer la dernière liste de clients d'un compte, une notification d'erreur s'affiche.
- Vous pouvez créer autant de listes de clients que vous le souhaitez. Exemple :
  - Vous pouvez créer une liste de clients à des fins de test, dont l'utilisation n'aura aucune conséquence sur la production.
  - Vous pouvez créer une liste de clients pour un point de vente qui comporte des clients différents de ceux d'autres points de vente.

Vous pouvez connecter des applications intégrées à une liste de clients spécifique. Vos clients sont enregistrés, gérés et importés dans HubRise depuis votre application tierce, et ne sont pas modifiables depuis l'interface de HubRise.

L'ajout ou la modification d'une liste de clients n'a aucune incidence sur les applications tierces.

## Ajouter une liste de clients

Pour ajouter une liste de clients, procédez comme suit :

1. Sélectionnez **CONFIGURATION**.
1. Pour ajouter la liste de clients au niveau du compte, vérifiez que l'option **Tous les points de vente** est sélectionnée. Pour l'ajouter à un point de vente, sélectionnez une entrée dans la liste déroulante **Point de vente**.
1. Dans la section **Liste de clients**, cliquez sur **Ajouter une liste de clients**.
1. Saisissez le nom de la liste de clients. Si vous n'avez qu'une seule liste de clients, nous vous recommandons d'utiliser le nom de votre compte ou de votre point de vente.
1. Cliquez sur **Créer** pour sauvegarder la nouvelle liste.

## Détails de la liste de clients

La section **Liste des clients** affiche les informations suivantes :

- **Nom** : appellation de la liste de clients, suivie de son identifiant unique. Cet identifiant unique ne change pas même si le nom de la liste de clients est modifié. Exemple : la liste de clients `Avenue d'Italie` apparaîtra comme `Avenue d'Italie - abc123`. Si la liste de clients `Avenue d'Italie` est renommée `Rue Denfert-Rochereau`, elle apparaîtra comme `Rue Denfert-Rochereau - abc123`.
- **Nombre de clients** : nombre de clients importés dans HubRise. Pour afficher les détails de la liste des clients, voir [Clients](/docs/data#customers).

Pour afficher les détails d'une liste de clients, cliquez sur le nom de la liste en question. Vous serez alors automatiquement redirigé sur la page **DONNÉES** > **Clients** de la liste spécifique.

## Modifier une liste de clients

Pour modifier le nom d'une liste de clients, procédez comme suit :

1. Rendez-vous dans **CONFIGURATION**.
1. Dans la section **Liste de clients**, cliquez sur l'icône Modifier <InlineImage width="15" height="15">![Icône Modifier](../images/028-pen-icon.png)</InlineImage> pour la liste des clients à mettre à jour.
1. Saisissez le nouveau nom de la liste de clients.
1. Cliquez sur **Mettre à jour** pour enregistrer la configuration.

![Modifier ou supprimer une liste de clients](./images/074-edit-remove-customer-list.png)

## Supprimer une liste de clients

Les listes de clients ne peuvent être supprimées que lorsque aucune connexion à ces listes à partir d'une application n'est active, ou que leur suppression ne laisse aucune liste de clients connectée au compte.

1. Sélectionnez **CONFIGURATION**.
1. Dans la section **Liste de clients**, cliquez sur l'icône Supprimer <InlineImage width="15" height="16">![Icône de corbeille](../images/057-2x-trash-icon.png)</InlineImage> pour la liste des clients à supprimer.
1. Cliquez sur **Supprimer** pour confirmer votre action.
