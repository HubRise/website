---
title: Connexion à HubRise
position: 2
layout: documentation
meta:
  title: Connexion à HubRise | Just Eat Flyt | HubRise
  description: Voir comment connecter Just Eat à HubRise. Envoyez le lien de votre page Just Eat à HubRise et suivez les quelques étapes pour vous connecter.
---

La connexion de Just Eat à HubRise s'effectue en quelques étapes simples.

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, commencez par en ouvrir un sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup?locale=fr-FR). L'inscription ne prend que quelques minutes !

---

## 1. Activez l'intégration de l'API

Dans un premier temps, l'intégration de HubRise à l'API Flyt doit être activée sur votre compte Just Eat.

Contactez-nous par e-mail à l'adresse [support@hubrise.com](mailto:support@hubrise.com) en précisant les informations suivantes :

- Le lien URL renvoyant à la page de votre restaurant sur le site internet de Just Eat. Exemple : [https://www.just-eat.fr/menu/asian-lover](https://www.just-eat.fr/menu/asian-lover).
- Indiquez si l'acceptation automatique doit être `activée` ou `désactivée`. Pour plus de détails, consultez [Dois-je activer l'auto-acceptation sur Just Eat ?](/apps/just-eat-flyt/faqs/auto-acceptation).
- L'adresse e-mail de votre responsable de compte Just Eat.
- Indiquez si votre enseigne sur le site internet de Just Eat est déjà connectée à une caisse ou un autre middleware.
- Le nom et l'identifiant de votre point de vente HubRise. Exemple : `Sushi Shop Colbert z6q31-0`.

Avec ces informations, HubRise pourra demander à l'équipe d'intégration de Flyt d'activer l'intégration faite par HubRise à l'API Flyt pour votre enseigne. Une fois cette opération terminée, l'équipe de Flyt fournira les informations d'identification nécessaires pour vous connecter.

## 2. Connectez le bridge

---

**REMARQUE IMPORTANTE :** Just Eat Flyt Bridge se connecte à HubRise au niveau du point de vente. Pour plus d'informations, voir la page [Points de vente](/docs/points-de-vente/).

---

Pour connecter Just Eat Flyt Bridge à HubRise, procédez comme suit :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
1. Dans le menu déroulant, sélectionnez le point de vente que vous souhaitez connecter.
1. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
1. Sélectionnez **Just Eat Flyt Bridge** dans la liste des applications.
1. Cliquez sur **Connecter**.
1. Cliquez sur **Autoriser** pour donner à Just Eat Flyt Bridge permission d'accéder à votre point de vente enregistré sur HubRise. Si votre compte possède plusieurs points de vente, développez **Tous les points de vente**, choisissez le point de vente à connecter, puis cliquez sur **Autoriser**.
1. Une nouvelle page vous demande de fournir vos informations d'identification Just Eat :
   - Clé d'API Menu
   - Clé d'API Commandes
   - L'Identifiant de restaurant. Entrez l'identifiant Flyt, puis cliquez sur **Enregistrer** pour terminer le processus de connexion.

![Page d'informations d'identification pour Just Eat Flyt Bridge](../images/001-fr-just-eat-credentials.png)

## 3. Configurez vos préférences

Une fois la connexion effectuée, vous devez renseigner quelques paramètres sur la page Configuration afin que les commandes soient transmises correctement à votre logiciel de caisse.

Pour plus d'informations sur la page Configuration et la manière d'y accéder, voir la rubrique [Interface utilisateur](/apps/just-eat-flyt/interface-utilisateur#page-de-configuration). Pour plus de détails sur la configuration des paramètres de Just Eat Flyt Bridge, voir la rubrique [Configuration](/apps/just-eat-flyt/configuration).

## 4. Chargez votre menu

Pour que l'intégration de Just Eat Flyt soit activée, vous devez charger votre catalogue HubRise dans Just Eat Flyt.

Pour savoir comment charger votre catalogue HubRise dans Just Eat, voir la rubrique [Envoi du catalogue](/apps/just-eat-flyt/envoi-catalogue#envoi-du-catalogue). Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues](/docs/catalogues/).
