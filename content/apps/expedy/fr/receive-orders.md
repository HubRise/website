---
title: Recevoir les commandes
path_override: recevoir-commandes
position: 4
layout: documentation
meta:
  title: Recevoir les commandes | Expedy | HubRise
  description: Informations techniques concernant l'intégration de Expedy à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

Les champs suivants des commandes HubRise sont imprimés sur les tickets Expedy.

| Nom du champ HubRise | Utilisation dans Expedy                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------- |
| `service_type`       | Indique si la commande est en livraison, sur place, à emporter, ou en consultation.                        |
| `service_type_ref`   | Champ libre, imprimé en haut du ticket. Utile pour différencier les marques virtuelles d'une Dark Kitchen. |
| `created_by`         | Nom de l'application qui a créé la commande. Imprimé sous `service_type_ref`.                              |
| `expected_time`      | Heure et date auxquelles la commande sera prête ou livrée.                                                 |
| `item.product_name`  | Nom du produit.                                                                                            |
| `item.sku_name`      | Nom de la SKU, si l'article est disponible en plusieurs tailles, couleurs, etc.                            |
| `item.price`         | Prix du produit.                                                                                           |
| `item.options`       | Options du produit.                                                                                        |
| `deals`              | Promotions sur des articles de la commande.                                                                |
| `charges`            | Frais supplémentaires.                                                                                     |
| `total`              | Montant total de la commande.                                                                              |
| `collection_code`    | Code unique de la commande.                                                                                |
| `customer`           | Informations sur le client.                                                                                |
| `payments`           | Le nom de la méthode de paiement utilisée est imprimé, ou à défaut la mention "A PAYER".                   |

Pour personnaliser l'impression, consultez la section [Personnaliser vos impressions](/apps/expedy/configuration#customise-print).
