---
title: Recevoir des commandes
path_override: recevoir-commandes
position: 8
layout: documentation
meta:
  title: Recevoir les commandes | Deliveroo | HubRise
  description: Découvrez les détails techniques sur la manière dont les commandes sont reçues de Deliveroo dans HubRise, quels champs sont transmis et lesquels ne le sont pas.
---

Connecter Deliveroo à HubRise vous permet de recevoir les commandes Deliveroo directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Vous avez la possibilité d'accepter manuellement les commandes sur la tablette ou de configurer l'acceptation automatique. Si vous préférez ne pas utiliser de tablette, vous pouvez la laisser éteinte ou ne pas en avoir du tout. Pour plus d'informations, voir [Puis-je arrêter d'utiliser la tablette Deliveroo ?](/apps/deliveroo/faqs/deliveroo-tabletless).

Cette page décrit les informations que Deliveroo envoie à HubRise. Elle peut vous aider à comprendre comment les commandes seront reçues dans votre logiciel de caisse.

## Articles et options

Si votre logiciel de caisse utilise les codes ref pour retrouver les articles et les options, assurez-vous que les articles et les options de votre menu Deliveroo sont associés aux codes ref correspondant sur votre caisse. Pour plus de détails, voir [Associer les codes ref](/apps/deliveroo/map-ref-codes).

Sinon, si votre logiciel de caisse ne prend pas en charge les code refs, laissez ce champ vide dans votre back-office Deliveroo.

Les commentaires des clients sur des articles individuels ne sont pas fournis par l'API Deliveroo. Si vous utilisez des commentaires pour la préparation de vos plats, vous devez créer un article pour chaque demande habituelle dans votre logiciel de caisse (par exemple « Cuisson à point » ou « Couper en tranches »), puis les inclure en tant qu'options dans votre menu Deliveroo.

### Encodage des articles

Pour chaque article inclus dans la commande, Deliveroo Bridge indique les informations suivantes :

- `sku_ref` : code ref de l'article.
- `product_name` : le code ref de l'article, si présent. Sinon, le nom de l'article.
- `price` : prix unitaire de l'article.
- `quantity` : quantité d'articles inclus dans la commande.
- `options` : sélection des options rattachées à l'article.

### Encodage des options

Pour chaque option incluse dans la commande, Deliveroo Bridge indique les informations suivantes :

- `option_list_name` : la valeur par défaut est "Options".
- `ref` : code ref de l'option.
- `name` : le code ref de l'option, si présent. Sinon, le nom de l'option.
- `price` : prix unitaire de l'option.

Chaque option a une quantité égale à 1. Les options multiples identiques sont encodées dans des objets d'option distincts.

## Statuts de commande

---

**REMARQUE IMPORTANTE :** Dans cette section, nous mettons en majuscule la première lettre des statuts Deliveroo pour les distinguer des noms de statut HubRise. exemple, `Succeeded` est un statut Deliveroo, tandis que `accepted` est un statut HubRise.

---

### Statuts Deliveroo

Une commande Deliveroo passe par plusieurs statuts au cours de son cycle de vie :

- `Succeeded` : la commande a été acceptée par la caisse, et est confirmée sur Deliveroo.
- `Failed` : l'envoi de la commande au logiciel de caisse a échoué. Deliveroo envoie un message à la tablette Deliveroo invitant le personnel à vérifier le logiciel de caisse et à saisir la commande manuellement si nécessaire.
- `In Kitchen` : la cuisson a commencé.
- `Ready for Collection` : les aliments sont cuits et emballés.
- `Collected` : la commande a été récupérée.

Les nouvelles commandes doivent être marquées comme `Succeeded` ou `Failed` en moins de 3 minutes. Dans le cas contraire, Deliveroo les marquera automatiquement comme `Failed`.

---

**REMARQUE IMPORTANTE :** Le passage d'un statut de commande à `Succeeded` ou `Failed` n'est pas réversible. Une fois la commande marquée comme `Failed`, elle ne peut plus être changée en `Succeeded`, et vice-versa.

---

### Lorsque le statut change dans HubRise

Lorsqu'un statut de commande change dans HubRise, Deliveroo Bridge notifie Deliveroo qui répercute le changement sur la tablette Deliveroo. La correspondance entre les statuts de HubRise et de Deliveroo se présente comme suit :

| Statut HubRise                               | Statuts Deliveroo                                                               |
| -------------------------------------------- | ------------------------------------------------------------------------------- |
| `new`, `received` ou `accepted`              | Vous pouvez déterminer quel statut fait passer la commande en mode `Succeeded`. |
| `rejected` ou `cancelled`                    | `Failed`                                                                        |
| `in_preparation`                             | `In Kitchen`                                                                    |
| `awaiting_collection` ou `awaiting_shipment` | `Ready for Collection`                                                          |
| `completed`                                  | `Collected`                                                                     |

Deliveroo Bridge vous permet de décider quel statut de HubRise déclenche l'état `Succeeded` dans Deliveroo. Cette option est utile pour gérer différents scénarios lorsque votre logiciel de caisse actualise le statut de la commande. Par exemple, si votre logiciel de caisse marque une commande acceptée comme `received` sur HubRise, vous pouvez configurer le bridge pour que Deliveroo reconnaisse que la commande a été acceptée.

Les autres valeurs de statut dans HubRise ne sont ni prises en charge ni envoyées à Deliveroo.

### Lorsque le statut change dans Deliveroo

Lorsqu'une commande est annulée depuis la tablette Deliveroo, elle est marquée `cancelled` sur HubRise.

## Types de service

Deliveroo prend en charge trois types de service :

- Livraison par les coursiers Deliveroo.
- Livraison par la flotte du restaurant.
- Retrait par les clients.

Ceux-ci sont généralement associés à des codes refs spécifiques dans votre logiciel de caisse. Pour plus d'informations, consultez la documentation de votre logiciel de caisse sur la [page Apps](/apps).

## Horaires des commandes

Deliveroo indique l'heure à laquelle le client s'attend à recevoir ou à retirer sa commande. Deliveroo Bridge envoie cet horaire à HubRise dans le champ `expected_time`. Cet horaire ne peut pas être modifié par le logiciel de caisse.

## Client

Deliveroo ne fournit jamais le nom complet du client, ni son numéro de téléphone personnel, ni son adresse e-mail. Il ne fournit pas non plus d'identifiant unique du client. Par conséquent, Deliveroo Bridge ne crée pas de clients dans HubRise, mais inclut les coordonnées du client directement dans la commande.

Pour les commandes livrées par le restaurant, Deliveroo Bridge fournit les informations suivantes :

- `first_name` : le prénom du client.
- `last_name` : l'initiale du nom de famille du client.
- `address_1` : première ligne de l'adresse.
- `address_2` : deuxième ligne de l'adresse.
- `city` : ville de l'adresse.
- `postal_code` : code postal de l'adresse.
- `latitude` : latitude de l'adresse.
- `longitude` : longitude de l'adresse.
- `phone` : numéro d'assistance Deliveroo. Remarque : il ne s'agit pas du numéro de téléphone du client.
- `delivery_notes`: le code d'accès pour identifier la commande lors de l'appel au support de Deliveroo et les notes de livraison laissées par le client, au format « Code d'accès téléphonique: `access_code`. `note`".

Pour les autres types de commandes, Deliveroo Bridge fournit les informations suivantes :

- `first_name` : le prénom du client.
- `phone` : numéro d'assistance Deliveroo. Remarque : il ne s'agit pas du numéro de téléphone du client.

## Remises

La remise appliquée à la commande est transmise sous forme d'objet unique contenu dans le tableau `discounts` de HubRise.

Les champs disponibles dans la requête sont les suivants :

- `name` : nom de la remise qui est `Discount` par défaut.
- `ref` : code ref de la remise. La valeur par défaut peut être définie depuis la page de configuration de Deliveroo Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price_off` : montant total de la remise.

## Frais

Deliveroo Bridge peut encoder trois types de frais :

- Des frais de livraison s'appliquent aux commandes livrées par le restaurant.
- Des frais supplémentaires s'appliquent aux commandes de petit montant.
- Des frais d'emballage sont exigés par la réglementation dans certains pays.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais, qui peut être soit `Frais de livraison`, `Surcharge` ou `Frais d'emballage`.
- `type` : type de frais. Il a la valeur `delivery` pour les frais de livraison, et `other` pour les suppléments liés aux commandes inférieures au montant minimum de commande requis et aux frais d'emballage.
- `ref` : code ref des frais. La valeur par défaut peut être définie dans de la page de configuration de Deliveroo Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price` : le montant des frais.

## Notes de préparation du client

Les notes de préparation du client au niveau de la commande sont encodées dans le champ `customer_notes`.
