---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 6
layout: documentation
meta:
  title: Plateformes de livraison de repas | MiiPos | HubRise
  description: HubRise permet de connecter MiiPos à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans MiiPos.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à MiiPos.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps#food-ordering-platforms).

## Codes ref produits, options et promotions

MiiPos n'utilise pas de codes ref pour les produits, les options et les promotions.

Vous n'avez donc pas besoin de les renseigner dans les plateformes de commande et de livraison de repas.

## Types de service {#service-types}

MiiPos utilise les codes ref de type de service pour déterminer l'origine et le type de commande. L'origine est la plateforme de livraison de repas, et le type de commande est un champ libre optionnel qui permet de distinguer les commandes de différentes marques.

Le code ref de type de service peut avoir l'un des deux formats suivants : `[plateforme]` ou `[plateforme]_[type de commande]`. Pour la plateforme, utilisez l'un des codes suivants :

- `DV` pour Deliveroo
- `JE` pour Just Eat
- `UE` pour Uber Eats

Ainsi, si vous utilisez `DV_SushiTime`, MiiPos considérera que la commande est une commande Deliveroo avec le type de commande `SushiTime`. Si vous utilisez uniquement `DV`, MiiPos considérera que la commande est une commande Deliveroo sans type de commande.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans MiiPos, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                       |
| ------------------- | ------------------------------------------------- | ---------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`  |
| Types de service    | Code ref livraison par Deliveroo                  | `DV` - Voir [Types de Service](#service-types) |
| Types de service    | Code ref livraison par le restaurant              | `DV`                                           |
| Types de service    | Code ref à emporter                               | `DV`                                           |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                       |
| Remises             | Code ref remise                                   | (laisser vide)                                 |
| Frais               | Code ref frais de livraison                       | (laisser vide)                                 |
| Frais               | Code ref surcharge                                | (laisser vide)                                 |
| Frais               | Code ref frais d'emballage                        | (laisser vide)                                 |
| Paiements           | Code ref paiement en ligne                        | (laisser vide)                                 |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                 |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Cocher cette case                              |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez support@hubrise.com.

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans MiiPos avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                       |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`  |
| Types de service    | Code ref livraison par la plateforme                  | `JE` - Voir [Types de Service](#service-types) |
| Types de service    | Code ref livraison par le restaurant                  | `JE`                                           |
| Types de service    | Code ref à emporter                                   | `JE`                                           |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                       |
| Remises             | Code ref remise                                       | (laisser vide)                                 |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                 |
| Frais               | Code ref frais de service                             | (laisser vide)                                 |
| Paiements           | Code ref paiement en ligne                            | (laisser vide)                                 |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                 |

### Just Eat avec l'API Flyt

Pour recevoir les commandes de Just Eat Flyt dans MiiPos avec l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation de Just Eat Flyt Bridge](/apps/just-eat-flyt/overview).

Dans la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                       |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`  |
| Types de service    | Code ref livraison par la plateforme                  | `JE` - Voir [Types de Service](#service-types) |
| Types de service    | Code ref livraison par le restaurant                  | `JE`                                           |
| Types de service    | Code ref à emporter                                   | `JE`                                           |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                       |
| Remises             | Code ref remise                                       | (laisser vide)                                 |
| Frais               | Code ref frais de livraison                           | (laisser vide)                                 |
| Frais               | Code ref surcharge                                    | (laisser vide)                                 |
| Frais               | Code ref frais d'emballage                            | (laisser vide)                                 |
| Frais               | Code ref pourboire livreur                            | (laisser vide)                                 |
| Frais               | Code ref autres frais                                 | (laisser vide)                                 |
| Paiements           | Code ref paiement en ligne                            | (laisser vide)                                 |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                 |
| Clients             | Dupliquer le code d'accès téléphone [...]             | Cocher cette case                              |

## Uber Eats

Pour recevoir les commandes de Uber Eats dans MiiPos, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation de Uber Eats Bridge](/apps/uber-eats/overview).

Dans la page de configuration de Uber Eats Bridge, utilisez les paramètres suivants.

| Section             | Nom                                          | Code ref                                       |
| ------------------- | -------------------------------------------- | ---------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Reçue"`  |
| Types de service    | Code ref livraison Uber                      | `UE` - Voir [Types de Service](#service-types) |
| Types de service    | Code ref livraison par le restaurant         | `UE`                                           |
| Types de service    | Code ref à emporter                          | `UE`                                           |
| Types de service    | Code ref sur place                           | `UE`                                           |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes en livraison`                       |
| Articles spéciaux   | Code ref jetables                            | (laisser vide)                                 |
| Remises             | Code ref remise                              | (laisser vide)                                 |
| Frais               | Code ref frais de livraison                  | (laisser vide)                                 |
| Frais               | Code ref supplément petite commande          | (laisser vide)                                 |
| Frais               | Code ref pourboire                           | (laisser vide)                                 |
| Paiements           | Code ref paiement en ligne                   | (laisser vide)                                 |
| Paiements           | Code ref paiement en espèces                 | (laisser vide)                                 |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Cocher cette case                              |
| Menu                | Activer les notes de préparation [...]       | Cocher si vous souhaitez les activer           |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.
