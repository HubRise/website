---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | Nestor | HubRise
  description: HubRise permet de connecter le logiciel de caisse Nestor à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Nestor. Vous pouvez aussi envoyer votre menu de Nestor vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Nestor.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Nestor, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                      |
| ------------------- | ------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | `DVLIV`                                       |
| Types de service    | Code ref livraison par le restaurant              | `DVLIVR`                                      |
| Types de service    | Code ref à emporter                               | `DVEMP`                                       |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                        |
| Remises             | Code ref remise                                   | (laisser vide)                                |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                |
| Frais               | Code ref surcharge                                | (laisser vide)                                |
| Frais               | Code ref frais d'emballage                        | (laisser vide)                                |
| Paiements           | Code ref paiement en ligne                        | `DV`                                          |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"` |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez [support@hubrise.com](mailto:support@hubrise.com).

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans Nestor avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                      |
| ------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | `JELIV`                                       |
| Types de service    | Code ref livraison par le restaurant                  | `JELIVR`                                      |
| Types de service    | Code ref à emporter                                   | `JEEMP`                                       |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                        |
| Remises             | Code ref remise                                       | (laisser vide)                                |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                |
| Paiements           | Code ref paiement en ligne                            | `JE`                                          |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans Nestor avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                      |
| ------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | `JELIV`                                       |
| Types de service    | Code ref livraison par le restaurant                  | `JELIVR`                                      |
| Types de service    | Code ref à emporter                                   | `JEEMP`                                       |
| Types de service    | Envoyer les commandes livrées par la plateforme comme | `commandes à emporter`                        |
| Remises             | Code ref remise                                       | (laisser vide)                                |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                |
| Frais               | Code ref surcharge                                    | (laisser vide)                                |
| Frais               | Code ref frais d'emballage                            | (laisser vide)                                |
| Frais               | Code ref pourboire livreur                            | (laisser vide)                                |
| Frais               | Code ref autres frais                                 | (laisser vide)                                |
| Paiements           | Code ref paiement en ligne                            | `JE`                                          |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Nestor, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                               |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber                           | `UELIV`                                                                |
| Types de service    | Code ref livraison par le restaurant              | `UELIVR`                                                               |
| Types de service    | Code ref à emporter                               | `UEEMP`                                                                |
| Types de service    | Code ref sur place                                | `UEPLA`                                                                |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes à emporter`                                                 |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans Nestor et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                   | (laisser vide)                                                         |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                         |
| Frais               | Code ref supplément petite commande               | (laisser vide)                                                         |
| Frais               | Code ref pourboire                                | (laisser vide)                                                         |
| Paiements           | Code ref paiement en ligne                        | `UE`                                                                   |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                         |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                          |
| Menu                | Activer les notes de préparation sur les articles | Cocher si vous souhaitez les activer                                   |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.
