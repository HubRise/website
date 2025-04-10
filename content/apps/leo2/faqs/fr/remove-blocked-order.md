---
title: Comment supprimer une commande bloquée dans LEO2 ?
path_override: supprimer-commande-bloquee
position: 3
layout: documentation
meta:
  title: Supprimer une commande bloquée | FAQ LEO2 | HubRise
  description: Procédure rapide pour supprimer une commande bloquée dans LEO2 provoquant un envoi en boucle vers HubRise.
---

Si une commande est bloquée dans LEO2 et provoque un envoi en boucle vers HubRise, suivez ces étapes pour la supprimer :

1. Ouvrez l'explorateur Windows et naviguez vers `[dossier_LEO2]\interfaces\HUBRISE\`.
2. Trouvez le fichier nommé `[numéro_de_commande].JSON`.
3. Supprimez ce fichier.

Exemple : Pour la commande "8p77by7", supprimez le fichier `[dossier_LEO2]\interfaces\HUBRISE\8p77by7.JSON`.
