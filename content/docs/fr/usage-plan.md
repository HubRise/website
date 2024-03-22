---
title: Utilisation et formules
path_override: utilisation-formule
position: 9
layout: documentation
meta:
  title: Utilisation et formules | HubRise
  description: Comment gérer l'utilisation et les formules sur HubRise.
---

À la section **CONFIGURATION** > **Utilisation**, vous pouvez voir le nombre de commandes et de clients qui ont été traités par HubRise dans le [cycle de facturation en cours](/docs/payment#billing-cycles). Cette section indique également les frais d'abonnement à HubRise liés à chacun des points de vente de votre compte.

## Afficher l'utilisation

Pour afficher les détails relatifs à l'utilisation d'un compte ou d'un point de vente, procédez comme suit :

1. Rendez-vous dans **CONFIGURATION**.
1. Pour les utilisateurs ayant accès à plusieurs comptes, sélectionnez le compte dans la liste déroulante **Compte**.
1. Sélectionnez **Tous les points de vente**. La section **Utilisation** indique les informations d'utilisation relatives à tous les points de vente pour lesquels l'abonnement HubRise est payé au niveau du compte.
1. Sélectionnez le **Point de vente** spécifique à l'aide de la liste déroulante afin d'afficher les entrées pour lesquelles l'abonnement HubRise est payé au niveau du point de vente.

---

**REMARQUE IMPORTANTE** : lorsque **Tous les points de vente** est sélectionnée, certains points de vente n'apparaissent pas nécessairement dans la section **Utilisation**. Si un point de vente n'est pas répertorié dans cette liste, sélectionnez-le dans la liste déroulante **Point de vente**. Cela signifie que le paiement de l'abonnement est défini au niveau du point de vente.

---

## Formule d'utilisation {#plan}

HubRise propose des formules gratuites et payantes pour ses services. Pour obtenir des informations complètes sur les formules et la tarification, consultez la [page de tarifs de HubRise](/pricing/).

Des formules gratuites sont disponibles pour les points de vente effectuant un nombre limité de transactions par mois. Une fois cette limite atteinte, les utilisateurs du compte et du point de vente de niveau Administrateur sont informés par e-mail et doivent passer au niveau payant s'ils souhaitent continuer à bénéficier du service.

Pendant la phase de test qui précède le lancement, vous pouvez demander à souscrire à une formule gratuite comportant un quota de commandes plus élevé. Contactez HubRise à l'adresse support@hubrise.com.

## Notifications sur les formules {#plan-notifications}

En cas de problème rencontré avec une formule, les utilisateurs qui disposent d'une permission de niveau Administrateur pour le compte ou le point de vente concerné reçoivent un e-mail. Une notification apparaît également dans le back-office de HubRise.

Des notifications peuvent être affichées dans le back-office de HubRise pour tout motif impliquant des paiements ou des problèmes liés aux formules. C'est par exemple le cas lorsque :

- Un point de vente a dépassé ses limites de transactions gratuites alors qu'aucune méthode de paiement n'est enregistré dans HubRise.
- La carte de crédit a expiré et vous devez la mettre à jour.
- Le traitement de la carte de crédit a échoué après plusieurs tentatives de paiement automatisé. Pour des raisons de sécurité, il se peut que votre banque vous demande de saisir à nouveau le code de sécurité à 3 chiffres.
- La carte de crédit a été enregistrée pour les paiements dans HubRise mais les demandes de paiement en cours n'ont pas été réglées. Pour plus d'informations, voir la rubrique [Traiter les demandes de paiement](/docs/payment#process-requests-for-payment).

Si une notification de paiement apparaît, cliquez sur le lien correspondant et suivez les instructions afin de résoudre le problème. Pour plus d'informations concernant les formules disponibles, voir la rubrique [Formule d'utilisation](#plan).

![Payer un abonnement](./images/022-2x-pay-subscription.png)

---

**REMARQUE IMPORTANTE** : lorsqu'un problème se produit au niveau d'un paiement, les utilisateurs de niveau Administrateur reçoivent une notification par e-mail et une notification s'affiche dans le back-office de HubRise. En l'absence de réponse dans un délai de deux semaines, le compte HubRise ou le point de vente correspondant sera automatiquement suspendu.

---

## Changer de formule

Vous pouvez modifier la formule d'un point de vente lorsque son utilisation augmente ou diminue. Pour plus de détails, voir la rubrique [Formule d'utilisation](#plan).

Pour modifier la formule d'un point de vente, procédez comme suit :

1. Sélectionnez **CONFIGURATION**.
1. Pour les utilisateurs ayant accès à plusieurs comptes, sélectionnez le compte associé au point de vente spécifique.
1. Sélectionnez une entrée dans la liste déroulante **Point de vente**.
1. Sous **Utilisation**, sélectionnez **Changer de formule**.
1. Pour utiliser la formule payante qui autorise davantage de transactions, cliquez sur **Choisir** au niveau de la formule adéquate. Pour sélectionner une formule qui autorise moins de commandes et de clients par mois, cliquez sur **Choisir** pour rétrograder. Si vous atteignez ultérieurement la limite de transaction, la formule sera automatiquement mise à niveau sur la version payante.

---

**REMARQUE IMPORTANTE** : pour effectuer une mise à niveau, vous devez avoir configuré une méthode de paiement. Pour plus d'informations, voir la rubrique [Ajouter une méthode de paiement](/docs/payment#add-payment-method). Votre compte ne sera pas débité tant que vous n'aurez pas dépassé le quota mensuel gratuit.

---
