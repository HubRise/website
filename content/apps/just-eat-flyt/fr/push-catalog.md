---
title: Envoyer le catalogue
path_override: envoyer-catalogue
position: 6
layout: documentation
meta:
  title: Envoyer le catalogue | Just Eat Flyt | HubRise
  description: Découvrez comment envoyer un catalogue de HubRise vers Just Eat, comment les articles et options sont encodés, et quelles fonctionnalités sont prises en charge.
---

---

**REMARQUE IMPORTANTE :** Une fois HubRise connecté, vous devez toujours mettre à jour votre menu via HubRise. Si vous demandez à l'équipe d'assistance Just Eat de le mettre à jour, la connexion sera interrompue et vous cesserez de recevoir des commandes. Si cela se produit, procédez simplement à un envoi manuel du catalogue pour restaurer la connexion.

---

Just Eat ne dispose pas d'un back-office permettant d'alimenter et de personnaliser votre menu. Vous pouvez utiliser Just Eat Flyt Bridge pour envoyer votre catalogue HubRise dans votre restaurant Just Eat en un seul clic.

Vous pouvez également configurer le bridge de manière à envoyer votre catalogue vers la plateforme à chaque fois qu'il est modifié dans HubRise. Pour plus d'informations, voir [Catalogue](/apps/just-eat-flyt/configuration#catalog).

Cette page explique comment envoyer votre catalogue et quelles informations sont envoyées à la plateforme.

## Alimenter un catalogue HubRise

Pour mettre à jour votre menu dans Just Eat, vous devez préalablement avoir un catalogue dans HubRise. De nombreuses applications connectées à HubRise, notamment les logiciels de caisse, peuvent envoyer leur catalogue vers HubRise. Pour vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Vous pouvez aussi alimenter un catalogue HubRise en récupérant un menu existant depuis Deliveroo ou Uber Eats. Pour plus d'informations, consultez ces liens :

- [Récupérer le catalogue depuis Deliveroo](/apps/deliveroo/pull-catalog)
- [Récupérer le catalogue depuis Uber Eats](/apps/uber-eats/pull-catalog)

## Envoi manuel du catalogue

Une fois que votre catalogue a été alimenté dans HubRise, vous pouvez l'envoyer manuellement vers votre restaurant Just Eat en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre restaurant Just Eat.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Just Eat Flyt Bridge** dans la liste des applications connectées.
4. Dans Just Eat Flyt Bridge, sélectionnez l'onglet **Actions**, puis cliquez sur **Envoyer le catalogue**.
5. Vérifiez votre menu Just Eat en ligne.

---

**REMARQUE IMPORTANTE :** L'envoi de votre catalogue HubRise vers Just Eat remplace le menu actuel sur votre restaurant Just Eat. L'envoi du catalogue met également à jour vos paramètres **Horaires d'ouverture** Just Eat tels que définis sur la page **Configuration** de Just Eat Flyt Bridge. Cette action est irréversible.

---

## Envoi automatique du catalogue

Just Eat Flyt Bridge peut envoyer automatiquement votre catalogue HubRise vers Just Eat à chaque fois qu'il est modifié. Par défaut, cette option est désactivée. Vous pouvez l'activer en suivant ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Sélectionnez le compte HubRise et le point de vente connecté à votre restaurant Just Eat.
3. Ouvrez la page **CONNEXIONS**, puis sélectionnez **Just Eat Flyt Bridge** dans la liste des applications connectées.
4. Dans Just Eat Flyt Bridge, sélectionnez l'onglet **Configuration**.
5. Dans la section **Catalogue**, cochez **Activer l'envoi automatique du catalogue**.
6. Cliquez sur **Enregistrer**.

## Référence technique

Les sections suivantes décrivent en détail la manière dont les catalogues HubRise sont associés aux menus Just Eat.

### Images

Les images que vous chargez sur Just Eat doivent répondre aux exigences suivantes :

- Orientation paysage (et non portrait ou format carré)
- Au moins 1 024 x 768 pixels au format 4:3
- Format de fichier JPG ou PNG

---

**REMARQUE IMPORTANTE :** Just Eat passe en revue toutes les nouvelles photos chargées sur ses restaurants. Après avoir inséré une image dans Just Eat, vous devez généralement compter entre deux et cinq jours avant que l'image n'apparaisse sur le menu. Si vos images ne respectent pas les directives, Just Eat vous invite à les charger de nouveau.

---

### Catégories

Les catégories d'un catalogue HubRise sont associées une à une à celles des produits dans Just Eat.
L'ordre d'affichage des catégories et des produits dans HubRise est conservé dans Just Eat.

Pour chaque catégorie, les champs HubRise suivants sont envoyés à Just Eat :

- `name` : nom de la catégorie
- `description` : description de la catégorie

### Produits et SKU

Les produits du tableau `products` d'un catalogue HubRise peuvent avoir plusieurs SKU. Cette notion de SKU multiples par produit n'est pas prise en charge dans Just Eat, où chaque SKU est associée à un produit unique. Pour plus d'informations sur les produits dans HubRise, voir la section [Products](/developers/api/catalogs#products) de la documentation de notre API (en anglais).

Les émojis ne sont pas pris en charge dans Just Eat. Si vous en utilisez dans votre catalogue HubRise, ils seront supprimés au moment de l'envoi vers Just Eat.

Pour chaque objet `sku` contenu dans un produit, Just Eat Flyt Bridge envoie les informations suivantes dans Just Eat :

- `ref` : code ref de la SKU, qui sera transmis dans les commandes
- `name` : nom de la SKU
- `description` : description du produit parent
- `price` : prix de la SKU
- `option_list_refs` : liste des options rattachées à la SKU
- `tags` : tags décrivant les caractéristiques et les restrictions du produit, telles que les allergènes ou la saveur épicée. Voir [Tags produit](#product-tags).
- `image` : adresse URL de l'image du produit parent

Pour plus d'informations sur les SKU dans le catalogue HubRise, voir la section [SKU](/developers/api/catalogs#skus) de la documentation de notre API (en anglais).

---

**REMARQUE IMPORTANTE :** Les produits sans code ref ne sont pas envoyés dans Just Eat. Pour plus d'informations, voir [Pourquoi certains produits ne sont-ils pas exportés vers Just Eat ?](/apps/just-eat-flyt/faqs/products-not-pushed)

---

### Tags produit {#product-tags}

Le tableau ci-dessous répertorie les tags qui peuvent être définis sur les produits.

| Tag                                  | Description                                                                            |
| ------------------------------------ | -------------------------------------------------------------------------------------- |
| `alcoholic`                          | Contient de l'alcool.                                                  |
| `deal_only`                          | Ne peut être commandé que dans le cadre d'une promotion.               |
| `spicy_1`                            | Légèrement épicé                                                                       |
| `spicy_2`                            | Moyennement épicé                                                                      |
| `spicy_3`                            | Très épicé                                                                             |
| `vegan`                              | Plat végétalien                                                                        |
| `vegetarian`                         | Plat végétarien                                                                        |
| `allergen_celery`                    | Contient l'allergène indiqué.                                          |
| `allergen_crustaceans`               | Contient l'allergène indiqué.                                          |
| `allergen_eggs`                      | Contient l'allergène indiqué.                                          |
| `allergen_fish`                      | Contient l'allergène indiqué.                                          |
| `allergen_gluten`                    | Contient l'allergène indiqué.                                          |
| `allergen_lupin`                     | Contient l'allergène indiqué.                                          |
| `allergen_milk`                      | Contient l'allergène indiqué.                                          |
| `allergen_molluscs`                  | Contient l'allergène indiqué.                                          |
| `allergen_mustard`                   | Contient l'allergène indiqué.                                          |
| `allergen_nuts`                      | Contient l'allergène indiqué.                                          |
| `allergen_peanuts`                   | Contient l'allergène indiqué.                                          |
| `allergen_sesame_seeds`              | Contient l'allergène indiqué.                                          |
| `allergen_soybeans`                  | Contient l'allergène indiqué.                                          |
| `allergen_sulphur_dioxide_sulphites` | Contient l'allergène indiqué.                                          |
| `deposit_cc`                         | Nécessite un acompte. `cc` est un montant en centimes. |

### Options

Pour chaque liste d'options du catalogue, Just Eat Flyt Bridge envoie les informations suivantes dans Just Eat :

- `name` : nom de la liste d'options
- `type`: nombre d'options qui peuvent être sélectionnées dans la liste, soit `single` (unique), soit `multiple`

Pour chaque option contenue dans une liste, les informations envoyées à Just Eat sont les suivantes :

- `ref` : code ref de l'option
- `name` : nom de l'option
- `price` : prix unitaire de l'option

### Promotions

Pour chaque promotion du catalogue, Just Eat Flyt Bridge crée un produit sur Just Eat avec les détails suivants :

- `name` : le nom de la promotion devient le nom du produit.
- `category_ref` : si le champ est vide, Just Eat Flyt Bridge crée une catégorie par défaut dans Just Eat appelée "Offres".
- `ref` : le code ref de la promotion devient le code ref du produit, précédé de `DEAL-`. Par exemple, pour une promotion avec le code ref `abc123`, Just Eat Flyt Bridge crée un produit Just Eat avec le code ref `DEAL-abc123`.
- `lines` : pour chaque objet du tableau, Just Eat Flyt Bridge crée une liste de modificateurs, avec pour nom `lines.name`.

### Remises

Les remises ne sont pas prises en charge dans Just Eat. Les remises présentes dans votre catalogue HubRise sont donc ignorées et ne sont pas reçues dans Just Eat.

### Horaires d'ouverture

Lorsque vous envoyez votre catalogue HubRise vers Just Eat, vous mettez également à jour les horaires d'ouverture de votre restaurant, en fonction des valeurs définies sur la [page de configuration](/apps/just-eat-flyt/configuration#catalog).
