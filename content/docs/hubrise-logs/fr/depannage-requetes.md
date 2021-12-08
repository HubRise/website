---
title: Résolution des problèmes liés aux requêtes
position: 8
layout: documentation
meta:
  title: Résolution des problèmes liés aux requêtes | Comment lire les logs HubRise
  description: Les codes d'erreur, les statuts de commande et les code refs manquants ou erronés affichés dans les journaux HubRise aident à comprendre les problèmes.
---

## Présentation générale

Dans certains cas, l'envoi d'une commande peut échouer. Le dépannage des requêtes API dans le back-office peut aider à déterminer le positionnement exact de la défaillance dans le chemin d'accès du client à la boutique.

S'il n'existe pas de stratégie unique permettant de déboguer tous les problèmes possibles, les suggestions suivantes constituent néanmoins un bon point de départ.

## Codes d'erreur

Chaque requête est associée à un code de réponse. Pour plus d'informations, voir [Code de réponse](/docs/hubrise-logs/requetes-json-hubrise#code). Il s'agit du premier détail à vérifier pour détecter d'éventuelles erreurs.

Toute valeur différente de 200 peut indiquer qu'une requête comprise dans la chaîne n'a pas été transmise, ce qui a entraîné le rejet de l'ensemble de la commande.

La liste suivante décrit les scénarios et stratégies de dépannage possibles pour résoudre ce problème.

### Erreur 422

Le code d'erreur 422 apparaît lorsqu'une requête a bien été envoyée et reçue avec succès, mais que son contenu n'est pas reconnu par le système.

Dans de nombreux cas, cette erreur est attribuable aux systèmes qui sont connectés à HubRise. Elle se produit fréquemment, par exemple, lorsque le code de référence du produit ou de l'offre contenu dans la requête n'est pas reconnu par la solution d'encaissement.

### Erreur 500

Le code d'erreur 500 est émis lorsque le serveur qui était censé recevoir la requête a rencontré une erreur interne dont la nature réelle n'est pas spécifiée. Dans ce cas, le traitement de la requête échoue et vous devez signaler cette erreur à l'équipe d'assistance concernée. Il peut s'agir soit de HubRise, soit de l'application connectée.

## Statut de commande

Les commandes transitent par une série de statuts différents au cours de leur cycle de vie. Parmi les valeurs normales, le statut **nouveau** est actif lors de la création initiale d'une commande, et le statut **reçu** est activé au moment de sa réception par la solution d'encaissement. Pour connaître la liste complète des valeurs possibles, reportez-vous à la [Documentation du développeur](/developers/api/order-management/#order-status).

Dans certains cas, le statut peut indiquer un problème affectant la commande. Le tableau suivant présente les valeurs d'erreur possibles.

| Valeur           | Description                                   |
| --------------- | --------------------------------------------- |
| rejected        | La commande a été rejetée par la boutique.     |
| cancelled       | La commande a été annulée par le client. |
| delivery_failed | La commande n'a pas pu être livrée.             |

## Codes ref

Les codes ref doivent être correctement définis dans les applications connectées à HubRise. Un code ref erroné ou manquant peut entraîner des erreurs dans les requêtes.

La liste de contrôle suivante peut vous aider à identifier les problèmes éventuels.

1. Vérifiez que tous les types de service que vous fournissez comportent un code service_type_ref correct.
1. Vérifiez que tous les produits comportent un code sku_ref correct.
1. Vérifiez que tous les ingrédients et les garnitures comportent le code ref approprié. Dans certains cas, l'ajout et la suppression d'un ingrédient identique peuvent être associés à des codes ref distincts.
1. Vérifiez que tous les modes de paiement acceptés comportent le code ref approprié.
