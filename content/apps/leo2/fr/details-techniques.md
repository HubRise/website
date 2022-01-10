---
title: Informations techniques
position: 8
layout: documentation
meta:
  title: Informations techniques | LEO2 | HubRise
  description: Informations techniques concernant l'intégration de LEO2 à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

## Réception des commandes

Les champs d'une commande HubRise sont utilisés de la façon suivante dans LEO2 :

| Nom du champ HubRise | Utilisation dans LEO2                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `service_type`       | Permet de savoir si la commande est en livraison, sur place, ou à emporter.                                                           |
| `service_type_ref`   | Identifiant du vendeur. Si vide, la commande est associée à un vendeur par défaut.                                                    |
| `created_at`         | Date de création de la commande.                                                                                                      |
| `expected_time`      | Heure et date auxquelles la commande sera prête ou livrée.                                                                            |
| `item.sku_ref`       | Code permettant de retrouver le produit dans le catalogue LEO2.                                                                       |
| `item.price`         | Prix du produit. Si celui-ci est différent de celui du catalogue LEO2, le prix envoyé par HubRise est pris en compte.                 |
| `item.product_name`  | Nom du produit.                                                                                                                       |
| `item.options`       | Options ajoutées au produit.                                                                                                          |
| `charges`            | Ajoute un produit **Charge** (créé au préalable dans le catalogue LEO2) au même prix à la commande pour chaque élément de ce tableau. |
| `discounts`          | Ajoute une remise globale correspondant à la somme des prix des éléments de ce tableau.                                               |
| `customer`           | Informations du client.                                                                                                               |
| `payment.type`       | Méthode de paiement.                                                                                                                  |
