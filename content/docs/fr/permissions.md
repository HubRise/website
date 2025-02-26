---
title: Permissions
path_override: permissions
position: 12
layout: documentation
meta:
  title: Permissions | HubRise
  description: Comment gérer les permissions sur HubRise.
---

Les permissions permettent de contrôler les actions qu'un utilisateur peut effectuer sur un compte ou un point de vente dans HubRise. Vous pouvez gérer les permissions des utilisateurs dans la section **Permissions** de la page **CONFIGURATION**.

## Rôles et Permissions

HubRise propose une gestion flexible des permissions. Vous pouvez soit attribuer des rôles prédéfinis, soit attribuer manuellement des permissions spécifiques à un utilisateur.

![Permissions](./images/019-permissions.png)

![Rôles d'un utilisateur](./images/020-2x-roles.png)

### Rôles prédéfinis

HubRise propose des rôles prédéfinis pour simplifier l’attribution des permissions :

- **Administrateur complet** : Accès à toutes les fonctionnalités, y compris la gestion des utilisateurs, la configuration des connexions et la facturation.
- **Partenaire technique** : Accès à toutes les fonctionnalités, sauf la facturation.
- **Observateur back-office** : Accès en lecture au back-office, et accès à toutes les applications.
- **Responsable comptabilité** : Accès limité au back-office, consultation des factures et gestion des moyens de paiement.
- **Opérateur OrderLine** : Accès restreint à l’application OrderLine.
- **Gestionnaire catalogue** : Accès restreint à l’application Catalog Manager.
- **Rôle personnalisé** : Permet d’attribuer manuellement des permissions spécifiques à un utilisateur.

### Permissions disponibles

Les permissions sont regroupées en deux catégories :

#### Accès Back-Office (accès privilégié)

- **Voir le back-office** : Accéder au tableau de bord, aux connexions et aux données.
- **Gérer les connexions et ressources** : Créer et gérer les connexions, les catalogues et les listes clients.
- **Gérer l'entité** : Gérer les utilisateurs, les permissions et les points de vente.
- **Gérer la facturation** : Accéder aux factures et moyens de paiement.

#### Applications HubRise (accès restreint)

L’accès à certaines applications HubRise peut être accordé individuellement :

- **Utiliser OrderLine** : Application permettant de recevoir et mettre à jour les commandes, modifier les horaires d’ouverture, modifier les disponibilités de produits.
- **Utiliser Catalog Manager** : Application permettant de voir et modifier les catalogues de produits.

### Règles d’attribution des permissions

Sur un compte ou un point de vente, les permissions doivent respecter les règles suivantes :

- Au moins un utilisateur doit avoir la permission **Gérer l'entité** sur un compte.
- **Utiliser Catalog Manager** est uniquement disponible sur un compte.
- Toute permission back-office donne accès à **Utiliser OrderLine** et, si attribuée sur un compte, **Utiliser Catalog Manager**.
- **Voir le back-office** est requis pour toute autre permission back-office.

## Ajouter un utilisateur {#add-user}

Les utilisateurs disposant de la permission **Gérer l'entité** peuvent ajouter des utilisateurs et leur attribuer des permissions spécifiques. Pour ajouter un utilisateur :

1. Accédez à **CONFIGURATION** > **Permissions**.
2. Saisissez l’adresse e-mail de l’utilisateur.
   - Si l’utilisateur existe déjà, son nom s’affiche.
   - Sinon, il recevra une invitation après sélection des permissions.
3. Sélectionnez les permissions à attribuer.
4. Cliquez sur **Ajouter l'utilisateur**.

Si l'utilisateur possède déjà un compte HubRise, il sera immédiatement ajouté. Sinon, il recevra un e-mail l'invitant à créer un profil HubRise. Dès son inscription, il pourra accéder à HubRise selon ses permissions.

## Modifier les permissions d’un utilisateur

1. Dans **CONFIGURATION** > **Permissions**, cliquez sur l’icône en forme de crayon à côté de l’utilisateur concerné, ou cliquez directement sur les permissions.
2. Sélectionnez un rôle prédéfini ou configurez un rôle personnalisé en cochant/décochant les permissions disponibles.
3. Cliquez sur **Définir les permissions**.

---

**REMARQUE IMPORTANTE** : Si vous supprimez votre propre permission **Gérer l'entité**, vous devrez demander à un autre utilisateur disposant de cette permission de vous la réattribuer.

---

## Supprimer un utilisateur {#remove-user}

1. Dans **CONFIGURATION** > **Permissions**, cliquez sur l’icône en forme de corbeille à côté de l’utilisateur.
2. Confirmez la suppression.

Un compte ne peut pas être laissé sans utilisateur disposant de la permission **Gérer l'entité**. Si vous souhaitez supprimer le dernier utilisateur disposant de cette permission, attribuez d'abord cette permission à l'utilisateur test@hubrise.com avant de supprimer l’utilisateur concerné.
