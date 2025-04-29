---
title: Plateformes de livraison de repas
path_override: plateformes-de-commande-de-repas
position: 6
layout: documentation
meta:
  title: Plateformes de commande en ligne | Drive Eat | HubRise
  description: Pour intégrer Drive Eat à des plateformes de commande de repas, vous devez spécifier des codes ref dans la page de configuration de leur bridge.
---

Avec HubRise, vous pouvez recevoir des commandes de Deliveroo, Uber Eats, Delicity et d'autres plateformes de commande de repas dans Drive Eat. Vous pouvez également envoyer votre menu depuis Drive Eat vers les plateformes.

Cette page décrit la configuration à utiliser pour connecter les plateformes de commande de repas à Drive Eat.

Pour plus d'informations, consultez la documentation de ces plateformes accessible depuis notre [page Apps](/apps#food-ordering-platforms).

## Deliveroo

Pour recevoir les commandes Deliveroo dans Drive Eat, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Sur la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants :

| Section             | Nom                                               | Code ref                                                       |
| ------------------- | ------------------------------------------------- |----------------------------------------------------------------|
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Acceptée"`               |
| Types de service    | Code ref livraison par Deliveroo                  | platform_delivery                                              |
| Types de service    | Code ref livraison par le restaurant              | delivery                                                       |
| Types de service    | Code ref à emporter                               | takeAway                                                       |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                                       |
| Articles spéciaux   | Code ref option consigne                          | Créer une option dans Drive Eat et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                   | (laisser vide)                                                 |
| Frais               | Code ref frais de livraison                       | LIV                                                            |
| Frais               | Code ref surcharge                                | (laisser vide)                                                 |
| Frais               | Code ref frais d'emballage                        | (laisser vide)                                                 |
| Paiements           | Code ref paiement en ligne                        | DELIVEROO                                                      |
| Paiements           | Code ref paiement en espèces                      | CASH                                                           |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Laisser décochée                                               |

(\*) Applicable uniquement si certains de vos produits nécessitent une consigne.

## Uber Eats

Pour recevoir les commandes Uber Eats dans Drive Eat, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Sur la page de configuration d'Uber Eats Bridge, utilisez les paramètres suivants :

| Section             | Nom                                          | Code ref                                                       |
| ------------------- | -------------------------------------------- |----------------------------------------------------------------|
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Acceptée"`                  |
| Types de service    | Code ref livraison par Uber Eats             | platform_delivery                                              |
| Types de service    | Code ref livraison par le restaurant         | delivery                                                       |
| Types de service    | Code ref à emporter                          | takeAway                                                       |
| Types de service    | Code ref sur place                           | onSite                                                         |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes en livraison`                                       |
| Articles spéciaux   | Code ref jetables                            | Créer un produit dans Drive Eat et utiliser son code ref. (\*) |
| Remises             | Code ref remise                              | (laisser vide)                                                 |
| Frais               | Code ref frais de livraison                  | LIV                                                            |
| Frais               | Code ref supplément petite commande          | (laisser vide)                                                 |
| Frais               | Code ref pourboire                           | (laisser vide)                                                 |
| Paiements           | Code ref paiement en ligne                   | UBER                                                           |
| Paiements           | Code ref paiement en espèces                 | CASH                                                           |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Cocher la case                                                 |

(\*) Ne s'applique que si vous proposez des articles jetables tels que des couverts, des serviettes, etc.

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par Drive Eat. Si vous comptez sur ces notes pour des instructions de cuisson ou de service (par exemple, "Cuisson à point", ou "Coupez en tranches"), vous devez les remplacer par des options dans votre menu Uber Eats.

---
