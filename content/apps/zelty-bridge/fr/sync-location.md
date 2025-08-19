---
title: Synchroniser le point de vente
path_override: synchroniser-point-vente
position: 9
layout: documentation
meta:
  title: Synchroniser le point de vente | Zelty Bridge | HubRise
  description: Découvrez comment synchroniser les horaires d'ouverture, l'acceptation des commandes et le temps de préparation entre Zelty et HubRise.
---

Avec Zelty Bridge, vous pouvez synchroniser automatiquement les informations de votre point de vente entre Zelty et HubRise. Cette synchronisation permet de maintenir à jour vos horaires d'ouverture, le statut d'acceptation des commandes et le temps de préparation sur toutes vos applications connectées.

## Configuration

Pour activer la synchronisation des informations de votre point de vente, deux options sont disponibles dans la page de configuration de Zelty Bridge :

- **Activer la synchronisation des horaires d'ouverture** : synchronise vos horaires d'ouverture
- **Activer la synchronisation de l'acceptation des commandes et du temps de préparation** : synchronise le statut de votre restaurant et les délais

Pour plus d'informations sur l'activation de ces options, consultez la section [Point de vente](/apps/zelty-bridge/configuration) de la page Configuration.

## Horaires d'ouverture

Si la synchronisation est activée, vos horaires sont automatiquement transmis à HubRise lorsque vous les modifiez dans Zelty de la manière suivante :

1. Dans le back-office Zelty, allez dans **Configuration** > **Horaires**
2. Modifiez vos **Horaires d'ouverture du restaurant**
3. Cliquez sur **Sauvegarder**

Les nouveaux horaires sont immédiatement envoyés à HubRise et partagés avec vos applications connectées.

## Acceptation des commandes et temps de préparation

Ces paramètres se gèrent directement depuis votre caisse Zelty :

1. Dans Zelty Caisse, allez dans **Paramètres** > **Commandes en ligne**
2. Utilisez le bouton **Activer la commande en ligne** pour accepter ou refuser les commandes
3. Définissez le **Délai supplémentaire** en minutes si nécessaire
4. Cliquez sur **Valider**

![Paramètres de commande en ligne dans Zelty](./images/006-2x-zelty-online-ordering.png)

Si la synchronisation est activée, ces paramètres sont immédiatement transmis à HubRise selon les règles suivantes :

| État dans Zelty                      | État dans HubRise | Description                                               |
| ------------------------------------ | ----------------- | --------------------------------------------------------- |
| Commande en ligne désactivée         | `paused`          | Les commandes sont refusées                               |
| Commande en ligne activée, délai = 0 | `online`          | Les commandes sont acceptées normalement                  |
| Commande en ligne activée, délai > 0 | `busy`            | Les commandes sont acceptées avec un délai supplémentaire |
