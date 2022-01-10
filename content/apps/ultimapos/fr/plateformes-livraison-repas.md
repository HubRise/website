---
title: Plateformes de livraison de repas
position: 2
layout: documentation
meta:
  title: Plateformes de livraison de repas | UltimaPOS | HubRise
  description: HubRise permet de connecter le logiciel de caisse UltimaPOS à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de connecter le logiciel de caisse UltimaPOS à Deliveroo, Uber Eats, ou Just Eat. Pour plus d'informations, consultez les pages d'aide de ces plateformes, accessibles depuis notre [page Apps](/apps).

Vous trouverez ci-dessous les paramètres à utiliser pour la configuration de ces plateformes.

## Centres de profit

UltimaPOS assigne chaque commande à un centre de profit. Vous pouvez configurer le centre de profit utilisé en fonction de la plateforme et du mode de livraison, ou utiliser des centres de profit par défaut.

Pour configurer les centres de profit, créez les d'abord dans UltimaPOS. Vous pouvez soit créer un centre de profit par plateforme, soit un centre de profit par plateforme et par mode de livraison. Puis renseignez les identifiants des centres de profit dans les champs **Types de service** des pages de configuration des bridges.

Si les champs **Types de service** ne sont pas renseignés, UltimaPOS assigne chaque commande à un centre de profit par défaut pour la plateforme.

## Deliveroo

Dans la page de configuration de Deliveroo Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                                                          |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | Voir [Centres de profit](#centres-de-profit)                                      |
| Types de service    | Code ref livraison par le restaurant              | Voir [Centres de profit](#centres-de-profit)                                      |
| Types de service    | Code ref à emporter                               | Voir [Centres de profit](#centres-de-profit)                                      |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                                                          |
| Remises             | Code ref promotion                                | Créer une promotion `Deliveroo` dans UltimaPOS et utiliser son identifiant.       |
| Frais               | Code ref frais de livraison                       | Créer un article `Frais de livraison` dans UltimaPOS et utiliser son identifiant. |
| Frais               | Code ref surcharge                                | Créer un article `Surcharge` dans UltimaPOS et utiliser son identifiant.          |
| Paiements           | Code ref paiement sur Deliveroo                   | Créer un règlement `Deliveroo` dans UltimaPOS et utiliser son identifiant.        |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                                    |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                                     |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

## Uber Eats

Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                                                    |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber                           | Voir [Centres de profit](#centres-de-profit)                                |
| Types de service    | Code ref livraison par le restaurant              | Voir [Centres de profit](#centres-de-profit)                                |
| Types de service    | Code ref à emporter                               | Voir [Centres de profit](#centres-de-profit)                                |
| Types de service    | Code ref sur place                                | Voir [Centres de profit](#centres-de-profit)                                |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes en livraison`                                                    |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans UltimaPOS et utiliser son code ref.        |
| Remises             | Code ref remise                                   | Créer une promotion `Uber Eats` dans UltimaPOS et utiliser son identifiant. |
| Paiements           | Code ref paiement                                 | Créer un règlement `Uber Eats` dans UltimaPOS et utiliser son identifiant.  |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                               |
| Menu                | Activer les notes de préparation sur les articles | Cocher la case                                                              |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

UltimaPOS peut afficher les commentaires produits indiqués par vos clients lors du passage de leur commande.

## Just Eat

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivants.

| Section             | Nom                                                   | Code ref                                                                          |
| ------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | Voir [Centres de profit](#centres-de-profit)                                      |
| Types de service    | Code ref livraison par le restaurant                  | Voir [Centres de profit](#centres-de-profit)                                      |
| Types de service    | Code ref à emporter                                   | Voir [Centres de profit](#centres-de-profit)                                      |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                                          |
| Remises             | Code ref promotion                                    | Créer une promotion `Just Eat` dans UltimaPOS et utiliser son identifiant.        |
| Frais               | Code ref frais de livraison                           | Créer un article `Frais de livraison` dans UltimaPOS et utiliser son identifiant. |
| Paiements           | Code ref paiement en ligne                            | Créer un règlement `Just Eat` dans UltimaPOS et utiliser son identifiant.         |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                                    |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                                     |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/configuration).
