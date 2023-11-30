---
title: Pourquoi mes commandes ne sont-elles pas reçues par HubRise ?
path_override: commandes-non-recues
position: 2
layout: documentation
meta:
  title: Commandes non reçues dans HubRise | FAQ Uber Eats | HubRise
  description: Si la configuration de votre Uber Eats Bridge est faite mais vous ne recevez pas de commandes Uber Eats, il se peut qu'il y ait des codes ref manquants.
---

Il se peut que la configuration d'Uber Eats Bridge soit correcte, mais que vous ne parveniez pas à recevoir les commandes Uber Eats. Les commandes passées sur Uber Eats n'apparaissent pas dans la page des commandes d'Uber Eats Bridge, et aucun message d'erreur n'apparaît dans les requêtes d'API.

Le problème est peut-être dû à des codes ref manquants dans votre menu Uber Eats. Si un article dépourvu de code ref est ajouté à une commande Uber Eats, l'envoi de la commande échouera et la commande ne sera pas reçue dans HubRise.

Pour résoudre ce problème, assurez-vous que tous les produits de votre menu Uber Eats possèdent un code ref. Pour savoir comment associer les codes ref sur Uber Eats, voir la rubrique [Association des codes ref](/apps/uber-eats/map-ref-codes).
