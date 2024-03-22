---
title: Permissions
path_override: permissions
position: 12
layout: documentation
meta:
  title: Permissions | HubRise
  description: Comment gérer les permissions sur HubRise.
---

Les permissions sont un moyen de contrôler les actions que les utilisateurs peuvent accomplir au niveau de votre compte et de vos points de vente. Vous pouvez modifier le niveau de permission d'un utilisateur en lui attribuant différents rôles à la section **Permissions** de la page **CONFIGURATION**.

## Rôles HubRise

Deux types de rôles sont pris en charge dans HubRise : les administrateurs et les managers.

- Les **Admins** ont accès à tous les domaines de HubRise, y compris les factures. Ils sont responsables du maintien à jour des informations relatives aux paiements. Ils reçoivent des factures par e-mail lorsqu'un paiement est effectué, ou des notifications concernant les paiements en attente dans HubRise. Ils peuvent également octroyer l'accès à d'autres utilisateurs et déconnecter des applications de HubRise.
- Les **Managers** ont accès à tous les domaines, à l'exception des factures de HubRise. Ils ne reçoivent pas d'e-mails de notification concernant les paiements en attente dans HubRise. Ils peuvent connecter des applications à HubRise, mais ne peuvent pas les déconnecter.

Vous pouvez également consulter et modifier vos propres permissions à partir de votre profil utilisateur. Pour plus d'informations, voir [Profil et mot de passe](/docs/profile-password).

## Ajouter un utilisateur {#add-user}

Les administrateurs peuvent octroyer l'accès à d'autres utilisateurs à condition qu'ils aient un profil existant sur HubRise. Les nouveaux utilisateurs de HubRise peuvent créer un profil sur la [page d'inscription à HubRise](https://manager.hubrise.com/signup). Si vous créez un nouveau profil au nom de quelqu'un d'autre, utilisez la [page de réinitialisation du mot de passe de HubRise](https://manager.hubrise.com/reset_password/new) afin que l'utilisateur puisse saisir son propre mot de passe sécurisé.

Pour accorder à un utilisateur des permissions sur un compte, procédez comme suit :

1. Sélectionnez **CONFIGURATION**.
1. À la section **Permissions**, saisissez l'adresse e-mail de l'utilisateur dans la colonne intitulée **E-MAIL**.
1. Dans la colonne **RÔLE**, définissez le rôle du nouvel utilisateur en tant qu'Admin ou Manager.
1. Cliquez sur l'icône Plus <InlineImage width="13" height="13">!\[Icône Plus\](../images/059-add-icon.png)</InlineImage> pour ajouter le nouvel utilisateur.

Pour octroyer à un utilisateur des permissions sur un point de vente, procédez comme suit :

1. Sélectionnez **CONFIGURATION**.
1. Sélectionnez une entrée dans la liste déroulante **Point de vente**.
1. À la section **Permissions**, saisissez l'adresse e-mail de l'utilisateur dans la colonne intitulée **E-MAIL**.
1. Dans la colonne **RÔLE**, définissez le rôle du nouvel utilisateur en tant qu'Admin ou Manager.
1. Cliquez sur l'icône Plus <InlineImage width="13" height="13">![Icône Plus](../images/059-add-icon.png)</InlineImage> pour ajouter le nouvel utilisateur.

## Supprimer un utilisateur {#remove-user}

Pour supprimer un utilisateur, procédez comme suit :

1. Dans la section **Permissions**d'un compte ou d'un point de vente, cliquez sur l'icône de suppression <InlineImage width="15" height="16">![Icône de corbeille](../images/057-2x-trash-icon.png)</InlineImage> pour l'utilisateur que vous souhaitez supprimer.
1. Lorsque vous y êtes invité, cliquez sur **Supprimer** pour confirmer votre action.

---

**REMARQUE IMPORTANTE** : un compte ne peut pas être laissé sans administrateur. Avant de supprimer votre profil utilisateur d'un compte, assurez-vous qu'un utilisateur de niveau Administrateur existe avec des permissions adéquates. Dans le cas contraire, vous pouvez modifier les permissions d'un utilisateur existant ou octroyer les permissions d'administrateur à **test@hubrise.com**.

---
