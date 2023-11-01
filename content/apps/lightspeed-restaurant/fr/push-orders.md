---
title: Envoyer des commandes
path_override: envoyer-commandes
position: 9
layout: documentation
meta:
  title: Envoyer des commandes | Lightspeed Restaurant | HubRise
  description: Découvrez les détails techniques sur l'envoi des commandes de HubRise à Lightspeed, et les champs transmis ou non.
---

HubRise peut envoyer des commandes directement dans votre logiciel de caisse Lightspeed Restaurant depuis différentes solutions connectées. Pour cela, il vous suffit de connecter Lightspeed Restaurant Bridge à HubRise. Aucune configuration supplémentaire n'est requise.

Cette page détaille les informations envoyées par HubRise à votre logiciel de caisse.

## Articles et options {#items-and-options}

Lightspeed Restaurant Bridge envoie à votre logiciel de caisse des informations complètes sur les articles et les options, y compris le nom, le code ref du produit, la quantité et le prix.

Lightspeed Restaurant Bridge convertit les options avec un code ref qui commence par `+` en instructions de production. Notez qu'aucun prix n'est associé aux instructions de production. L'ajout d'un prix dans une application connectée peut générer des [erreurs liées à une différence de prix](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors).

Chaque article sur Lightspeed doit avoir un code ref. Les commandes contenant des articles avec des codes ref incorrects ou manquants sont rejetées par le logiciel de caisse. Ainsi, lorsqu'il envoie une commande au logiciel de caisse, Lightspeed Restaurant Bridge ignore tous les articles sans code ref.

## Statuts de commande

Lorsqu'une commande est reçue ou rejetée, Lightspeed en informe HubRise en envoyant respectivement les statuts `SUCCESS` et `FAILURE`.

De plus, Lightspeed avertit HubRise lorsqu'une commande est prête à être récupérée.

## Paiements

Lightspeed ne prend pas en charge les paiements fractionnés. Par conséquent, lorsqu'une commande contient plusieurs paiements, Lightspeed Restaurant Bridge envoie seulement le premier paiement de la liste, et les autres sont supprimés.

Le code ref du paiement est utilisé pour associer la commande HubRise au mode de paiement correct dans Lightspeed. Lightspeed Restaurant Bridge ignore les paiements sans code ref.

Pour apprendre comment vérifier les codes ref des modes de paiement disponibles dans votre back-office Lightspeed, consultez [Associer les codes ref](/apps/lightspeed-restaurant/map-ref-codes#payment-methods).

### Gérer les différences de prix

Lorsque le montant total du paiement ne correspond pas au prix total de la commande calculé par Lightspeed Restaurant, deux scénarios peuvent se produire :

- Si le montant total du paiement est supérieur au montant prévu, Lightspeed rejette la commande.
- Si le montant total du paiement est inférieur au montant prévu, Lightspeed accepte la commande. Celle-ci reste cependant ouverte pour le paiement dans le logiciel de caisse.

---

**FAQ associée** : [Comment résoudre les erreurs liées à une différence de prix ?](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors)

---

## Types de service

Lightspeed Restaurant exige que chaque type de service (livraison, à emporter, sur place) soit défini comme un profil de compte.

Le code ref du type de service est utilisé pour associer la commande HubRise au profil de compte correct dans Lightspeed.

Pour apprendre comment vérifier les codes ref des types de service disponibles dans votre back-office Lightspeed, consultez [Associer les codes ref](/apps/lightspeed-restaurant/map-ref-codes#service-types).

## Informations client

Lightspeed Restaurant Bridge envoie à Lightspeed les informations complètes sur le client, si elles sont disponibles, y compris le nom, l'e-mail et l'adresse de livraison.

Si ces informations ne sont pas disponibles, Lightspeed Restaurant Bridge crée un client anonyme portant le prénom `Anonymous`.
