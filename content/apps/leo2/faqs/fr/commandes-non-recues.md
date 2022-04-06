---
title: Les commandes HubRise n'arrivent pas dans LEO2. Que faire ?
position: 1
layout: documentation
meta:
  title: Commandes HubRise non reçues | LEO2 F.A.Q. | HubRise
  description: Que faire lorsque les commandes HubRise n'arrivent pas dans LEO2.
---

## Vérifiez que le serveur HubRise de LEO2 est lancé

LEO2 récupère les commandes toutes les 30 secondes. Si vous ne voyez pas une commande apparaître, commencez par attendre quelques instants.

Une fois le délai de 30 secondes écoulé, si la commande n'apparaît toujours pas, vérifiez que le serveur HubRise de LEO2 est lancé :

1. Depuis votre espace HubRise, sélectionnez **CONNEXIONS**.
1. Dans la connexion **LEO2**, cliquez sur **Actions** > **Voir les logs**.
1. Vérifiez les premières lignes. La présence de lignes `GET /v1/callback/events` toutes les 30 secondes environ, à des dates récentes, indique que le serveur HubRise de LEO2 est lancé.

Si le serveur de HubRise de LEO2 n'est pas lancé, cherchez un raccourci fichier nommé `ATOO LEO [version] - Serveur HubRise` dans l'explorateur Windows, et ouvrez le manuellement. Vérifiez ensuite que vos commandes arrivent.

Le serveur HubRise de LEO2 peut également être configuré pour démarrer en même temps que LEO2. Dans l'écran **Paramètres et Réglages**, cochez l'option **Lancement automatique du serveur HubRise**, sauvegardez, puis relancez LEO2.

## Autre raison

Si le serveur de HubRise de LEO2 est lancé et que vous ne voyez pas d'erreur, contactez le support de LEO2 ou celui de votre revendeur.
