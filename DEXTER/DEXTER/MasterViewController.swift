import UIKit

class MasterViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {
  
  // MARK: - Properties
  @IBOutlet var tableView: UITableView!
  @IBOutlet var searchFooter: SearchFooter!
  var filteredPokemon = [Pokemon]()
  var detailViewController: DetailViewController? = nil
  var pokemons = [Pokemon]()
   let searchController = UISearchController(searchResultsController: nil)
    // MARK: - Private instance methods
    
    func searchBarIsEmpty() -> Bool {
        // Returns true if the text is empty or nil
        return searchController.searchBar.text?.isEmpty ?? true
    }
    
    func filterContentForSearchText(_ searchText: String, scope: String = "All") {
        filteredPokemon = pokemons.filter({( pokemon : Pokemon) -> Bool in
            return pokemon.name.lowercased().contains(searchText.lowercased()) || pokemon.number.contains(searchText)
        })
        
        tableView.reloadData()
    }
    
    func isFiltering() -> Bool {
        return searchController.isActive && !searchBarIsEmpty()
    }
    
  // MARK: - View Setup
  override func viewDidLoad() {
    super.viewDidLoad()
    
    pokemons = [
        Pokemon(number:"001", name:"Bulbasaur"),
        Pokemon(number:"002", name:"Ivysaur"),
        Pokemon(number:"003", name:"Venusaur"),
        Pokemon(number:"004", name:"Charmander"),
        Pokemon(number:"005", name:"Charmeleon"),
        Pokemon(number:"006", name:"Charizard"),
        Pokemon(number:"007", name:"Squirtle"),
        Pokemon(number:"008", name:"Wartortle"),
        Pokemon(number:"009", name:"Blastoise"),
        Pokemon(number:"010", name:"Caterpie"),
        Pokemon(number:"011", name:"Metapod"),
        Pokemon(number:"012", name:"Butterfree"),
        Pokemon(number:"013", name:"Weedle"),
        Pokemon(number:"014", name:"Kakuka"),
        Pokemon(number:"015", name:"Beedroll"),
        Pokemon(number:"016", name:"Pidgey"),
        Pokemon(number:"017", name:"Pidgeotto"),
        Pokemon(number:"018", name:"Pidgeot"),
        Pokemon(number:"019", name:"Rattata"),
        Pokemon(number:"020", name:"Raticate"),
        Pokemon(number:"021", name:"Spearow"),
        Pokemon(number:"022", name:"Fearow"),
        Pokemon(number:"023", name:"Ekans"),
        Pokemon(number:"024", name:"Arbok"),
        Pokemon(number:"025", name:"Pikachu"),
        Pokemon(number:"026", name:"Raichu"),
        Pokemon(number:"027", name:"Sandshrew"),
        Pokemon(number:"028", name:"Sandslash"),
        Pokemon(number:"029", name:"Nidoran (f)"),
        Pokemon(number:"030", name:"Nidorina"),
        Pokemon(number:"031", name:"Nidoqueen"),
        Pokemon(number:"032", name:"Nidoran (m)"),
        Pokemon(number:"033", name:"Nidorino"),
        Pokemon(number:"034", name:"Nidoking"),
        Pokemon(number:"035", name:"Clefairy"),
        Pokemon(number:"036", name:"Clefable"),
        Pokemon(number:"037", name:"Vulpix"),
        Pokemon(number:"038", name:"Ninetales"),
        Pokemon(number:"039", name:"Jigglypuff"),
        Pokemon(number:"040", name:"Wigglytuff"),
        Pokemon(number:"041", name:"Zubat"),
        Pokemon(number:"042", name:"Golbat"),
        Pokemon(number:"043", name:"Oddish"),
        Pokemon(number:"044", name:"Gloom"),
        Pokemon(number:"045", name:"Vileplume"),
        Pokemon(number:"046", name:"Paras"),
        Pokemon(number:"047", name:"Parasect"),
        Pokemon(number:"048", name:"Venonat"),
        Pokemon(number:"049", name:"Venomoth"),
        Pokemon(number:"050", name:"Diglett"),
        Pokemon(number:"051", name:"Dugtrio"),
        Pokemon(number:"052", name:"Meowth"),
        Pokemon(number:"053", name:"Persian"),
        Pokemon(number:"054", name:"Psyduck"),
        Pokemon(number:"055", name:"Golduck"),
        Pokemon(number:"056", name:"Mankey"),
        Pokemon(number:"057", name:"Primeape"),
        Pokemon(number:"058", name:"Growlithe"),
        Pokemon(number:"059", name:"Arcanine"),
        Pokemon(number:"060", name:"Poliwag"),
        Pokemon(number:"061", name:"Poliwhirl"),
        Pokemon(number:"062", name:"Poliwrath"),
        Pokemon(number:"063", name:"Abra"),
        Pokemon(number:"065", name:"Kadabra"),
        Pokemon(number:"066", name:"Alakazam"),
        Pokemon(number:"067", name:"Machop"),
        Pokemon(number:"068", name:"Machoke"),
        Pokemon(number:"069", name:"Machamp"),
        Pokemon(number:"070", name:"Bellsprout"),
        Pokemon(number:"071", name:"Weepinbell"),
        Pokemon(number:"072", name:"Victreebel"),
        Pokemon(number:"073", name:"Tentacool"),
        Pokemon(number:"074", name:"Geodude"),
        Pokemon(number:"075", name:"Graveler"),
        Pokemon(number:"076", name:"Golem"),
        Pokemon(number:"077", name:"Ponyta"),
        Pokemon(number:"078", name:"Rapidash"),
        Pokemon(number:"079", name:"Slowpoke"),
        Pokemon(number:"080", name:"Slowbro"),
        Pokemon(number:"081", name:"Magnemite"),
        Pokemon(number:"082", name:"Magneton"),
        Pokemon(number:"083", name:"Farfetch'd"),
        Pokemon(number:"084", name:"Doduo"),
        Pokemon(number:"085", name:"Dodrio"),
        Pokemon(number:"086", name:"Seel"),
        Pokemon(number:"087", name:"Dewgong"),
        Pokemon(number:"088", name:"Grimer"),
        Pokemon(number:"089", name:"Muk"),
        Pokemon(number:"090", name:"Shellder"),
        Pokemon(number:"091", name:"Cloyster"),
        Pokemon(number:"092", name:"Gastly"),
        Pokemon(number:"093", name:"Haunter"),
        Pokemon(number:"094", name:"Gengar"),
        Pokemon(number:"095", name:"Onix"),
        Pokemon(number:"096", name:"Drowzee"),
        Pokemon(number:"097", name:"Hypno"),
        Pokemon(number:"098", name:"Krabby"),
        Pokemon(number:"099", name:"Kingler"),
        Pokemon(number:"100", name:"Voltorb"),
        Pokemon(number:"101", name:"Electrode"),
        Pokemon(number:"102", name:"Exeggcute"),
        Pokemon(number:"103", name:"Exeggutor"),
        Pokemon(number:"104", name:"Cubone"),
        Pokemon(number:"105", name:"Marowak"),
        Pokemon(number:"106", name:"Hitmonlee"),
        Pokemon(number:"107", name:"Hitmonchan"),
        Pokemon(number:"108", name:"Lickitung"),
        Pokemon(number:"109", name:"Koffing"),
        Pokemon(number:"110", name:"Weezing"),
        Pokemon(number:"111", name:"Rhyhorn"),
        Pokemon(number:"112", name:"Rhydon"),
        Pokemon(number:"113", name:"Chansey"),
        Pokemon(number:"114", name:"Tangela"),
        Pokemon(number:"115", name:"Kangaskhan"),
        Pokemon(number:"116", name:"Horsea"),
        Pokemon(number:"117", name:"Seadra"),
        Pokemon(number:"118", name:"Goldeen"),
        Pokemon(number:"119", name:"Seaking"),
        Pokemon(number:"120", name:"Staryu"),
        Pokemon(number:"121", name:"Starmie"),
        Pokemon(number:"122", name:"Mr. Mime"),
        Pokemon(number:"123", name:"Scyther"),
        Pokemon(number:"124", name:"Jynx"),
        Pokemon(number:"125", name:"Electabuzz"),
        Pokemon(number:"126", name:"Magmar"),
        Pokemon(number:"127", name:"Pinsir"),
        Pokemon(number:"128", name:"Tauros"),
        Pokemon(number:"129", name:"Magikarp"),
        Pokemon(number:"130", name:"Gyarados"),
        Pokemon(number:"131", name:"Lapras"),
        Pokemon(number:"132", name:"Ditto"),
        Pokemon(number:"133", name:"Eevee"),
        Pokemon(number:"134", name:"Vaporeon"),
        Pokemon(number:"135", name:"Jolteon"),
        Pokemon(number:"136", name:"Flareon"),
        Pokemon(number:"137", name:"Porygon"),
        Pokemon(number:"138", name:"Omanyte"),
        Pokemon(number:"139", name:"Omastar"),
        Pokemon(number:"140", name:"Kabuto"),
        Pokemon(number:"141", name:"Kabutops"),
        Pokemon(number:"142", name:"Aerodactyl"),
        Pokemon(number:"143", name:"Snorlax"),
        Pokemon(number:"144", name:"Articuno"),
        Pokemon(number:"145", name:"Zapdos"),
        Pokemon(number:"146", name:"Moltres"),
        Pokemon(number:"147", name:"Dratini"),
        Pokemon(number:"148", name:"Dragonair"),
        Pokemon(number:"149", name:"Dragonite"),
        Pokemon(number:"150", name:"Mewtwo"),
        Pokemon(number:"151", name:"Mew")
    ]
    
   
    // Setup the Search Controller
    searchController.searchResultsUpdater = self
    searchController.obscuresBackgroundDuringPresentation = false
    searchController.searchBar.placeholder = "Search Pokémon!"
    navigationItem.searchController = searchController
    definesPresentationContext = true
    
    if let splitViewController = splitViewController {
      let controllers = splitViewController.viewControllers
      detailViewController = (controllers[controllers.count-1] as! UINavigationController).topViewController as? DetailViewController
    }
  }
  
  override func viewWillAppear(_ animated: Bool) {
    if splitViewController!.isCollapsed {
      if let selectionIndexPath = self.tableView.indexPathForSelectedRow {
        self.tableView.deselectRow(at: selectionIndexPath, animated: animated)
      }
    }
    super.viewWillAppear(animated)
  }
  
  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
  }
  
  // MARK: - Table View
  func numberOfSections(in tableView: UITableView) -> Int {
    return 1
  }
  
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if isFiltering() {
            return filteredPokemon.count
        }
        
        return pokemons.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Cell", for: indexPath)
        let pokemon: Pokemon
        if isFiltering() {
            pokemon = filteredPokemon[indexPath.row]
        } else {
            pokemon = pokemons[indexPath.row]
        }
        cell.textLabel!.text = pokemon.name
        cell.detailTextLabel!.text = ("#" + String(pokemon.number))
        return cell
    }
  
  // MARK: - Segues
  override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
    if segue.identifier == "showDetail" {
      if let indexPath = tableView.indexPathForSelectedRow {
        let pokemon: Pokemon
        if isFiltering() {
            pokemon = filteredPokemon[indexPath.row]
        } else {
            pokemon = pokemons[indexPath.row]
        }
        let controller = (segue.destination as! UINavigationController).topViewController as! DetailViewController
        controller.detailPokemon = pokemon
        controller.navigationItem.leftBarButtonItem = splitViewController?.displayModeButtonItem
        controller.navigationItem.leftItemsSupplementBackButton = true
      }
    }
  }
}

extension MasterViewController: UISearchResultsUpdating {
    // MARK: - UISearchResultsUpdating Delegate
    func updateSearchResults(for searchController: UISearchController) {
        filterContentForSearchText(searchController.searchBar.text!)
    }
}
