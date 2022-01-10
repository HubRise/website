---
title: Informations techniques
position: 8
layout: documentation
meta:
  title: Informations techniques | Kezia II | HubRise
  description: Informations techniques concernant l'intégration de Kezia II à HubRise. Connectez vos applications à HubRise avec facilité et synchronisez vos données.
---

## Réception des commandes

Les champs d'une commande HubRise sont utilisés de la façon suivante dans Kezia II :

| Nom du champ HubRise | Utilisation dans Kezia II                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `service_type`       | Type de commande : livraison, sur place, ou à emporter.                                                                                    |
| `service_type_ref`   | Non utilisé.                                                                                                                               |
| `expected_time`      | Heure souhaitée de récupération ou de livraison de la commande.                                                                            |
| `collection_code`    | Référence unique de la commande.                                                                                                           |
| `item.sku_ref`       | Code de l'article dans le catalogue Kezia II.                                                                                              |
| `item.product_name`  | Nom donné à l'article si `item.sku_ref` n'est pas reconnu.                                                                                 |
| `charges`            | Permet de créer l'article _FRAIS DE PORT TTC_ dans le catalogue Kezia II, correspondant au forfait livraison (seul type de frais accepté). |
| `payment.type`       | Moyen de paiement. S'il est égal à `cash`, la commande est considérée comme non payée. Sinon, elle est considérée comme déjà payée.        |
| `discounts`          | Remises de la commande.                                                                                                                    |
| `deals`              | Promotions de la commande.                                                                                                                 |
