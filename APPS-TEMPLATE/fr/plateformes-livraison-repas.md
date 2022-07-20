---
title: Plateformes de livraison de repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | SOLUTION | HubRise
  description: HubRise permet de connecter SOLUTION à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de commande et de livraison de repas dans SOLUTION pour une gestion centralisée des commandes.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

Vous trouverez ci-dessous les paramètres à utiliser pour connecter les plateformes de livraison de repas à SOLUTION.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans SOLUTION, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Deliveroo Bridge, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

Dans la page de configuration de Deliveroo Bridge, utilisez les codes ref suivants.

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

## Just Eat Takeaway

Pour recevoir les commandes de Just Eat Takeaway dans SOLUTION, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Just Eat Takeaway Bridge, consultez l'aide sur la  [configuration de Just Eat Takeaway Bridge (en anglais)](/apps/just-eat-takeaway/configuration).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivants.

| Section             | Nom                                                   | Code ref                                                             |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | (laisser vide)                                                       |
| Types de service    | Code ref livraison par le restaurant                  | (laisser vide)                                                       |
| Types de service    | Code ref à emporter                                   | (laisser vide)                                                       |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                             |
| Remises             | Code ref promotion                                    | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                                       |
| Paiements           | Code ref paiement en ligne                            | (laisser vide)                                                       |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                       |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                        |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans SOLUTION, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Uber Eats Bridge, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                      |
| ------------------- | ------------------------------------------------- | ----------------------------------------------|
| Types de service    | Code ref livraison Uber                           | (laisser vide)                                |
| Types de service    | Code ref livraison par le restaurant              | (laisser vide)                                |
| Types de service    | Code ref à emporter                               | (laisser vide)                                |
| Types de service    | Code ref sur place                                | (laisser vide)                                |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes à emporter`                        |
| Articles spéciaux   | Code ref jetables                                 | (laisser vide)                                |
| Remises             | Code ref remise                                   | (laisser vide)                                |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                |
| Frais               | Code ref supplément petite commande               | (laisser vide)                                |
| Frais               | Code ref pourboire                                | (laisser vide)                                |
| Paiements           | Code ref paiement                                 | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"` |
| Menu                | Activer les notes de préparation sur les articles | Cocher la case / Laisser la case décochée     |


SOLUTION peut afficher les commentaires produits indiqués par vos clients. Vous pouvez donc laisser cette fonctionnalité activée sur Uber Eats.

---

**REMARQUE IMPORTANTE :** Les commentaires produits indiqués par vos clients ne sont pas supportées par SOLUTION. Vous devez donc désactiver cette fonctionnalité sur Uber Eats. Pour donner davantage de flexibilité à vos clients, vous pouvez inclure davantage d'options pour chacun des produits. Par exemple : Point de cuisson d'une viande, bleue, saignante, à point ou bien cuite.

---

SOLUTION peut afficher les commentaires sur les commandes faits par vos clients lors du passage de leur commande. Vous pouvez donc laisser cette fonctionnalité activée sur Uber Eats.

---

**REMARQUE IMPORTANTE :** Les commentaires sur les commandes que vos clients peuvent faire dans le panier lors du passage de leur commande ne sont pas supportées par SOLUTION. Vous devez donc désactiver cette fonctionnalité sur Uber Eats.

---