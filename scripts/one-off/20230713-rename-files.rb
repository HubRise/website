require 'yaml'

# Launch this script from the root of the repository
FOLDER = "content"

def rename_files(dir, name_map)
  Dir.glob("#{FOLDER}/**/*.md").each do |file_path|
    filename = File.basename(file_path)
    if name_map.has_key?(filename)
      new_path = File.join(File.dirname(file_path), name_map[filename])
      File.rename(file_path, new_path)
    end
  end
end

name_map = {
  "acceptation-automatique.md" => "auto-accept.md",
  "arreter-de-payer-abonnement.md" => "stop-paying-subscription.md",
  "associer-codes-ref.md" => "map-ref-codes.md",
  "auto-acceptation.md" => "auto-accept.md",
  "catalogues.md" => "catalogs.md",
  "commandes.md" => "orders.md",
  "commandes-non-envoyees.md" => "orders-not-sent.md",
  "commandes-non-recues.md" => "orders-not-received-errors.md",
  "comment-contribuer.md" => "how-to-contribute.md",
  "comment-demarrer.md" => "get-started.md",
  "comment-effacer-des-comptes.md" => "how-can-i-clear-accounts.md",
  "comptes.md" => "account.md",
  "connexions.md" => "connections.md",
  "connexion-hubrise.md" => "connect-hubrise.md",
  "terminologie.md" => "terminology.md",
  "donnees.md" => "data.md",
  "depannage.md" => "troubleshooting.md",
  "details-techniques.md" => "technical-details.md",
  "developpeur.md" => "developer.md",
  "differences-prix.md" => "price-differences-errors.md",
  "envoi-catalogue.md" => "push-catalog.md",
  "exporter-catalogue.md" => "push-catalog.md",
  "envoyer-commandes.md" => "send-orders.md",
  "importer-catalogue.md" => "pull-catalog.md",
  "interface-utilisateur.md" => "user-interface.md",
  "formule-gratuite-quota-depasse-ce-qui-se-passe.md" => "free-plan-quota-exceeded-what-happens.md",
  "gestion-commandes.md" => "manage-orders.md",
  "liste-clients.md" => "customer-lists.md",
  "modele-donnees-hubrise.md" => "hubrise-data-model.md",
  "paiement.md" => "payment.md",
  "points-de-vente.md" => "locations.md",
  "presentation-generale.md" => "overview.md",
  "produits-non-envoyes.md" => "products-not-pushed.md",
  "profil-mot-de-passe.md" => "profile-password.md",
  "recevoir-commandes.md" => "receive-orders.md",
  "referencer-votre-solution-sur-hubrise.md" => "reference-your-solution-on-hubrise.md",
  "verifier-connexion-entre-mon-systeme-et-hubrise.md" => "check-connection-between-my-system-and-hubrise.md",
  "verifier-si-j-ai-deja-un-profil-utilisateur-dans-hubrise.md" => "check-if-i-already-have-a-user-profile-in-hubrise.md",
  "desactiver-tablette.md" => "turn-off-orderpad.md",
  "plateformes-livraison-repas.md" => "food-delivery-platforms.md",
}

rename_files(FOLDER, name_map)
