---
title: Recevoir les commandes
position: 7
layout: documentation
meta:
  title: Recevoir les commandes | Deliveroo | HubRise
  description: Voir comment les commandes sont envoyées de Deliveroo vers HubRise, quels champs sont transmis et lesquels ne le sont pas et quelles fonctionnalités sont intégrées.
---

Connecter Deliveroo à HubRise vous permet de recevoir des commandes Deliveroo directement dans votre logiciel de caisse ou toute autre solution connectée à votre compte HubRise.

Votre tablette Deliveroo doit rester allumée pour recevoir des commandes. Les commandes peuvent être soit acceptées manuellement sur la tablette, soit acceptées automatiquement. Pour plus d'informations, voir [ Comment activer l'acceptation automatique des commandes ?](/apps/deliveroo/faqs/acceptation-automatique/). Deliveroo prévoit de permettre une connexion sans tablette à l'avenir.

Cette page décrit les informations que Deliveroo envoie à HubRise. Elle peut vous aider à comprendre comment les commandes seront reçues dans votre logiciel de caisse.

## Articles et options

Pour les articles et les options, Deliveroo fournit soit le code ref, soit le nom, mais jamais les deux en même temps.

- Si vous spécifiez le code ref de l'article ou de l'option dans votre back-office Deliveroo, l'API Deliveroo n'enverra que cette information à HubRise.
- Si vous ne spécifiez pas le code ref de l'article ou de l'option dans votre back-office Deliveroo, l'API Deliveroo enverra le nom de l'article ou de l'option à HubRise à la place.

Si votre logiciel de caisse s'appuie sur le code ref d'article et d'option pour analyser correctement l'article, assurez-vous que les articles et les options de votre menu Deliveroo sont associés au code ref correspondant de votre caisse. Pour plus de détails, voir la page [Associer les codes ref](/apps/deliveroo/associer-codes-ref/).

Sinon, si votre logiciel de caisse ne prend pas en charge les code refs, laissez ce champ vide dans votre back-office Deliveroo.

Les commentaires des clients sur des articles individuels ne sont pas fournis par l'API Deliveroo. Si vous utilisez des commentaires pour la préparation de vos plats, vous devez créer un article pour chaque demande habituelle dans votre logiciel de caisse (par exemple « Cuisson à point » ou « Couper en tranches »), puis les inclure en tant qu'options dans votre menu Deliveroo.

### Encodage des articles

Pour chaque article inclus dans la commande, Deliveroo Bridge indique les informations suivantes :

- `sku_ref` : code ref de l'article.
- `product_name` : le code ref de l'article, si présent. Sinon, le nom de l'article.
- `price` : prix d'un article unique.
- `quantity` : quantité d'articles inclus dans la commande.
- `options` : sélection des options rattachées à l'article.

### Encodage des options

Pour chaque option incluse dans la commande, Deliveroo Bridge indique les informations suivantes :

- `option_list_name` : la valeur par défaut est "Options".
- `ref` : code ref de l'option.
- `name` : le code ref de l'option, si présent. Sinon, le nom de l'option.
- `price` : prix d'une option unique.

Chaque option se caractérise par une quantité unique. Les options multiples identiques sont encodées dans des objets d'option distincts.

## Statuts de commande

---

**REMARQUE IMPORTANTE :** Dans cette section, nous mettons en majuscule la première lettre des statuts Deliveroo pour les distinguer des noms de statut HubRise. exemple, `Succeeded` est un statut Deliveroo, tandis que `accepted` est un statut HubRise.

---

### Statuts Deliveroo

Une commande Deliveroo passe par plusieurs statuts au cours de son cycle de vie :

- `Succeeded` : la commande a été acceptée par la caisse, et est confirmée sur Deliveroo.
- `Failed` : l'envoi de la commande au logiciel de caisse a échoué. Deliveroo envoie un message à la tablette Deliveroo invitant le personnel à vérifier leur logiciel de caisse et saisis la commande manuellement dans la caisse si nécessaire.
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
- Livraison par les livreurs du restaurant.
- Retrait par les clients.

Ceux-ci sont généralement associés à des codes refs spécifiques dans votre logiciel de caisse. Pour plus d'informations, veuillez consulter la documentation de votre logiciel de caisse sur la [page Apps](/apps) de notre site internet.

## Horaires des commandes

Deliveroo indique l'heure à laquelle le client s'attend à recevoir ou à retirer sa commande. Deliveroo Bridge envoie cet horaire à HubRise dans le champ `expected_time`. Cet horaire ne peut pas être modifié par le logiciel de caisse.

## Client

Deliveroo ne fournit jamais le nom complet et l'adresse e-mail du client dans son API. Par conséquent, Deliveroo Bridge ne crée jamais de clients dans HubRise, mais inclut les coordonnées du client directement dans la commande.

Pour les commandes livrées par le restaurant, Deliveroo Bridge récupère les informations suivantes auprès de Deliveroo :

- `first_name` : le prénom du client.
- `last_name` : l'initiale du nom de famille du client.
- `email` : orders@deliveroo.com
- `address_1` : première ligne de l'adresse.
- `address_2` : deuxième ligne de l'adresse.
- `city` : ville de l'adresse.
- `postal_code` : code postal de l'adresse.
- `latitude` : latitude de l'adresse.
- `longitude` : longitude de l'adresse.
- `phone` : numéro d'assistance Deliveroo. Remarque : il ne s'agit pas du numéro de téléphone du client.
- `delivery_notes` : le code d'accès permettant d'identifier la commande lors de l'appel au support Deliveroo et les notes de livraison laissées par le client, au format "Phone access code: `access_code`. `note`".

Pour les autres types de commandes, Deliveroo Bridge fournit les informations client par défaut suivantes :

- `first_name` : Deliveroo
- `last_name` : Order
- `email` : orders@deliveroo.com

## Remises

La remise appliquée à la commande est transmise sous forme d'objet unique contenu dans le tableau `discounts` de HubRise.

Les champs disponibles dans la requête sont les suivants :

- `name` : nom de la remise qui est `Discount` par défaut.
- `ref` : code ref de la remise. La valeur par défaut peut être définie à partir de la page de configuration de Deliveroo Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price_off` : montant total de la remise.

## Frais

Deliveroo Bridge peut encoder trois types de frais :

- Des frais de livraison s'appliquent aux commandes livrées par le restaurant.
- Des frais supplémentaires s'appliquent aux commandes inférieures au montant minimum de commande requis.
- Des frais d'emballage sont exigés par la réglementation dans certains pays.

Les champs disponibles dans les requêtes sont les suivants :

- `name` : intitulé des frais de livraison est soit `Delivery charge`, `Surcharge` ou `Bag fee`.
- `type` : type de frais. Il a la valeur `delivery` pour les frais de livraison, et `other` pour les suppléments liés aux commandes inférieures au montant minimum de commande requis et aux frais d'emballage.
- `ref` : code ref des frais. La valeur par défaut peut être définie dans de la page de configuration de Deliveroo Bridge. Elle doit correspondre à la valeur définie dans votre logiciel de caisse.
- `price` : le montant des frais.

## Notes de préparation du client

Les notes de préparation du client au niveau du produit sont encodées dans le champ `customer_notes`.
