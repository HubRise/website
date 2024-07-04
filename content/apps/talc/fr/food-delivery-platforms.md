---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | Delivery System de T.A.L.C | HubRise
  description: HubRise permet de connecter Delivery System de T.A.L.C à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Delivery System. Vous pouvez aussi envoyer votre menu de Delivery System vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Delivery System.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps#food-ordering-platforms).

## Configuration de Delivery System

### Codes ref de types de service {#service-type-refs}

Si vous utilisez plusieurs comptes sur les plateformes, vous pouvez différencier les commandes provenant de chaque compte en utilisant des codes ref de types de service. Ce sont des champs libres, configurables au niveau de chaque type de service et de chaque compte de plateforme. Ils sont affichés sur les reçus de Delivery System.

Si vous n'avez qu'un seul compte sur chaque plateforme, vous pouvez laisser ces champs vides.

### Frais de livraison et autres frais {#frais}

Les frais sont des articles dans Delivery System. Vous devez donc les créer préalablement dans Delivery System et utiliser leur code ref dans la configuration du bridge.

### Moyens de paiement {#payment-methods}

Les moyens de paiement sont des articles dans Delivery System. Vous devez donc les créer préalablement dans Delivery System et utiliser leur code ref dans la configuration du bridge.

Pour le paiement en ligne, créez un article avec le code ref **CBL**, afin que ces commandes soient traitées comme des commandes payées en ligne.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Delivery System, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                             |
| ------------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Acceptée"`                     |
| Types de service    | Code ref livraison par Deliveroo                  | Voir [Codes ref de types de service](#service-type-refs)             |
| Types de service    | Code ref livraison par le restaurant              | Voir [Codes ref de types de service](#service-type-refs)             |
| Types de service    | Code ref à emporter                               | Voir [Codes ref de types de service](#service-type-refs)             |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                                             |
| Articles spéciaux   | Code ref option consigne                          | Créer une option dans Delivery System et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                   | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                       | Voir [Frais de livraison et autres frais](#frais)                    |
| Frais               | Code ref surcharge                                | Voir [Frais de livraison et autres frais](#frais)                    |
| Frais               | Code ref frais d'emballage                        | Voir [Frais de livraison et autres frais](#frais)                    |
| Paiements           | Code ref paiement en ligne                        | Voir [Moyens de paiement](#payment-methods)                          |
| Paiements           | Code ref paiement en espèces                      | Voir [Moyens de paiement](#payment-methods)                          |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Laisser la case décochée                                             |

(\*) Applicable uniquement si certains de vos produits nécessitent une consigne.

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez support@hubrise.com.

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans Delivery System avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                 |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Acceptée"`         |
| Types de service    | Code ref livraison par la plateforme                  | Voir [Codes ref de types de service](#service-type-refs) |
| Types de service    | Code ref livraison par le restaurant                  | Voir [Codes ref de types de service](#service-type-refs) |
| Types de service    | Code ref à emporter                                   | Voir [Codes ref de types de service](#service-type-refs) |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                 |
| Remises             | Code ref remise                                       | (laisser vide)                                           |
| Frais               | Code ref frais de livraison                           | Voir [Frais de livraison et autres frais](#frais)        |
| Frais               | Code ref frais de service                             | Voir [Frais de livraison et autres frais](#frais)        |
| Paiements           | Code ref paiement en ligne                            | Voir [Moyens de paiement](#payment-methods)              |
| Paiements           | Code ref paiement en espèces                          | Voir [Moyens de paiement](#payment-methods)              |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans Delivery System avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt/overview).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                             |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Acceptée"`                     |
| Types de service    | Code ref livraison par la plateforme                  | Voir [Codes ref de types de service](#service-type-refs)             |
| Types de service    | Code ref livraison par le restaurant                  | Voir [Codes ref de types de service](#service-type-refs)             |
| Types de service    | Code ref à emporter                                   | Voir [Codes ref de types de service](#service-type-refs)             |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                             |
| Articles spéciaux   | Code ref option consigne                              | Créer une option dans Delivery System et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                       | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                           | Voir [Frais de livraison et autres frais](#frais)                    |
| Frais               | Code ref surcharge                                    | Voir [Frais de livraison et autres frais](#frais)                    |
| Frais               | Code ref frais d'emballage                            | Voir [Frais de livraison et autres frais](#frais)                    |
| Frais               | Code ref pourboire livreur                            | Voir [Frais de livraison et autres frais](#frais)                    |
| Frais               | Code ref autres frais                                 | Voir [Frais de livraison et autres frais](#frais)                    |
| Paiements           | Code ref paiement en ligne                            | Voir [Moyens de paiement](#payment-methods)                          |
| Paiements           | Code ref paiement en espèces                          | Voir [Moyens de paiement](#payment-methods)                          |
| Clients             | Dupliquer le code d'accès téléphone [...]             | Laisser la case décochée                                             |

(\*) Applicable uniquement si certains de vos produits nécessitent une consigne.

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Delivery System, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                          | Code ref                                                                        |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Acceptée"`                                |
| Types de service    | Code ref livraison Uber                      | Voir [Codes ref de types de service](#service-type-refs)                        |
| Types de service    | Code ref livraison par le restaurant         | Voir [Codes ref de types de service](#service-type-refs)                        |
| Types de service    | Code ref à emporter                          | Voir [Codes ref de types de service](#service-type-refs)                        |
| Types de service    | Code ref sur place                           | Voir [Codes ref de types de service](#service-type-refs)                        |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes en livraison`                                                        |
| Articles spéciaux   | Code ref jetables                            | Créer un article `Jetables` dans Delivery System et utiliser son code ref. (\*) |
| Remises             | Code ref remise                              | (laisser vide)                                                                  |
| Frais               | Code ref frais de livraison                  | Voir [Frais de livraison et autres frais](#frais)                               |
| Frais               | Code ref supplément petite commande          | Voir [Frais de livraison et autres frais](#frais)                               |
| Frais               | Code ref pourboire                           | Voir [Frais de livraison et autres frais](#frais)                               |
| Paiements           | Code ref paiement en ligne                   | Voir [Moyens de paiement](#payment-methods)                                     |
| Paiements           | Code ref paiement en espèces                 | Voir [Moyens de paiement](#payment-methods)                                     |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Laisser la case décochée                                                        |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.
