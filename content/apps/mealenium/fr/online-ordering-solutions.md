---
title: Solutions de commande en ligne
path_override: solutions-de-commande-en-ligne
position: 7
layout: documentation
meta:
  title: Solutions de commande en ligne | Mealenium | HubRise
  description: Pour intégrer Mealenium à des solutions de commande en ligne, vous devez spécifier des codes ref dans Lightspeed et dans la page de configuration de la solution de commande.
---

Par convention, Mealenium n'utilise pas de codes prédéfinis pour identifier les commandes en provenance de votre site de commande en ligne en marque blanche. Elles sont communément identifées comme **Autre** dans votre logiciel de caisse Mealenium.

---

**REMARQUE IMPORTANTE** : Pour les plateformes de commande et de livraison repas telles que Deliveroo, Uber Eats et Just Eat en revanche, il y a des codes prédéfinis, consultez [Plateformes de commande de repas](/apps/mealenium/food-ordering-platforms).

---

Dans la page de configuration de votre solution de commande en ligne, utilisez les paramètres suivants.

| Section          | Nom                                 | Code ref           |
| ---------------- | ----------------------------------- |--------------------|
| Types de service | Livraison                           | (leave empty)      |
| Types de service | A emporter                          | (leave empty)      |
| Types de service | Sur place                           | (leave empty)      |
| Paiements        | Mode de paiement en ligne générique | (leave empty)      |
| Frais            | Frais de service                    | (leave empty)      |
| Frais            | Frais de livraison                  | (leave empty)      |
| Remises          | Remise générique                    | (leave empty)      |
