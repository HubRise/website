---
title: Interface utilisateur
path_override: interface-utilisateur
position: 3
layout: documentation
meta:
  title: Interface utilisateur | Just Eat Takeaway | HubRise
  description: Voir comment naviguer sur la page principale de Just Eat Takeaway Bridge pour accéder aux informations sur les commandes et personnaliser le comportement de Bridge.
---

Sur la page principale de Just Eat Takeaway Bridge, vous pouvez consulter les requêtes d'API échangées entre HubRise et Just Eat, et accéder à la page de configuration de l'intégration.

## Page des opérations

La page principale affiche les dernières opérations d'API échangées entre HubRise, Just Eat et Just Eat Takeaway Bridge.

Ces opérations peuvent soit être liées à une commande spécifique, soit être des requêtes système génériques exécutées par Just Eat Takeaway Bridge.

Chaque ligne de cette page affiche les informations relatives à une opération :

- **HEURE** : date et heure de la commande.
- **COMMANDE** : identifiant de la commande HubRise, pour les opérations de commande.
- **STATUT** : statut de la commande. La valeur OK indique que la commande a été envoyée avec succès. Dans le cas contraire, un code d'erreur s'affiche en rouge.

Le libellé **Requête système** indique que l'opération n'est pas liée à une commande spécifique.

![Page des opérations de Just Eat Takeaway Bridge développée par HubRise](./images/003-jet-main-page.png)

En cliquant sur une ligne, vous ouvrez une nouvelle page affichant les requêtes d'API associées à l'opération.

## Page de commande

La sélection d'une opération de commande dans la liste qui figure sur la page principale affiche tous les fichiers journaux des requêtes d'API échangées entre HubRise et Just Eat via Just Eat Takeaway Bridge.

Les requêtes sont classées par ordre chronologique inverse, et les requêtes liées au même événement de commande (commande reçue, commande annulée, etc.) sont regroupées visuellement.

Chaque ligne de requête d'API contient les informations suivantes :

- **HEURE** : date et l'heure d'envoi de la requête.
- **DIRECTION** : applications qui envoient et reçoivent la requête, selon le format Origine → Destination.
- **STATUT** : statut de la requête. La valeur OK indique que la requête a été reçue avec succès. Dans le cas contraire, un message explique le type de l'erreur qui est survenue.

Cliquez sur une requête pour la développer et révéler le détail des échanges.

![Page des journaux de commande sur Just Eat Takeaway Bridge](./images/004-jet-order-logs.png)

Les fichiers journaux constituent un puissant outil de débogage en cas d'incident. Pour comprendre comment lire ces requêtes, voir [Comprendre les logs HubRise](/docs/hubrise-logs/overview).

## Page de requête système

La mise en page est identique à celle d'une page de commande.

Les requêtes système sont généralement envoyées par Just Eat Takeaway Bridge pour informer HubRise d'une modification de la configuration, ou pour mettre à jour l'interface utilisateur. À titre d'exemple, l'image suivante illustre une requête de mise à jour du callback de Just Eat Takeaway Bridge après un changement de configuration.

![Page de requête système sur Just Eat Takeaway Bridge](./images/005-jet-system-request.png)

Les pages de requête système fournissent des informations de débogage utiles aux équipes d'assistance, mais elles sont généralement peu utiles pour les autres utilisateurs.

## Langue et navigation

Dans le coin supérieur droit de la page principale, vous pouvez cliquer sur la flèche <InlineImage width="20" height="20">![icône fléchée](../images/arrow-icon.jpg)</InlineImage> pour développer le menu. De là, vous pouvez alterner l'affichage de la page en anglais ou en français.

Pour revenir à la page principale, cliquez sur les logos de Just Eat et de HubRise en haut de n'importe quelle page de Just Eat Takeaway Bridge.

## Page de configuration {#configuration}

Pour accéder à la page de configuration de Just Eat Takeaway Bridge, cliquez sur la flèche <InlineImage width="20" height="20">![icône fléchée](../images/arrow-icon.jpg)</InlineImage> dans le coin supérieur droit de la page pour développer le menu, puis cliquez sur **Configuration**.

![Page de configuration de Just Eat Takeaway Bridge](./images/002-jet-configuration-page.png)

Cette page vous permet de personnaliser le comportement de Just Eat Takeaway Bridge. Pour plus de détails, voir [Configuration](/apps/just-eat-takeaway/configuration).
