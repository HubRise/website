---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | Nestor | HubRise
  description: HubRise permet de connecter le logiciel de caisse Nestor à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de connecter le logiciel de caisse Nestor à Deliveroo, Uber Eats, ou Just Eat. Pour plus d'informations, consultez les pages d'aide de ces plateformes, accessibles depuis notre [page Apps](/apps).

Vous trouverez ci-dessous les paramètres à utiliser pour la configuration de ces plateformes.

## Deliveroo

Dans la page de configuration de Deliveroo Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                      |
| ------------------- | ------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | `DVLIV`                                       |
| Types de service    | Code ref livraison par le restaurant              | `DVLIVR`                                      |
| Types de service    | Code ref à emporter                               | `DVEMP`                                       |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                      |
| Remises             | Code ref promotion                                | (laisser vide)                                |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                |
| Frais               | Code ref surcharge                                | (laisser vide)                                |
| Paiements           | Code ref paiement sur Deliveroo                   | `DV`                                          |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"` |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

## Uber Eats

Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                                          |
| ------------------- | ------------------------------------------------- | ----------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber                           | `UELIV`                                                           |
| Types de service    | Code ref livraison par le restaurant              | `UELIVR`                                                          |
| Types de service    | Code ref à emporter                               | `UEEMP`                                                           |
| Types de service    | Code ref sur place                                | `UEPLA`                                                           |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes en livraison`                                          |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans Nestor et utiliser son code ref. |
| Remises             | Code ref remise                                   | (laisser vide)                                                    |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                                    |
| Frais               | Code ref supplément petite commande               | (laisser vide)                                                    |
| Frais               | Code ref pourboire                                | (laisser vide)                                                    |
| Paiements           | Code ref paiement                                 | `UE`                                                              |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                     |
| Menu                | Activer les notes de préparation sur les articles | Cocher la case                                                    |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

Nestor peut afficher les commentaires produits indiqués par vos clients lors du passage de leur commande.

## Just Eat

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivants.

| Section             | Nom                                                   | Code ref                                      |
| ------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | `JELIV`                                       |
| Types de service    | Code ref livraison par le restaurant                  | `JELIVR`                                      |
| Types de service    | Code ref à emporter                                   | `JEEMP`                                       |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                      |
| Remises             | Code ref promotion                                    | (laisser vide)                                |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                |
| Paiements           | Code ref paiement en ligne                            | `JE`                                          |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/configuration).
