---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Push the Catalog | Just Eat Flyt | HubRise
  description: Find out how to push a catalog from HubRise to the Just Eat platform, how items and options are encoded, and which features are supported.
---

---

**IMPORTANT NOTE:** Once HubRise is connected, you should always update your menu through HubRise. If you ask Just Eat support to update it, the connection will be broken, and you will stop receiving orders. If this happens, simply proceed with a Manual Catalog Push to restore the connection.

---

Just Eat ne dispose pas d'un back-office permettant de remplir et personnaliser votre menu. Vous pouvez utiliser Just Eat Flyt Bridge pour envoyer votre catalogue HubRise dans Just Eat en un seul clic.

Vous pouvez également configurer la passerelle de manière à ce qu'elle envoie votre catalogue vers la plateforme chaque fois que celui-ci est mis à jour sur HubRise. For more information, see [Catalog](/apps/just-eat-flyt/configuration#catalog).

Cette page explique comment envoyer votre catalogue et quelles informations sont envoyées à la plateforme.

## Alimenter un catalogue HubRise

To update your menu in Just Eat, you should have a HubRise catalog first. De nombreuses applications connectées à HubRise, notamment les logiciels de caisse, peuvent envoyer leur catalogue vers HubRise. Pour vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Vous pouvez aussi alimenter un catalogue HubRise en récupérant un menu existant depuis Deliveroo ou Uber Eats. Pour plus d'informations, consultez ces liens :

- [Pull a Catalog from Deliveroo](/apps/deliveroo/pull-catalog)
- [Pull a Catalog from Uber Eats](/apps/uber-eats/pull-catalog)

## Envoi manuel du catalogue

Once your catalog is populated on HubRise, you can push it manually to your Just Eat store by following these steps:

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Select the HubRise account and location connected with your Just Eat store.
3. Open the **CONNECTIONS** page, then select **Just Eat Flyt Bridge** from the list of connected apps.
4. In Just Eat Flyt Bridge, select the **Actions** tab, then click **Push catalog**.
5. Check your Just Eat online menu.

---

**IMPORTANT NOTE:** Pushing your HubRise catalog into Just Eat will erase the current menu on your Just Eat store. A catalog push will also update your Just Eat **Opening hours** settings as defined in the Just Eat Flyt Bridge **Configuration** page. Cette action est irréversible.

---

## Envoi automatique du catalogue

Just Eat Flyt Bridge can automatically push your HubRise catalog into Just Eat every time it is updated. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Select the HubRise account and location connected with your Just Eat store.
3. Open the **CONNECTIONS** page, then select **Just Eat Flyt Bridge** from the list of connected apps.
4. In Just Eat Flyt Bridge, select the **Configuration** tab.
5. In the **Catalog** section, tick **Enable automatic catalog push**.
6. Cliquez sur **Enregistrer**.

## Référence technique

Les sections suivantes décrivent en détail la manière dont les catalogues HubRise sont mis en correspondance avec les menus Just Eat.

### Images

Les images que vous chargez sur Just Eat doivent répondre aux exigences suivantes :

- Orientation paysage (et non portrait ou format carré).
- Au moins 1 024 x 768 pixels au format 4:3.
- Format de fichier JPG ou PNG.

---

**IMPORTANT NOTE:** Just Eat reviews all new pictures uploaded to their stores. Après avoir inséré une image dans Just Eat, vous devez généralement compter entre deux et cinq jours avant que l'image n'apparaisse sur le menu en ligne. Si vos images ne respectent pas les directives, Just Eat vous invitera à les charger de nouveau.

---

### Catégories

Les catégories d'un catalogue HubRise sont mises en correspondance une à une avec les catégories de produits présentées sur Just Eat.
La hiérarchie selon laquelle les catégories et les produits apparaissent dans HubRise est maintenue dans Just Eat.

For every category, the following HubRise fields are pushed into Just Eat:

- `name` : nom de la catégorie
- `description` : description de la catégorie

### Produits et SKU

Products in the `products` array of a HubRise catalog can have several skus. Cette notion de produits et de skus n'est pas prise en charge dans Just Eat, où chaque sku est associée à un produit individuel. For more information about products in HubRise, see the [Products](/developers/api/catalogs#products) section of our API documentation.

Emojis are not supported in Just Eat. If you use emojis in your HubRise catalog, they will be removed when pushed to Just Eat.

For every `sku` object in a product, Just Eat Flyt Bridge pushes the following information into Just Eat:

- `ref` : code ref de la SKU, qui sera transmis dans les commandes
- `name` : nom de la SKU
- `description`: The description of the parent product
- `price` : prix de la SKU
- `option_list_refs`: The list of options attached to the sku
- `tags`: Tags describing the characteristics and restrictions of the product, such as allergens or spiciness. See [Product Tags](#product-tags).
- `image`: The URL of the image of the parent product

For more information about skus in the HubRise catalog, see the [Skus](/developers/api/catalogs#skus) section of our API documentation.

---

**IMPORTANT NOTE:** Products without a ref code are not pushed to Just Eat. For more information, see [Why Are Some Products Not Exported](/apps/just-eat-flyt/faqs/products-not-pushed).

---

### Product Tags {#product-tags}

Le tableau ci-dessous énumère les balises qui peuvent être définies sur les produits.

| Tag                                  | Description                                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------- |
| `alcoholic`                          | Produit contenant de l'alcool.                                  |
| `deal_only`                          | Can only be ordered as part of a deal.                          |
| `spicy_1`                            | Légèrement épicé.                                               |
| `spicy_2`                            | Moyennement épicé.                                              |
| `spicy_3`                            | Très épicé.                                                     |
| `vegan`                              | Plat végétalien.                                                |
| `vegetarian`                         | Plat végétarien.                                                |
| `allergen_celery`                    | Contient l'allergène indiqué.                                   |
| `allergen_crustaceans`               | Contient l'allergène indiqué.                                   |
| `allergen_eggs`                      | Contient l'allergène indiqué.                                   |
| `allergen_fish`                      | Contient l'allergène indiqué.                                   |
| `allergen_gluten`                    | Contient l'allergène indiqué.                                   |
| `allergen_lupin`                     | Contient l'allergène indiqué.                                   |
| `allergen_milk`                      | Contient l'allergène indiqué.                                   |
| `allergen_molluscs`                  | Contient l'allergène indiqué.                                   |
| `allergen_mustard`                   | Contient l'allergène indiqué.                                   |
| `allergen_nuts`                      | Contient l'allergène indiqué.                                   |
| `allergen_peanuts`                   | Contient l'allergène indiqué.                                   |
| `allergen_sesame_seeds`              | Contient l'allergène indiqué.                                   |
| `allergen_soybeans`                  | Contient l'allergène indiqué.                                   |
| `allergen_sulphur_dioxide_sulphites` | Contient l'allergène indiqué.                                   |
| `deposit_cc`                         | Requires a deposit. `cc` is an amount in cents. |

### Options

Pour chaque liste d'options contenue dans le catalogue, Just Eat Flyt Bridge envoie les informations suivantes dans Just Eat :

- `name`: The name of the option list
- `type`: The number of options that can be selected from the list, either `single` or `multiple`.

Pour chaque option contenue dans une liste, les informations envoyées à Just Eat sont les suivantes :

- `ref`: The ref code of the option
- `name` : nom de l'option
- `price`: The price for a single option

### Promotions

For each deal in the catalog, Just Eat Flyt Bridge creates a product on Just Eat with the following details:

- `name`: The name of the deal becomes the name of the product.
- `category_ref`: If empty, Just Eat Flyt Bridge creates a default category in Just Eat called "Offers".
- `ref`: The ref code of the deal becomes the ref of the product, preceded by `DEAL-`. For example, for a deal with ref code `abc123`, Just Eat Flyt Bridge creates a Just Eat product with ref code `DEAL-abc123`.
- `lines`: For each object in the array, Just Eat Flyt Bridge creates a list of modifiers, with `lines.name` as the name.

### Remises

Discounts are not supported on Just Eat. Therefore, discounts present in your HubRise catalog are ignored and are not pulled into Just Eat.

### Opening hours

When you push your HubRise catalog to Just Eat, you also update the opening hours of your store, based on the values set on the [configuration page](/apps/just-eat-flyt/configuration#catalog).
