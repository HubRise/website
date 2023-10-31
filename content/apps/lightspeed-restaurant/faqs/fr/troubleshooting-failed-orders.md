---
title: Pourquoi certaines commandes ne sont pas correctement transmises à Lightspeed ?
path_override: resoudre-echec-commandes
position: 4
layout: documentation
meta:
  title: Résoudre les erreurs liées aux commandes | Lightspeed Restaurant | HubRise
  description: Raisons courantes pour lesquelles les commandes ne sont pas correctement envoyées à Lightspeed Restaurant, stratégies de dépannage et procédure de résolution.
---

L'échec de l'envoi d'une commande au logiciel de caisse Lightspeed Restaurant peut s'expliquer de plusieurs façons. Nous présentons sur cette page certains des cas les plus courants.

## Codes ref incorrects

Si vous recevez des commandes d'une app connectée, par exemple une plateforme de livraison de repas, vous devez vous assurer que les codes ref y sont correctement configurés. Un code ref incorrect dans le menu de votre plateforme de livraison de repas peut entraîner le rejet d'une commande entière par le logiciel de caisse Lightspeed Restaurant.

Pour résoudre un problème de code ref incorrect dans une commande, consultez les logs pour Lightspeed Restaurant Bridge :

- Ouvrez la page **CONNEXIONS** : https://manager.hubrise.com/connections.
- Cliquez sur **OUVRIR** à côté de la connexion Lightspeed Restaurant Bridge. Une nouvelle fenêtre s'affiche avec toutes vos commandes récentes.
- Dans la liste, trouvez la commande avec laquelle vous avez eu un problème.
- Cliquez sur la ligne correspondante et identifiez la transaction provenant de Lightspeed. Il s'agit de celle avec la direction "Lightspeed -> Bridge".
- Dans le corps de la requête, si `FAILURE` est la valeur de l'état et `Could not add item <id> (not found)` la cause de l'erreur, le rejet de la commande est probablement dû à un code ref incorrect dans votre application intégrée. La valeur `<id>` dans le message d'erreur indiquera l'article qui pose problème.

## Activation de l'API sur la tablette

La connexion à Lightspeed Restaurant exige que l'API Lightspeed soit activée. Il vous suffit de contacter le support Lightspeed et de demander l'activation. Si vous envisagez de connecter Lightspeed Restaurant à des plateformes de livraison de repas comme Deliveroo, Uber Eats et Just Eat, il est préférable de les spécifier. Le support Lightspeed préparera la configuration pour recevoir ce type de commandes également.

Si après cette configuration vous ne parvenez toujours pas à recevoir des commandes sur votre tablette, vérifiez que la connexion API y est bien activée. Sur l'écran principal de l'application Lightspeed, une icône verte en forme de crayon en haut du bloc de droite indique que c'est le cas. Si l'icône n'est pas verte, cliquez dessus puis cliquez sur le bouton **Activer** pour activer l'API.

![Écran principal de l'application Lightspeed avec l'icône verte indiquant que la connexion API est activée.](../../images/010-lightspeed-main-screen.png)
