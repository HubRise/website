---
title: Envoyer des commandes
path_override: envoyer-commandes
position: 6
layout: documentation
meta:
  title: Envoyer des commandes | Zelty Bridge | HubRise
  description: Découvrez les détails techniques sur l'envoi des commandes de Zelty Bridge vers Zelty, et quels champs sont transmis ou non.
---

En connectant Zelty Bridge à HubRise, les commandes sont directement transmises à votre logiciel de caisse Zelty depuis toutes les solutions connectées à votre compte HubRise : plateformes de livraison de repas, commandes en ligne, bornes de commande, et bien plus encore.

Cette page décrit les informations envoyées par HubRise à votre logiciel de caisse Zelty.

## Articles {#items-and-options}

### Encodage des articles

Zelty Bridge transmet à votre logiciel de caisse les informations suivantes sur les articles de la commande :

- `sku_ref` : code ref de l'article, doit être numérique et correspondre à un produit dans Zelty.
- `price` : prix unitaire de l'article
- `quantity` : quantité d'articles dans la commande. Zelty gère la quantité en répétant l'article dans la commande. Par exemple, une commande de 3 pizzas identiques apparaîtra comme 3 lignes distinctes dans Zelty.
- `customer_notes` : notes de préparation spécifiques à l'article
- `options` : options et modificateurs associés à l'article

Les articles sans code ref ou avec des codes ref non numériques sont ignorés.

Notez que le nom du produit (`product_name`) et celui de la SKU (`sku_name`) ne sont pas transmis à Zelty, qui utilise uniquement le code ref pour identifier les articles.

Les articles avec un code ref valide mais inconnu dans le catalogue Zelty génèrent une erreur de validation : la commande n'apparaîtra pas dans Zelty, et un message d'erreur sera affiché sur la commande dans le back office HubRise.

### Encodage des options

Pour chaque option ou modificateur de la commande, Zelty Bridge transmet :

- `ref` : code ref de l'option, doit être numérique et correspondre à une valeur d'option dans Zelty.
- `price` : prix unitaire de l'option
- `quantity` : quantité de l'option

Les options sans code ref ou avec des codes ref non numériques sont ignorées.

Comme pour les articles, les options sont transmises à Zelty sans nom, seul le code ref étant utilisé pour les identifier. Si le code ref de l'option n'existe pas dans le catalogue Zelty, la commande sera rejetée, et une erreur sera affichée dans le back office HubRise.

## Promotions

Les promotions (deals) dans HubRise sont envoyée comme des menus à Zelty :

- Le menu doit avoir un code ref numérique (`ref`). Les menus sans code ref ou avec des codes ref non numériques sont ignorés.
- Chaque ligne de promotion dans HubRise est associée à une rubrique de menu dans Zelty. Si le menu contient 3 rubriques dans Zelty, la promotion doit contenir autant de lignes dans HubRise. Les lignes de promotion HubRise sont associées aux rubriques de menu Zelty dans l'ordre où elles apparaissent.

Si le code ref du menu n'existe pas dans le catalogue Zelty, la commande sera rejetée, et une erreur sera affichée dans le back office HubRise.

## Frais additionnels

Les frais dans HubRise (livraison, service, etc.) sont envoyés comme des articles dans Zelty :

- `ref` : code ref, doit être numérique et correspondre à un article dans Zelty.
- `price` : montant

Les frais sans code ref numérique sont ignorés.

## Remises

Zelty Bridge transmet les remises de la commande HubRise comme suit :

- `ref` : code ref de la remise, doit être numérique et correspondre à une remise dans Zelty.
- `amount` : montant de la remise

Contrairement à HubRise, Zelty n'accepte qu'une seule remise par commande. Si plusieurs remises sont appliquées dans HubRise :

- Seul le champ `ref` de la première remise est pris en compte
- Le montant envoyé est la somme des montants de toutes les remises

## Paiements

Zelty Bridge transmet les informations de paiement de la commande HubRise :

- `ref` : code ref du mode de paiement, doit être numérique et correspondre à une méthode de paiement dans Zelty.
- `amount` : montant du paiement

Les paiements sans code ref ou avec un code ref non numérique sont ignorés.

### Gestion des paiements multiples

Zelty prend en charge les paiements multiples. Chaque paiement de la commande HubRise est transmis séparément.

## Statuts de commande

### Réception des commandes

Lorsqu'une commande est reçue dans Zelty, le système informe HubRise en envoyant l'un des statuts suivants :

- `accepted` : la commande a été acceptée par Zelty
- `rejected` : la commande a été rejetée (code ref manquant, erreur de format, etc.)

Le rejet peut survenir pour plusieurs raisons :

- Articles avec des codes ref manquants ou non numériques
- Options avec des identifiants invalides
- Informations client incomplètes pour une livraison

### Mise à jour des statuts

Zelty peut envoyer des mises à jour de statut ultérieures à HubRise, selon la configuration du système et le workflow du restaurant.

## Types de service

Zelty prend en charge les trois valeurs possibles de `service_type` dans la commande HubRise : `delivery`, `collection` et `eat_in`.

Pour les commandes en livraison, Zelty Bridge détermine le type de livraison de la manière suivante :

- Si le `service_type_ref` de la commande est `LIV_PARTENAIRE`, la commande est considérée comme livrée par un partenaire.
- Si l'adresse de livraison est présente et que l'ID client est renseigné, la commande est considérée comme livrée par le restaurant.
- Si aucune de ces conditions n'est remplie, la commande est considérée comme livrée par un partenaire.

## Informations client

### Client enregistré

Si le client a un identifiant HubRise (`customer.id`), Zelty Bridge :

1. Crée ou met à jour le client dans Zelty
2. Associe la commande au client Zelty
3. Crée l'adresse de livraison si nécessaire

Les informations client synchronisées incluent :

- Nom et prénom
- Nom de la société
- Numéro de téléphone (au format E.164)
- Adresse e-mail
- Préférences marketing (SMS et e-mail)
- Date de naissance
- Numéro de carte de fidélité

### Client invité

Pour les commandes sans identifiant client, Zelty Bridge transmet :

- `first_name` : prénom et nom concaténés
- `phone` : numéro de téléphone et code d'accès séparés par " / "
- `address` : adresse de livraison complète (pour les livraisons uniquement)

### Gestion des adresses

Zelty Bridge extrait automatiquement le numéro de rue du début de l'adresse (ex: "12 bis" dans "12 bis rue de la Paix"). L'adresse est décomposée en :

- `street_num` : numéro de rue
- `street` : nom de la rue
- `zip_code` : code postal
- `city` : ville
- `address_more` : complément d'adresse et notes de livraison
- `location` : coordonnées GPS [latitude, longitude]

## Informations supplémentaires

### Identifiant de commande

Zelty Bridge génère un identifiant unique pour chaque commande HubRise :

- Format : `hr_id_[ID_HUBRISE]`
- Cet identifiant permet de tracer les commandes créées via HubRise

### Autres champs transmis

- `display_id` : code de collection de la commande
- `due_date` : heure attendue de la commande
- `comment` : notes client sur la commande
- `table` : nom de la table (pour les commandes sur place)
- `source` : origine de la commande (ubereats, deliveroo, justeat, web, mobile, kiosk, pos)
- `virtual_brand_name` : nom de la marque virtuelle (nom de la connexion HubRise)

### Informations de taxe

Si disponible, le taux de taxe (`tax_rate`) est transmis pour chaque article. Cela permet à Zelty de calculer correctement les montants HT et TTC.
