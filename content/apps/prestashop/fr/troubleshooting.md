---
title: Dépannage
path_override: depannage
position: 8
layout: documentation
meta:
  title: Dépannage | PrestaShop | HubRise
  description: Guide détaillé de résolution des problèmes de connexion entre PrestaShop et HubRise.
---

## Clé d'API invalide lors de la connexion à HubRise

En tentant d'établir une connexion entre PrestaShop et HubRise, vous pouvez rencontrer le message d'erreur suivant après avoir saisi l'URL du site internet et la clé d'API :

`Clé d'API PrestaShop invalide. Exemple de clé d'API valide: 1234567890ABCDEF1234567890ABCDEF`

![Clé d'API invalide sur PrestaShop Bridge](./images/007-prestashop-invalid-api-key.png)

Suivez ces étapes pour diagnostiquer et résoudre le problème.

### Vérifier votre clé d'API

Pour vérifier votre clé d'API :

1. Ouvrez un nouvel onglet du navigateur.

2. Saisissez l'URL suivante : `https://[site_url]/api?ws_key=[api_key]` en remplaçant `[site_url]` par l'URL de votre site internet PrestaShop et `[api_key]` par la clé d'API que vous avez saisie.

   - Si une boîte de dialogue de connexion du navigateur apparaît, la clé est incorrecte. Pour trouver la clé d'API correcte, consultez la section [Connexion à HubRise](/apps/prestashop/connect-hubrise).
   - À l'inverse, si une page avec du contenu XML se charge sans invitation à se connecter, votre clé est correcte. Passez à l'étape suivante.

### Ajouter un fichier .htaccess pour les serveurs Apache

Si vous avez un serveur web Apache, généralement utilisé avec PrestaShop, il peut être configuré pour supprimer l'en-tête `Authorization`. Pour résoudre ce problème, ajoutez une règle de réécriture afin de vous assurer que l'en-tête est transmise à PrestaShop via une variable d'environnement PHP :

1. Accédez à votre serveur PrestaShop via FTP ou SSH.
2. Accédez au répertoire `webservice`.
3. Créez un fichier `.htaccess` dans le répertoire `webservice` avec le code suivant :
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine on
     RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
   </IfModule>
   ```
4. Essayez de reconnecter PrestaShop Bridge.

Si le problème persiste ou si vous utilisez un serveur web différent, contactez le support HubRise à l'adresse support@hubrise.com pour obtenir de l'aide.
