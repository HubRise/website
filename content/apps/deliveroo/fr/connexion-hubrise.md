---
title: Connexion à HubRise
position: 2
layout: documentation
meta:
  title: Connexion | Deliveroo | HubRise
  description: Connexion de votre restaurant Deliveroo à HubRise. Éléments à fournir et étapes à suivre pour recevoir vos commandes Deliveroo dans votre logiciel de caisse.
---

La connexion de Deliveroo à HubRise s'effectue en quelques étapes.

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, commencez par en ouvrir un sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup?locale=fr-FR). L'inscription ne prend que quelques minutes !

---

## 1. Activer HubRise sur Deliveroo

Dans un premier temps, l'intégration de HubRise doit être activée sur votre compte Deliveroo.

Contactez-nous par e-mail à l'adresse [support@hubrise.com](mailto:support@hubrise.com) en précisant les informations suivantes :

- L'adresse URL de la page de votre restaurant sur le site internet de Deliveroo. Exemple : [https://deliveroo.fr/en/menu/nice/jean-medecin/sushi-shop-nice-1](https://deliveroo.fr/en/menu/nice/jean-medecin/sushi-shop-nice-1).
- Indiquez si votre enseigne sur le site internet de Deliveroo est déjà connectée à une caisse ou un autre middleware.
- Le nom et l'identifiant de votre point de vente HubRise. Exemple : `Sushi Shop Colbert z6q31-0`.

Avec ces informations, nous demanderons à l'équipe d'intégration de Deliveroo d'activer la connexion HubRise pour votre enseigne.

Vous pouvez également [connecter HubRise depuis votre back-office Deliveroo](/apps/deliveroo/faqs/connecter-depuis-le-back-office-deliveroo).

## 2. Connecter Deliveroo Bridge

---

**REMARQUE IMPORTANTE :** Deliveroo Bridge se connecte à HubRise au niveau du point de vente. Pour plus d'informations, voir la page [Points de vente](/docs/points-de-vente).

---

Pour connecter Deliveroo Bridge à HubRise, procédez comme suit :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com?locale=fr-FR).
1. Dans le menu déroulant, sélectionnez le point de vente que vous souhaitez connecter.
1. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
1. Dans la liste des apps, sélectionnez **Deliveroo Bridge**.
1. Cliquez sur **Connecter**.
1. Cliquez sur **Autoriser** pour donner à Deliveroo Bridge accès aux données HubRise de votre restaurant. Si votre compte possède plusieurs points de vente, développez **Tous les points de vente**, choisissez le point de vente à connecter, puis cliquez sur **Autoriser**.
1. Une nouvelle page vous demande d'indiquer votre identifiant de restaurant Deliveroo. Entrez l'identifiant, puis cliquez sur **Enregistrer** pour terminer le processus de connexion.

![Identifiant de restaurant Deliveroo](../images/001-fr-deliveroo-restaurant-id.png)

## 3. Configurer vos préférences

Une fois la connexion du bridge effectuée, vous devez renseigner quelques paramètres sur la page **Configuration** afin que les commandes soient transmises correctement à votre logiciel de caisse.

Pour plus d'informations sur la page configuration et la manière d'y accéder, voir la rubrique [Page de configuration](/apps/deliveroo/interface-utilisateur/#configuration). Pour plus de détails sur la configuration des paramètres Deliveroo Bridge, voir la rubrique [Configuration](/apps/deliveroo/configuration).

## 4. Renseigner les codes ref des produits

Vous devez renseigner les codes ref de tous les produits dans Deliveroo. Votre logiciel de caisse pourra ainsi identifier correctement chaque article.

Pour savoir comment associer les codes ref sur Deliveroo, voir la rubrique [Associer les codes ref](/apps/deliveroo/associer-codes-ref).

---

**REMARQUE IMPORTANTE :** Si des produits n'ont pas de code ref, Deliveroo n'activera pas la connexion HubRise.

---
