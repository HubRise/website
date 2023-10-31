---
title: Erreurs liées aux iPad
path_override: erreurs-liees-aux-ipad
position: 9
layout: documentation
meta:
  title: Résoudre les erreurs liées aux iPad | Lightspeed Restaurant | HubRise
  description: Instructions de résolution d'erreurs dues à des iPad déconnectés ou mal configurés.
---

Cette page décrit comment résoudre les erreurs causées par un iPad déconnecté ou mal configuré.

## Point de vente n'acceptant pas les commandes en ligne

Dans certaines circonstances, les commandes peuvent échouer, ce qui génère le message d'erreur suivant :

```json
{
  "status": "FAILURE",
  "reason": "The specified business location doesn't accept online orders at the moment.",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

Ce problème est dû au fait que la commande en ligne n'a pas été activée sur l'iPad concerné. Pour le résoudre, activez la commande en ligne sur l'iPad. Pour plus d'informations, consultez [Activation de l'API sur la tablette](/apps/lightspeed-restaurant/faqs/troubleshooting-failed-orders/#api-activation-in-the-tablet).

## Aucun appareil disponible

Il peut arriver que le traitement des commandes échoue parce qu'aucun appareil n'est disponible. Ce problème peut générer deux messages d'erreur équivalents :

```json
{
  "reason": "Not processed before validity ended",
  "thirdPartyReference": "xxx|xxx-0|yyy",
  "businessLocationId": 123456789,
  "status": "FAILURE",
  "type": "ORDER"
}
```

et

```json
{
  "reason": "No devices available to handle the task, the task has been rejected.",
  "thirdPartyReference": "xxx|xxx-0|yyy",
  "businessLocationId": 123456789,
  "status": "FAILURE",
  "type": "ORDER"
}
```

Ces erreurs apparaissent généralement dans les circonstances suivantes :

- Aucun iPad n'est disponible pour recevoir des commandes.
- L'iPad est éteint ou n'est pas connecté à internet.
- L'iPad est connecté, mais l'application Lightspeed s'exécute en arrière-plan, par exemple lorsque l'utilisateur n'est pas sur l'application.

Par défaut, HubRise définit la période de validité de la commande à 12 heures. Si aucun appareil n'est actif pendant ces 12 heures, la commande échoue.
