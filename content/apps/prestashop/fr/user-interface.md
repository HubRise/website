---
title: Interface utilisateur
path_override: interface-utilisateur
position: 3
layout: documentation
meta:
  title: Interface utilisateur | PrestaShop | HubRise
  description: Naviguez sur la page principale de PrestaShop pour accéder aux informations sur les commandes et personnaliser le comportement du bridge. Synchronisez vos données.
---

Dans PrestaShop Bridge, vous pouvez consulter les logs de toutes les opérations entre HubRise et PrestaShop, et accéder à la page de configuration de l'intégration.

## Dernières opérations

Il s'agit de la page qui s'affiche lorsque vous ouvrez PrestaShop Bridge. Elle contient les dernières opérations d'API échangées entre HubRise, PrestaShop et PrestaShop Bridge.

Les opérations peuvent soit être liées à une commande spécifique, soit être des requêtes système génériques exécutées par PrestaShop Bridge.

Chaque ligne correspond à une opération et affiche les informations suivantes :

- **HEURE** : date et heure de la commande
- **COMMANDE** : identifiant HubRise de la commande, pour les opérations de commande.
- **DESCRIPTION** : description facultative pour les opérations qui ne sont pas liées à une commande spécifique. Cette colonne peut être vide, ou afficher `Requête système` ou `Envoi catalogue`.
- **STATUT** : statut de la commande. La valeur `OK` indique que la commande a bien été envoyée. Dans le cas contraire, un code d'erreur s'affiche en rouge.

Le libellé **Requête système** indique que l'opération n'est pas liée à une commande spécifique.

Cliquez sur une ligne pour afficher une page avec les logs associés à l'opération.

### Opération de commande

Sélectionnez une opération de commande dans la liste de la page principale pour afficher tous les logs des requêtes d'API échangées entre HubRise et PrestaShop via PrestaShop Bridge.

Les requêtes sont classées par ordre chronologique inverse, et celles liées au même événement de commande (commande reçue, commande annulée, etc.) sont regroupées.

Dans les logs, chaque ligne contient les informations suivantes :

- **Heure** : date et heure d'envoi de la requête
- **Direction** : applications qui envoient et reçoivent la requête, selon le format Origine → Destination
- **Point de terminaison** : statut de la requête. La valeur `OK` indique que la requête a bien été reçue. Dans le cas contraire, un message précise le type d'erreur survenue.

Cliquez sur une requête pour la développer et afficher le détail de ses logs et sa réponse.

Les logs constituent un puissant outil de débogage en cas d'incident. Pour comprendre comment lire ces logs, voir [Comprendre les logs HubRise](/docs/hubrise-logs/overview).

### Opération de requête système

Une page de requête système est présentée de la même manière qu'une page de commande.

Les requêtes système sont généralement envoyées par PrestaShop Bridge pour informer HubRise d'une modification de la configuration ou pour récupérer les informations les plus récentes. 

Les pages de requête système fournissent des informations de débogage utiles aux équipes d'assistance. Mais elles ont généralement peu d'intérêt pour les autres utilisateurs.

## Configuration

Pour accéder à la page de configuration de PrestaShop Bridge, cliquez sur **Configuration** en haut de l'écran.

Cette page vous permet de personnaliser le comportement de PrestaShop Bridge. Pour plus de détails, voir [Configuration](/apps/prestashop/configuration).

## Actions

Pour accéder à la page des actions, cliquez sur **Actions** en haut de l'écran. Si le lien n'est pas visible, terminez d'abord la configuration de PrestaShop Bridge.

Depuis la page Actions, vous pouvez effectuer les actions suivantes :

- **Envoyer le catalogue** : envoie le catalogue vers PrestaShop. Pour plus de détails, voir [Envoyer le catalogue](/apps/prestashop/push-catalog).
- **Envoyer l'inventaire** : envoie l'inventaire de produits à PrestaShop.

## Langue et navigation

En haut à droite de l'écran, vous pouvez cliquer sur la flèche <InlineImage width="20" height="20">![Flèche](../images/arrow-icon.jpg)</InlineImage> pour développer le menu et modifier la langue de la page en anglais ou en français.

Un clic sur le logo de PrestaShop ou de HubRise en haut de n'importe quelle page de PrestaShop Bridge vous ramène à la page **Dernières opérations**.
