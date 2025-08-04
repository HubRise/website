---
title: Associer les codes ref
path_override: associer-codes-ref
position: 5
layout: documentation
meta:
  title: Associer les codes ref | Zelty Bridge | HubRise
  description: Comment récupérer les codes ref depuis Zelty pour permettre la synchronisation de données avec d'autres applications connectées à HubRise.
---

Une fois votre logiciel de caisse Zelty connecté à HubRise, vous devez configurer vos autres applications connectées afin que les différents éléments des commandes soient correctement identifiés par Zelty.

Zelty identifie chaque élément d'une commande par un code ref numérique. Vous devez indiquer les codes ref fournis par Zelty dans vos autres applications, afin que les commandes puissent être réceptionnées.

Il y a deux façons de procéder :

- Vous pouvez exporter le catalogue Zelty vers HubRise, puis importer ce catalogue dans vos autres applications.
- Vous pouvez également faire une saisie manuelle des codes ref dans vos autres applications.

Seules certaines applications permettent l'import d'un catalogue depuis HubRise. Pour les autres, il faudra saisir manuellement les codes ref. Reportez-vous à la documentation correspondante sur notre [page Apps](/apps) pour vérifier.

## Exporter le catalogue {#export-catalog}

---

**REMARQUE IMPORTANTE :** Cette opération va écraser le catalogue HubRise connecté à Zelty.

---

Pour exporter un catalogue vers HubRise, consultez la page [Récupérer le catalogue](/apps/zelty-bridge/pull-catalog).

Une fois le catalogue exporté, vous devez l'importer dans vos autres applications connectées à HubRise. Pour effectuer cette opération, référez-vous à la documentation de ces applications sur le site de HubRise.

## Produits {#products}

Pour retrouver le code ref d'un produit dans Zelty, suivez ces étapes :

1. Dans le back-office Zelty, allez dans **La carte** > **Les produits**.
2. Sélectionnez l'article concerné.
3. Le code ref est l'identifiant numérique apparaissant dans l'URL de la page produit, par exemple `https://bo.zelty.fr/carte/edit/12345?redirectURI=`, où `12345` est le code ref du produit.

## Options {#options}

Les options dans HubRise correspondent aux valeurs d'options dans Zelty. Il n'est pas possible de récupérer le code ref d'une valeur d'option directement depuis Zelty. Vous devez donc exporter le catalogue Zelty vers HubRise, puis récupérer les codes ref dans HubRise, en utilisant par exemple [Catalog Manager](/apps/catalog-manager/overview).

## Promotions {#promotions}

Les promotions dans HubRise correspondent aux menus dans Zelty. Pour retrouver le code ref d'un menu, procédez de la même manière que pour les [produits](#products).

1. Dans le back-office Zelty, allez dans **La carte** > **Les menus**.
2. Sélectionnez le menu concerné.
3. Le code ref est l'identifiant numérique apparaissant dans l'URL de la page menu, par exemple `https://bo.zelty.fr/menus/edit/12345?redirectURI=`, où `12345` est le code ref du menu.

## Remises {#discounts}

Les remises dans HubRise correspondent aux promotions dans Zelty. Pour retrouver le code ref d'une remise :

1. Dans le back-office Zelty, allez dans **Les clients** > **Promotions**.
2. Sélectionnez la promotion concernée.
3. Le code ref est l'identifiant numérique visible dans l'URL de la page promotion, par exemple `https://bo.zelty.fr/coupons/edit/12345?redirectURI=`, où `12345` est le code ref de la promotion.

## Frais {#charges}

Les frais (livraison, service, etc.) doivent être créés comme des articles dans Zelty pour être compatibles avec HubRise. Pour retrouver leur code ref, suivez la même procédure que pour les [produits](#products).

## Méthodes de paiement {#payment-methods}

Pour retrouver le code ref d'une méthode de paiement :

1. Dans le back-office Zelty, allez dans **Configuration** > **Méthodes de paiement**.
2. Sélectionnez le moyen de paiement concerné.
3. Le code ref est l'identifiant numérique visible dans l'URL de la page méthode de paiement, par exemple `https://bo.zelty.fr/transaction-methods/edit/12345?redirectURI=`, où `12345` est le code ref de la méthode de paiement.

Alternativement, si Zelty Bridge est déjà connecté à Zelty, vous pouvez récupérer les codes ref des méthodes de paiement depuis la page **Statut** de Zelty Bridge, dans la section **Méthodes de paiement**. Cette section affiche les méthodes de paiement disponibles dans Zelty avec leurs codes ref correspondants. Voir aussi la [page Statut](/apps/zelty-bridge/user-interface#status).

## Types de service {#service-types}

Zelty reconnaît automatiquement les types de service standard de HubRise :

- `delivery` : livraison
- `collection` : à emporter
- `eat_in` : sur place

Ces types de service n'ont pas besoin de codes ref spécifiques dans Zelty. Cependant, pour la livraison, vous pouvez utiliser le code ref `LIV_PARTENAIRE` pour indiquer que la livraison est assurée par la plateforme partenaire et non par le restaurant.
