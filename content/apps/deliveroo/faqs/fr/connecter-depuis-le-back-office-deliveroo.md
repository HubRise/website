---
title: Comment connecter HubRise depuis le back-office de Deliveroo ?
position: 5
layout: documentation
meta:
  title: Connecter HubRise depuis Deliveroo | Deliveroo FAQs | HubRise
  description: Étapes à suivre pour connecter votre restaurant Deliveroo avec HubRise directement depuis le back-office Deliveroo.
---

Pour connecter vous-même votre restaurant Deliveroo à HubRise, activez HubRise depuis le back-office Deliveroo, puis connectez Deliveroo Bridge à votre point de vente HubRise.

Pour activer HubRise, suivez ces étapes :

1. Connectez-vous à votre [back-office Deliveroo](https://restaurant-hub.deliveroo.net/).
1. Cliquez sur **Paramètres** > **Caisse (POS)**, puis sur **Intégrations**.
1. Depuis la page **Intégrations**, dans **Quel système POS utilisez-vous ?**, selectionnez `HubRise`.
1. Sélectionnez tous les établissements que vous souhaitez connecter dans la liste, et pour chaque établissement, saisissez **l'ID du restaurant** correspondant.
1. Dans **Webhook URL**, copiez la valeur suivante : `https://deliveroo.hubrise-apps.com/deliveroo_webhook`.
1. Choisissez de gérer votre menu depuis Deliveroo ou votre logiciel de caisse :
   - Pour mettre à jour votre menu en envoyant votre [catalogue HubRise](/apps/deliveroo/envoi-catalogue) vers Deliveroo, sélectionnez **Oui**.
   - Pour mettre à jour votre menu manuellement depuis le back-office Deliveroo, sélectionnez **Non**. Assurez-vous que tous les produits de votre menu ont un code PLU.
1. Confirmer que vos produits ont un code PLU.
1. Cliquer sur **Connecter mon système POS** pour confirmer.

Pour terminer la connexion et recevoir vos commandes Deliveroo dans HubRise, vous devez [connecter Deliveroo Bridge](/apps/deliveroo/connexion-hubrise#connecter-deliveroo-bridge) sur le point de vente HubRise associé au compte Deliveroo. Si vous avez besoin d'aide pour cette opération, vous pouvez contacter notre support sur [support@hubrise.com](mailto:support@hubrise.com).
