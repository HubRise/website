---
title: Récupérer des commandes
path_override: recuperer-commandes
position: 10
layout: documentation
meta:
  title: Récupérer des commandes | Lightspeed Restaurant | HubRise
  description: HubRise peut récupérer des commandes depuis Lightspeed Restaurant. Découvrez les détails techniques sur la réception de commandes, et les champs transmis ou non.
---

HubRise peut récupérer des commandes depuis votre logiciel de caisse Lightspeed Restaurant dès qu'elles sont payées.

Cette page explique comment activer cette fonctionnalité et détaille les informations envoyées à HubRise.

## Activer la récupération des commandes

Pour commencer à récupérer les commandes Lightspeed dans HubRise, vous devez activer la fonctionnalité en suivant ces étapes :

1. Ouvrez Lightspeed Restaurant Bridge.
1. Ouvrez la page **Configuration**.
1. Dans la section **Récupérer les commandes de Lightspeed**, sélectionnez l'option **Activée pour les ventes en consommation sur place** ou **Activée pour toutes les ventes payées**, en fonction de vos besoins.
1. Cliquez sur **Enregistrer** pour confirmer.

Lightspeed Restaurant Bridge récupère de nouvelles commandes toutes les 30 secondes. Il peut y avoir un délai allant jusqu'à 30 secondes entre le moment où une commande est payée et le moment où elle apparaît dans HubRise.

---

**REMARQUE IMPORTANTE :** Seules les ventes enregistrées dans Lightspeed et payées sont récupérées dans HubRise. Les commandes passées depuis des applications tierces directement connectées au logiciel de caisse, et non via HubRise, ne sont pas récupérées.

---

## Informations reçues dans HubRise

Les sections suivantes décrivent les informations sur les commandes Lightspeed qui sont reçues dans HubRise.

### Articles et options

Lightspeed Restaurant Bridge reçoit des informations complètes sur les articles et les options, y compris le nom, le code ref du produit, la quantité et le prix.

Les informations sur le numéro de plat ne sont pas reçues dans HubRise.

### Statuts de commande

Si le bridge est configuré pour marquer les commandes comme terminées, les commandes Lightspeed sont créées dans HubRise avec le statut par défaut `completed`. Sinon, elles sont créées avec le statut `received`. Pour plus d'informations, consultez la section [Statuts de commande](/apps/lightspeed-restaurant/configuration#order-statuses) de la page Configuration.

### Paiements

Lightspeed Restaurant Bridge reçoit des informations complètes sur le paiement d'une commande locale, y compris le nom, le code ref du produit et le montant.

### Types de service

Les commandes récupérées depuis Lightspeed se voient attribuer un type de service dans HubRise selon les règles suivantes :

- `eat_in` : Ventes en consommation sur place dans Lightspeed.
- `collection` : Ventes à emporter dans Lightspeed, sauf si elles correspondent à une livraison.
- `delivery` : Commandes avec un code de profil de compte correspondant à ceux configurés dans la section [Récupérer les commandes de Lightspeed](/apps/lightspeed-restaurant/configuration#pull-orders-from-lightspeed).

Sans profils de compte en livraison configurés, toutes les commandes à emporter seront marquées comme `collection` dans HubRise, car il n'existe pas de moyen natif de distinguer les commandes en livraison dans Lightspeed.

### Données client

Lorsque les données client sont disponibles dans Lightspeed, elles sont récupérées dans HubRise. Cela inclut le nom du client, son numéro de téléphone, son adresse e-mail et son adresse.

### Informations supplémentaires

Lightspeed Restaurant Bridge reçoit des informations supplémentaires sur la commande, par exemple le numéro de table et l'heure à laquelle la commande a été payée.
