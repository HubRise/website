---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | Tick'Eat | HubRise
  description: HubRise permet de connecter Tick'Eat à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Tick'Eat. Vous pouvez aussi envoyer votre menu de Tick'Eat vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Tick'Eat.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps#food-ordering-platforms).

## Configuration de Tick'Eat

En fonction de vos besoins, vous devrez créer des produits et des moyens de paiement spécifiques aux plateformes dans Tick'Eat.

Si vous n'utilisez pas ces fonctionnalités, vous pouvez sauter la création de ces éléments et laisser vides les champs correspondants.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Tick'Eat, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                                                                |
| ------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                                                           |
| Types de service    | Code ref livraison par Deliveroo                  | `deliveroo`                                                                                             |
| Types de service    | Code ref livraison par le restaurant              | `deliveroo`                                                                                             |
| Types de service    | Code ref à emporter                               | `deliveroo`                                                                                             |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                                                                                  |
| Articles spéciaux   | Code ref option consigne                          | (laisser vide)                                                                                          |
| Remises             | Code ref remise                                   | (laisser vide)                                                                                          |
| Frais               | Code ref frais de livraison                       | `delivery_fees`                                                                                         |
| Frais               | Code ref surcharge                                | Si applicable, créer un article `Surcharge` dans Tick'Eat et utiliser son code ref. Laisser vide sinon. |
| Frais               | Code ref frais d'emballage                        | Si applicable, créer un article `Emballage` dans Tick'Eat et utiliser son code ref. Laisser vide sinon. |
| Paiements           | Code ref paiement en ligne                        | Créer un moyen de paiement dans Tick'Eat et utiliser son code ref                                       |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                                                          |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Laisser la case décochée                                                                                |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez support@hubrise.com.

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans Tick'Eat avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                                                              |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                                                         |
| Types de service    | Code ref livraison par la plateforme                  | `just_eat`                                                                                            |
| Types de service    | Code ref livraison par le restaurant                  | `just_eat`                                                                                            |
| Types de service    | Code ref à emporter                                   | `just_eat`                                                                                            |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                                                                                |
| Remises             | Code ref remise                                       | (laisser vide)                                                                                        |
| Frais               | Code ref frais de livraison                           | `delivery_fees`                                                                                       |
| Frais               | Code ref frais de service                             | Si applicable, créer un article `Service` dans Tick'Eat et utiliser son code ref. Laisser vide sinon. |
| Paiements           | Code ref paiement en ligne                            | Créer un moyen de paiement dans Tick'Eat et utiliser son code ref                                     |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                                                        |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans Tick'Eat avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt/overview).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                                                                |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                                                           |
| Types de service    | Code ref livraison par la plateforme                  | `just_eat`                                                                                              |
| Types de service    | Code ref livraison par le restaurant                  | `just_eat`                                                                                              |
| Types de service    | Code ref à emporter                                   | `just_eat`                                                                                              |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                                                                                  |
| Articles spéciaux   | Code ref option consigne                              | (laisser vide)                                                                                          |
| Remises             | Code ref remise                                       | (laisser vide)                                                                                          |
| Frais               | Code ref frais de livraison                           | `delivery_fees`                                                                                         |
| Frais               | Code ref surcharge                                    | Si applicable, créer un article `Surcharge` dans Tick'Eat et utiliser son code ref. Laisser vide sinon. |
| Frais               | Code ref frais d'emballage                            | Si applicable, créer un article `Emballage` dans Tick'Eat et utiliser son code ref. Laisser vide sinon. |
| Frais               | Code ref pourboire livreur                            | Si applicable, créer un article `Pourboire` dans Tick'Eat et utiliser son code ref. Laisser vide sinon. |
| Frais               | Code ref autres frais                                 | (laisser vide)                                                                                          |
| Paiements           | Code ref paiement en ligne                            | Créer un moyen de paiement dans Tick'Eat et utiliser son code ref                                       |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                                                          |
| Clients             | Dupliquer le code d'accès téléphone [...]             | Laisser la case décochée                                                                                |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Tick'Eat, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                          | Code ref                                                                                                      |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Reçue"`                                                                 |
| Types de service    | Code ref livraison Uber                      | `uber_eats`                                                                                                   |
| Types de service    | Code ref livraison par le restaurant         | `uber_eats`                                                                                                   |
| Types de service    | Code ref à emporter                          | `uber_eats`                                                                                                   |
| Types de service    | Code ref sur place                           | `uber_eats`                                                                                                   |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes à emporter`                                                                                        |
| Articles spéciaux   | Code ref jetables                            | Créer un article `Jetables` dans Tick'Eat et utiliser son code ref. (\*)                                      |
| Remises             | Code ref remise                              | (laisser vide)                                                                                                |
| Frais               | Code ref frais de livraison                  | `delivery_fees`                                                                                               |
| Frais               | Code ref supplément petite commande          | Si applicable, créer un article `Petite commande` dans Tick'Eat et utiliser son code ref. Laisser vide sinon. |
| Frais               | Code ref pourboire                           | Si applicable, créer un article `Pourboire` dans Tick'Eat et utiliser son code ref. Laisser vide sinon.       |
| Paiements           | Code ref paiement en ligne                   | Créer un moyen de paiement dans Tick'Eat et utiliser son code ref                                             |
| Paiements           | Code ref paiement en espèces                 | (laisser vide)                                                                                                |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Laisser la case décochée                                                                                      |
| Catalogue           | Activer les notes de préparation [...]       | Cocher si vous souhaitez les activer                                                                          |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.
