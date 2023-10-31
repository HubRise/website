---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Deliveroo | HubRise
  description: Instructions pour configurer Deliveroo Bridge afin de fonctionner parfaitement avec Deliveroo et votre EPOS ou d'autres applications connectées à HubRise. La connexion s'effectue simplement.
---

La page de configuration permet de personnaliser le comportement de Deliveroo Bridge. Elle est divisée en plusieurs sections pour faciliter la navigation.

![Page de configuration de Deliveroo Bridge](./images/014-configuration-page-cropped.png)

## Langue

Choisir la langue à utiliser pour les éléments génériques tels que les `Frais de livraison`. Ces noms peuvent apparaître dans votre logiciel de caisse et sur les reçus des clients.

## Commandes

### Types de service

Les types de service tels que la livraison par Deliveroo, la livraison par le restaurant ou la vente à emporter peuvent nécessiter la saisie du code ref correspondant. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour vérifier.

Cette section permet également de différencier les commandes Deliveroo en livraison ou à emporter. Cette option est utile si vous avez des besoins spécifiques pour vos rapports d'activité.

### Remises

Cette section permet de spécifier le code ref de la remise appliquée à vos produits, dans le cas où utilisez des offres sur Deliveroo. Pour obtenir le code ref correspondant, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

Les promotions disponibles sur Deliveroo apparaissent sur la page **Toutes les offres** de votre back-office Deliveroo.

![Exemple de la page avec toutes les offres dans le back-office de Deliveroo](./images/013-deliveroo-offer.png)

### Frais

Si des frais s'appliquent, un code ref peut être nécessaire. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour vérifier.

Dans cette section, vous pouvez spécifier le code ref des frais de livraison, des suppléments appliqués aux commandes de petit montant, ainsi que des frais d'emballage.

### Paiements

Les clients Deliveroo peuvent régler leur commande en ligne ou en espèces lorsque le restaurant prend en charge la livraison.

Cette section de la page de configuration permet de spécifier les codes ref pour les deux types de paiement. Pour connaître les codes à utiliser, consultez la documentation de votre logiciel de caisse sur le site internet de HubRise.

### Statuts de commande

Deliveroo exige un accusé de réception pour chaque commande envoyée. Dans cette section, vous pouvez sélectionner le statut HubRise qui envoie l'accusé de réception à Deliveroo. Reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise pour trouver la valeur à utiliser.

## Catalogue {#catalog}

![Page de configuration de Deliveroo Bridge, section Catalogue](./images/015-configuration-page-menu.png)

Sélectionnez la case **Activer la synchronisation automatique du catalogue** pour synchroniser votre catalogue HubRise avec Deliveroo chaque fois qu'il est mis à jour.

Les champs **Identifiant de la marque** et **Identifiant du menu** identifient le menu que vous souhaitez mettre à jour sur Deliveroo. Les valeurs par défaut fonctionnent généralement pour la plupart des utilisateurs.

La **description du menu** et la **bannière du menu** remplacent la description et la bannière courantes sur Deliveroo lorsque vous envoyez votre catalogue. Les spécifications de l'image de la bannière sont les suivantes :

- Résolution minimale de 1920x1080 pixels, format 16:9
- Doit être au format JPG ou PNG
- La taille du fichier doit être inférieure à 2 Mo

---

**REMARQUE IMPORTANTE :** La description et la bannière du menu sont nécessaires pour pousser votre catalogue vers Deliveroo.

---

## Inventaire

Grâce à la synchronisation des stocks, les produits et options dont la quantité en stock est nulle peuvent être masqués sur votre magasin Deliveroo.

Sélectionnez la case **Activer l'envoi automatique de l'inventaire** pour synchroniser votre inventaire HubRise avec Deliveroo chaque fois qu'il est mis à jour.

## Enregistrer la configuration

Pour enregistrer la configuration, cliquez sur **Enregistrer** en haut de la page.

## Réinitialiser la configuration

Si vous avez besoin de réinitialiser la configuration, cliquez sur **Réinitialiser la configuration** en bas de la page.

---

**REMARQUE IMPORTANTE :** La réinitialisation de la configuration déconnectera instantanément le bridge de Deliveroo. Vous aurez besoin de votre identifiant de restaurant Deliveroo pour rétablir la connexion.

---

La réinitialisation de la configuration ne supprime pas les fichiers journaux des opérations affichés sur la page principale.
