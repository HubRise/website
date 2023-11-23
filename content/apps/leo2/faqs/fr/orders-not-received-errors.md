---
title: Les commandes HubRise n'arrivent pas dans LEO2. Que faire ?
path_override: commandes-non-recues
position: 1
layout: documentation
meta:
  title: Commandes HubRise non reçues | FAQ LEO2 | HubRise
  description: Que faire lorsque les commandes HubRise n'arrivent pas dans LEO2 ?
---

Si vous ne recevez pas vos commandes HubRise dans LEO2, cette page indique les causes les plus fréquentes et les solutions possibles.

## Serveur HubRise éteint

LEO2 récupère les commandes toutes les 30 secondes. Si vous ne voyez pas une commande apparaître, commencez par attendre quelques instants.

Une fois le délai de 30 secondes écoulé, si la commande n'apparaît toujours pas, vérifiez que le serveur HubRise de LEO2 est lancé :

1. Depuis le back-office de HubRise, sélectionnez **CONNEXIONS**.
1. Dans la connexion **LEO2**, cliquez sur **Actions** > **Voir les logs**.
1. Vérifiez les premières lignes. La présence de lignes `GET /v1/callback/events` toutes les 30 secondes environ, à des dates récentes, indique que le serveur HubRise de LEO2 est lancé.

Si le serveur de HubRise de LEO2 n'est pas lancé, cherchez un raccourci fichier nommé `ATOO LEO [version] - Serveur HubRise` dans l'explorateur Windows, et ouvrez le manuellement. Vérifiez ensuite que vos commandes arrivent.

Le serveur HubRise de LEO2 peut également être configuré pour démarrer en même temps que LEO2. Dans l'écran **Paramètres et Réglages**, cochez l'option **Lancement automatique du serveur HubRise**, sauvegardez, puis relancez LEO2.

## Code ref article non numérique

Les codes ref des articles doivent être numériques. Dans le cas contraire, le serveur HubRise de LEO2 peut s'arrêter lors de la récupération de la commande.

Si LEO2 cesse de fonctionner lors de la récupération d'une telle commande, suivez les étapes suivantes :

- Vérifiez que tous les codes ref des articles sont numériques dans la solution tierce.
- Contactez le support HubRise sur support@hubrise.com pour purger les envois de commandes en erreur.
- Relancez le serveur HubRise de LEO2.

## Autre raison

Si le serveur de HubRise de LEO2 est lancé et que vous ne voyez pas d'erreur, contactez le support de LEO2 ou celui de votre revendeur.
