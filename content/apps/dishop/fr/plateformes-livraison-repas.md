---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | Dishop | HubRise
  description: HubRise permet de connecter Dishop à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Dishop. L'idée étant de centraliser les commandes sur une même interface de gestion, celle de Dishop, lorsqu'un logiciel de caisse ne peut-être connecté pour le faire.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Dishop.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

## Configuration de Dishop

En fonction de vos besoins, vous devrez créer des PRODUITS, PROMOTIONS, MÉTHODES DE PAIEMENT... spécifiques aux plateformes dans SOLUTION.

Si vous n'utilisez pas ces fonctionnalités, vous pouvez sauter la création de ces éléments et laisser vides les champs correspondants.

### PRODUITS, PROMOTIONS, ...

Décrire les éléments à créer avant de connecter les plateformes de livraison de repas.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Dishop, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                               |
| ------------------- | ------------------------------------------------- |----------------------------------------|
| Types de service    | Code ref livraison par Deliveroo                  | (laisser vide)                         |
| Types de service    | Code ref livraison par le restaurant              | (laisser vide)                         |
| Types de service    | Code ref à emporter                               | (laisser vide)                         |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`               |
| Remises             | Code ref remise                                   | (laisser vide)                         |
| Frais               | Code ref frais de livraison                       | (laisser vide)                         |
| Frais               | Code ref surcharge                                | (laisser vide)                         |
| Paiements           | Code ref paiement sur Deliveroo                   | (laisser vide)                         |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                         |
| Statuts de commande | Marquer les commandes comme Acceptées             | `dès qu'elles sont envoyées à HubRise` |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez [support@hubrise.com](mailto:support@hubrise.com).

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans Dishop avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                   |
| ------------------- | ----------------------------------------------------- |--------------------------------------------|
| Types de service    | Code ref livraison par la plateforme                  | (laisser vide)                             |
| Types de service    | Code ref livraison par le restaurant                  | (laisser vide)                             |
| Types de service    | Code ref à emporter                                   | (laisser vide)                             |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                   |
| Remises             | Code ref remise                                       | (laisser vide)                             |
| Frais               | Code ref frais de livraison                           | (laisser vide)                             |
| Paiements           | Code ref paiement en ligne                            | (laisser vide)                             |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                             |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `dès qu'elles sont envoyées à HubRise`     |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans Dishop avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             |     | Nom                                                   | Code ref                               |
|---------------------| --- | ----------------------------------------------------- |----------------------------------------|
| Types de service    |     | Code ref livraison par la plateforme                  | (laisser vide)                         |
| Types de service    |     | Code ref livraison par le restaurant                  | (laisser vide)                         |
| Types de service    |     | Code ref à emporter                                   | (laisser vide)                         |
| Types de service    |     | Envoyer les commandes livrées par la plateforme comme | `commandes en livraison`               |
| Remises             |     | Code ref remise                                       | (laisser vide)                         |
| Frais               |     | Code ref frais de livraison                           | (laisser vide)                         |
| Frais               |     | Code ref surcharge                                    | (laisser vide)                         |
| Frais               |     | Code ref frais d'emballage                            | (laisser vide)                         |
| Frais               |     | Code ref pourboire livreur                            | (laisser vide)                         |
| Frais               |     | Code ref autres frais                                 | (laisser vide)                         |
| Paiements           |     | Code ref paiement en ligne                            | (laisser vide)                         |
| Paiements           |     | Code ref paiement en espèces                          | (laisser vide)                         |
| Statuts de commande |     | Marquer les commandes comme Acceptées                 | `dès qu'elles sont envoyées à HubRise` |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Dishop, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                        |
| ------------------- | ------------------------------------------------- |-----------------------------------------------------------------|
| Types de service    | Code ref livraison Uber                           | (laisser vide)                                                  |
| Types de service    | Code ref livraison par le restaurant              | (laisser vide)                                                  |
| Types de service    | Code ref à emporter                               | (laisser vide)                                                  |
| Types de service    | Code ref sur place                                | (laisser vide)                                                  |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes en livraison`                                        |
| Articles spéciaux   | Code ref jetables                                 | (laisser vide)(\*)                                              |
| Remises             | Code ref remise                                   | (laisser vide)                                                  |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                  |
| Frais               | Code ref supplément petite commande               | (laisser vide)                                                  |
| Frais               | Code ref pourboire                                | (laisser vide)                                                  |
| Paiements           | Code ref paiement                                 | (laisser vide)                                                  |
| Statuts de commande | Marquer les commandes comme Acceptées             | `dès qu'elles sont envoyées à HubRise`                          |
| Menu                | Activer les notes de préparation sur les articles | Cocher si vous souhaitez les activer / Laisser la case décochée |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.

