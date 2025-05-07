---
title: Interface utilisateur
path_override: interface-utilisateur
position: 3
layout: documentation
meta:
  title: Interface utilisateur | Just Eat Flyt | HubRise
  description: Naviguez sur la page principale de Just Eat Flyt Bridge pour accéder aux informations sur les commandes et personnaliser le comportement du bridge.
---

Dans Just Eat Flyt Bridge, vous pouvez consulter les logs de toutes les opérations entre HubRise et Just Eat, et accéder aux paramètres de configuration de l'intégration.

## Dernières opérations

Il s'agit de la page qui s'affiche lorsque vous ouvrez Just Eat Flyt Bridge. Elle contient les dernières opérations d'API échangées entre HubRise, Just Eat et Just Eat Flyt Bridge.

Ces opérations peuvent soit être liées à une commande spécifique, soit être des requêtes système génériques exécutées par Just Eat Flyt Bridge.

Chaque ligne correspond à une opération et affiche les informations suivantes :

- **HEURE :** date et heure de la commande
- **COMMANDE :** identifiant HubRise de la commande, pour les opérations de commande
- **DESCRIPTION :** description facultative pour les opérations qui ne sont pas liées à une commande spécifique. Cette colonne peut être vide, ou afficher `Requête système` ou `Envoi catalogue`.
- **STATUT :** statut de la commande. La valeur `OK` indique que la commande a bien été envoyée. Dans le cas contraire, un code d'erreur s'affiche en rouge.

![Page des opérations de Just Eat Flyt Bridge, développé par HubRise](./images/003-just-eat-main-page.png)

Cliquez sur une ligne pour afficher une page avec les logs associés à l'opération.

### Opération de commande

La sélection d'une opération de commande dans la liste qui figure sur la page principale affiche tous les fichiers journaux des requêtes d'API échangées entre HubRise et Just Eat Flyt via Just Eat Flyt Bridge.

Les requêtes sont classées par ordre chronologique inverse, et celles liées au même événement de commande (commande reçue, commande annulée, etc.) sont regroupées.

Dans les logs, chaque ligne contient les informations suivantes :

- **Heure :** date et heure d'envoi de la requête
- **Direction :** applications qui envoient et reçoivent la requête, selon le format Origine → Destination
- **Point de terminaison :** statut de la requête. La valeur `OK` indique que la requête a bien été reçue. Dans le cas contraire, un message précise le type d'erreur survenue.

Cliquez sur une requête pour la développer et afficher le détail de ses logs et sa réponse.

![Page des logs de commande sur Just Eat Flyt Bridge](./images/004-just-eat-order-logs.png)

Les logs constituent un puissant outil de débogage en cas d'incident. Pour comprendre comment lire ces logs, voir [Comprendre les logs HubRise](/docs/hubrise-logs/overview).

### Opération de requête système

Une page de requête système est présentée de la même manière qu'une page de commande.

Les requêtes système sont généralement envoyées par Just Eat Flyt Bridge pour informer HubRise d'une modification de la configuration ou pour récupérer les informations les plus récentes. À titre d'exemple, l'image suivante illustre une requête de mise à jour du callback de Just Eat Flyt Bridge après un changement de configuration.

![Page de requête système sur Just Eat Flyt Bridge](./images/005-just-eat-system-request.png)

Les pages de requête système fournissent des informations de débogage utiles aux équipes d'assistance. Mais elles ont généralement peu d'intérêt pour les autres utilisateurs.

## Configuration {#configuration}

Pour accéder à la page de configuration de Just Eat Flyt Bridge, cliquez sur **Configuration** en haut de l'écran.

![Page de configuration de Just Eat Flyt Bridge](./images/002-just-eat-configuration-page.png)

Cette page vous permet de personnaliser le comportement de Just Eat Flyt Bridge. Pour plus de détails, voir [Configuration](/apps/just-eat-flyt/configuration).

## Actions

Pour accéder à la page des actions, cliquez sur **Actions** en haut de l'écran. Si le lien n'est pas visible, terminez d'abord la configuration de Just Eat Flyt Bridge.

Sur la page Actions, vous pouvez effectuer les actions suivantes :

- **Envoyer le catalogue** : envoie le catalogue vers Just Eat. Pour plus de détails, voir [Envoyer le catalogue](/apps/just-eat-flyt/push-catalog).
- **Envoyer l'inventaire** : envoie l'inventaire HubRise vers Just Eat.

## Langue et navigation

En haut à droite de l'écran, vous pouvez cliquer sur la flèche <InlineImage width="20" height="20">![Icône flèche](../images/arrow-icon.jpg)</InlineImage> pour développer le menu et modifier la langue de la page en anglais ou en français.

Un clic sur le logo de Just Eat ou de HubRise en haut de n'importe quelle page de Just Eat Flyt Bridge vous ramène à la page **Dernières opérations**.
