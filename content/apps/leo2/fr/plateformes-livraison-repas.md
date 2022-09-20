---
title: Plateformes de livraison de repas
position: 7
layout: documentation
meta:
  title: Plateformes de livraison de repas | LEO2 | HubRise
  description: HubRise permet de connecter le logiciel de caisse LEO2 à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de connecter le logiciel de caisse LEO2 à Deliveroo, Uber Eats, ou Just Eat. Pour plus d'informations, consultez les pages d'aide de ces plateformes, accessibles depuis notre [page Apps](/apps).

Vous trouverez ci-dessous les paramètres à utiliser pour la configuration de ces plateformes.

## Deliveroo

Dans la page de configuration de Deliveroo Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                                             |
| ------------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service    | Code ref livraison par le restaurant              | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref à emporter                               | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                                             |
| Remises             | Code ref promotion                                | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                       | Créer un produit dans LEO2 et utiliser son code ref.                 |
| Frais               | Code ref surcharge                                | Créer un produit dans LEO2 et utiliser son code ref.                 |
| Paiements           | Code ref paiement sur Deliveroo                   | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                       |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                        |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

## Uber Eats

Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                                             |
| ------------------- | ------------------------------------------------- |----------------------------------------------------------------------|
| Types de service    | Code ref livraison Uber                           | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service    | Code ref livraison par le restaurant              | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref à emporter                               | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref sur place                                | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes en livraison`                                             |
| Articles spéciaux   | Code ref jetables                                 | Créer un produit `Jetables` dans LEO2 et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                   | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                       | Créer un produit dans LEO2 et utiliser son code ref.                 |
| Frais               | Code ref supplément petite commande               | Créer un produit dans LEO2 et utiliser son code ref.                 |
| Frais               | Code ref pourboire                                | Créer un produit dans LEO2 et utiliser son code ref.                 |
| Paiements           | Code ref paiement                                 | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                        |
| Menu                | Activer les notes de préparation sur les articles | Cocher la case                                                       |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

LEO2 peut afficher les commentaires produits indiqués par vos clients lors du passage de leur commande.

## Just Eat

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivants.

| Section             | Nom                                                   | Code ref                                                             |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service    | Code ref livraison par le restaurant                  | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref à emporter                                   | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                             |
| Remises             | Code ref promotion                                    | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                           | Créer un produit dans LEO2 et utiliser son code ref.                 |
| Paiements           | Code ref paiement en ligne                            | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                       |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                        |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/configuration).
