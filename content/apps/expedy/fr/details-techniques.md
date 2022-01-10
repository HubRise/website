---
title: Informations techniques
position: 5
layout: documentation
meta:
  title: Informations techniques | Expedy | HubRise
  description: Informations techniques concernant l'intégration de Expedy à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

## Réception des commandes

Les champs d'une commande HubRise sont utilisés de la façon suivante par Expedy :

| Nom du champ HubRise | Utilisation dans Expedy                                                             |
| -------------------- | ----------------------------------------------------------------------------------- |
| `service_type`       | Indique si la commande est en livraison, sur place, à emporter, ou en consultation. |
| `service_type_ref`   | Non utilisé.                                                                        |
| `expected_time`      | Heure et date auxquelles la commande sera prête ou livrée.                          |
| `item.product_name`  | Nom du produit.                                                                     |
| `item.sku_name`      | Nom de la SKU, si l'article est disponible en plusieurs tailles, couleurs, etc.     |
| `item.price`         | Prix du produit.                                                                    |
| `item.options`       | Options du produit.                                                                 |
| `deals`              | Promotions sur des articles de la commande.                                         |
| `charges`            | Frais supplémentaires.                                                              |
| `total`              | Montant total de la commande.                                                       |
| `collection_code`    | Code unique de la commande.                                                         |
| `customer`           | Informations sur le client.                                                         |
| `payments`           | Méthode de paiement.                                                                |
