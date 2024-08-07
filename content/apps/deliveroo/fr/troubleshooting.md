---
title: Dépannage
path_override: depannage
position: 9
layout: documentation
meta:
  title: Dépannage | Deliveroo Bridge | HubRise
  description: Résolution des problèmes de connexion entre Deliveroo Bridge et HubRise pour que votre logiciel de caisse et les autres apps fonctionnent de manière cohérente. Connectez les apps et synchronisez vos données.
---

## Problèmes de menus

### Le menu ne se met pas à jour

Lorsque vous envoyez un menu, s'il ne se met pas à jour sur votre page Deliveroo et qu'il n'y a pas d'erreur dans le bridge, cela peut être dû à un problème de cache sur Deliveroo.

Pour résoudre le problème, apportez une petite modification au menu, en changeant par exemple le nom d'un produit, puis publiez à nouveau le menu.

### Invalid Site Assignment (assignation de site invalide)

Lorsque vous envoyez un menu, l'erreur suivante peut apparaître dans la réponse de Deliveroo Bridge :

```
{
  "error": "invalid site assignment: one or more sites IDs are missing from the current site_ids array. Before removing a site from a menu, please reassign the site to another menu to avoid this error. Invalid site_ids: XXXXX"
}
```

Cette erreur est due à un bug de Deliveroo, qui sera bientôt corrigé. La solution temporaire consiste à créer un nouveau menu dans Deliveroo.

Pour créer un nouveau menu, procédez comme suit :

- Dans Deliveroo Bridge, ouvrez l'onglet **Configuration**.
- Dans la section **Catalogue**, choisissez un nouveau nom pour **Identifiant du menu**. Ce nom doit être différent du nom du menu qui a causé l'erreur.
- Cliquez sur **Enregistrer**.
- Ouvrez l'onglet **Actions** et envoyez le catalogue.

Si vous rencontrez toujours des problèmes après avoir essayé cette solution, contactez support@hubrise.com.

## Commandes non reçues {#orders-not-received}

Si Deliveroo Bridge est configuré correctement et que vous ne recevez pas de commandes Deliveroo dans HubRise, vous pouvez être dans l'une des situations suivantes.

### Codes ref manquants

Si un article sans code ref est ajouté à une commande, Deliveroo échouera à envoyer la commande, et rien ne sera reçu sur HubRise.

Pour résoudre ce problème, assurez-vous que tous les produits de votre menu Deliveroo possèdent un code ref. Pour savoir comment ajouter des codes ref à vos produits Deliveroo, voir la rubrique [Associer les codes ref](/apps/deliveroo/map-ref-codes).

### Commandes rejetées par Deliveroo

Lorsque l'acceptation automatique n'est pas activée, chaque commande doit être acceptée manuellement sur la tablette Deliveroo, sinon elle sera rejetée par Deliveroo et rien ne sera reçu sur HubRise.

Pour éviter cela, nous recommandons d'activer l'acceptation automatique. Pour plus d'informations, voir [Puis-je arrêter d'utiliser la tablette Deliveroo ?](/apps/deliveroo/faqs/deliveroo-tabletless)

