---
title: Connexion à HubRise
path_override: connexion-hubrise
position: 2
layout: documentation
meta:
  title: Connexion à HubRise | WooCommerce | HubRise
  description: Découvrez comment connecter votre boutique en ligne WooCommerce à HubRise. La connexion s'effectue simplement. Envoyez le lien de votre page WooCommerce à HubRise et suivez les quelques étapes pour vous connecter.
---

Vous pouvez connecter WooCommerce à HubRise en quelques étapes simples.

---

**REMARQUE IMPORTANTE :** Si vous ne possédez pas encore de compte HubRise, rendez-vous sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup). L'inscription ne prend qu'une minute !

---

## 1. Connecter WooCommerce Bridge

Pour connecter WooCommerce Bridge à HubRise, suivez ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Dans le menu déroulant, sélectionnez le point de vente que vous souhaitez connecter.
3. Sélectionnez **CONNEXIONS**, puis **Voir les apps disponibles**.
4. Sélectionnez **WooCommerce Bridge** dans la liste des applications.
5. Cliquez sur **Connecter**.
6. Cliquez sur **Autoriser** pour autoriser WooCommerce Bridge à accéder à votre point de vente enregistré sur HubRise. Si votre compte possède plusieurs points de vente, développez **Choisissez le point de vente**, sélectionnez le point de vente à connecter, puis cliquez sur **Autoriser**.
7. Saisissez l'URL de votre boutique WooCommerce :
   ![URL de la page d'accueil de WooCommerce Bridge](./images/012-woocommerce-step-1.png)
8. Si vous avez déjà rencontré des problèmes de connexion, vous pouvez configurer les **Options avancées**. Sinon, ne les modifiez pas. Pour plus d'informations, consultez notre guide de [Dépannage](/apps/woocommerce/troubleshooting).
9. Cliquez sur **Enregistrer** pour confirmer.
10. Cliquez sur **Connecter WooCommerce**. Vous êtes redirigé vers la page d'autorisation WooCommerce.

- Si vous n'êtes pas connecté à WooCommerce, saisissez vos identifiant et mot de passe, puis cliquez sur **Connexion**.
  ![Page de connexion WooCommerce](./images/006-woocommerce-login.png)
- Cliquez sur **Approuver** pour autoriser la connexion à HubRise.
  ![Page d'autorisation WooCommerce](./images/007-woocommerce-authorisation.png)

11. Vous êtes redirigé vers la page de configuration de WooCommerce Bridge, où vous pouvez personnaliser votre connexion à HubRise.

## 2. Configurer vos préférences

Une fois la connexion effectuée, vous devez renseigner quelques paramètres sur la page Configuration afin que les commandes soient transmises correctement à votre logiciel de caisse.

Pour plus d'informations sur la page Configuration et la manière d'y accéder, voir la rubrique Configuration de la page [Interface Utilisateur](/apps/woocommerce/user-interface#configuration). Pour plus de détails sur la configuration des paramètres WooCommerce Bridge, voir la rubrique [Configuration](/apps/woocommerce/configuration).

## 3. Configurer les crochets Web WooCommerce

Après avoir connecté WooCommerce Bridge, configurez vos crochets Web WooCommerce pour la transmission des commandes vers HubRise.

### Activer l'envoi synchrone des crochets Web (Optionnel) {#enable-synchronous-webhook-delivery}

Par défaut, WooCommerce traite les crochets Web de manière asynchrone via un processus en arrière-plan appelé **cron**. Ce processus s'exécute toutes les quelques minutes et peut retarder la transmission des commandes vers HubRise.

Pour transmettre les commandes immédiatement sans attendre le cron, vous pouvez activer l'envoi synchrone des crochets Web :

1. Accédez aux fichiers de votre site WordPress en utilisant un client FTP ou le gestionnaire de fichiers du panneau de commande de l'hébergeur.
2. Accédez au répertoire `wp-content/themes/[votre-thème]`, où `[votre-thème]` représente le dossier de votre thème actif.
3. Ouvrez le fichier `functions.php` et ajoutez l'extrait de code suivant à la fin du fichier :

```php
add_filter( 'woocommerce_webhook_deliver_async', '__return_false' );
```

4. Enregistrez le fichier. Les modifications prendront effet immédiatement.

---

**REMARQUE IMPORTANTE :** Ce paramètre affecte tous les crochets Web de votre boutique WooCommerce, pas seulement ceux de HubRise. Assurez-vous que tous vos points de terminaison de crochets Web peuvent traiter les requêtes rapidement pour éviter de ralentir l'étape de finalisation de commande pour vos clients.

---

### Empêcher la désactivation automatique des crochets Web (Recommandé) {#prevent-automatic-webhook-disabling}

Par défaut, WooCommerce désactive automatiquement les crochets Web après 5 échecs d'envoi consécutifs. Cela peut interrompre votre connexion avec HubRise en cas de désactivation temporaire du bridge ou de problèmes de réseau.

Pour empêcher WooCommerce de désactiver automatiquement les crochets Web :

1. Accédez aux fichiers de votre site WordPress en utilisant un client FTP ou le gestionnaire de fichiers du panneau de commande de l'hébergeur.
2. Accédez au répertoire `wp-content/themes/[votre-thème]`.
3. Ouvrez le fichier `functions.php` et ajoutez le code suivant :

```php
add_filter( 'woocommerce_max_webhook_delivery_failures', function() {
    return PHP_INT_MAX; // Tentatives d'envoi illimitées
} );
```

4. Enregistrez le fichier.

---

**REMARQUE IMPORTANTE :** Ce paramètre affecte tous les crochets Web de votre boutique WooCommerce. PHP_INT_MAX autorise un nombre illimité de tentatives en cas d'échec.

---

Si vous ne savez pas comment modifier le fichier `functions.php`, contactez le développeur de votre site WooCommerce.

## 4. Envoyer votre menu

Si vous disposez d'un catalogue de produits sur HubRise, vous pouvez l'envoyer dans votre boutique WooCommerce d'un seul clic.

Pour plus d'informations sur les catalogues HubRise, voir la rubrique [Catalogues](/docs/catalog).
Pour savoir comment envoyer votre catalogue HubRise dans WooCommerce, voir [Envoyer le catalogue](/apps/woocommerce/push-catalog).
