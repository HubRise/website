---
title: Plateformes de commande en ligne
path_override: plateformes-de-commande-en-ligne
position: 7
layout: documentation
meta:
  title: Plateformes de commande en ligne | Lightspeed Restaurant | HubRise
  description: Pour intégrer Lightspeed Restaurant à des plateformes de commande en ligne, vous devez spécifier des codes ref dans la page de configuration de leur bridge.
---

Pour connecter Lightspeed Restaurant à plusieurs plateformes de commande en ligne, utilisez les paramètres de configuration fournis ci-dessous.

Par convention, l'équipe de support Lightspeed utilise ces codes prédéfinis lorsqu'elle configure l'intégration. Si vous configurez vous-même le back-office Lightspeed, nous vous recommandons d'utiliser les mêmes codes, car cela simplifie le dépannage.

Pour des instructions détaillées sur la création de codes ref dans le back-office Lightspeed, consultez [Créer des codes ref](/apps/lightspeed-restaurant/faqs/create-ref-codes).

---

**REMARQUE IMPORTANTE** : Ces codes doivent être présents dans votre back-office Lightspeed et doivent figurer sur la page de configuration du bridge de la plateforme de commande en ligne.

---

Si vous préférez laisser le support Lightspeed configurer ces codes ref, assurez-vous d'utiliser les noms de canaux suivants dans les demandes d'assistance afin d'éviter toute confusion :

| Plateforme                                       | Nom du canal |
| ------------------------------------------------ | ------------ |
| Plateformes en ligne à l'exception de LivePepper | `HUBOLO`     |
| LivePepper                                       | `LivePepper` |

---

**REMARQUE IMPORTANTE** : Pour les codes relatifs aux plateformes de commande de repas telles que Deliveroo, Uber Eats et Just Eat, consultez [Plateformes de commande de repas](/apps/lightspeed-restaurant/food-ordering-platforms).

---

### Toutes les plateformes de commande en ligne excepté LivePepper

Pour toutes les plateformes de commande en ligne autres que LivePepper, utilisez les codes du tableau suivant.

| Section          | Nom                                 | Code ref      |
| ---------------- | ----------------------------------- | ------------- |
| Types de service | Livraison                           | `HUBOLODEL`   |
| Types de service | A emporter                          | `HUBOLOCOL`   |
| Types de service | Sur place                           | `HUBOLOEATIN` |
| Paiements        | Mode de paiement en ligne générique | `HUBOLOPM`    |
| Frais            | Frais de service                    | `HUBOLO66`    |
| Frais            | Frais de livraison                  | `HUBOLO77`    |
| Remises          | Remise générique                    | `HUBOLO99`    |

### LivePepper

Pour des raisons historiques, LivePepper utilise ses propres codes ref. Pour envoyer des commandes de LivePepper vers Lightspeed, utilisez les codes du tableau suivant.

| Section          | Nom                                 | Code ref        |
| ---------------- | ----------------------------------- | --------------- |
| Types de service | Livraison                           | `DELIVERY`      |
| Types de service | A emporter                          | `PICKUP`        |
| Types de service | Sur place                           | `LOCAL`         |
| Paiements        | Mode de paiement en ligne générique | `LP`            |
| Frais            | Frais de service                    | Voir ci-dessous |
| Frais            | Frais de livraison                  | Voir ci-dessous |
| Remises          | Remise générique                    | Voir ci-dessous |

Pour envoyer des frais à LightSpeed, créez des produits avec un prix variable _positif_ dans LightSpeed et utilisez leurs codes dans LivePepper. Pour envoyer des remises, créez des produits avec un prix variable `_negatif_`.
