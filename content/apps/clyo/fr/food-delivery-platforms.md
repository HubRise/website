---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | Clyo Systems | HubRise
  description: HubRise permet de connecter Clyo Systems à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Clyo Systems. Vous pouvez aussi envoyer votre menu de Clyo Systems vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Clyo Systems.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps#food-ordering-platforms).

## Configuration de Clyo Systems

En fonction de vos besoins, vous devrez créer des méthodes de paiement spécifiques aux plateformes dans Clyo Systems.

### PRODUITS, PROMOTIONS, ...

Décrire les éléments à créer avant de connecter les plateformes de livraison de repas.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Clyo, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                               |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | `Deliveroo`                                                            |
| Types de service    | Code ref livraison par le restaurant              | `Deliveroo`                                                            |
| Types de service    | Code ref à emporter                               | `Deliveroo`                                                            |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                                                 |
| Remises             | Code ref remise                                   | (laisser vide)                                                         |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                         |
| Frais               | Code ref surcharge                                | (laisser vide)                                                         |
| Frais               | Code ref frais d'emballage                        | (laisser vide)                                                         |
| Paiements           | Code ref paiement en ligne                        | Créer un type de règlement dans Clyo Systems et utiliser son code ref. |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                         |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                          |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez support@hubrise.com.

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans Clyo avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                               |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | `Just Eat`                                                             |
| Types de service    | Code ref livraison par le restaurant                  | `Just Eat`                                                             |
| Types de service    | Code ref à emporter                                   | `Just Eat`                                                             |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                                                 |
| Remises             | Code ref remise                                       | (laisser vide)                                                         |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                                         |
| Frais               | Code ref frais de service                             | (laisser vide)                                                         |
| Paiements           | Code ref paiement en ligne                            | Créer un type de règlement dans Clyo Systems et utiliser son code ref. |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                         |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                          |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans Clyo avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt/overview).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             |     | Nom                                                   | Code ref                                                               |
| ------------------- | --- | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Types de service    |     | Code ref livraison par la plateforme                  | `Just Eat`                                                             |
| Types de service    |     | Code ref livraison par le restaurant                  | `Just Eat`                                                             |
| Types de service    |     | Code ref à emporter                                   | `Just Eat`                                                             |
| Types de service    |     | Envoyer les commandes livrées par la plateforme comme | `commandes à emporter`                                                 |
| Remises             |     | Code ref remise                                       | (laisser vide)                                                         |
| Frais               |     | Code ref frais de livraison                           | (laisser vide)                                                         |
| Frais               |     | Code ref surcharge                                    | (laisser vide)                                                         |
| Frais               |     | Code ref frais d'emballage                            | (laisser vide)                                                         |
| Frais               |     | Code ref pourboire livreur                            | (laisser vide)                                                         |
| Frais               |     | Code ref autres frais                                 | (laisser vide)                                                         |
| Paiements           |     | Code ref paiement en ligne                            | Créer un type de règlement dans Clyo Systems et utiliser son code ref. |
| Paiements           |     | Code ref paiement en espèces                          | (laisser vide)                                                         |
| Statuts de commande |     | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                          |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Clyo, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                               |
| ------------------- | ------------------------------------------------- |------------------------------------------------------------------------|
| Types de service    | Code ref livraison Uber                           | `Uber Eats`                                                            |
| Types de service    | Code ref livraison par le restaurant              | `Uber Eats`                                                            |
| Types de service    | Code ref à emporter                               | `Uber Eats`                                                            |
| Types de service    | Code ref sur place                                | `Uber Eats`                                                            |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes à emporter`                                                 |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans Clyo et utiliser son code ref. (\*)   |
| Remises             | Code ref remise                                   | (laisser vide)                                                         |
| Frais               | Code ref frais de livraison                       | Créer un produit dans Clyo Systems et utiliser son code ref.           |
| Frais               | Code ref supplément petite commande               | Créer un produit dans Clyo Systems et utiliser son code ref.                                                          |
| Frais               | Code ref pourboire                                | Créer un produit dans Clyo Systems et utiliser son code ref.                                                          |
| Paiements           | Code ref paiement en ligne                        | Créer un type de règlement dans Clyo Systems et utiliser son code ref. |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                         |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                          |
| Menu                | Activer les notes de préparation sur les articles | Cocher si vous souhaitez les activer / Laisser la case décochée        |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par Clyo. Si vous utilisez ces notes pour des instructions de cuisson ou de service (par exemple, "Cuisson à point", ou "Coupez en tranches"), vous devez les remplacer par des options dans votre menu Uber Eats.

---
