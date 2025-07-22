---
title: Connexion à HubRise
path_override: connexion-hubrise
position: 2
layout: documentation
meta:
  title: Connexion à HubRise | Zelty Bridge | HubRise
  description: Connecter Zelty Bridge à HubRise, étapes à suivre pour recevoir vos commandes Zelty dans vos autres applications.
---

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, rendez-vous sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup). L'inscription ne prend qu'une minute !

---

## Prérequis

Avant de connecter Zelty Bridge à HubRise, vous devez obtenir une clé API Zelty. Voici la procédure à suivre :

1. Envoyez un e-mail à support@hubrise.com pour demander l'activation de l'intégration Zelty Bridge.
2. L'équipe HubRise contactera Zelty pour vous.
3. Zelty vous enverra sous quelques jours ouvrés un lien pour créer votre clé API.
4. Conservez précieusement cette clé API, puis poursuivez avec la connexion de Zelty Bridge.

## Connecter Zelty Bridge

Pour connecter Zelty Bridge à HubRise, procédez comme suit :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Dans le menu déroulant, sélectionnez le point de vente que vous souhaitez connecter.
3. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
4. Sélectionnez **Zelty Bridge** dans la liste des applications.
5. Cliquez sur **Connecter**.
6. Cliquez sur **Autoriser** pour autoriser Zelty Bridge à accéder à votre point de vente enregistré sur HubRise. Si votre compte possède plusieurs points de vente, développez **Choisissez le point de vente**, sélectionnez le point de vente à connecter, puis cliquez sur **Autoriser**. Si le point de vente sélectionné possède plusieurs listes de clients ou catalogues, cliquez sur **Suivant** pour afficher les listes déroulantes correspondantes, puis sélectionnez les options souhaitées.
7. Vous êtes redirigé vers l'interface de configuration de Zelty Bridge.

![Page de configuration - Étape 1](./images/001-zelty-config-step-1.png)

8. Dans le champ **Clé API**, saisissez la clé API Zelty obtenue à l'étape précédente.
9. Cliquez sur **Terminer la configuration**.
10. La page de configuration complète s'affiche. Pour plus d'informations sur les différentes options disponibles, consultez la page [Configuration](/apps/zelty-bridge/configuration).
11. Une fois la configuration terminée, vous pouvez cliquer sur **Enregistrer** pour enregistrer vos paramètres.

Votre logiciel de caisse Zelty est maintenant connecté à HubRise !

## Donner accès au support Zelty

Pour faciliter la résolution d'éventuels problèmes, nous vous recommandons de donner accès à l'équipe Zelty à votre compte HubRise. Bien que le support principal soit assuré par HubRise, cet accès permettra une collaboration entre les deux équipes si nécessaire.

Pour donner accès à Zelty, procédez comme suit :

1. Depuis le back-office de HubRise, sélectionnez **CONFIGURATION** dans le menu de gauche.
2. Dans la section **Permissions**, ajoutez `support@zelty.com`.
3. Cliquez sur **Ajouter l'utilisateur**.
4. Dans le menu déroulant de choix d'un rôle prédéfini, sélectionnez **Partenaire Technique**.
5. Cliquez sur **Définir les permissions**.

---

**REMARQUE IMPORTANTE :** Pour des raisons de sécurité, il est fortement déconseillé de partager le nom d'utilisateur et le mot de passe de votre profil utilisateur HubRise.

---

## Déconnecter Zelty Bridge

Pour déconnecter Zelty Bridge de HubRise, suivez ces étapes :

1. Depuis le back-office de HubRise, sélectionnez **CONNEXIONS** dans le menu de gauche.
2. Trouvez Zelty Bridge dans la liste des applications connectées.
3. Cliquez sur **Actions** > **Déconnecter**.
4. Confirmez la déconnexion.

Si vous souhaitez seulement stopper temporairement la réception de commandes depuis HubRise, vous pouvez bloquer la connexion entre Zelty Bridge et HubRise au lieu de la déconnecter. Pour plus d'informations, voir [Bloquer ou déconnecter une application](/docs/connections#block-or-disconnect).
