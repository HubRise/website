---
title: Plateformes de livraison de repas
position: 5
layout: documentation
meta:
  title: Plateformes de livraison de repas | LEO2 | HubRise
  description: HubRise permet de connecter le logiciel de caisse LEO2 à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de connecter le logiciel de caisse LEO2 à Deliveroo, Uber Eats, Just Eat ou d'autres plateformes de commande et livraison de repas. Pour plus d'informations, consultez les pages d'aide de ces plateformes, accessibles depuis notre [page Apps](/apps).

Vous trouverez ci-dessous les paramètres à utiliser pour la configuration de ces plateformes avec LEO2.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans LEO2, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. 

Pour configurer Deliveroo Bridge, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration). Dans la page de configuration de Deliveroo Bridge, utilisez les codes ref suivants pour LEO2.

| Section             | Nom                                                   | Code ref                                                             |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                      | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service    | Code ref livraison par le restaurant                  | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref à emporter                                   | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                             |
| Remises             | Code ref promotion                                    | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                                       |
| Frais               | Code ref surcharge                                    | (laisser vide)                                                       |
| Paiements           | Code ref paiement sur Deliveroo                       | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                       |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                        |

## Just Eat JET Connect

Sur le marché Français l'API de Just Eat Takeaway est généralement utilisée. L'API JET Connect permettant de pousser un catalog HubRise dans Just Eat est réservée à des chaînes de restauration. Certains indépendants peuvent également y avoir accès.

Pour recevoir les commandes de Just Eat dans LEO2 via l'API JET Connect, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise.

Pour configurer Just Eat Flyt Bridge, consultez l'aide sur la <Link to="/apps/just-eat-flyt/configuration" addLocalePrefix={false}>configuration de Just Eat Flyt Bridge (en anglais)</Link>. Dans la page de configuration de Just Eat Flyt Bridge, utilisez les codes ref suivants pour LEO2.

| Section             | Nom                                                   | Code ref                                                                         |
| --------------------| ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | Créer un vendeur dans LEO2 et utiliser son code ref.                             |
| Types de service    | Code ref livraison par le restaurant                  | Créer un vendeur dans LEO2 et utiliser son code ref.                             |
| Types de service    | Code ref à emporter                                   | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable).             |
| Types de service    | Envoyer les commandes livrées par la plateforme  [...]| `commandes en livraison`                                                         |
| Remises             | Code ref remise                                       | (laisser vide)                                                                   |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                                                   |
| Frais               | Code ref frais de service                             | Créer un article `Frais de service JE` dans LEO2 et utiliser son code ref. (\*)  |
| Frais               | Code ref frais d'emballage                            | Créer un article `Frais d'emballage JE` dans LEO2 et utiliser son code ref. (\*) |
| Frais               | Code ref pourboire livreur                            | Créer un article `Pourboire livreur JE` dans LEO2 et utiliser son code ref. (\*) |
| Frais               | Code ref autres frais                                 | Créer un article `Autres frais JE` dans LEO2 et utiliser son code ref. (\*)      |
| Paiements           | Code ref paiement en ligne                            | Créer un mode de règlement dans LEO2 et utiliser son code ref.                   |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                                   |
| Statuts de commande | Marquer les commande comme Acceptées                  | `lorsque leur statut HubRise passe à "Reçue"`                                    |

(\*) Applicable uniquement si vous proposez ces fonctionnalités sur la plateforme Just Eat. Sinon laisser vide.

## Just Eat Takeaway

Pour recevoir les commandes de Just Eat Takeaway dans LEO2, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. 

Pour configurer Just Eat Takeaway Bridge, consultez l'aide sur <Link to="/apps/just-eat-takeaway/configuration" addLocalePrefix={false}>configuration de Just Eat Takeaway Bridge (en anglais)</Link>.  Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivant pour LEO2.

| Section             | Nom                                                   | Code ref                                                             |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service    | Code ref livraison par le restaurant                  | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref à emporter                                   | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                             |
| Remises             | Code ref promotion                                    | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                                       |
| Paiements           | Code ref paiement en ligne                            | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                       |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                        |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans LEO2, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. 

Pour configurer Uber Eats Bridge, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration). Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants pour LEO2.

| Section             | Nom                                                   | Code ref                                                             |
| ------------------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber                               | Créer un vendeur dans LEO2 et utiliser son code ref.                 |
| Types de service    | Code ref livraison par le restaurant                  | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref à emporter                                   | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Code ref sur place                                    | Créer un vendeur dans LEO2 et utiliser son code ref (si applicable). |
| Types de service    | Envoyer les commandes livrées par la plateforme  [...]| `commandes en livraison`                                             |
| Articles spéciaux   | Code ref jetables                                     | Créer un article `Jetables` dans LEO2 et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                       | (laisser vide)                                                       |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                                       |
| Frais               | Code ref supplément petite commande                   | (laisser vide)                                                       |
| Frais               | Code ref pourboire                                    | (laisser vide)                                                       |
| Paiements           | Code ref paiement                                     | Créer un mode de règlement dans LEO2 et utiliser son code ref.       |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                        |
| Menu                | Activer les notes de préparation sur les articles     | Cocher la case pour activer cette fonctionnalité.                    |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, ou serviettes au moment de finaliser sa commande sur Uber Eats. Vous pouvez ignorer la création de produit et laisser le champ correspondant vide si vous n'utilisez pas cette fonctionnalité. Pour en savoir plus, voir [Articles spéciaux](/apps/uber-eats/configuration#articles-sp-ciaux). Sinon, laisser vide.

LEO2 peut afficher les notes de préparation que Uber Eats propose à vos clients de faire pour vous après avoir sélectionné un produit. Vous pouvez donc laisser cette fonctionnalité activée sur Uber Eats.

LEO2 peut également afficher les commentaires sur les commandes que Uber Eats propose à vos clients de faire dans le panier ou en fin de commande. Vous pouvez donc laisser cette fonctionnalité activée sur Uber Eats.