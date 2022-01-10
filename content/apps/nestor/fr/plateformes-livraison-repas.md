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

| Section          | Nom                                  | Code ref       |
| ---------------- | ------------------------------------ | -------------- |
| Types de service | Code ref livraison par Deliveroo     | `DVLIV`        |
| Types de service | Code ref livraison par le restaurant | `DVLIVR`       |
| Types de service | Code ref à emporter                  | `DVEMP`        |
| Remises          | Code ref promotion                   | (laisser vide) |
| Frais            | Code ref frais de livraison          | (laisser vide) |
| Frais            | Code ref surcharge                   | (laisser vide) |
| Paiements        | Code ref paiement sur Deliveroo      | `DV`           |
| Paiements        | Code ref paiement en espèces         | (laisser vide) |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Deliveroo Bridge](/apps/deliveroo/configuration).

## Uber Eats

Dans la page de configuration de Uber Eats Bridge, utilisez les codes ref suivants.

| Section             | Nom                                  | Code ref                                                          |
| ------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| Types de service    | Code ref livraison Uber              | `UELIV`                                                           |
| Types de service    | Code ref livraison par le restaurant | `UELIVR`                                                          |
| Types de service    | Code ref à emporter                  | `UEEMP`                                                           |
| Types de service    | Code ref sur place                   | `UEPLA`                                                           |
| Articles spéciaux   | Code ref jetables                    | Créer un article `Jetables` dans Nestor et utiliser son code ref. |
| Remises             | Code ref remise                      | (laisser vide)                                                    |
| Paiements           | Code ref paiement                    | `UE`                                                              |
| Statuts de commande | Marquer la commande comme Acceptée   | `Lorsque le statut HubRise passe à "Reçue"`                       |
| Statuts de commande | Marquer la commande comme Rejetée    | `Lorsque le statut HubRise passe à "Rejetée"`                     |
| Statuts de commande | Marquer la commande comme Annulée    | `Lorsque le statut HubRise passe à "Annulée"`                     |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Uber Eats Bridge](/apps/uber-eats/configuration).

## Just Eat

Dans la page de configuration de Just Eat Takeaway Bridge, utilisez les codes ref suivants.

| Section          | Nom                                  | Code ref       |
| ---------------- | ------------------------------------ | -------------- |
| Types de service | Code ref livraison par la plateforme | `JELIV`        |
| Types de service | Code ref livraison par le restaurant | `JELIVR`       |
| Types de service | Code ref à emporter                  | `JEEMP`        |
| Remises          | Code ref promotion                   | (laisser vide) |
| Frais            | Code ref frais de livraison          | (laisser vide) |
| Paiements        | Code ref paiement en ligne           | `JE`           |
| Paiements        | Code ref paiement en espèces         | (laisser vide) |

Pour savoir comment accéder à cette page, consultez l'aide sur la [configuration de Just Eat Takeaway Bridge](/apps/just-eat-takeaway/configuration).
