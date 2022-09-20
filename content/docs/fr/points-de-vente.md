---
title: Points de vente
position: 8
layout: documentation
meta:
  title: Points de vente | HubRise
  description: Comment gérer les Points de vente sur HubRise.
---

Les points de vente désignent les différents lieux de vente d'un compte. Chaque point de vente identifie un lieu de commercialisation physique. Un compte peut avoir un ou plusieurs points de vente. Pour passer d'un point de vente à un autre, utilisez la liste déroulante **Point de vente** située tout en haut du back-office de HubRise.

La page **CONFIGURATION** affiche des informations sur votre point de vente et vous permet d'effectuer des changements de paramètrage. Vous pouvez également apporter des modifications au compte en sélectionnant **Tous les points de vente** dans la liste déroulante **Point de vente**.

## Nom et identifiant du point de vente

Les points de vente sont affichés avec :

- Le nom du point de vente.
- L'identifiant unique du compte auquel ils sont associés.
- Le numéro indiquant l'ordre dans lequel le point de vente a été ajouté (la numérotation commençant par zéro).

À titre d'exemple, `Montmartre z6q31-0` indique le nom du point de vente `Montmartre`, son appartenance au compte `z6q31`, et le `-0` signifie qu'il s'agit du premier point de vente ajouté à ce compte.

---

**REMARQUE IMPORTANTE** : pour connaître la convention de dénomination recommandée pour les points de vente, voir la rubrique [Créer un point de vente](/docs/points-de-vente#cr-er-un-point-de-vente).

---

## Configuration du point de vente

Pour afficher les détails du point de vente, procédez comme suit :

1. Rendez-vous dans **CONFIGURATION**.
1. Si vous avez accès à plusieurs comptes, sélectionnez le compte associé au point de vente.
1. Dans la liste déroulante **Point de vente**, cliquez sur le nom du point de vente.

Les points de vente sont gérés de la même manière que les comptes, mais les informations sont spécifiques au point de vente sélectionné.

Des configurations différentes pour des points de vente spécifiques vous permettent de paramétrer des [modes de paiement distincts suivant le point de vente](/docs/paiement#paiements-au-niveau-du-compte-ou-du-point-de-vente), des [permissions](/docs/permissions/) différentes pour chaque utilisateur, et ainsi de suite. Pour plus d'informations, voir la rubrique [Comptes](/docs/comptes/).

Dans le cas où vous exercez votre activité dans un pays où l'inclusion du numéro de TVA intracommunautaire constitution une obligation légale, HubRise affichera une notification pour vous inviter à mettre à jour le numéro de TVA si cette information n'apparaît pas dans votre compte.

---

**REMARQUE IMPORTANTE** : en fonction de votre activité, le point de vente peut avoir un numéro de TVA différent de celui du compte. Vérifiez que tous les numéros de TVA sont correctement configurés sur tous les comptes et points de vente que vous gérez.

---

## Créer un point de vente

Le premier point de vente est créé en même temps que le compte. Pour plus d'informations, voir la rubrique [Créer un compte](/docs/comptes#cr-er-un-compte).

Pour ajouter un nouveau point de vente à un compte existant, procédez comme suit :

1. Cliquez sur **CONFIGURATION**.
1. Si vous avez accès à plusieurs comptes, sélectionnez le compte auquel vous devez ajouter un point de vente.
1. Dans la section **Compte**, cliquez sur **Ajouter un point de vente**.
1. Saisissez les informations requises.
1. Cliquez sur **Créer** pour sauvegarder le nouveau point de vente.

Il est recommandé de nommer le point de vente d'après la ville, le quartier ou la rue où il se trouve. À titre d'exemple, si vous exploitez un seul point de vente à Paris, vous pouvez le nommer `Paris`. Si vous exploitez plusieurs points de vente à Paris, vous pouvez nommer ceux-ci d'après leur adresse, par exemple `Montmartre`, `Montparnasse` et `Le Marais`.

## Modifier les détails du point de vente

Pour mettre à jour le nom et l'adresse d'un point de vente, procédez comme suit :

1. Cliquez sur **CONFIGURATION**.
1. Si vous avez accès à plusieurs comptes, sélectionnez le compte auquel le point de vente sera ajouté.
1. Sélectionnez le point de vente à mettre à jour.
1. Dans la section **Point de vente**, cliquez sur **Modifier**.
1. Mettez les valeurs à jour suivant les besoins.
1. Si ce point de vente dispose d'un numéro de TVA distinct de celui du compte, indiquez-le dans le champ **Numéro de TVA intracommunautaire** prévu à cet effet.
1. Si l'adresse de facturation est différente de celle du point de vente, cochez la case **L'adresse de facturation est différente de celle du point de vente** et remplissez le formulaire.
1. Cliquez sur **Mettre à jour** pour enregistrer la configuration.
2. 