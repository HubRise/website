---
title: Connexion à HubRise
path_override: connexion-hubrise
position: 2
layout: documentation
meta:
  title: Connexion à HubRise | Deliveroo | HubRise
  description: Instructions sur la connexion de Deliveroo avec HubRise pour que votre logiciel de caisse fonctionne avec d'autres applications comme un tout cohérent. Connectez vos applications et synchronisez vos données.
---

La connexion de Deliveroo à HubRise s'effectue en quelques étapes.

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, rendez-vous sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup?locale=fr-FR). L'inscription ne prend qu'une minute !

---

## 1. Activez HubRise sur Deliveroo

Dans un premier temps, l'intégration de HubRise doit être activée sur votre compte Deliveroo.

Contactez-nous par e-mail à l'adresse support@hubrise.com en précisant les informations suivantes :

- L'adresse URL de la page de votre restaurant sur le site internet de Deliveroo. Exemple : https://deliveroo.fr/en/menu/nice/jean-medecin/sushi-shop-nice-1.
- Indiquez si votre enseigne sur le site internet de Deliveroo est déjà connectée à une caisse ou un autre middleware.
- Le nom et l'identifiant de votre point de vente HubRise. Exemple : `Sushi Shop Colbert z6q31-0`.

Avec ces informations, nous demanderons à l'équipe d'intégration de Deliveroo d'activer la connexion HubRise pour votre enseigne.

Vous pouvez aussi connecter votre restaurant de manière autonome. Pour plus d'informations, voir [Comment connecter HubRise depuis le back-office de Deliveroo ?](/apps/deliveroo/faqs/connect-from-deliveroo-back-office).

## 2. Connectez Deliveroo Bridge {#connect}

Pour connecter Deliveroo Bridge à HubRise, procédez comme suit :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
1. Dans le menu déroulant, sélectionnez le point de vente que vous souhaitez connecter.
1. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
1. Dans la liste des apps, sélectionnez **Deliveroo Bridge**.
1. Cliquez sur **Connecter**.
1. Cliquez sur **Autoriser** pour donner à Deliveroo Bridge accès aux données HubRise de votre restaurant. Si votre compte possède plusieurs points de vente, développez **Tous les points de vente**, choisissez le point de vente à connecter, puis cliquez sur **Autoriser**.
1. Une nouvelle page vous demande d'indiquer votre identifiant de restaurant Deliveroo. Entrez l'identifiant, puis cliquez sur **Enregistrer** pour terminer le processus de connexion.

![Identifiant de restaurant Deliveroo](./images/001-deliveroo-restaurant-id.png)

## 3. Configurez vos préférences

Une fois la connexion du bridge effectuée, vous devez renseigner quelques paramètres sur la page **Configuration** afin que les commandes soient transmises correctement à votre logiciel de caisse.

Pour plus d'informations sur la page de configuration et la manière d'y accéder, voir la rubrique [Configuration](/apps/deliveroo/user-interface#configuration) de la page Interface Utilisateur. Pour plus de détails sur la configuration des paramètres Deliveroo Bridge, voir la rubrique [Configuration](/apps/deliveroo/configuration).

## 4. Renseignez les codes ref des produits

Vous devez renseigner les codes ref de tous les produits dans Deliveroo. Vous permettrez ainsi à votre logiciel de caisse d'identifier correctement chaque article.

Pour savoir comment associer les codes ref sur Deliveroo, consultez la rubrique [Associer les codes ref](/apps/deliveroo/map-ref-codes).

---

**REMARQUE IMPORTANTE :** Deliveroo n'activera pas la connexion HubRise tant que tous les codes ref n'auront pas été saisis.

---
