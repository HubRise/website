---
title: Plateformes de livraison de repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | SOLUTION | HubRise
  description: HubRise permet de connecter SOLUTION à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

HubRise permet de recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans votre logiciel de caisse SOLUTION. HubRise permet aussi d'envoyer votre menu de SOLUTION vers ces plateformes.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

Vous trouverez ci-dessous les paramètres à utiliser pour connecter les plateformes de livraison de repas à SOLUTION.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans SOLUTION, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise.

Pour configurer Deliveroo Bridge, consultez l'aide sur la [configuration de Deliveroo Bridge](/fr/apps/deliveroo/configuration). Dans la page de configuration de Deliveroo Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                      |
| ------------------- | ------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                  |                                               |
| Types de service    | Code ref livraison par le restaurant              |                                               |
| Types de service    | Code ref à emporter                               |                                               |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes à emporter`                        |
| Remises             | Code ref promotion                                |                                               |
| Frais               | Code ref frais de livraison                       |                                               |
| Frais               | Code ref surcharge                                |                                               |
| Paiements           | Code ref paiement sur Deliveroo                   |                                               |
| Paiements           | Code ref paiement en espèces                      |                                               |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"` |

## Just Eat

Pour recevoir les commandes de Just Eat dans SOLUTION, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise.

Pour configurer Just Eat Takeaway Bridge, consultez l'aide sur la <Link to="/apps/just-eat-takeaway/configuration" addLocalePrefix={false}>configuration de Just Eat Takeaway Bridge (en anglais)</Link>. Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivants.

| Section             | Nom                                                   | Code ref                                      |
| ------------------- | ----------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                  |                                               |
| Types de service    | Code ref livraison par le restaurant                  |                                               |
| Types de service    | Code ref à emporter                                   |                                               |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes à emporter`                        |
| Remises             | Code ref promotion                                    |                                               |
| Frais               | Code ref frais de livraison                           |                                               |
| Paiements           | Code ref paiement en ligne                            |
| Paiements           | Code ref paiement en espèces                          |                                               |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"` |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans SOLUTION, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise.

Pour configurer Uber Eats Bridge, consultez l'aide sur la [configuration de Uber Eats Bridge](/fr/apps/uber-eats/configuration). Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                               | Code ref                                                                 |
| ------------------- | ------------------------------------------------- | ------------------------------------------------------------------------ |
| Types de service    | Code ref livraison Uber                           |                                                                          |
| Types de service    | Code ref livraison par le restaurant              |                                                                          |
| Types de service    | Code ref à emporter                               |                                                                          |
| Types de service    | Code ref sur place                                |                                                                          |
| Types de service    | Envoyer les commandes livrées par Uber [...]      | `commandes à emporter`                                                   |
| Articles spéciaux   | Code ref jetables                                 | Créer un article `Jetables` dans SOLUTION et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                   |                                                                          |
| Frais               | Code ref frais de livraison                       |                                                                          |
| Frais               | Code ref supplément petite commande               |                                                                          |
| Frais               | Code ref pourboire                                |                                                                          |
| Paiements           | Code ref paiement                                 |                                                                          |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                            |
| Menu                | Activer les notes de préparation sur les articles | Cocher la case / Laisser la case décochée                                |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par SOLUTION. Si vous utilisez ces notes pour des instructions de cuisson ou de service (par exemple, "Moyen rare cuisson", ou "Coupez en tranches"), vous devez ajouter les options correspondantes dans votre EPOS et les inclure dans votre menu Uber Eats.

---

SOLUTION peut afficher les commentaires produits indiqués par vos clients lors du passage de leur commande.
