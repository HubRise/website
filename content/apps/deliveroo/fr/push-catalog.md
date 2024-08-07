---
title: Envoyer le catalogue
path_override: envoi-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | Deliveroo | HubRise
  description: Découvrez comment envoyer un catalogue de HubRise vers Deliveroo, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

Avec Deliveroo Bridge, vous pouvez envoyer votre catalogue HubRise vers votre restaurant Deliveroo en un seul clic.

Vous pouvez également configurer le bridge de manière à envoyer votre catalogue vers Deliveroo à chaque fois qu'il est modifié sur HubRise. Pour plus d'informations, voir [Catalogue](/apps/deliveroo/configuration#catalog).

Cette page explique comment envoyer votre catalogue et quelles informations sont envoyées à Deliveroo.

## Alimenter un catalogue HubRise

Pour mettre à jour votre menu Deliveroo, vous devez préalablement avoir un catalogue dans HubRise. De nombreuses applications connectées à HubRise, notamment les logiciels de caisse, peuvent envoyer leur catalogue vers HubRise. Pour le vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Vous pouvez aussi alimenter un catalogue HubRise en récupérant un menu existant depuis Deliveroo ou Uber Eats. Pour plus d'informations, consultez ces liens :

- [Récupérer un catalogue depuis Deliveroo](/apps/deliveroo/pull-catalog)
- [Récupérer un catalogue depuis Uber Eats](/apps/uber-eats/pull-catalog)

## Envoi manuel du catalogue

Une fois que vous avez alimenté votre catalogue sur HubRise et assigné des codes ref à tous les produits et options, vous pouvez l'envoyer manuellement vers Deliveroo en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
1. Sélectionnez le compte HubRise et le point de vente connecté à votre restaurant Deliveroo.
1. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Deliveroo Bridge** dans la liste des applications connectées.
1. Dans Deliveroo Bridge, cliquez sur l'onglet **Actions**, puis sélectionnez **Envoyer le catalogue**.
1. Vérifiez votre menu en ligne sur la plateforme Deliveroo.

---

**REMARQUE IMPORTANTE :** L'envoi de votre catalogue HubRise vers Deliveroo effacera le menu actuel sur votre restaurant Deliveroo et remplacera la **Description du menu** et la **Bannière du menu** par ceux définis dans la page **Configuration**. Cette action est irréversible. L'envoi du catalogue ne fonctionnera pas si des codes ref sont manquants.

---

## Envoi automatique du catalogue

Deliveroo Bridge peut envoyer automatiquement votre catalogue HubRise dans Deliveroo à chaque modification de celui-ci. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
1. Sélectionnez le compte HubRise et le point de vente connecté à votre restaurant Deliveroo.
1. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Deliveroo Bridge** dans la liste des applications connectées.
1. Dans Deliveroo Bridge, sélectionnez l'onglet **Configuration**.
1. Dans la rubrique **Catalogue**, cochez la case **Activer l'envoi automatique du catalogue**.
1. Cliquez sur **Enregistrer**.

## Informations envoyées à Deliveroo {#information-sent}

Les rubriques suivantes expliquent en détail comment votre catalogue HubRise est transmis à Deliveroo.

### Description du menu et de la bannière

Vous pouvez saisir la description du menu et télécharger la bannière de menu depuis la page [Configuration](/apps/deliveroo/configuration).

Deliveroo Bridge envoie ces informations à Deliveroo à chaque envoi du catalogue.

### Catégories

Deliveroo Bridge établit une correspondance entre les catégories HubRise et les catégories de produits sur Deliveroo.

Le nom de la catégorie, son code ref et sa description sont envoyés à Deliveroo.

### Produits et SKU

Pour les produits à SKU unique, Deliveroo Bridge envoie les informations suivantes :

- Nom de la SKU
- Code ref de la SKU
- Description
- Images
- Prix
- Options

Pour les produits ayant plusieurs SKU, Deliveroo Bridge crée un produit avec un modificateur pour chaque SKU. Les options de chaque SKU sont envoyées dans une liste de modificateurs située en-dessous du modificateur de la SKU.

### Liste d'options et options

Deliveroo Bridge envoie les listes d'options et les options telles quelles à Deliveroo.

### Promotions

Deliveroo Bridge envoie les promotions HubRise sous forme de produits avec des modificateurs.

### Images

Deliveroo exige que les images soient au format 1200x800 pixels.

## Référence technique

Les sections suivantes décrivent en détail comment Deliveroo Bridge convertit les champs sur HubRise en champs sur Deliveroo.

### Catégories

Pour chaque catégorie, Deliveroo Bridge envoie les champs HubRise suivants à Deliveroo :

- `name` : nom de la catégorie.
- `ref` : code ref de la catégorie.
- `description` : description de la catégorie.

L'ordre d'affichage des catégories et des produits dans HubRise est conservé dans Deliveroo.

### Produits et SKU

Les produits ont une ou plusieurs SKU. Pour chaque produit avec plusieurs SKU, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `ref` : la valeur `MULTISKU` est utilisée pour tous les produits.
- `name` : nom du produit.
- `description` : description du produit.
- `price` : prix minimum de tous les SKU.
- `tags` : balises décrivant les caractéristiques et les restrictions du produit, telles que les allergènes ou la saveur épicée. Voir [Tags produit](#product-tags).
- `image` : adresse URL de la photo du produit.

La liste de SKU est jointe au produit sous forme d'une table de modificateurs.

Pour chaque `sku` d'un produit, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `ref` : code ref de la référence SKU, qui sera transmis dans les commandes.
- `name` : nom de la référence SKU.
- `price` : différence éventuelle de prix avec le produit principal.
- `option_list_refs` : liste des options rattachées à la SKU.

Pour plus d'informations sur les SKU dans les catalogues HubRise, voir [Skus](/developers/api/catalogs#skus) (en anglais).

### Tags produit {#product-tags}

Le tableau ci-dessous énumère les tags qui peuvent être définis sur les produits.

| Tag                                  | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| `alcoholic`                          | Produit contenant de l'alcool.                           |
| `deal_only`                          | Ne peut être commandé que dans le cadre d'une promotion. |
| `allergen_celery`                    | Contient l'allergène indiqué.                            |
| `allergen_crustaceans`               | Contient l'allergène indiqué.                            |
| `allergen_eggs`                      | Contient l'allergène indiqué.                            |
| `allergen_fish`                      | Contient l'allergène indiqué.                            |
| `allergen_gluten`                    | Contient l'allergène indiqué.                            |
| `allergen_lupin`                     | Contient l'allergène indiqué.                            |
| `allergen_milk`                      | Contient l'allergène indiqué.                            |
| `allergen_molluscs`                  | Contient l'allergène indiqué.                            |
| `allergen_mustard`                   | Contient l'allergène indiqué.                            |
| `allergen_nuts`                      | Contient l'allergène indiqué.                            |
| `allergen_peanuts`                   | Contient l'allergène indiqué.                            |
| `allergen_sesame_seeds`              | Contient l'allergène indiqué.                            |
| `allergen_soybeans`                  | Contient l'allergène indiqué.                            |
| `allergen_sulphur_dioxide_sulphites` | Contient l'allergène indiqué.                            |
| `deposit_cc`                         | Nécessite un acompte. `cc` est un montant en centimes.   |

Si un produit ne contient aucun allergène, Deliveroo Bridge ajoute automatiquement le tag `no_allergens`.

### Options

Pour chaque liste d'options du catalogue, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `name` : nom de la liste d'options.
- `min_selections` : nombre minimum d'options que les clients peuvent sélectionner.
- `max_selections` : nombre maximum d'options que les clients peuvent sélectionner.

Pour chaque option d'une liste d'options, Deliveroo Bridge envoie les informations suivantes à Deliveroo :

- `ref` : code ref de l'option.
- `name` : nom de l'option.
- `price` : prix d'une option unique.

### Promotions

Pour chaque promotion du catalogue, Deliveroo Bridge crée un produit Deliveroo avec les détails suivants :

- `name` : le nom de la promotion devient le nom du produit.
- `category_ref` : si la promotion n'a pas de catégorie, Deliveroo Bridge crée une catégorie par défaut dans Deliveroo appelée "Offres".
- `ref` : le code ref de la promotion devient le code ref du produit, précédé de `DEAL-`. Par exemple, pour une promotion avec le code ref `abc123`, Deliveroo Bridge crée un produit Deliveroo avec le PLU `DEAL-abc123`.
- `lines` : pour chaque objet du tableau, Deliveroo Bridge crée une liste de modificateurs, avec `lines.name` pour nom.
