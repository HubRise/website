---
title: Associer les codes ref
path_override: associer-codes-ref
position: 5
layout: documentation
meta:
  title: Associer les codes ref | Tick'Eat | HubRise
  description: Comment récupérer les codes ref depuis Tick'Eat pour permettre la synchronisation de données avec d'autres applications connectées à HubRise.
---

Une fois votre logiciel de caisse Tick'Eat connecté à HubRise, vous devez configurer vos autres applications connectées, afin que les différents éléments présents dans les commandes soient bien identifiés par Tick'Eat.

Tick'Eat identifie chaque élément d'une commande par un code ref. Vous devez indiquer les codes ref fournis par Tick'Eat dans vos autres applications, afin que les commandes puissent être réceptionnées.

Il y a deux façons de procéder :

- Vous pouvez exporter le catalogue Tick'Eat vers HubRise, puis importer ce catalogue dans vos autres applications.
- Ou vous pouvez saisir manuellement les codes ref dans vos autres applications.

Seules certaines applications permettent l'import d'un catalogue depuis HubRise. Pour les autres, il faudra saisir manuellement les codes ref.

## Exporter le catalogue {#export-catalog}

---

**REMARQUE IMPORTANTE :** Cette opération va écraser le catalogue HubRise connecté à Tick'Eat.

---

Pour exporter manuellement un catalogue vers HubRise, suivez les étapes suivantes :

1. Depuis le back-office de Tick'Eat, cliquez sur l'icône de catalogue représentée par un menu.
2. Identifiez le catalogue à exporter.
3. Vérifiez que **HubRise** apparaît dans les connecteurs associés au catalogue. Si ce n'est pas le cas, cliquez sur l'icône d'édition en forme de crayon, puis ajoutez le connecteur HubRise et cliquez sur **Valider**. Si le connecteur HubRise n'est pas visible, contactez le support de Tick'Eat pour l'ajouter.
4. En face du catalogue, cliquez sur l'icône en forme de flèche vers la droite, puis confirmez en cliquant sur **Publier**.

Vous devez maintenant importer le catalogue HubRise dans vos autres applications connectées à HubRise. Pour effectuer cette opération, référez-vous à la documentation de ces applications sur le site de HubRise.

## Produits {#products}

Pour retrouver le code ref d'un produit, suivez ces étapes :

1. Depuis le back-office de Tick'Eat, cliquez sur l'icône de produits, représentée par une icône de hamburger.
2. Sélectionnez l'onglet **Produits**.
3. Cliquez sur le produit souhaité.
4. Le code ref est affiché à droite du libellé **Ref**.

## SKUs

Les SKUs dans HubRise correspondent aux variations - aussi appelées déclinaisons - dans Tick'Eat.

Le code ref d'une SKU n'est pas visible dans le back-office de Tick'Eat. Pour le récupérer, vous devez [exporter le catalogue](#export-catalog), puis utiliser l'application gratuite [Catalog Manager](/apps/catalog-manager/overview).

## Options

Les options dans HubRise sont des produits dans Tick'Eat. Pour retrouver le code ref d'une option, procédez comme pour les [produits](#products).

Le terme **Option** dans Tick'Eat correspond à une liste d'option dans HubRise.

## Frais

Les frais de livraison ont le code ref `delivery_fees` dans HubRise.

Les autres frais, tels que les frais de service ou les pourboires, sont des produits dans Tick'Eat. Pour obtenir le code ref de ces frais, procédez comme pour les [produits](#products).

## Promotions

Les promotions dans HubRise sont les offres spéciales qui s'appliquent à certains articles. Les promotions n'ont pas de code ref dans Tick'Eat : elles sont identifiées par leur nom.

## Remises

Les remises dans HubRise sont les offres spéciales qui s'appliquent à l'ensemble de la commande. Les remises n'ont pas de code ref dans Tick'Eat : elles sont identifiées par leur nom.

## Méthodes de paiement

Les méthodes de paiement dans HubRise correspondent aux moyens de paiement dans Tick'Eat. Pour retrouver le code ref d'une méthode de paiement, suivez ces étapes :

1. Depuis le back-office de Tick'Eat, cliquez sur l'icône de configuration représentée par une roue dentée.
1. Cliquez sur **Moyens de paiement**.
1. Cliquez sur le moyen de paiement souhaité.
1. Le code ref est affiché à droite du libellé **Ref**.

## Types de service

Les types de service dans HubRise indiquent l'origine d'une commande, ou la manière dont une commande doit être produite ou livrée. Tick'Eat reconnaît les codes ref des types de service suivants :

- `Tickeat_os` : Commande passée depuis la caisse Tick'Eat.
- `website` : Commande passée sur le site web du marchand.
- `uber_eats` : Commande Uber Eats.
- `just_eat` : Commande Just Eat.
- `deliveroo` : Commande Deliveroo.

Si une commande n'indique pas de code ref de type de service, Tick'Eat utilise `website` par défaut.
