---
title: Plateformes de livraison de repas
path_override: plateformes-de-commande-de-repas
position: 6
layout: documentation
meta:
  title: Plateformes de commande en ligne | SOLUTION | HubRise
  description: Pour intégrer SOLUTION à des plateformes de commande de repas, vous devez spécifier des codes ref dans la page de configuration de leur bridge.
---

Avec HubRise, vous pouvez recevoir des commandes de Deliveroo, Just Eat, Uber Eats et d'autres plateformes de commande de repas dans SOLUTION. Vous pouvez également envoyer votre menu depuis SOLUTION vers les plateformes.

Cette page décrit la configuration à utiliser pour connecter les plateformes de commande de repas à SOLUTION.

Pour plus d'informations, consultez la documentation de ces plateformes accessible depuis notre [page Apps](/apps#food-ordering-platforms).

## Configuration sur SOLUTION

Selon vos besoins, vous devrez créer des PRODUITS, PROMOTIONS, METHODS DE PAIEMENT... spécifiques aux plateformes dans SOLUTION.

Si vous n'utilisez pas ces fonctionnalités, vous pouvez ignorer la création de ces éléments et laisser vides les champs correspondants.

### PRODUITS, PROMOTIONS...

Décrivez les éléments à créer avant de connecter les plateformes de livraison.

## Deliveroo

Pour recevoir les commandes Deliveroo dans SOLUTION, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Sur la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                                                                                                                   | Code ref                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Statuts de commande | Marquer les commandes comme Acceptées                                                                                                                 | `lorsque leur statut HubRise passe à "Reçue"`                                                    |
| Types de service    | Code ref livraison par Deliveroo                                                                                                                      | (laisser vide)                                                                |
| Types de service    | Code ref livraison par le restaurant                                                                                                                  | (laisser vide)                                                                |
| Types de service    | Code ref à emporter                                                                                                                                   | (laisser vide)                                                                |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                                                                         |
| Articles spéciaux   | Code ref option consigne                                                                                                                              | Créer une option dans SOLUTION et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                                                                                                                       | (laisser vide)                                                                |
| Frais               | Code ref frais de livraison                                                                                                                           | (laisser vide)                                                                |
| Frais               | Code ref surcharge                                                                                                                                    | (laisser vide)                                                                |
| Frais               | Code ref frais d'emballage                                                                                                                            | (laisser vide)                                                                |
| Paiements           | Code ref paiement en ligne                                                                                                                            | (laisser vide)                                                                |
| Paiements           | Code ref paiement en espèces                                                                                                                          | (laisser vide)                                                                |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Laisser décochée                                                                                 |

(\*) Applicable uniquement si certains de vos produits nécessitent une consigne.

## Just Eat

Just Eat propose deux API :

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, ainsi que par les chaînes sur les autres marchés. Elle permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée par les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

Si vous ne savez pas quelle API utiliser, contactez support@hubrise.com.

### Just Eat via l'API Takeaway

Pour recevoir les commandes Just Eat dans SOLUTION via l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Sur la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                                                                                                                       | Code ref                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                                                                                                                     | `lorsque leur statut HubRise passe à "Reçue"` |
| Types de service    | Code ref livraison par Just Eat                                                                                                                           | (laisser vide)             |
| Types de service    | Code ref livraison par le restaurant                                                                                                                      | (laisser vide)             |
| Types de service    | Code ref à emporter                                                                                                                                       | (laisser vide)             |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                      |
| Remises             | Code ref remise                                                                                                                                           | (laisser vide)             |
| Frais               | Code ref frais de livraison                                                                                                                               | (laisser vide)             |
| Frais               | Code ref frais de service                                                                                                                                 | (laisser vide)             |
| Paiements           | Code ref paiement en ligne                                                                                                                                | (laisser vide)             |
| Paiements           | Code ref paiement en espèces                                                                                                                              | (laisser vide)             |

### Just Eat via l'API Flyt

Pour recevoir les commandes Just Eat dans SOLUTION via l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt/overview).

Sur la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                                                                                                                    | Code ref                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Statuts de commande | Marquer les commandes comme Acceptées                                                                                                                  | `lorsque leur statut HubRise passe à "Reçue"`                                                    |
| Types de service    | Code ref livraison par Just Eat                                                                                                                        | (laisser vide)                                                                |
| Types de service    | Code ref livraison par le restaurant                                                                                                                   | (laisser vide)                                                                |
| Types de service    | Code ref à emporter                                                                                                                                    | (laisser vide)                                                                |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                                                         |
| Articles spéciaux   | Code ref option consigne                                                                                                                               | Créer une option dans SOLUTION et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                                                                                                                        | (laisser vide)                                                                |
| Frais               | Code ref frais de livraison                                                                                                                            | (laisser vide)                                                                |
| Frais               | Code ref frais de service                                                                                                                              | (laisser vide)                                                                |
| Frais               | Code ref frais d'emballage                                                                                                                             | (laisser vide)                                                                |
| Frais               | Code ref pourboire livreur                                                                                                                             | (laisser vide)                                                                |
| Frais               | Code ref autres frais                                                                                                                                  | (laisser vide)                                                                |
| Paiements           | Code ref paiement en ligne                                                                                                                             | (laisser vide)                                                                |
| Paiements           | Code ref paiement en espèces                                                                                                                           | (laisser vide)                                                                |
| Clients             | Dupliquer le code d'accès téléphone [...]             | Laisser décochée                                                                                 |

(\*) Applicable uniquement si certains de vos produits nécessitent une consigne.

## Uber Eats

Pour recevoir les commandes Uber Eats dans SOLUTION, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Sur la page de configuration d'Uber Eats Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                                                                                                           | Code ref                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Statuts de commande | Marquer les commandes comme Acceptées                                                                                                         | `lorsque leur statut HubRise passe à "Reçue"`                                                    |
| Types de service    | Code ref livraison par Uber Eats                                                                                                              | (laisser vide)                                                                |
| Types de service    | Code ref livraison par le restaurant                                                                                                          | (laisser vide)                                                                |
| Types de service    | Code ref à emporter                                                                                                                           | (laisser vide)                                                                |
| Types de service    | Code ref sur place                                                                                                                            | (laisser vide)                                                                |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes en livraison`                                                                         |
| Articles spéciaux   | Code ref jetables                                                                                                                             | Créer un produit dans SOLUTION et utiliser son code ref. (\*) |
| Remises             | Code ref remise                                                                                                                               | (laisser vide)                                                                |
| Frais               | Code ref frais de livraison                                                                                                                   | (laisser vide)                                                                |
| Frais               | Code ref supplément petite commande                                                                                                           | (laisser vide)                                                                |
| Frais               | Code ref pourboire                                                                                                                            | (laisser vide)                                                                |
| Paiements           | Code ref paiement en ligne                                                                                                                    | (laisser vide)                                                                |
| Paiements           | Code ref paiement en espèces                                                                                                                  | (laisser vide)                                                                |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Laisser décochée                                                                                 |

(\*) Ne s'applique que si vous proposez des articles jetables tels que des couverts, des serviettes, etc.

---

**REMARQUE IMPORTANTE :** Les notes de préparation sur les articles ne sont pas supportées par SOLUTION. Si vous comptez sur ces notes pour des instructions de cuisson ou de service (par exemple, "Cuisson à point", ou "Coupez en tranches"), vous devez les remplacer par des options dans votre menu Uber Eats.

---
