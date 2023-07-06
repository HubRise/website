---
title: Plateformes de livraison de repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | POS HELPER | HubRise
  description: HubRise permet de connecter POS HELPER à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans POS HELPER. Vous pouvez aussi envoyer votre menu de POS HELPER vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à POS HELPER.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

## Configuration POS HELPER

### Types de service

Les types de service sont utilisés de la manière suivante par POS HELPER :

- Ils sont affichés sur l'écran de production POS HELPER.
- Ils sont imprimés en haut des tickets, sous le nom de la plateforme.

Les types de service sont des champs libres, et les valeurs indiquées dans cette page, telles que `Plateforme`, ne sont que des suggestions.

Vous pouvez personnaliser les types de service en fonction de vos besoins. Par exemple, si vous exploitez plusieurs marques en Dark Kitchen et que vous voulez différencier les commandes, vous pouvez utiliser le type de service `Plateforme - Marque A` pour une marque, et `Plateforme - Marque B` pour une autre.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans POS HELPER, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                  |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | `Plateforme` - Voir [Types de Service](#types-de-service) |
| Types de service    | Code ref livraison par le restaurant              | `Restaurant`                                              |
| Types de service    | Code ref à emporter                               | `A emporter`                                              |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                                    |
| Remises             | Code ref remise                                   | (laisser vide)                                            |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                            |
| Frais               | Code ref surcharge                                | (laisser vide)                                            |
| Frais               | Code ref frais d'emballage                        | (laisser vide)                                            |
| Paiements           | Code ref paiement en ligne                        | `ONLINE`                                                  |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                            |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`             |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez [support@hubrise.com](mailto:support@hubrise.com).

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans POS HELPER avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                  |
| ------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | `Plateforme` - Voir [Types de Service](#types-de-service) |
| Types de service    | Code ref livraison par le restaurant                  | `Livraison`                                               |
| Types de service    | Code ref à emporter                                   | `A emporter`                                              |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                                    |
| Remises             | Code ref remise                                       | (laisser vide)                                            |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                            |
| Paiements           | Code ref paiement en ligne                            | `ONLINE`                                                  |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                            |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`             |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans POS HELPER avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                  |
| ------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | `Plateforme` - Voir [Types de Service](#types-de-service) |
| Types de service    | Code ref livraison par le restaurant                  | `Livraison`                                               |
| Types de service    | Code ref à emporter                                   | `A emporter`                                              |
| Types de service    | Envoyer les commandes livrées par la plateforme comme | `commandes à emporter`                                    |
| Remises             | Code ref remise                                       | (laisser vide)                                            |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                            |
| Frais               | Code ref surcharge                                    | (laisser vide)                                            |
| Frais               | Code ref frais d'emballage                            | (laisser vide)                                            |
| Frais               | Code ref pourboire livreur                            | (laisser vide)                                            |
| Frais               | Code ref autres frais                                 | (laisser vide)                                            |
| Paiements           | Code ref paiement en ligne                            | `ONLINE`                                                  |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                            |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`             |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans POS HELPER, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                                   |
| ------------------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber                           | `Plateforme` - Voir [Types de Service](#types-de-service)                  |
| Types de service    | Code ref livraison par le restaurant              | `Livraison`                                                                |
| Types de service    | Code ref à emporter                               | `A emporter`                                                               |
| Types de service    | Code ref sur place                                | `Sur place`                                                                |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes à emporter`                                                     |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans POS HELPER et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                   | (laisser vide)                                                             |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                             |
| Frais               | Code ref supplément petite commande               | (laisser vide)                                                             |
| Frais               | Code ref pourboire                                | (laisser vide)                                                             |
| Paiements           | Code ref paiement en ligne                        | `ONLINE`                                                                   |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                             |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                              |
| Menu                | Activer les notes de préparation sur les articles | Laisser la case décochée                                                   |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par POS HELPER. Si vous utilisez ces notes pour des instructions de cuisson ou de service (par exemple, "Cuisson à point", ou "Coupez en tranches"), vous devez les remplacer par des options dans votre menu Uber Eats.

---
