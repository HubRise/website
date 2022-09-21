﻿---
title: Plateformes de livraison de repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | SOLUTION | HubRise
  description: HubRise permet de connecter SOLUTION à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans SOLUTION. Vous pouvez aussi envoyer votre menu de SOLUTION vers ces plateformes.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

Vous trouverez ci-dessous les paramètres à utiliser pour connecter les plateformes de livraison de repas à SOLUTION.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans SOLUTION, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                      |
| ------------------- | ------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | (laisser vide)                                |
| Types de service    | Code ref livraison par le restaurant              | (laisser vide)                                |
| Types de service    | Code ref à emporter                               | (laisser vide)                                |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                        |
| Remises             | Code ref promotion                                | (laisser vide)                                |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                |
| Frais               | Code ref surcharge                                | (laisser vide)                                |
| Paiements           | Code ref paiement sur Deliveroo                   | (laisser vide)                                |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"` |

## Just Eat

Pour recevoir les commandes de Just Eat dans SOLUTION, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                      |
| ------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | (laisser vide)                                |
| Types de service    | Code ref livraison par le restaurant                  | (laisser vide)                                |
| Types de service    | Code ref à emporter                                   | (laisser vide)                                |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                        |
| Remises             | Code ref promotion                                    | (laisser vide)                                |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                |
| Paiements           | Code ref paiement en ligne                            | (laisser vide)                                |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans SOLUTION, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats).

| Section             | Nom                                               | Code ref                                                                 |
| ------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| Types de service    | Code ref livraison Uber                           | (laisser vide)                                                           |
| Types de service    | Code ref livraison par le restaurant              | (laisser vide)                                                           |
| Types de service    | Code ref à emporter                               | (laisser vide)                                                           |
| Types de service    | Code ref sur place                                | (laisser vide)                                                           |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes à emporter`                                                   |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans SOLUTION et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                   | (laisser vide)                                                           |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                           |
| Frais               | Code ref supplément petite commande               | (laisser vide)                                                           |
| Frais               | Code ref pourboire                                | (laisser vide)                                                           |
| Paiements           | Code ref paiement                                 | (laisser vide)                                                           |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                            |
| Menu                | Activer les notes de préparation sur les articles | Cocher la case / Laisser la case décochée                                |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par SOLUTION. Si vous utilisez ces notes pour des instructions de cuisson ou de service (par exemple, "Moyen rare cuisson", ou "Coupez en tranches"), vous devez ajouter les options correspondantes dans votre EPOS et les inclure dans votre menu Uber Eats.

---

SOLUTION peut afficher les commentaires produits indiqués par vos clients lors du passage de leur commande.
