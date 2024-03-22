---
title: Comptes
path_override: comptes
position: 7
layout: documentation
meta:
  title: Comptes | HubRise
  description: Comment gérer les comptes HubRise. Créez votre compte, configurez-le et modifiez-le. Suivez les conventions de nommage standard pour faciliter le travail de support.
---

Un compte correspond à votre marque et comprend un ou plusieurs points de vente. Les utilisateurs de HubRise peuvent avoir accès à un ou plusieurs comptes. Pour passer d'un compte à un autre, utilisez la liste déroulante **Compte** située tout en haut du back-office de HubRise.

La page **CONFIGURATION** affiche des informations sur votre compte et vous permet d'en changer la configuration. Vous pouvez également modifier la configuration de n'importe quel point de vente individuel qui fait partie de ce compte.

## Configuration du compte

Les comptes et les points de vente présentent des sous-sections et des paramètres pour la plupart identiques. En fonction de votre situation, vous pouvez attribuer à vos points de vente des configurations différents de ceux du compte auquel ils appartiennent.

Vous pouvez définir des configurations différentes pour les comptes et les points de vente lorsque les cas suivants se présentent :

- Vous pouvez configurer une méthode de paiement unique au niveau de **tous les points de vente**, ou configurer des méthodes de paiement différentes sur certains points de vente. Cette option est utile si vous devez faire en sorte qu'un point de vente utilise une méthode de paiement différente pour des raisons de comptabilité.
- Vous pouvez accorder aux utilisateurs des permissions valables pour l'ensemble du compte ou pour des points de vente spécifiques. Vous pouvez par exemple accorder à un utilisateur l'accès complet à un compte en tant qu'administrateur, mais autoriser un autre utilisateur à uniquement visualiser et gérer un point de vente spécifique.
- Vous pouvez également visualiser les données sur l'ensemble du compte ou filtrer les informations en fonction d'un point de vente spécifique.
- Vous pouvez modifier votre compte et vos points de vente de la manière la mieux adaptée aux besoins de votre entreprise.

Les principales différences de paramétrage entre les comptes et les points de vente sont les suivantes :

- Les comptes comprennent un ou plusieurs points de vente. Chaque point de vente n'est rattaché qu'à un seul compte.
- Les configurations de devise sont définies au niveau du compte et ne sont plus modifiables une fois celui-ci créé. Si vous avez fait une erreur dans la sélection de la devise, vous devrez créer un nouveau compte en sélectionnant cette fois-ci la devise correcte.
- Si vous opérez sur plusieurs marchés associés à des devises différentes, vous devrez créer un compte pour chaque marché. La pratique recommandée consiste à créer un compte différent pour chaque pays dans lequel vous exploitez un marché, même si plusieurs pays partagent la même devise.

## Créer un compte {#create-account}

Lors de la création d'un nouveau compte, le premier point de vente doit être défini dans le même temps en procédant comme suit :

1. Cliquez sur votre nom dans le coin supérieur droit du back-office, puis cliquez sur **Profil**.
2. Dans la section **Permissions**, cliquez sur **Créer un compte**.
3. Saisissez les informations requises, puis cliquez sur **Créer**.

![Créer un compte sur HubRise](./images/064-2x-create-account.png)

Le **nom du compte** correspond à celui que vous attribuez à votre entreprise ou à votre marque. À titre d'exemple, si votre marque s'appelle Fast Pizza, le **nom du compte** sera `Fast Pizza`.

Le **nom du point de vente** peut être la ville, le quartier ou le nom de la rue. Si le point de vente est unique dans une ville comme Paris, il peut être nommé `Paris`. Si vous exploitez plusieurs points de vente à Paris, vous pouvez nommer ceux-ci d'après leur adresse, ou le nom du quartier, par exemple `Montmartre`, `Montparnasse` et `Le Marais`.

Enfin, saisissez la **devise** correcte du marché sur lequel vous opérez.

---

**REMARQUE IMPORTANTE** : la valeur de la devise ne peut être définie que lors de la création du compte et n'est plus modifiable par la suite. Si la devise du compte HubRise ne correspond pas à celle qui est définie dans les applications connectées, des erreurs risquent de se produire. Créez plutôt un nouveau compte avec la bonne devise et utilisez celui-ci pour connecter vos applications.

---

---

**FAQ associée**: [J'ai trop de comptes pour mon entreprise sur HubRise. Comment faire un nettoyage ?](/docs/faqs/how-can-i-clear-accounts)

---

## Modifier les détails du compte {#modify-account-details}

Pour modifier un compte existant, procédez comme suit :

1. Sélectionnez **CONFIGURATION**.
2. Dans la section **Compte**, cliquez sur **Modifier le compte**.
3. Mettez les champs à jour suivant les besoins, puis cliquez sur **Mettre à jour**.

---

**REMARQUE IMPORTANTE** : dans certains pays, l'indication de votre numéro de TVA intracommunautaire constitue une obligation légale. Si cette information n'est pas spécifiée dans votre compte, HubRise affichera une notification pour vous demander d'actualiser le numéro de TVA.

---
