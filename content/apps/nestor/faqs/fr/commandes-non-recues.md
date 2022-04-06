---
title: Les commandes HubRise n'arrivent pas dans Nestor, que faire ?
position: 3
layout: documentation
meta:
  title: Commandes HubRise non reçues | Nestor F.A.Q. | HubRise
  description: Que faire lorsque les commandes HubRise n'arrivent pas dans Nestor.
---

## Vérifiez que l'utilitaire WebNES est lancé

L'utilitaire WebNES est inclus dans l'installation de Nestor. Son rôle est de récupérer les commandes toutes les 20 secondes. Si vous ne voyez pas une commande apparaître, commencez par attendre quelques instants.

Une fois le délai de 20 secondes écoulé, si la commande n'apparaît toujours pas, vérifiez que l'utilitaire WebNES est fonctionnel :

1. Depuis votre espace HubRise, sélectionnez **CONNEXIONS**.
1. Dans la connexion **Nestor**, cliquez sur **Actions** > **Voir les logs**.
1. Vérifiez les premières lignes. La présence de lignes `GET /v1/callback/events` toutes les 20 secondes environ, à des dates récentes, indique que l'utilitaire WebNES est lancé.

Si l'utilitaire WebNES n'est pas lancé, depuis le répertoire d'installation de Nestor, lancez l'application WebNES. Vérifiez ensuite que vos commandes arrivent.
