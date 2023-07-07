---
title: Gérer les inventaires
position: 6
layout: documentation
meta:
  title: Gérer les inventaires | Dishop | HubRise
  description: Fonctionnement de la synchronisation des inventaires entre Dishop et d'autres applications connectées à HubRise. Connectez vos apps et synchronisez vos données.
---

Une gestion des inventaires vous permet de masquer les produits en rupture de stock sur votre site de commande en ligne Dishop et toute autre application connectée à votre compte HubRise. 

## Activer les inventaires

Les inventaires peuvent être gérés par toute application connectée à HubRise qui a intégré cette fonctionnalité, généralement il s'agit d'un logiciel de caisse ou de gestion. Dishop permet une gestion des inventaires depuis Dishop quand aucune solution spécialisée est connectée.

---

**REMARQUE IMPORTANTE :** Pour un bon fonctionnement, assurez-vous que toutes les applications concernées ont été configurées pour la gestion des inventaires et pour la mise à jour des inventaires sur HubRise. Reportez-vous à la documentation de votre logiciel sur le site internet de HubRise pour vérifier, page [Apps](https://www.hubrise.com/fr/apps).

---

### Inventaire par une autre app
Lorsqu'une application gère les inventaires et remonte l'information à HubRise, Dishop se contente de recevoir les données pour mettre à jour les inventaires sur Dishop et cacher des produits non disponibles sur votre site de commande en ligne Dishop.

### Inventaires par Dishop

Lorsque aucune application spécialisée n'est en mesure d'envoyer les inventaires à HubRise, il est possible de les gérer directement sur Dishop. 
Dishop peut ainsi supprimer les produits non disponibles de votre site de commande en ligne et envoyer l'information à HubRise pour la mise à jour des inventaires sur d'autres solutions connectées à votre compte HubRise, notamment les plateformes de livraison de repas à domicile, les kiosques de commande en libre-service, les applications de commande à table ou les menus digitaux.

## Associer les codes ref

Que l'inventaire soit géré par une autre application ou par Dishop, chaque produit doit avoir un code ref. Sans ce code, Dishop peut afficher un produit sans le reconnaître, mais pas mettre à jour les inventaires. 

Si les codes ref ne sont pas générés par une des applications connectées à HubRise, ils peuvent être inventés. Les codes ref doivent figurer dans toutes les applications pour lesquelles l'inventaire doit être synchronisé. 

Pour Dishop, il faudra associer des codes refs sur les produits, les SKUs, et les options. Pour plus d'information, voir [Associer les codes ref](/apps/dishop/associer-codes-ref).

Pour les plateformes de livraison, vous pouvez envoyer l'inventaire manuellement via le Bridge correspondant, puis activer la case **Activer l'envoi automatique de l'inventaire**. Reportez-vous à la documentation des logiciels que vous utilisez sur le site internet de HubRise, page [Apps](https://www.hubrise.com/fr/apps).
