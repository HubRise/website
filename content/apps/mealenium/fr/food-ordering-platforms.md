---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | Mealenium | HubRise
  description: HubRise permet de connecter Mealenium à Deliveroo, Uber Eats, Just Eat, et autres plateformes. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Mealenium. Vous pouvez aussi envoyer votre menu de Mealenium vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Mealenium.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps#food-ordering-platforms).

## Configuration de Mealenium

Il n'y a pas de configuration spécifique à faire dans Mealenium pour la réception de commandes en provenant des plateformes.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Mealenium, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                         |
| ------------------- | ------------------------------------------------- | ------------------------------------------------ |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Acceptée"` |
| Types de service    | Code ref livraison par Deliveroo                  | `deli_delivery`                                  |
| Types de service    | Code ref livraison par le restaurant              | `deli_own_deli`                                  |
| Types de service    | Code ref à emporter                               | `deli_collect`                                   |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                           |
| Remises             | Code ref remise                                   | (laisser vide)                                   |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                   |
| Frais               | Code ref surcharge                                | (laisser vide)                                   |
| Frais               | Code ref frais d'emballage                        | (laisser vide)                                   |
| Paiements           | Code ref paiement en ligne                        | (laisser vide)                                   |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                   |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Laisser la case décochée                         |

## Just Eat

Pour recevoir les commandes de Just Eat dans Mealenium avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                         |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------ |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Acceptée"` |
| Types de service    | Code ref livraison par la plateforme                  | `just_delivery`                                  |
| Types de service    | Code ref livraison par le restaurant                  | `just_own_deli`                                  |
| Types de service    | Code ref à emporter                                   | `just_collect`                                   |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                           |
| Remises             | Code ref remise                                       | (laisser vide)                                   |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                   |
| Frais               | Code ref frais de service                             | (laisser vide)                                   |
| Paiements           | Code ref paiement en ligne                            | (laisser vide)                                   |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                   |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Mealenium, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                          | Code ref                                                                  |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Acceptée"`                          |
| Types de service    | Code ref livraison Uber                      | `uber_delivery`                                                           |
| Types de service    | Code ref livraison par le restaurant         | `uber_own_deli`                                                           |
| Types de service    | Code ref à emporter                          | `uber_collect`                                                            |
| Types de service    | Code ref sur place                           | `uber_eat_in`                                                             |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes à emporter`                                                    |
| Articles spéciaux   | Code ref jetables                            | Créer un article `Jetables` dans Mealenium et utiliser son code ref. (\*) |
| Remises             | Code ref remise                              | (laisser vide)                                                            |
| Frais               | Code ref frais de livraison                  | (laisser vide)                                                            |
| Frais               | Code ref supplément petite commande          | (laisser vide)                                                            |
| Frais               | Code ref pourboire                           | (laisser vide)                                                            |
| Paiements           | Code ref paiement en ligne                   | (laisser vide)                                                            |
| Paiements           | Code ref paiement en espèces                 | (laisser vide)                                                            |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Laisser la case décochée                                                  |
| Catalogue           | Activer les notes de préparation [...]       | Cocher si vous souhaitez les activer / Laisser la case décochée           |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.
