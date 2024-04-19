---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 3
layout: documentation
meta:
  title: Plateformes de livraison de repas | Adipos | HubRise
  description: HubRise permet de connecter Adipos à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans Adipos. Vous pouvez aussi envoyer votre menu de Adipos vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à Adipos.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps#food-ordering-platforms).

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Adipos, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                      |
| ------------------- | ------------------------------------------------- | --------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"` |
| Types de service    | Code ref livraison par Deliveroo                  | `DELIVEROO`                                   |
| Types de service    | Code ref livraison par le restaurant              | `DELIVEROO`                                   |
| Types de service    | Code ref à emporter                               | `DELIVEROO`                                   |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                        |
| Remises             | Code ref remise                                   | (laisser vide)                                |
| Frais               | Code ref frais de livraison                       | `DELIVERY`                                    |
| Frais               | Code ref surcharge                                | `OTHER`                                       |
| Frais               | Code ref frais d'emballage                        | `OTHER`                                       |
| Paiements           | Code ref paiement en ligne                        | `DELIVEROO`                                   |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Cocher cette case                             |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez support@hubrise.com.

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans Adipos avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                      |
| ------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |
| Types de service    | Code ref livraison par la plateforme                  | `JUSTEAT`                                     |
| Types de service    | Code ref livraison par le restaurant                  | `JUSTEAT`                                     |
| Types de service    | Code ref à emporter                                   | `JUSTEAT`                                     |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                        |
| Remises             | Code ref remise                                       | (laisser vide)                                |
| Frais               | Code ref frais de livraison                           | `DELIVERY`                                    |
| Frais               | Code ref frais de service                             | `OTHER`                                       |
| Paiements           | Code ref paiement en ligne                            | `JUSTEAT`                                     |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans Adipos avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt/overview).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                      |
| ------------------- |-------------------------------------------------------| --------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |
| Types de service    | Code ref livraison par la plateforme                  | `JUSTEAT`                                     |
| Types de service    | Code ref livraison par le restaurant                  | `JUSTEAT`                                     |
| Types de service    | Code ref à emporter                                   | `JUSTEAT`                                     |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                        |
| Remises             | Code ref remise                                       | (laisser vide)                                |
| Frais               | Code ref frais de livraison                           | `DELIVERY`                                    |
| Frais               | Code ref surcharge                                    | `OTHER`                                       |
| Frais               | Code ref frais d'emballage                            | `OTHER`                                       |
| Frais               | Code ref pourboire livreur                            | `TIP`                                         |
| Frais               | Code ref autres frais                                 | `OTHER`                                       |
| Paiements           | Code ref paiement en ligne                            | `JUSTEAT`                                     |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                |
| Clients             | Dupliquer le code d'accès téléphone [...]             | Cocher cette case                                     |

## Smood

Pour recevoir les commandes de Smood dans Adipos, vous devez d'abord connecter Smood à HubRise. Pour plus d'informations sur la connexion de Smood à HubRise, consultez la [documentation Smood](/apps/smood/overview).

Dans la page de configuration de Smood, utilisez les paramètres suivants.

| Section          | Nom                                                   | Code ref               |
| ---------------- | ----------------------------------------------------- | ---------------------- |
| Types de service | Code ref de plateforme de livraison                   | `SMOOD`                |
| Types de service | Code ref de livraison par le restaurant               | `SMOOD`                |
| Types de service | A l'empoter code ref                                  | `SMOOD`                |
| Types de service | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter` |
| Remises          | Code ref remise                                       | (laisser vide)         |
| Frais            | Code ref frais de livraison                           | `DELIVERY`             |
| Paiements        | Code ref paiement en ligne                            | `SMOOD`                |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans Adipos, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                          | Code ref                                                               |
| ------------------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Reçue"`                          |
| Types de service    | Code ref livraison Uber                      | `UBEREATS`                                                             |
| Types de service    | Code ref livraison par le restaurant         | `UBEREATS`                                                             |
| Types de service    | Code ref à emporter                          | `UBEREATS`                                                             |
| Types de service    | Code ref sur place                           | `UBEREATS`                                                             |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes à emporter`                                                 |
| Articles spéciaux   | Code ref jetables                            | Créer un article `Jetables` dans Adipos et utiliser son code ref. (\*) |
| Remises             | Code ref remise                              | (laisser vide)                                                         |
| Frais               | Code ref frais de livraison                  | `DELIVERY`                                                             |
| Frais               | Code ref supplément petite commande          | `OTHER`                                                                |
| Frais               | Code ref pourboire                           | `TIP`                                                                  |
| Paiements           | Code ref paiement en ligne                   | `UBEREATS`                                                             |
| Paiements           | Code ref paiement en espèces                 | (laisser vide)                                                         |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Cocher cette case                                                      |
| Menu                | Activer les notes de préparation [...]       | Laisser la case décochée                                               |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par Adipos. Si vous utilisez ces notes pour des instructions de cuisson ou de service (par exemple, "Cuisson à point", ou "Coupez en tranches"), vous devez les remplacer par des options dans votre menu Uber Eats.

---
