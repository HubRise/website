---
title: Plateformes de commande de repas
path_override: plateformes-de-commande-de-repas
position: 6
layout: documentation
meta:
  title: Plateformes de commande de repas | Lightspeed Restaurant | HubRise
  description: Pour intégrer Lightspeed Restaurant à des plateformes de commande de repas, vous devez spécifier des codes ref dans la page de configuration de leur bridge.
---

Avec HubRise, vous pouvez recevoir des commandes de Deliveroo, Just Eat, Uber Eats et d'autres plateformes de commande de repas dans Lightspeed Restaurant. Vous pouvez également envoyer votre menu depuis Lightspeed Restaurant vers les plateformes.

Cette page décrit la configuration à utiliser pour connecter les plateformes de commande de repas à Lightspeed Restaurant.

Pour plus d'informations, consultez la documentation de ces plateformes accessible depuis notre [page Apps](/apps/food-ordering-platforms).

## Configuration dans Lightspeed Restaurant

Selon vos besoins, vous allez devoir créer des articles, des modes de paiement et des profils de compte dans Lightspeed Restaurant.

Si vous préférez laisser le support Lightspeed configurer ces éléments, assurez-vous d'utiliser les noms de canaux suivants dans les demandes d'assistance afin d'éviter toute confusion :

| Plateforme      | Nom du canal           |
| --------------- | ---------------------- |
| Deliveroo       | `Deliveroo`            |
| Just-Eat.ch     | `Eat.ch (EAT)`         |
| Just Eat        | `Just Eat (JE)`        |
| HOP Delivery    | `HOP Delivery`         |
| Smood           | `Smood`                |
| Takeaway.com    | `Takeaway.com (TA)`    |
| Thuisbezorgd.nl | `Thuisbezorgd.nl (TH)` |
| Uber Eats       | `Uber Eats`            |

Par convention, l'équipe de support Lightspeed utilise les codes ref prédéfinis documentés dans cette page lorsqu'elle configure l'intégration. Si vous configurez vous-même le back-office Lightspeed, nous vous recommandons d'utiliser les mêmes codes, car cela simplifie le dépannage.

Pour des instructions détaillées sur la création de codes ref dans le back-office Lightspeed, consultez [Créer des codes ref](/apps/lightspeed-restaurant/faqs/create-ref-codes).

## Deliveroo

Pour recevoir des commandes Deliveroo dans Lightspeed Restaurant, vous devez d'abord connecter Deliveroo Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur celle-ci, consultez la [documentation Deliveroo Bridge](/apps/deliveroo).

Sur la page de configuration de Deliveroo Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                     | Code ref                                      |
| ------------------- | ------------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par Deliveroo                        | `DVAP`                                        |
| Types de service    | Code ref livraison par le restaurant                    | `DVMD`                                        |
| Types de service    | Code ref à emporter                                     | `DVMTA`                                       |
| Types de service    | Envoyer les commandes livrées par Deliveroo en tant que | `commandes en livraison`                      |
| Remises             | Code ref promotion                                      | `DELD99`                                      |
| Frais               | Code ref frais de livraison                             | `DELD77`                                      |
| Frais               | Code ref surcharge                                      | `DELD88`                                      |
| Frais               | Code ref frais d'emballage                              | (contacter support@hubrise.com si besoin)     |
| Paiements           | Code ref paiement sur Deliveroo                         | `DVPM`                                        |
| Paiements           | Code ref paiement en espèces                            | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                   | `lorsque leur statut HubRise passe à "Reçue"` |

## Just Eat

Just Eat propose deux API :

- L'API Flyt est utilisée sur les plateformes Just-Eat.co.uk, Just-Eat.ie, Menulog et SkipTheDishes, ainsi que par les chaînes sur les autres marchés. Elle permet de synchroniser les commandes et le menu.
- L'API Takeaway, la plus ancienne, est utilisée par les indépendants sur les autres marchés. Elle permet de recevoir des commandes, mais pas d'envoyer le menu.

Si vous ne savez pas quelle API utiliser, contactez support@hubrise.com.

### Just Eat via l'API Takeaway

Pour recevoir des commandes Just Eat dans Lightspeed Restaurant via l'API Takeaway, vous devez d'abord connecter Just Eat Takeaway Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Takeaway Bridge, consultez la [documentation Just Eat Takeaway Bridge](/apps/just-eat-takeaway).

### Just Eat via l'API Flyt

Pour recevoir des commandes Just Eat dans Lightspeed Restaurant via l'API Flyt, vous devez d'abord connecter Just Eat Flyt Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Just Eat Flyt Bridge, consultez la [documentation Just Eat Flyt Bridge](/apps/just-eat-flyt).

### Just-Eat.ch

Just-Eat.ch utilise l'API Just Eat via Takeaway. Sur la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                         | Code ref                                      |
| ------------------- | ----------------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                        | `EATAP`                                       |
| Types de service    | Code ref livraison par le restaurant                        | `EATDRAP`                                     |
| Types de service    | Code ref à emporter                                         | `EATEATAP`                                    |
| Types de service    | Envoyer les commandes livrées par la plateforme en tant que | `commandes en livraison`                      |
| Remises             | Code ref promotion                                          | `EAT99`                                       |
| Frais               | Code ref frais de livraison                                 | `EAT77`                                       |
| Frais               | Code ref frais de service                                   | `EAT66`                                       |
| Paiements           | Code ref paiement en ligne                                  | `EATPM`                                       |
| Paiements           | Code ref paiement en espèces                                | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                       | `lorsque leur statut HubRise passe à "Reçue"` |

### Just Eat.co.uk et Just Eat.ie

Ces plateformes utilisent l'API Just Eat via Flyt. Sur la page de configuration de Just Eat Flyt Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                         | Code ref                                                                 |
| ------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------ |
| Types de service    | Code ref livraison par la plateforme                        | `JEAP`                                                                   |
| Types de service    | Code ref livraison par le restaurant                        | `JEDRAP`                                                                 |
| Types de service    | Code ref à emporter                                         | `JETAAP`                                                                 |
| Types de service    | Envoyer les commandes livrées par la plateforme en tant que | `commandes en livraison`                                                 |
| Remises             | Code ref remise                                             | `JE99`                                                                   |
| Frais               | Code ref frais de livraison                                 | `JE77`                                                                   |
| Frais               | Code ref frais de service                                   | `JE66`                                                                   |
| Frais               | Code ref frais d'emballage                                  | Créez un produit avec un prix positif variable et utilisez son **Code**. |
| Frais               | Code ref pourboire livreur                                  | Créez un produit avec un prix positif variable et utilisez son **Code**. |
| Frais               | Code ref autres frais                                       | Créez un produit avec un prix positif variable et utilisez son **Code**. |
| Paiements           | Code ref paiement en ligne                                  | `JEPM`                                                                   |
| Paiements           | Code ref paiement en espèces                                | (laisser vide)                                                           |
| Statuts de commande | Marquer les commandes comme Acceptées                       | `lorsque leur statut HubRise passe à "Reçue"`                            |

### Takeaway.com

Takeaway.com utilise l'API Just Eat via Takeaway. Sur la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                         | Code ref                                      |
| ------------------- | ----------------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                        | `TAAP`                                        |
| Types de service    | Code ref livraison par le restaurant                        | `TADRAP`                                      |
| Types de service    | Code ref à emporter                                         | `TATAAP`                                      |
| Types de service    | Envoyer les commandes livrées par la plateforme en tant que | `commandes en livraison`                      |
| Remises             | Code ref promotion                                          | `TA99`                                        |
| Frais               | Code ref frais de livraison                                 | `TA77`                                        |
| Paiements           | Code ref paiement en ligne                                  | `TAPM`                                        |
| Paiements           | Code ref paiement en espèces                                | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                       | `lorsque leur statut HubRise passe à "Reçue"` |

### Thuisbezorgd.nl

Thuisbezorgd.nl utilise l'API Just Eat via Takeaway. Sur la page de configuration de Just Eat Takeaway Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                         | Code ref                                      |
| ------------------- | ----------------------------------------------------------- | --------------------------------------------- |
| Types de service    | Code ref livraison par la plateforme                        | `THAP`                                        |
| Types de service    | Code ref livraison par le restaurant                        | `THDRAP`                                      |
| Types de service    | Code ref à emporter                                         | `THTHAP`                                      |
| Types de service    | Envoyer les commandes livrées par la plateforme en tant que | `commandes en livraison`                      |
| Remises             | Code ref promotion                                          | `TH99`                                        |
| Frais               | Code ref frais de livraison                                 | `TH77`                                        |
| Paiements           | Code ref paiement en ligne                                  | `THPM`                                        |
| Paiements           | Code ref paiement en espèces                                | (laisser vide)                                |
| Statuts de commande | Marquer les commandes comme Acceptées                       | `lorsque leur statut HubRise passe à "Reçue"` |

## HOP Delivery

Pour recevoir des commandes HOP Delivery dans Lightspeed, utilisez les valeurs suivantes pour configurer HOP Delivery. Pour obtenir de l'aide, contactez l'équipe de support HOP Delivery.

| Section          | Nom                                  | Code ref       |
| ---------------- | ------------------------------------ | -------------- |
| Types de service | Code ref livraison par la plateforme | `HOPDEL`       |
| Types de service | Code ref livraison par le restaurant | `HOPREST`      |
| Types de service | Code ref à emporter                  | `HOPCOL`       |
| Remises          | Code ref promotion                   | `HOP99`        |
| Frais            | Code ref frais de livraison          | `HOP77`        |
| Frais            | Code ref frais de service            | `HOP88`        |
| Paiements        | Code ref paiement en ligne           | `HOPPM`        |
| Paiements        | Code ref paiement en espèces         | (laisser vide) |

## Smood

Pour recevoir des commandes Smood dans Lightspeed, utilisez les valeurs suivantes pour configurer Smood. Pour obtenir de l'aide, contactez l'équipe de support Smood. Pour plus d'informations sur la configuration des paramètres dans Smood, consultez la [documentation Smood](/apps/smood).

| Section          | Nom                                     | Code ref    |
| ---------------- | --------------------------------------- | ----------- |
| Types de service | Code ref de plateforme de livraison     | `SMOODDEL`  |
| Types de service | Code ref de livraison par le restaurant | `SMOODRDEL` |
| Types de service | À l'emporter code ref                   | `SMOODCOL`  |
| Types de service | Send orders delivered by Smood as       | `Delivery`  |
| Remises          | Code ref de remise                      | `SMOOD99`   |
| Remises          | Promotion ref code                      | `SMOOD99`   |
| Frais            | Frais de livraison code ref             | `SMOOD77`   |
| Payments         | Online payment ref code                 | `SMOODPM`   |

## Uber Eats

Pour recevoir des commandes Uber Eats dans Lightspeed Restaurant, vous devez d'abord connecter Uber Eats Bridge, une application incluse dans votre abonnement HubRise. Pour plus d'informations sur Uber Eats Bridge, consultez la [documentation Uber Eats Bridge](/apps/uber-eats).

Sur la page de configuration d'Uber Eats Bridge, utilisez les paramètres suivants :

| Section             | Nom                                                | Code ref                                                                           |
| ------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber                            | `UEAP`                                                                             |
| Types de service    | Code ref livraison par le restaurant               | `UENDAP`                                                                           |
| Types de service    | Code ref à emporter                                | `UEPUAP`                                                                           |
| Types de service    | Code ref sur place                                 | `UEDIAP`                                                                           |
| Types de service    | Envoyer les commandes livrées par Uber en tant que | `commandes en livraison`                                                           |
| Articles spéciaux   | Code ref jetables                                  | Créez un produit avec un prix = 0 dans Lightspeed et utilisez son **Code**. (\*) |
| Remises             | Code ref remise                                    | `UE99`                                                                             |
| Frais               | Code ref frais de livraison                        | `UE77`                                                                             |
| Frais               | Code ref supplément petite commande                | Créez un produit avec un prix positif variable et utilisez son **Code**.           |
| Frais               | Code ref pourboire                                 | Créez un produit avec un prix positif variable et utilisez son **Code**.           |
| Paiements           | Code ref paiement en ligne                         | `UEPM`                                                                             |
| Paiements           | Code ref paiement en espèces                       | (laisser vide)                                                                     |
| Statuts de commande | Marquer les commandes comme Acceptées              | `lorsque leur statut HubRise passe à "Reçue"`                                      |
| Menu                | Activer les notes de préparation sur les articles  | Cochez la case pour les activer.                                                   |

(\*) Ne s'applique que si vous proposez des articles jetables tels que des couverts, des serviettes, etc.
