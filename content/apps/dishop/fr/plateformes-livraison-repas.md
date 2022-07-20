---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | Dishop | HubRise
  description: HubRise permet de connecter Dishop à Deliveroo, Uber Eats, ou Just Eat pour une gestion centralisée des commandes. Paramètres à utiliser la configuration.
---

HubRise permet de recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de commande et de livraison de repas dans Dishop pour une gestion centralisée des commandes. 

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

Vous trouverez ci-dessous les paramètres à utiliser pour connecter les plateformes de livraison de repas à Dishop.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans Dishop, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Deliveroo Bridge, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

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

Pour recevoir les commandes de Just Eat Takeaway dans Dishop, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Just Eat Takeaway Bridge, consultez l'aide sur la <Link to="/apps/just-eat-takeaway/configuration" addLocalePrefix={false}>configuration de Just Eat Takeaway Bridge (en anglais)</Link>.

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

Pour recevoir les commandes de Uber Eats dans Dishop, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour configurer Uber Eats Bridge, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

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

Dishop peut afficher les commentaires produits indiqués par vos clients avant d'inclure un produit dans leur panier. Vous pouvez donc laisser cette fonctionnalité activée sur Uber Eats.

Dishop ne peut pas afficher les commentaires sur les commandes faits par vos clients, au niveau du panier Uber Eats, lors du passage de leur commande. Il est donc nécessaire de désactiver cette fonctionnalité Uber Eats lorsque vous utilisez Dishop pour la réception et la gestion des commandes Uber Eats.
