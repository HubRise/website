---
title: Plateformes de livraison de repas
path_override: plateformes-livraison-repas
position: 4
layout: documentation
meta:
  title: Plateformes de livraison de repas | UltimaPOS | HubRise
  description: HubRise permet de connecter le logiciel de caisse UltimaPOS à Deliveroo, Uber Eats, ou Just Eat. Paramètres à utiliser pour configurer la connexion de ces plateformes.
---

Avec HubRise, vous pouvez recevoir les commandes de Deliveroo, Just Eat, Uber Eats et autres plateformes de livraison dans UltimaPOS. Vous pouvez aussi envoyer votre menu de UltimaPOS vers ces plateformes.

Cette page décrit les paramètres à utiliser pour connecter les plateformes de livraison de repas à UltimaPOS.

Pour plus d'informations, consultez les pages d'aide de ces plateformes sur notre [page Apps](/apps/plateformes-de-livraison-de-repas).

## Configuration UltimaPOS

En fonction de vos besoins, vous devrez créer des articles, promotions et centres de profit spécifiques aux plateformes dans UltimaPOS.

Si vous n'utilisez pas ces fonctionnalités, il est inutile de créer ces éléments, et vous pouvez alors laisser vides les champs correspondants.

### Centres de profit {#profit-centers}

UltimaPOS assigne chaque commande à un centre de profit. Vous pouvez configurer le centre de profit utilisé en fonction de la plateforme et du mode de livraison, ou utiliser des centres de profit par défaut.

Pour configurer les centres de profit, créez les d'abord dans UltimaPOS. Vous pouvez soit créer un centre de profit par plateforme, soit un centre de profit par plateforme et par mode de livraison. Puis renseignez les identifiants des centres de profit dans les champs **Types de service** des pages de configuration des bridges.

Si les champs **Types de service** ne sont pas renseignés, UltimaPOS assigne chaque commande à un centre de profit par défaut pour la plateforme.

## Deliveroo

Pour recevoir les commandes de Deliveroo dans UltimaPOS, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Deliveroo Bridge, consultez la [documentation de Deliveroo Bridge](/apps/deliveroo/overview).

Dans la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants.

| Section             | Nom                                               | Code ref                                                                          |
| ------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées             | `lorsque leur statut HubRise passe à "Reçue"`                                     |
| Types de service    | Code ref livraison par Deliveroo                  | Voir [Centres de profit](#profit-centers)                                         |
| Types de service    | Code ref livraison par le restaurant              | Voir [Centres de profit](#profit-centers)                                         |
| Types de service    | Code ref à emporter                               | Voir [Centres de profit](#profit-centers)                                         |
| Types de service    | Envoyer les commandes livrées par Deliveroo [...] | `commandes en livraison`                                                          |
| Remises             | Code ref remise                                   | Créer une promotion `Deliveroo` dans UltimaPOS et utiliser son identifiant.       |
| Frais               | Code ref frais de livraison                       | Créer un article `Frais de livraison` dans UltimaPOS et utiliser son identifiant. |
| Frais               | Code ref surcharge                                | Créer un article `Surcharge` dans UltimaPOS et utiliser son identifiant.          |
| Frais               | Code ref frais d'emballage                        | Créer un article `Frais d'emballage` dans UltimaPOS et utiliser son identifiant.  |
| Paiements           | Code ref paiement en ligne                        | Créer un règlement `Deliveroo` dans UltimaPOS et utiliser son identifiant.        |
| Paiements           | Code ref paiement en espèces                      | (laisser vide)                                                                    |
| Clients             | Dupliquer le code d'accès téléphone [...]         | Cocher cette case                                                                 |

## Just Eat

Just Eat possède deux APIs:

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, et pour les chaînes sur les autres marchés. Cette API permet de synchroniser les commandes et le menu.
- L'API Takeaway, plus ancienne, est utilisée pour les indépendants sur les autres marchés. Elle permet de recevoir les commandes, mais pas d'envoyer le menu.

En cas de doute sur l'API à utiliser, contactez support@hubrise.com.

### Just Eat avec l'API Takeaway

Pour recevoir les commandes de Just Eat dans UltimaPOS avec l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/overview).

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants.

| Section             | Nom                                                   | Code ref                                                                          |
| ------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| Statuts de commande | Marquer les commandes comme Acceptées                 | `lorsque leur statut HubRise passe à "Reçue"`                                     |
| Types de service    | Code ref livraison par la plateforme                  | Voir [Centres de profit](#profit-centers)                                         |
| Types de service    | Code ref livraison par le restaurant                  | Voir [Centres de profit](#profit-centers)                                         |
| Types de service    | Code ref à emporter                                   | Voir [Centres de profit](#profit-centers)                                         |
| Types de service    | Envoyer les commandes livrées par la plateforme [...] | `commandes en livraison`                                                          |
| Remises             | Code ref remise                                       | Créer une promotion `Just Eat` dans UltimaPOS et utiliser son identifiant.        |
| Frais               | Code ref frais de livraison                           | Créer un article `Frais de livraison` dans UltimaPOS et utiliser son identifiant. |
| Frais               | Code ref frais de service                             | Créer un article `Frais de service` dans UltimaPOS et utiliser son identifiant.   |
| Paiements           | Code ref paiement en ligne                            | Créer un règlement `Just Eat` dans UltimaPOS et utiliser son identifiant.         |
| Paiements           | Code ref paiement en espèces                          | (laisser vide)                                                                    |
| Clients             | Dupliquer le code d'accès téléphone [...]             | Cocher cette case                                                                 |

## Uber Eats

Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                          | Code ref                                                           |
| ------------------- | -------------------------------------------- | ------------------------------------------------------------------ |
| Statuts de commande | Marquer les commandes comme Acceptées        | `lorsque leur statut HubRise passe à "Reçue"`                      |
| Types de service    | Code ref livraison Uber                      | Voir [Centres de profit](#profit-centers)                          |
| Types de service    | Code ref livraison par le restaurant         | Voir [Centres de profit](#profit-centers)                          |
| Types de service    | Code ref à emporter                          | Voir [Centres de profit](#profit-centers)                          |
| Types de service    | Code ref sur place                           | Voir [Centres de profit](#profit-centers)                          |
| Types de service    | Envoyer les commandes livrées par Uber [...] | `commandes en livraison`                                           |
| Articles spéciaux   | Code ref jetables                            | Créer un article `Jetables` et utiliser son code ref. (\*)         |
| Remises             | Code ref remise                              | Créer une promotion `Uber Eats` et utiliser son identifiant.       |
| Frais               | Code ref frais de livraison                  | Créer un article `Frais de livraison` et utiliser son identifiant. |
| Frais               | Code ref supplément petite commande          | Créer un article `Petite commande` et utiliser son identifiant.    |
| Frais               | Code ref pourboire                           | Créer un article `Pourboire` et utiliser son identifiant.          |
| Paiements           | Code ref paiement en ligne                   | Créer un règlement `Uber Eats` et utiliser son identifiant.        |
| Paiements           | Code ref paiement en espèces                 | (laisser vide)                                                     |
| Clients             | Dupliquer le code d'accès téléphone [...]    | Cocher cette case                                                  |
| Menu                | Activer les notes de préparation [...]       | Cocher si vous souhaitez les activer                               |

(\*) Applicable uniquement si vous proposez des jetables, tels que des couverts, serviettes, etc.
