---
title: Récupérer le catalogue
path_override: recuperer-catalogue
position: 4
layout: documentation
meta:
  title: Récupérer le catalogue | LivePepper | HubRise
  description: Découvrez comment récupérer votre catalogue HubRise dans LivePepper.
---

Pour que les commandes LivePepper soient traitées par votre logiciel de caisse, il est essentiel d'attribuer des codes ref à chaque article du menu, y compris les variantes, les suppléments, les options, les compositions et les promotions.

Certains logiciels de caisse permettent d'exporter des menus vers HubRise. Votre menu LivePepper est ainsi alimenté automatiquement avec les bons codes ref. Cependant, si votre logiciel de caisse ne prend pas en charge l'envoi de menu vers HubRise, vous devez associer manuellement les codes ref, comme indiqué dans la section [Associer les codes ref](/apps/livepepper/map-ref-codes). Pour le vérifier, reportez-vous à la documentation de votre logiciel de caisse sur le site internet de HubRise.

---

**REMARQUE IMPORTANTE :** Assurez-vous d'associer les codes ref à chaque produit et option de votre catalogue. LivePepper ne peut pas récupérer de catalogue HubRise s'il y manque des codes ref.

---

Pour récupérer un catalogue HubRise dans LivePepper :

1. Connectez-vous à votre back-office LivePepper.
2. Cliquez sur **Mon menu** > **Import/Export**.
3. Dans la section **HubRise**, cliquez sur **Importer**.
   ![Importer et exporter le menu](./images/010-hubrise-menu-import.png)
4. Saisissez votre mot de passe LivePepper et cliquez sur **Importer depuis HubRise**.

---

**REMARQUE IMPORTANTE :** La récupération d'un catalogue HubRise écrase tous les produits existants dans LivePepper. Cette action est irréversible.

---

## Détails techniques

### Listes d'options

Lors de l'import depuis HubRise, chaque liste d'options est classée dans LivePepper selon les règles suivantes :

- **Ingrédients** : liste à choix multiple dont le nom commence par "Ingrédients" ou "Composition" (casse indifférente).
- **Suppléments** : liste à choix multiple dont le nom commence par "Suppléments" ou "Toppings" (casse indifférente).
- **Options** : liste à choix multiple dont le nom ne correspond à aucun des préfixes ci‑dessus.
- **Variantes** : liste à choix unique.

LivePepper ne prend en charge qu'une seule liste pour chacune des trois premières catégories. Si plusieurs listes remplissent le même critère, seule l'une d'entre elles sera importée.
