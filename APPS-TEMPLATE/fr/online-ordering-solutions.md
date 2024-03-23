---
title: Solutions de commande en ligne
path_override: solutions-de-commande-en-ligne
position: 7
layout: documentation
meta:
  title: Solutions de commande en ligne | SOLUTION | HubRise
  description: Pour intégrer SOLUTION à des solutions de commande en ligne, vous devez spécifier des codes ref dans Lightspeed et dans la page de configuration de la solution de commande.
---

Pour connecter SOLUTION à plusieurs solutions de commande en ligne, utilisez les paramètres de configuration fournis ci-dessous.

Par convention, l'équipe de support SOLUTION utilise ces codes prédéfinis lorsqu'elle configure l'intégration. Si vous configurez vous-même le back-office SOLUTION, nous vous recommandons d'utiliser les mêmes codes, car cela simplifie le dépannage.

---

**REMARQUE IMPORTANTE** : Ces codes doivent être présents dans votre back-office SOLUTION et doivent figurer sur la page de configuration de la solution de commande en ligne.

---

---

**REMARQUE IMPORTANTE** : Pour les plateformes de commande et de livraison repas telles que Deliveroo, Uber Eats et Just Eat en revanche, il y a des codes prédéfinis, consultez [Plateformes de commande de repas](/apps/SOLUTION/food-ordering-platforms).

---

Dans la page de configuration de votre solution de commande en ligne, utilisez les paramètres suivants.

| Section          | Nom                                 | Code ref      |
| ---------------- | ----------------------------------- | ------------- |
| Types de service | Livraison                           | `HUBOLODEL`   |
| Types de service | A emporter                          | `HUBOLOCOL`   |
| Types de service | Sur place                           | `HUBOLOEATIN` |
| Paiements        | Mode de paiement en ligne générique | `HUBOLOPM`    |
| Frais            | Frais de service                    | `HUBOLO66`    |
| Frais            | Frais de livraison                  | `HUBOLO77`    |
| Remises          | Remise générique                    | `HUBOLO99`    |
