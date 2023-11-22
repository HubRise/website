---
title: Dépannage
path_override: depannage
position: 6
layout: documentation
meta:
  title: Dépannage | LivePepper | HubRise
  description: Résolution des problèmes de connexion entre LivePepper et HubRise pour que votre logiciel de caisse et les autres apps fonctionnent de manière cohérente. Connectez les apps et synchronisez vos données.
---

## Vérifier l'association des produits {#verify-mapping}

Pour vérifier que chaque article de menu LivePepper a un code de logiciel de caisse associé, accédez à **Config. POS** > **Actions personnalisées** depuis le panneau de navigation de gauche. L'un des rapports affichés s'appelle **Codes manquants pour ces produits**. Ce rapport dresse la liste de tous les produits, offres et attributs correspondants qui n'ont pas de code ref associé.

Notez que les codes ref manquants du logiciel de caisse pour les moyens de paiement, les types de service et les frais de livraison ne sont pas indiqués dans cette section. Tous les logiciels de caisse ne nécessitent pas ces codes. Leur absence n'indique pas nécessairement la présence d'une erreur.

## Vérifier la connexion à HubRise

Ces étapes nécessitent la connexion préalable de LivePepper à HubRise. Pour plus d'informations sur la connexion de LivePepper à HubRise, voir [Connexion à HubRise](/apps/livepepper/connect-hubrise).

Pour vérifier la connexion entre LivePepper et HubRise, effectuez une commande de test dans LivePepper et vérifiez qu'elle est transmise à HubRise.

### Créer une commande de test dans LivePepper

1. Connectez-vous à votre back-office LivePepper.
2. Sélectionnez **Aller à votre site** en haut de la page. Votre site LivePepper s'ouvre dans un autre onglet ou une autre fenêtre de navigateur.
3. Effectuez une commande sur votre site LivePepper.
4. Retournez dans le back-office LivePepper, et cliquez sur **Commandes** dans le panneau de navigation de gauche. Votre nouvelle commande doit être présente.

### Voir les commandes de test transmises à HubRise

Lorsque LivePepper est connecté à HubRise, les commandes passées dans LivePepper sont immédiatement transmises à HubRise.

Pour vérifier que votre commande de test a bien été transmise à HubRise, suivez ces étapes :

1. Connectez-vous à votre [compte HubRise](https://manager.hubrise.com).
2. Si vous y êtes invité, connectez-vous à votre compte utilisateur HubRise.
3. Dans HubRise, cliquez sur **Données** > **Commandes**.
4. Recherchez votre commande de test. Si vous voyez la commande, la connexion entre LivePepper et HubRise fonctionne correctement.

## Support LivePepper

Vous pouvez contacter l’équipe de support LivePepper à l'adresse support\@livepepper.com pour tout problème de configuration du système de commande en ligne.
