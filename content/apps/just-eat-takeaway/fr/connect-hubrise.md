---
title: Connexion à HubRise
path_override: connexion-hubrise
position: 2
layout: documentation
meta:
  title: Connexion à HubRise | Just Eat Takeaway | HubRise
  description: Voir comment connecter votre enseigne Just Eat Takeaway à HubRise. Envoyez le lien de votre page Just Eat à HubRise et suivez les quelques étapes de connexion.
---

La connexion de Just Eat Takeaway à HubRise s'effectue en quelques étapes simples.

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, commencez par en ouvrir un sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup?locale=fr-FR). L'inscription ne prend que quelques minutes !

---

## 1. Activez HubRise sur Just Eat Takeaway

Dans un premier temps, vous devez contacter votre service d'assistance Just Eat Takeaway et lui demander d'activer l'intégration d'API pour vos enseignes. Incluez à la fois l'adresse support@hubrise.com et celle de votre responsable commercial Just Eat en tant que destinataires de votre e-mail.

Vous pouvez vous inspirer de ce modèle d'e-mail en remplaçant les sections en gras :

> Bonjour,
> Veuillez activer l'intégration d'API pour mon restaurant :
>
> - Adresse URL de mon restaurant : **incluez le lien de votre enseigne sur le site internet de Just Eat, tel que : `https://www.just-eat.fr/menu/asian-lover`**
> - ExtID du restaurant : utiliser mon identifiant Just Eat Takeaway
> - Flux d'API à activer : POSAPI
> - Logiciel de caisse à activer : HubRise
> - Type de connexion : primaire
> - Point de vente HubRise  **incluez le nom et l'identifiant, par exemple : `Fast Sushi Rue Jean-Jaurès z6q31-0`**
>
> Nous avons également besoin d'un accès au back-office de Just Eat Takeaway pour saisir de manière autonome les codes ref des produits.
> Veuillez fournir l'identifiant Just Eat Takeaway afin que nous puissions finaliser la connexion avec HubRise.
>
> Cordialement.

Just Eat Takeaway activera l'intégration HubRise pour votre enseigne et vous fournira un identifiant Just Eat Takeaway tel que : `8736550`. Vous aurez besoin de cet identifiant pour connecter Just Eat Takeaway Bridge à HubRise.

## 2. Associez les codes ref des produits

La plupart des applications ont besoin des codes ref des produits pour que les commandes soient correctement traitées. Vous pouvez soit saisir les codes ref des produits manuellement dans le back-office de Just Eat Takeaway, soit confier cette tâche à leur équipe d'assistance.

Pour plus d'informations, voir la rubrique [Associer les codes ref](/apps/just-eat-takeaway/map-ref-codes).

## 3. Connectez le bridge

---

**REMARQUE IMPORTANTE :** Just Eat Takeaway Bridge se connecte à HubRise au niveau du point de vente. Pour plus d'informations, voir la page [Points de vente](/docs/locations).

---

Pour connecter Just Eat Takeaway Bridge à HubRise, procédez comme suit :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
1. Sélectionnez le point de vente que vous souhaitez connecter dans le menu déroulant.
1. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
1. Sélectionnez **Just Eat Takeaway Bridge** dans la liste des applications.
1. Cliquez sur **Connecter**.
1. Cliquez sur **Autoriser** pour donner à Just Eat Takeaway Bridge l'accès aux données HubRise de votre restaurant. Si votre compte possède plusieurs points de vente, développez **Tous les points de vente**, choisissez le point de vente à connecter, puis cliquez sur **Autoriser**.
1. Une nouvelle page vous demande d'indiquer votre identifiant de restaurant Just Eat Takeaway. Entrez l'identifiant, puis cliquez sur **Enregistrer** pour terminer le processus de connexion.

![Identifiant de restaurant Just Eat Takeaway](./images/001-jet-restaurant-id.png)

## 4. Configurez vos préférences

Une fois la connexion effectuée, vous devez renseigner quelques paramètres sur la page Configuration afin que les commandes soient transmises correctement à votre logiciel de caisse.

Pour plus d'informations sur la page Configuration et la manière d'y accéder, voir la rubrique [Interface utilisateur](/apps/just-eat-takeaway/user-interface#configuration). Pour plus de détails sur la configuration des paramètres de Just Eat Takeaway Bridge, voir la rubrique [Configuration](/apps/just-eat-takeaway/configuration).
