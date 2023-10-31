---
title: Commandes non reçues
path_override: commandes-non-recues
position: 10
layout: documentation
meta:
  title: Résoudre les erreurs liées aux commandes non reçues | Lightspeed Restaurant | HubRise
  description: Instructions de résolution d'erreurs liées aux commandes non reçues dans le logiciel de caisse.
---

Cette page décrit comment résoudre les problèmes de commandes non reçues dans le logiciel de caisse.

## HubRise non activé

Il peut arriver que vous ne receviez pas les commandes HubRise, même sans erreur apparente dans les logs.

Dans les [logs des commandes](/apps/lightspeed-restaurant/user-interface#operation-page), les commandes concernées affichent le message suivant :

```json
{
  "status": "received"
}
```

Dans ce cas, il est probable qu'HubRise n'était pas activé dans Lightspeed. Pour résoudre le problème, contactez le support Lightspeed et demandez à activer la connexion HubRise pour votre logiciel de caisse.
