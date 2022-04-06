---
title: Modèle de données HubRise
position: 7
layout: documentation
meta:
  title: Modèle de données HubRise | Comment lire les logs HubRise
  description: Les clés JSON typiques présentes dans le corps d'une requête HubRise.
---

## Requêtes de commandes dans HubRise

### Modèle de données

Toutes les commandes reçues par HubRise sont enregistrées dans le back-office. Pour plus d'informations sur l'accès aux logs de commandes, voir [Aide de HubRise : logs de données](/docs/data/#logs).

Les clés suivantes peuvent apparaître dans une requête de commande HubRise.

| Clé                  | Description                                                                                                                                                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_ref`        | ID interne de la commande. Peut être utilisé pour retrouver une commande.                                                                                                                                                                                                               |
| `service_type`       | Type de service demandé par le client. Les valeurs typiques sont « delivery » (livraison), « collection » (à emporter), « eat_in » (sur place).                                                                                                                                         |
| `service_type_ref`   | Code associé au type de service (« service_type ») dans le logiciel de caisse.                                                                                                                                                                                                          |
| `expected_time`      | Date et heure auxquelles le client s'attend à recevoir la commande.                                                                                                                                                                                                                     |
| `confirmed_time`     | Date et heure de livraison confirmées par l'expéditeur. Ce paramètre peut être spécifié dans le cas où il diffère de l'heure de livraison prévue par le client.                                                                                                                         |
| `status`             | Statut de la commande. Quelques valeurs courantes sont « new » (nouvelle), « accepted » (acceptée), « received » (reçue) ou « rejected » (rejetée). Pour obtenir une liste complète, reportez-vous à la [Documentation du développeur](/developers/api/order-management/#order-status). |
| `total`              | Montant réglé par le client.                                                                                                                                                                                                                                                            |
| `coupon_codes`       | Codes coupons utilisés par le client.                                                                                                                                                                                                                                                   |
| `customer_id`        | ID client unique. Permet d'extraire les détails relatifs au client dans la base de données.                                                                                                                                                                                             |
| `items`              | Liste des articles contenus dans la commande. Pour plus d'informations sur chaque article, voir [L'objet « item »](/docs/hubrise-logs/modele-donnees-hubrise#l-objet-item).                                                                                                             |
| `payments`           | Liste des moyens de paiement utilisés par le client. Pour plus d'informations sur chaque moyen de paiement, voir [L'objet « payment »](/docs/hubrise-logs/modele-donnees-hubrise#l-objet-payment).                                                                                      |
| `deals`              | Liste des promotions présentes dans la commande. Une promotion est une combinaison de produits dont le prix est réduit lorsqu'ils sont achetés ensemble.                                                                                                                                |
| `discounts`          | Remises appliquées à l'ensemble de la commande. Une remise est soit un pourcentage, soit une valeur fixe qui est déduite du prix total de la commande.                                                                                                                                  |
| `loyalty_operations` | Liste des opérations appliquées à la carte de fidélité du client. Chaque objet de la liste spécifie le nombre de points ajoutés ou retirés, ainsi que le motif.                                                                                                                         |
| `charges`            | Liste des frais supplémentaires appliqués à la commande. Il s'agit le plus souvent des frais de livraison, frais de paiement, taxes, etc.                                                                                                                                               |

### L'objet « item »

Chaque objet « item » inclus dans la liste des articles contient des informations sur un produit acheté par le client. Les clés suivantes peuvent apparaître dans l'objet « item » d'une commande.

| Clé             | Description                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `product_name`  | Dénomination du produit.                                                                                               |
| `sku_name`      | Nom de la référence du produit, indiquant généralement la taille ou le coloris.                                        |
| `sku_ref`       | Code associé au produit. Indique le code du logiciel de caisse.                                                        |
| `price`         | Prix d'un produit unitaire.                                                                                            |
| `quantity`      | Quantité commandée.                                                                                                    |
| `subtotal`      | Prix total du produit (prix unitaire multiplié par la quantité).                                                       |
| `options`       | Modifications optionnelles (ingrédients ou garnitures) associées au produit.                                           |
| `deal_line`     | Si l'article fait partie d'une promotion, les informations relatives à celle-ci figurent sur cette ligne.              |
| `points_earned` | Points cumulés par le client grâce à ce produit. Les points sont comptabilisés dans des objets « loyalty_operations ». |
| `points_used`   | Points utilisés par le client avec à ce produit. Les points sont comptabilisés dans des objets « loyalty_operations ». |

### L'objet « payment »

La liste des paiements indique les moyens de paiement utilisés par le client. Le plus souvent, un seul moyen de paiement est utilisé par commande. Toutefois, HubRise autorise plusieurs moyens de paiement simultanés, par exemple lorsqu'un client règle une partie de sa commande avec une carte-cadeau et une autre partie en espèces.

Les clés suivantes peuvent apparaître dans un objet « payment ».

| Clé      | Description                                                                                                                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`   | Le type de paiement. Les options possibles sont `cash` (en espèces) ou `online` (en ligne).                                                                                                                                                                                       |
| `name`   | Nom associé au mode de paiement.                                                                                                                                                                                                                                                  |
| `info`   | Informations supplémentaires, qui dépendent de la méthode de paiement choisie. Pour un paiement via PayPal, par exemple, le champ contient l'adresse électronique associée au compte ; pour les paiements par carte bancaire, il contient des informations sur la carte utilisée. |
| `ref`    | Code du logiciel de caisse pour ce moyen de paiement.                                                                                                                                                                                                                             |
| `amount` | Montant total réglé par le client.                                                                                                                                                                                                                                                |
