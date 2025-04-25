---
title: Déboguer les requêtes
path_override: deboguer-requetes
position: 8
layout: documentation
meta:
  title: Déboguer les requêtes | Comment lire les logs HubRise
  description: Les codes d'erreur, statuts de commande et codes ref manquants ou incorrects présents dans les logs HubRise aident à comprendre la source du problème.
---

## Présentation générale

Dans certains cas, l'envoi d'une commande peut échouer. Le débogage des requêtes API dans le back-office permet de trouver l'origine de la défaillance.

S'il n'existe pas de stratégie unique permettant de déboguer tous les problèmes possibles, les suggestions suivantes constituent néanmoins un bon point de départ.

## Codes d'erreur

Chaque requête est associée à un code de réponse. Pour plus d'informations, voir [Code de réponse](/docs/hubrise-logs/json-requests-in-hubrise#code). Il s'agit du premier détail à vérifier pour détecter d'éventuelles erreurs.

Toute valeur différente de 200 peut indiquer qu'une requête n'a pas été correctement reçue, ce qui peut entraîner le rejet de la commande.

La liste suivante décrit les scénarios et stratégies de dépannage possibles pour résoudre ce problème.

### Erreur 422

Le code d'erreur 422 apparaît lorsqu'une requête a bien été envoyée, mais que son contenu n'est pas reconnu par le système destinataire.

Dans la plupart des cas, cette erreur signale un dysfonctionnement ou un mauvais paramétrage d'un système connecté à HubRise. Elle se produit, par exemple, lorsque le code ref du produit ou de l'offre contenu dans la requête n'est pas reconnu par le logiciel de caisse.

### Erreur 500

Le code d'erreur 500 est émis lorsque le serveur qui était censé recevoir la requête a rencontré une erreur interne non spécifiée. Dans ce cas, le traitement de la requête échoue et vous devez signaler cette erreur à l'équipe d'assistance concernée. Il peut s'agir soit de HubRise, soit de l'application connectée.

## Statut de commande

Les commandes transitent par une série de statuts différents au cours de leur cycle de vie. Parmi les valeurs normales, le statut **nouveau** est utilisé à la création d'une commande, et le statut **reçu** est utilisé pour signaler sa réception par le logiciel de caisse. Pour connaître la liste complète des valeurs possibles, reportez-vous à la [Documentation du développeur](/developers/api/orders#status).

Dans certains cas, le statut peut indiquer un problème affectant la commande. Le tableau suivant présente les valeurs d'erreur possibles.

| Valeur          | Description                                |
| --------------- | ------------------------------------------ |
| rejected        | La commande a été rejetée par la boutique. |
| cancelled       | La commande a été annulée par le client.   |
| delivery_failed | La commande n'a pas pu être livrée.        |

## Codes ref

Les codes ref doivent être correctement définis dans les applications connectées à HubRise. Un code ref erroné ou manquant peut entraîner des erreurs.

La liste suivante peut vous aider à identifier les problèmes éventuels.

1. Vérifiez que tous les types de service que vous fournissez comportent un code service_type_ref correct.
1. Vérifiez que tous les produits comportent un code sku_ref correct.
1. Vérifiez que tous les ingrédients et les garnitures comportent le code ref approprié. Dans certains cas, l'ajout et la suppression d'un ingrédient identique peuvent être associés à des codes ref distincts.
1. Vérifiez que tous les modes de paiement acceptés comportent le code ref approprié.
