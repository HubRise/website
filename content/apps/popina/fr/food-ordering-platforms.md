---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | Popina | HubRise
  description: HubRise permet de connecter Popina à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Popina. Vous pouvez aussi envoyer votre menu de Popina vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Popina.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps#food-ordering-platforms).

## Types de service {#service-types}

Popina utilise le code ref de type de service pour identifier la plateforme à l'origine d'une commande.

Popina reconnaît les codes suivants : `UBEREATS`, `DELIVEROO` et `JUSTEAT`. Vous pouvez ajouter un texte libre après le code ref, pour identifier une marque virtuelle. Par exemple, `UBEREATS-PizzaTime`.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Popina, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                        |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Acceptée"`                |
| Types de service    | Code ref livraison par Deliveroo                  | `DELIVEROO` - Voir [Types de Service](#service-types)           |
| Types de service    | Code ref livraison par le restaurant              | `DELIVEROO`                                                     |
| Types de service    | Code ref à emporter                               | `DELIVEROO`                                                     |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                                        |
| Remises             | Code ref remise                                   | (laisser vide)                                                  |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                  |
| Frais               | Code ref surcharge                                | (laisser vide)                                                  |
| Frais               | Code ref frais d'emballage                        | (laisser vide)                                                  |
| Paiements           | Code ref paiement en ligne                        | Créer un mode de paiement dans Popina et utiliser son code ref. |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                  |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Laisser la case décochée                                        |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez support@hubrise.com.

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans Popina avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                        |
| ------------------- | ----------------------------------------------------- | --------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Acceptée"`                |
| Types de service    | Code ref livraison par la plateforme                  | `JUSTEAT` - Voir [Types de Service](#service-types)             |
| Types de service    | Code ref livraison par le restaurant                  | `JUSTEAT`                                                       |
| Types de service    | Code ref à emporter                                   | `JUSTEAT`                                                       |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                        |
| Remises             | Code ref remise                                       | (laisser vide)                                                  |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                                  |
| Frais               | Code ref frais de service                             | (laisser vide)                                                  |
| Paiements           | Code ref paiement en ligne                            | Créer un mode de paiement dans Popina et utiliser son code ref. |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                  |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans Popina avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt/overview).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             |                                           | Nom                                                   | Code ref                                                        |
| ------------------- | ----------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------- |
| Statuts de commande |                                           | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Acceptée"`                |
| Types de service    |                                           | Code ref livraison par la plateforme                  | `JUSTEAT` - Voir [Types de Service](#service-types)             |
| Types de service    |                                           | Code ref livraison par le restaurant                  | `JUSTEAT`                                                       |
| Types de service    |                                           | Code ref à emporter                                   | `JUSTEAT`                                                       |
| Types de service    |                                           | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                        |
| Remises             |                                           | Code ref remise                                       | (laisser vide)                                                  |
| Frais               |                                           | Code ref frais de livraison                           | (laisser vide)                                                  |
| Frais               |                                           | Code ref surcharge                                    | (laisser vide)                                                  |
| Frais               |                                           | Code ref frais d'emballage                            | (laisser vide)                                                  |
| Frais               |                                           | Code ref pourboire livreur                            | (laisser vide)                                                  |
| Frais               |                                           | Code ref autres frais                                 | (laisser vide)                                                  |
| Paiements           |                                           | Code ref paiement en ligne                            | Créer un mode de paiement dans Popina et utiliser son code ref. |
| Paiements           |                                           | Code ref paiement en espèces                          | (laisser vide)                                                  |
| Clients             | Dupliquer le code d'accès téléphone [...] | Laisser la case décochée                              |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Popina, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                          | Code ref                                                               |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Acceptée"`                       |
| Types de service    | Code ref livraison Uber                      | `UBEREATS` - Voir [Types de Service](#service-types)                   |
| Types de service    | Code ref livraison par le restaurant         | `UBEREATS`                                                             |
| Types de service    | Code ref à emporter                          | `UBEREATS`                                                             |
| Types de service    | Code ref sur place                           | `UBEREATS`                                                             |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes en livraison`                                               |
| Articles spéciaux   | Code ref jetables                            | Créer un article `Jetables` dans Popina et utiliser son code ref. (\*) |
| Remises             | Code ref remise                              | (laisser vide)                                                         |
| Frais               | Code ref frais de livraison                  | (laisser vide)                                                         |
| Frais               | Code ref supplément petite commande          | (laisser vide)                                                         |
| Frais               | Code ref pourboire                           | (laisser vide)                                                         |
| Paiements           | Code ref paiement en ligne                   | Créer un mode de paiement dans Popina et utiliser son code ref.        |
| Paiements           | Code ref paiement en espèces                 | (laisser vide)                                                         |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Laisser la case décochée                                               |
| Catalogue           | Activer les notes de préparation [...]       | Cocher si vous souhaitez les activer                                   |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.
