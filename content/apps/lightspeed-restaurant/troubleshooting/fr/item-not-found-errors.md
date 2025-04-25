---
title: Article introuvable
path_override: article-introuvable
position: 3
layout: documentation
meta:
  title: Résoudre l'erreur "Item not found" | Lightspeed Restaurant | HubRise
  description: Instructions de résolution d'erreurs dues à des articles avec codes ref incorrects dans les commandes que vous recevez d'applications tierces.
---

Cette page décrit comment résoudre les erreurs causées par des codes ref manquants.

## Erreur "Could Not Add Item (Not Found)" (Impossible d'ajouter l'article [introuvable])

Il peut arriver que les commandes échouent en affichant un message d'erreur similaire à celui-ci :

```json
{
  "status": "FAILURE",
  "reason": "Could not add item 6644662335523 (not found)",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

La cause de l'erreur dépend de l'identifiant inclus dans le champ `reason` du message d'erreur (par exemple `6644662335523` dans l'exemple ci-dessus).

- Si l'identifiant est l'un des codes ref utilisés dans la commande, l'erreur est due à un code ref invalide.
- Sinon, l'erreur est causée par un article déconnecté dans Lightspeed.

### Code ref invalide

L'article dont le code ref est indiqué dans le champ `reason` du message d'erreur n'est pas dans Lightspeed. Pour résoudre ce problème, trouvez le bon code ref dans Lightspeed et incluez-le dans l'application tierce qui a envoyé la commande.

### Article déconnecté

Un des articles de la commande a le statut **déconnecté** dans Lightspeed. Pour résoudre le problème, vérifiez tous les articles de la commande dans Lightspeed et assurez-vous qu'ils sont tous associés à un menu. Vous pouvez aussi vérifier les articles déconnectés dans Lightspeed et vous assurer qu'ils ne sont utilisés dans aucune commande.

Malheureusement, le message d'erreur ne précise pas l'article qui provoque l'erreur.

## Erreur "No such item" (L'article n'existe pas)

Il peut arriver que les commandes échouent en affichant un message d'erreur similaire à celui-ci :

```json
{
  "status": "FAILURE",
  "reason": "No such item id: 6644662335523, sku: abc123, blId: 52000111222",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

Cette erreur est généralement provoquée par :

- Des codes ref incorrects.
- Un iPad non mis à jour.

### Codes ref incorrects

Si vous recevez des commandes d'une app connectée, par exemple une plateforme de livraison de repas, vous devez vous assurer que les codes ref y sont correctement configurés. Un code ref incorrect dans le menu de votre plateforme de livraison de repas peut entraîner le rejet d'une commande entière par le logiciel de caisse Lightspeed Restaurant.

Dans le message d'erreur, le `sku` dans le champ `reason` (par exemple `abc123` dans l'exemple ci-dessus) indique le code ref manquant dans le logiciel de caisse Lightspeed. Pour résoudre le problème, incluez le bon code ref dans l'application tierce qui a envoyé la commande.

### iPad non mis à jour

Si l'iPad que vous utilisez n'a pas un menu à jour, il est possible que l'erreur s'affiche même si l'article est disponible dans Lightspeed. Si vous rencontrez cette erreur de temps en temps et que vous avez plusieurs iPad pour votre enseigne, l'erreur peut être causée par un seul iPad qui n'est pas à jour lorsqu'il reçoit la commande.

Pour résoudre le problème, assurez-vous que tous vos iPad sont à jour.
