---
title: Comprendre la syntaxe JSON
path_override: comprendre-syntaxe-json
position: 4
layout: documentation
meta:
  title: Comprendre la syntaxe JSON | Comment lire les logs HubRise
  description: Courte introduction à la syntaxe JSON en termes non-techniques afin de mieux comprendre les requêtes HubRise.
---

## Exemple de requête JSON

Considérons à nouveau la commande initiale : « Une pizza margherita avec supplément olives et deux hamburgers au bacon, pour un montant total de 20,45 euros, à payer en espèces à l'encaissement ».

Pour plus de détails, voir [Exemple pratique](/docs/hubrise-logs/a-practical-example).

Une transcription possible de cette commande au format JSON est la suivante.

```json
{
  "items": [
    {
      "product": "pizza margherita",
      "quantity": 1,
      "options": [
        {
          "type": "topping",
          "name": "olives"
        }
      ]
    },
    {
      "product": "bacon burger",
      "quantity": 2,
      "options": []
    }
  ],
  "payment": {
    "total": "20.45 EUR",
    "type": "cash"
  },
  "service type": "collection"
}
```

## Indentation

Une première remarque concernant la requête JSON ci-dessus est l'indentation, c'est-à-dire la quantité d'espace vide à gauche de chaque ligne.

Au niveau 0 de l'indentation, les deux accolades marquent le début et la fin de la requête. Au niveau 1, on trouve les nœuds correspondant aux types d'article, de paiement et de service. Plus le niveau d'indentation est élevé, plus l'élément s'inscrit en profondeur dans la structure de l'objet JSON. Notez que ces niveaux coïncident avec ceux du diagramme que nous avons créé précédemment. Pour plus de détails, voir [Organisation des informations](/docs/hubrise-logs/organising-information).

Chaque niveau d'indentation dépend du niveau qui lui est hiérarchiquement supérieur. Pour savoir par exemple combien de hamburgers au bacon contient la commande, procédez comme suit :

- Commencez par le nœud des articles.
- Descendez d'un niveau d'indentation et recherchez les objets contenus dans la liste des articles.
- Recherchez l'objet ayant la valeur du hamburger au bacon associée à la clé du produit.
- Une fois que vous avez trouvé cet objet, cherchez le nœud correspondant à la quantité qui se trouve à l'intérieur.
- Lisez la valeur associée au nœud de quantité.

Cette méthode vous permet de parcourir n'importe quelle requête JSON et de trouver les valeurs associées à une clé spécifique.

## Détails techniques

Quelques informations techniques peuvent vous aider à mieux comprendre le fonctionnement du JSON.

Les accolades {} délimitent le début et la fin d'un objet JSON. Elles se trouvent donc toujours sur la première et la dernière lignes d'une requête.

Un objet JSON contient une ou plusieurs paires clé/valeur, chaque paire étant de la suivante par une virgule, à l'exception de la dernière paire.

Chaque clé doit être composée d'une chaîne de caractères, qui est généralement, mais pas obligatoirement, un mot anglais valide, et elle doit être encadrée par des guillemets. L'usage d'un terme descriptif aide l'utilisateur humain à identifier le contenu de l'information.

La valeur associée à une clé peut être l'une des options suivantes :

- Une chaîne de caractères
- Une valeur numérique
- Une valeur booléenne (True ou False)
- Un objet JSON
- Une liste quelconque faite des objets qui précèdent

La possibilité d'utiliser des objets JSON en tant que valeurs d'une clé permet de structurer les informations sous forme hiérarchique.

Les listes sont encadrées par des crochets [] et contiennent des éléments séparés par des virgules.
