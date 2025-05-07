---
title: Je viens de migrer de Deliverect. Que dois-je faire pour recevoir les commandes ?
position: 2
layout: documentation
meta:
  title: Migrer de Deliverect à HubRise | Lightspeed Restaurant | HubRise
  description: Instructions pour migrer de Deliverect à HubRise et recevoir les commandes dans Lightspeed Restaurant.
---

Si vous venez de migrer de Deliverect à HubRise et que vous utilisiez précédemment Deliverect pour connecter votre logiciel de caisse Lightspeed Restaurant aux plateformes de livraison comme Deliveroo, Uber Eats, ou Just Eat, vous devez vérifier que tous les produits ont les codes ref corrects.

Lorsque Deliverect synchronise les produits avec les plateformes de livraison de repas, il ajoute la chaîne `-M-` à tous les codes ref des modificateurs. Par exemple, si vous avez un modificateur avec le code ref `sauce-123` dans votre catalogue Lightspeed, il apparaît sur Deliveroo comme `sauce-123-M-`. Lorsque vous recevez une commande de Deliveroo, Deliverect supprime automatiquement la chaîne `-M-` du code ref avant de l'envoyer à Lightspeed Restaurant.

Après avoir migré de Deliverect à HubRise, vous devez retirer la chaîne `-M-` de tous les produits dans les menus de vos plateformes pour qu'ils soient correctement reçus dans votre logiciel de caisse Lightspeed Restaurant.
