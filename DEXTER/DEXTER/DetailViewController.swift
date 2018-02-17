import UIKit
import WebKit

class DetailViewController: UIViewController {
  
    @IBOutlet weak var webView: WKWebView!
    
    var pokeNumber : Int = 0
    var detailPokemon: Pokemon? {
    didSet {
      configureView()
    }
  }
  
    override func loadView() {
        webView = WKWebView()
        //webView.navigationDelegate =
        view = webView
    }
  func configureView() {
    if let detailPokemon = detailPokemon {
      
        //detailDescriptionLabel.text = detailPokemon.number
       // pokedexDescription.text = detailPokemon.pokedexDesc
        //pokemonImageView.image = UIImage(named: detailPokemon.name.lowercased())
        title = detailPokemon.name
        pokeNumber = detailPokemon.number
      
    }
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configureView()
    webView.scrollView.isScrollEnabled = true
    let url = URL(string: ("https://db.pokemongohub.net/pokemon/" + String(pokeNumber)))!
    webView.load(URLRequest(url: url))
    webView.allowsBackForwardNavigationGestures = true
  }
  
  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
  }
  
}

/*
 
 
 import UIKit
 import WebKit
 class SecondViewController: UIViewController, WKNavigationDelegate {
 
 var webView: WKWebView!
 
 override func loadView() {
 webView = WKWebView()
 webView.navigationDelegate = self
 view = webView
 }
 override func viewDidLoad() {
 super.viewDidLoad()
 webView.scrollView.isScrollEnabled = false
 let url = URL(string: "https://www.pokemongomap.info")!
 webView.load(URLRequest(url: url))
 webView.allowsBackForwardNavigationGestures = true
 }
 
 override func didReceiveMemoryWarning() {
 super.didReceiveMemoryWarning()
 // Dispose of any resources that can be recreated.
 }
 
 
 }
 

 */
