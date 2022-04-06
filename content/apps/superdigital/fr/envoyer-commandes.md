---
title: Envoyer les commandes
position: 4
layout: documentation
meta:
  title: Commandes | SuperDigital.fr | HubRise
  description: Envoyer les commandes SuperDigital.fr et leurs mises à jour de statuts vers HubRise. Connectez vos apps et synchronisez vos données.
---

## Liste des commandes

Pour voir la liste des commandes passées depuis SuperDigital.fr, sélectionnez **RestroPress** > **Orders** dans le menu latéral de SuperDigital.fr.

## Détail d'une commande

Pour voir les détails d'une commande :

1. Dans le menu latéral, sélectionnez **RestroPress** > **Orders**.
1. Identifiez la commande souhaitée, puis cliquez sur l'icône **Preview**.

## Statuts de commande

SuperDigital.fr supporte les statuts de commande suivants :

- _Pending_ : la commande est en attente d'acceptation.
- _Accepted_ : la commande a été acceptée.
- _Processing_ : la commande est en cours de préparation.
- _Ready_ : la commande est prête.
- _In Transit_ : la commande est en cours de livraison.
- _Cancelled_ : la commande a été annulée.
- _Completed_ : la commande est terminée.

Pour modifier le statut d'une commande :

1. Dans le menu latéral, sélectionnez **RestroPress** > **Orders**.
1. Dans la colonne **Order Status**, sélectionnez le nouveau statut.

SuperDigital.fr reçoit aussi les mises à jour de statut provenant de HubRise. La table ci-dessous indique la correspondance entre les statuts de HubRise et ceux de SuperDigital.fr.

| HubRise               | SuperDigital.fr |
| --------------------- | --------------- |
| `new`                 | `pending`       |
| `received`            | `pending`       |
| `accepted`            | `accepted`      |
| `in_preparation`      | `processing`    |
| `awaiting_shipment`   | `ready`         |
| `awaiting_collection` | `ready`         |
| `in_delivery`         | `transit`       |
| `completed`           | `completed`     |
| `rejected`            | `cancelled`     |
| `cancelled`           | `cancelled`     |
| `delivery_failed`     | `cancelled`     |
