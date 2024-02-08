---
title: Connexion à HubRise
path_override: connexion-hubrise
position: 2
layout: documentation
meta:
  title: Connexion à HubRise | Lightspeed Restaurant | HubRise
  description: Instructions pour connecter Lightspeed Restaurant à HubRise afin que votre logiciel de caisse fonctionne harmonieusement avec d'autres apps. Connectez-les et synchronisez vos données.
---

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, rendez-vous sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup). L'inscription ne prend qu'une minute !

---

## 1. Connecter Lightspeed Restaurant Bridge

Lightspeed Restaurant Bridge se connecte à un point de vente HubRise. Vous devez répéter le processus ci-dessous pour chaque point de vente que vous souhaitez connecter.

1. Ouvrez votre back-office HubRise et cliquez sur la flèche vers le bas à côté de **Point de vente** pour sélectionner le point de vente à connecter. Pour plus d'informations, consultez le Guide utilisateur HubRise > [Comptes](/docs/account) et [Points de vente](/docs/locations).
1. Sélectionnez **CONNEXIONS** > **Voir les apps disponibles**.
1. Sélectionnez Lightspeed Restaurant Bridge dans la liste des applications.
1. Cliquez sur **Connecter**.
1. Autorisez Lightspeed Restaurant Bridge à accéder à votre point de vente référencé dans HubRise. Si votre compte présente plusieurs points de vente, développez **Tous les points de vente**, choisissez le point de vente à connecter, puis **cliquez** sur **Autoriser**. Si vous disposez de plusieurs listes de clients ou de catalogues sur HubRise, vous serez également invité à préciser ceux que vous souhaitez utiliser.
1. Vous êtes redirigé vers l'interface utilisateur de Lightspeed Restaurant Bridge. Cliquez sur **Connexion à Lightspeed**.
1. À la première connexion, vous êtes redirigé vers la page de connexion Lightspeed. Indiquez votre **e-mail** et votre **mot de passe** Lightspeed, puis cliquez sur **SE CONNECTER**.
1. Lorsque vous êtes connecté à Lightspeed, la page **Configuration** s'affiche.
   - Dans le menu déroulant **Etablissement**, sélectionnez l'établissement Lightspeed à connecter.
   - Cliquez sur **Enregistrer**.
1. Votre logiciel de caisse est désormais connecté à votre point de vente HubRise. Les commandes envoyées à HubRise apparaîtront dans le restaurant Lightspeed une fois que l'intégration [HubRise sera activée](#enable-integration).

## 2. Activer l'intégration à HubRise {#enable-integration}

Envoyez un e-mail à support@hubrise.com pour demander l'activation de la connexion. Aucune donnée ne sera transmise de HubRise à Lightspeed Restaurant tant que Lightspeed n'aura pas activé l'API pour HubRise dans votre compte. HubRise facilitera cette activation en écrivant à k-series.support@lightspeedhq.com.

Lorsque vous faites votre demande à HubRise, précisez quelles applications vous souhaitez connecter. Indiquez-nous également si vous souhaitez que le taux de TVA standard soit appliqué ou si votre entreprise est soumise à des taux de TVA spécifiques. Pour vérifier les taux de TVA standard configurés par Lightspeed lors de l'activation de l'API pour HubRise, consultez cet article : [Les taux TVA pour la restauration en France, Suisse et Belgique](https://www.lightspeedhq.ch/blog/comparaison-taux-tva/).

---

**FAQ associée** : [Pourquoi certaines commandes ne sont-elles pas correctement transmises à Lightspeed Restaurant ?](/apps/lightspeed-restaurant/faqs/troubleshooting-failed-orders)

---

## 3. Donner accès au support Lightspeed

Nous recommandons de fournir, au service de support Lightspeed, l'accès à votre point de vente HubRise connecté à Lightspeed Restaurant. Ils pourront ainsi résoudre les éventuels problèmes en examinant les logs de Lightspeed Restaurant Bridge.

Pour donner au support Lightspeed l'accès à votre point de vente, suivez ces étapes.

1. Si vous avez plusieurs comptes, cliquez sur la flèche vers le bas située à côté de **Compte** et sélectionnez le compte approprié.
1. Dans le back-office HubRise, sélectionnez **CONFIGURATION**.
1. Dans la section **Utilisation**, sélectionnez l'emplacement connecté à Lightspeed dans la colonne **Point de vente**.
1. Dans la section **Permissions**, ajoutez *k-series.support@lightspeedhq.com* à la liste et sélectionnez **Manager** dans le menu déroulant.
1. Cliquez sur l'icône **+** pour confirmer.

---

**REMARQUE IMPORTANTE :** Pour des raisons de sécurité, il est fortement déconseillé de partager le nom d'utilisateur et le mot de passe de votre profil utilisateur HubRise.

---
