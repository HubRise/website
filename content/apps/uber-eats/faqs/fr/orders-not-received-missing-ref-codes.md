---
title: Pourquoi mes commandes ne sont-elles pas reçues par HubRise ?
path_override: commandes-non-recues-codes-ref-manquants
position: 6
layout: documentation
meta:
  title: Commandes non reçues | FAQ Uber Eats | HubRise
  description: Si votre configuration Uber Eats Bridge vous semble correcte, et que vous ne recevez toujours pas de commande d'Uber Eats, il est possible que certains produits de votre menu n'aient pas de code ref.
---

Dans certains cas, il se peut que votre configuration Uber Eats Bridge soit correcte, mais que vous ne parveniez toujours pas à recevoir de commande d'Uber Eats. Lorsqu'une nouvelle commande est envoyée d'Uber Eats vers HubRise, aucune ligne nouvelle n'est créée sur la page des commandes d'Uber Eats Bridge, et aucun message d'erreur n'apparaît dans les logs.

Le problème est peut-être dû à des codes ref manquants dans votre menu Uber Eats. Si un article dépourvu de code ref est ajouté à une commande Uber Eats, Uber Eats ne parvient pas à envoyer la totalité de la commande, auquel cas rien n'est reçu dans HubRise.

Pour résoudre ce problème, assurez-vous que tous les produits de votre menu Uber Eats possèdent un code ref. Pour savoir comment ajouter des codes ref à vos produits Uber Eats, voir [Associer les codes ref](/apps/uber-eats/map-ref-codes).
