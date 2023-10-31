---
title: Erreur de différence de prix
path_override: erreur-de-difference-de-prix
position: 6
layout: documentation
meta:
  title: Résoudre l'erreur de différence de prix | Lightspeed Restaurant | HubRise
  description: Instructions de résolution d'erreurs dues à des différences entre le montant total payé et le prix total des articles dans une commande Lightspeed.
---

Cette page décrit les scénarios possibles lorsque le montant total payé par le client ne correspond pas au prix total des articles calculé par Lightspeed Restaurant.

## Montant du paiement supérieur au montant dû

Lightspeed recalcule le montant dû en ajoutant le prix de tous les articles de la commande. Lorsque le montant total du paiement dans la commande est supérieur au montant dû, Lightspeed rejette la commande avec un message d'erreur similaire à celui-ci :

```json
{
  "status": "FAILURE",
  "reason": "the payment amount is greater than the amount due",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

Cette erreur est généralement due à :

- Des codes ref manquants dans la commande HubRise.
- Des prix qui ne sont pas arrondis conformément aux règles de la devise.

### Codes ref manquants

Les articles sans code ref sont [ignorés par Lightspeed Restaurant Bridge](/apps/lightspeed-restaurant/push-orders#items-and-options) et ne sont pas envoyés au logiciel de caisse, ce qui provoque une erreur. Pour résoudre le problème, assurez-vous que tous les articles disponibles sur la plateforme de commande en ligne ou de livraison de repas ont un code ref.

### Erreurs d'arrondi des prix

Les prix doivent être arrondis conformément aux règles de la devise. Par exemple, pour la devise CHF (Suisse), le prix doit être arrondi au 0,05 CHF le plus proche. Si le prix d'un article dans HubRise n'est pas un multiple de 0,05 CHF, Lightspeed calcule un montant dû différent du montant payé, ce qui génère une erreur.

## Montant du paiement inférieur au montant dû

Si le montant total du paiement dans la commande est inférieur au montant prévu, Lightspeed accepte la commande. Celle-ci reste cependant ouverte pour le paiement dans le logiciel de caisse.

Cette erreur se produit généralement lorsqu'une remise présente dans la commande n'a pas de code ref. Le montant payé par le client, qui inclut la remise, est donc inférieur au montant calculé par Lightspeed, qui ne l'inclut pas.

Pour résoudre le problème, assurez-vous que toutes les remises disponibles sur la plateforme de commande en ligne ou de livraison de repas ont un code ref.
