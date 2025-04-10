---
title: Solutions de commande en ligne
path_override: solutions-de-commande-en-ligne
position: 7
layout: documentation
meta:
  title: Solutions de commande en ligne | SOLUTION | HubRise
  description: Découvrez comment connecter SOLUTION à votre solution de commande en ligne en configurant les bons codes ref pour les types de service, paiements, frais et remises.
---

---

**REMARQUE IMPORTANTE** : Cette page concerne les sites de commande en ligne en marque blanche. Pour les plateformes de commande et de livraison de repas, telles que Deliveroo, Uber Eats et Just Eat, consultez [Plateformes de commande de repas](/apps/SOLUTION/food-ordering-platforms).

---

Pour connecter SOLUTION à votre solution de commande en ligne, vous devez utiliser des codes ref spécifiques. Ces codes ref permettent à votre logiciel de caisse de comprendre et traiter correctement les commandes reçues.

Dans la page de configuration de votre solution de commande en ligne, utilisez les paramètres suivants :

| Section          | Nom                                 | Code ref      |
| ---------------- | ----------------------------------- | ------------- |
| Types de service | Livraison                           | `HUBOLODEL`   |
| Types de service | A emporter                          | `HUBOLOCOL`   |
| Types de service | Sur place                           | `HUBOLOEATIN` |
| Paiements        | Mode de paiement en ligne générique | `HUBOLOPM`    |
| Frais            | Frais de service                    | `HUBOLO66`    |
| Frais            | Frais de livraison                  | `HUBOLO77`    |
| Remises          | Remise générique                    | `HUBOLO99`    |
