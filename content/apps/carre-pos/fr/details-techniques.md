---
title: Informations techniques
position: 7
layout: documentation
meta:
  title: Informations techniques | Carré POS | HubRise
  description: Informations techniques concernant l'intégration de Carré POS à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

## Réception des commandes

Les champs d'une commande HubRise sont utilisés de la façon suivante dans Carré POS :

| Nom du champ HubRise | Utilisation dans Carré POS                                                                                                                                              |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `order_id`           | Identifiant de la commande sur HubRise.                                                                                                                                 |
| `service_type`       | Permet de savoir si la commande est en livraison, sur place, ou à emporter.                                                                                             |
| `service_type_ref`   | Non utilisé.                                                                                                                                                            |
| `created_at`         | Date de création de la commande.                                                                                                                                        |
| `created_by`         | Plateforme d'origine de la commande.                                                                                                                                    |
| `expected_time`      | Heure et date auxquelles la commande sera prête ou livrée.                                                                                                              |
| `item.sku_ref`       | Code permettant de retrouver le produit dans le catalogue Carré POS.                                                                                                    |
| `item.price`         | Prix du produit. Si celui-ci est différent de celui du catalogue Carré POS, un produit **Remise** ou **Frais** est ajouté à la commande.                                |
| `item.product_name`  | Permet de remplir la description d'un produit inconnu si le `item.sku_ref` n'est pas reconnu.                                                                           |
| `item.options`       | Options ajoutées au produit.                                                                                                                                            |
| `charges`            | Ajoute un produit **Frais** au même prix à la commande pour chaque élément de ce tableau.                                                                               |
| `discounts`          | Ajoute un produit **Remise** au même prix à la commande pour chaque élément de ce tableau.                                                                              |
| `customer`           | Informations du client.                                                                                                                                                 |
| `payment.type`       | Méthode de paiement. S'il est égal à `cash`, la commande est considérée comme non payée, et s'il est égal à une autre valeur, elle est considérée comme payée en ligne. |
