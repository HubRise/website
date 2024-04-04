---
title: Envoyer des commandes
path_override: envoyer-commandes
position: 9
layout: documentation
meta:
  title: Envoyer des commandes | Popina | HubRise
  description: Découvrez les détails techniques sur l'envoi des commandes de HubRise à Popina, et les champs transmis ou non.
---

HubRise peut envoyer les commandes de différentes solutions connectées directement dans votre logiciel de caisse Popina. Pour cela, il vous suffit de connecter Popina à HubRise. Aucune configuration supplémentaire n'est requise.

Cette page détaille les informations envoyées par HubRise à votre logiciel de caisse.

## Articles et options 

Les solutions connectées à HubRise envoient à votre logiciel de caisse des informations complètes sur les articles et les options, y compris le nom, le code ref du produit, la quantité et le prix.

Chaque article envoyé sur Popina doit avoir un code ref pour que votre logiciel de caisse puisse les traiter correctement, en applicant le bon taux de TVA, en le déduisant des inventaires et en les incluant dans les analyses de ventes par exemple. Les commandes contenant des articles avec des codes ref incorrects ou manquants seront prises en charge par le logiciel de caisse, mais ces articles ne seront pas traités correctement. 

## Statuts de commande

Lorsqu'une commande est reçue sur Popina il vous est possible de l'accepter `ACCEPTED` ou de l'annuler `CANCELLED`. 

Aucun autre statut de commande n'est pris en charge par Popina.

### Gérer les différences de prix

Lorsque le montant total du paiement ne correspond pas au prix total de la commande calculé par Popina, votre logiciel de caisse accepte la commande au prix inviqué par la solution tiers.

## Types de service

Popina n'exige pas que chaque type de service (livraison, à emporter, sur place) soit défini.

## Informations client

Les informations complètes sur le client, si elles sont disponibles, y compris le nom, l'e-mail et l'adresse de livraison sont envoyées à Popina.
