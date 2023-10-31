---
title: Envoyer le catalogue
path_override: envoi-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | Just Eat Flyt | HubRise
  description: Voir comment envoyer un catalogue de HubRise vers Just Eat, de quelle manière les articles et les options sont encodés, et quelles fonctionnalités sont intégrées.
---

Just Eat ne dispose pas d'un back-office permettant de remplir et personnaliser votre menu. Vous pouvez utiliser Just Eat Flyt Bridge pour envoyer votre catalogue HubRise dans Just Eat en un seul clic.

Vous pouvez également configurer la passerelle de manière à ce qu'elle envoie votre catalogue vers la plateforme chaque fois que celui-ci est mis à jour sur HubRise. Pour plus d'informations, voir la rubrique [Catalogue](/apps/just-eat-flyt/configuration#catalog).

Cette page explique comment envoyer votre catalogue et quelles informations sont envoyées à la plateforme.

## Recevoir un catalogue

Pour pouvoir mettre à jour votre menu dans Just Eat, vous devez préalablement avoir un catalogue dans HubRise. De nombreuses applications connectées à HubRise, y compris des logiciels de caisse, offrent la possibilité d'envoyer leur catalogue vers HubRise. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues](/docs/catalog).

## Envoi du catalogue {#push-catalog}

Une fois que votre catalogue a été alimenté sur HubRise, vous pouvez l'envoyer dans Just Eat en procédant comme suit.

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
1. Sélectionnez le point de vente relié à Just Eat.
1. Sélectionnez **Just Eat Flyt Bridge** dans la liste des applications connectées.
1. Dans Just Eat Flyt Bridge, cliquez sur l'onglet **Actions**, puis sélectionnez **Envoyer le catalogue**.

---

**REMARQUE IMPORTANTE :** en envoyant votre catalogue HubRise dans Just Eat, vous effacerez le menu Just Eat actuel. Cette action est irréversible.

---

## Référence technique

Les sections suivantes décrivent en détail la manière dont les catalogues HubRise sont mis en correspondance avec les menus Just Eat.

### Images

Les images que vous chargez sur Just Eat doivent répondre aux exigences suivantes :

- Orientation paysage (et non portrait ou format carré).
- Au moins 1 024 x 768 pixels au format 4:3.
- Format de fichier JPG ou PNG.

---

**REMARQUE IMPORTANTE :** Just Eat passe en revue toutes les nouvelles photos chargées sur ses sites. Après avoir inséré une image dans Just Eat, vous devez généralement compter entre deux et cinq jours avant que l'image n'apparaisse sur le menu en ligne. Si vos images ne respectent pas les directives, Just Eat vous invitera à les charger de nouveau.

---

### Catégories

Les catégories d'un catalogue HubRise sont mises en correspondance une à une avec les catégories de produits présentées sur Just Eat. La hiérarchie selon laquelle les catégories et les produits apparaissent dans HubRise est maintenue dans Just Eat.

Pour chaque catégorie, les champs HubRise envoyés à Just Eat sont les suivants :

- `name` : nom de la catégorie.
- `description` : description de la catégorie.

### Produits et skus

Les produits contenus dans le tableau `products` d'un catalogue HubRise peuvent être associés à plusieurs skus. Cette notion de produits et de skus n'est pas prise en charge dans Just Eat, où chaque sku est associée à un produit individuel. Pour plus d'informations sur les produits contenus dans les catalogues HubRise, voir la rubrique [Produits](/developers/api/catalogs#products) (en anglais).

Pour chaque objet `sku` contenu dans un produit, Just Eat Flyt Bridge envoie les informations suivantes dans Just Eat :

- `ref` : code ref de la référence sku, qui sera transmis dans les commandes.
- `name` : nom de la référence sku.
- `description` : description du produit générique.
- `price` : prix de la référence sku.
- `option_list_refs` : liste des options rattachées à la référence sku.
- `tags` : balises décrivant les caractéristiques et les restrictions du produit, telles que les allergènes ou la saveur épicée. Voir la rubrique [Balises de produits](#product-tags).
- `image` : adresse URL de l'image du produit parent.

Pour plus d'informations sur les références contenues dans les catalogues HubRise, voir la rubrique [Références SKU](/developers/api/catalogs#skus) (en anglais).

---

**REMARQUE IMPORTANTE :** les produits sans code ref ne sont pas envoyés dans Just Eat. Pour plus d'informations, voir [Pourquoi certains produits ne sont-ils pas envoyés vers Just Eat ?](/apps/just-eat-flyt/faqs/products-not-pushed).

---

### Balises de produits {#product-tags}

Le tableau ci-dessous énumère les balises qui peuvent être définies sur les produits.

| Balise                               | Description                    |
| ------------------------------------ | ------------------------------ |
| `alcoholic`                          | Produit contenant de l'alcool. |
| `spicy_1`                            | Légèrement épicé.              |
| `spicy_2`                            | Moyennement épicé.             |
| `spicy_3`                            | Très épicé.                    |
| `vegan`                              | Plat végétalien.               |
| `vegetarian`                         | Plat végétarien.               |
| `allergen_celery`                    | Contient l'allergène indiqué.  |
| `allergen_crustaceans`               | Contient l'allergène indiqué.  |
| `allergen_eggs`                      | Contient l'allergène indiqué.  |
| `allergen_fish`                      | Contient l'allergène indiqué.  |
| `allergen_gluten`                    | Contient l'allergène indiqué.  |
| `allergen_lupin`                     | Contient l'allergène indiqué.  |
| `allergen_milk`                      | Contient l'allergène indiqué.  |
| `allergen_molluscs`                  | Contient l'allergène indiqué.  |
| `allergen_mustard`                   | Contient l'allergène indiqué.  |
| `allergen_nuts`                      | Contient l'allergène indiqué.  |
| `allergen_peanuts`                   | Contient l'allergène indiqué.  |
| `allergen_sesame_seeds`              | Contient l'allergène indiqué.  |
| `allergen_soybeans`                  | Contient l'allergène indiqué.  |
| `allergen_sulphur_dioxide_sulphites` | Contient l'allergène indiqué.  |

### Options

Pour chaque liste d'options contenue dans le catalogue, Just Eat Flyt Bridge envoie les informations suivantes dans Just Eat :

- `name` : nom de la liste d'options.
- `type` : nombre d'options pouvant être sélectionnées dans la liste : soit `single` (unique), soit `multiple`.

Pour chaque option contenue dans une liste, les informations envoyées à Just Eat sont les suivantes :

- `ref` : code ref de l'option.
- `name` : nom de l'option.
- `price` : prix d'une option unique.

### Promotions et remises

Les promotions et les remises ne sont pas prises en charge dans Just Eat. Les promotions et remises présentes dans votre catalogue HubRise sont donc ignorées et ne sont pas reçues dans Just Eat.

### Disponibilité

Chaque fois que vous envoyez votre catalogue HubRise dans Just Eat, vous actualisez également la disponibilité de votre menu, suivant les valeurs que vous avez définies sur la [page de configuration](/apps/just-eat-flyt/configuration#catalog) de Just Eat Flyt Bridge.
