---
title: Requêtes JSON dans HubRise
position: 6
layout: documentation
meta:
  title: Requêtes JSON dans HubRise | Comment lire les logs HubRise
  description: JSON logs type et requêtes JSON dans HubRise.
---

## Mécanismes de communication

HubRise permet de partager facilement des données entre différentes applications en échangeant des requêtes d'API. Ce mécanisme de communication implique toujours une seconde application, qui envoie des données à HubRise ou en reçoit de sa part. Tous ces échanges sont enregistrés dans le back-office de HubRise, et les journaux complets peuvent être consultés et débogués. Pour savoir comment trouver les logs dans le back-office, consultez l'[Aide de HubRise : Logs](/docs/data/#logs) (en anglais).

Le cycle de vie typique d'un tel échange se décline en trois parties :

- Requête
- Réponse
- Rappel(s)

La requête constitue la première partie d'un échange de données. Elle est toujours envoyée par une application connectée à HubRise. La réponse est la deuxième partie de cet échange, au cours de laquelle HubRise accuse réception ou non de ce message.

Le cas typique est celui de la création d'une commande dans une application connectée à HubRise. Lors de la création d'une commande, l'application génère une requête et l'envoie à HubRise accompagnée des détails de la commande. Puis, HubRise peut accuser réception de la commande et renvoyer une réponse contenant ces informations.

Enfin, une requête peut déclencher automatiquement d'autres requêtes auprès de différentes applications. À titre d'exemple, une requête de création de commande peut déclencher l'envoi d'une requête à une solution de fidélisation afin d'obtenir des informations sur le client. Ces requêtes automatiques appelées rappels, ou « callbacks », comportent chacune une requête et une réponse. Les rappels sont toujours envoyés par HubRise à une application tierce.

![Composantes des requêtes d'API dans HubRise](../images/004-fr-components-api-request.png)

## Logs et requêtes dans HubRise

Dans le back-office de HubRise, chaque sous-section de la partie **DATA** fournit plus d'informations par le biais de la page de log correspondante.

Par exemple, chaque commande incluse sur la page **ORDERS** peut être développée afin de révéler plus d'informations à son sujet. La section **Logs**, notamment, répertorie toutes les requêtes d'API associées à cette commande.

Pour chaque requête, les informations suivantes s'affichent :

- **DATE** : date et heure de la requête.
- **ORIGIN** : application connectée à partir de laquelle la requête a été émise.
- **ENDPOINT** : point d'extrémité de la requête.
- **CODE** : code de la réponse.

Chaque ligne peut être développée de manière à révéler des informations détaillées sur la requête, la réponse et les éventuels rappels associés.

<video controls title="Example of Request and Callback in HubRise">
  <source src="../images/006-request-callback-example.webm" type="video/webm"/>
</video>

## Exemple de requête HubRise typique

### Point d'extrémité

La méthode et l'URL constituent ensemble le point d'extrémité de la requête. Bien que ces deux composantes constituent en réalité une seule et même entité et qu'elles apparaissent comme telles dans le back-office de HubRise, nous les analyserons séparément dans les deux sections suivantes.

### Méthode

La méthode HTTP de la requête est l'action qui doit être exécutée avec les données contenues dans la requête. Les méthodes typiques rencontrées dans les requêtes HubRise sont les suivantes.

| Méthode HTTP | Description                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| GET         | Permet d'extraire des informations, généralement les détails relatifs à une commande ou un client.                          |
| POST        | Permet de créer de nouvelles informations, généralement une nouvelle commande.                                                     |
| PUT         | Permet de remplacer entièrement les informations déjà présentes dans le système par les données constitutives de la requête. |
| PATCH       | Permet de remplacer partiellement les informations déjà présentes dans le système par les données constitutives de la requête.  |
| DELETE      | Permet par exemple de définir des rappels passifs afin de supprimer des événements existants.                                         |

### URL, domaine et chemin d'accès

L'adresse URL de la requête spécifie l'adresse à laquelle la requête est adressée. Les URL adoptent généralement le format suivant.

```
https://api.hubrise.com/v1/location/orders
```

Elles se composent de deux parties : le nom de domaine et le chemin d'accès.

Le domaine est la première partie de l'URL, dans ce cas :

```
https://api.hubrise.com
```

Elle spécifie l'emplacement du serveur qui traite la requête.

Le chemin d'accès est la seconde partie de l'URL, dans ce cas :

```
/v1/location/orders
```

Conjointement à la méthode HTTP, elle spécifie l'action qui doit être exécutée avec les données contenues dans la requête.

### En-têtes

Les en-têtes sont les métadonnées qui accompagnent chaque requête. L'information élémentaire la plus importante pour le débogage est le **jeton d'authentification**, c'est-à-dire le code unique attribué au client par HubRise.

Elle apparaît dans chaque requête sous la clé **X-Access-Token** et est partiellement masquée pour des raisons de sécurité.

![Jeton d'authentification dans une requête HubRise](../images/005-fr-access-token-arrow.png)

### Corps de texte

Le corps de la requête est représenté par le contenu JSON de celle-ci. Pour consulter un exemple de contenu JSON, voir [Exemple pratique](/docs/hubrise-logs/un-exemple-pratique).

Pour plus de détails sur le contenu JSON des requêtes dans HubRise, voir [Modèle de données HubRise](/docs/hubrise-logs/model-donnee-hubrise).

## Exemple de réponse HubRise typique

### Code

Le code de réponse indique le résultat de la requête. Le code 200 indique une requête ayant abouti, tandis que les autres codes correspondent à divers types d'erreurs. Le tableau suivant présente les erreurs les plus courantes. Pour connaître les stratégies de dépannage possibles en fonction du code, voir [Résolution des problèmes liés aux requêtes](/docs/hubrise-logs/depannage-requetes).

| Code de réponse | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| 200           | La requête a été reçue avec succès.                                           |
| 400           | La requête est non valide.                                                              |
| 401           | Les informations d'authentification sont manquantes ou non valides.                                  |
| 403           | La requête est correcte, mais le serveur a refusé de la traiter.                      |
| 404           | L'adresse URL de la requête n'existe pas.                                                |
| 422           | La requête est formellement correcte et valide, mais le serveur ne parvient pas à traiter son contenu. |
| 429           | Trop de requêtes ont été émises.                                                          |
| 500           | Une erreur interne s'est produite sur le serveur HubRise.                                    |
