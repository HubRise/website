---
title: Commandes
path_override: commandes
position: 4
layout: documentation
meta:
  title: Commandes | Zelty | HubRise
  description: Réceptionner et modifier le statut des commandes HubRise reçues dans Zelty. Connectez vos apps et synchronisez vos données.
---

Une fois HubRise connecté à Zelty et les codes ref associés, aucune autre action n'est nécessaire. Votre logiciel de caisse Zelty reçoit automatiquement toutes les commandes envoyées à HubRise par d'autres applications.

## Recevoir des commandes

Lorsque vous recevez une commande dans votre logiciel de caisse, une notification apparaît et la commande devient disponible dans la liste des commandes.

Pour afficher la liste des commandes :

1. Accédez au **Tableau de bord**.
1. Cliquez sur **Statistiques**.
1. Sélectionnez l'onglet **Tickets**.

Si vous avez connecté Zelty à HubRise et associé tous les codes ref sur les autres applications, mais que les commandes n'apparaissent pas dans Zelty, consultez la section [Dépannage](/apps/zelty/troubleshooting). Vous pouvez également vérifier les transactions dans les logs de HubRise. Pour plus d'informations, consultez la section [Logs](/docs/data#logs) du guide de l'utilisateur de HubRise.

## Données des commandes

Lorsque le client choisit de payer à la livraison ou à l'enlèvement, aucune information de paiement ne doit être envoyée dans la commande, car cela mettrait fin à la transaction.
