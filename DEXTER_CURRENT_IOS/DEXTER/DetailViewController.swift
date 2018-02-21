import UIKit
import WebKit

class DetailViewController: UIViewController, WKNavigationDelegate {
  
    var webView: WKWebView!
    
    var pokeNumber : String = "001"
    var detailPokemon: Pokemon? {
    didSet {
      configureView()
    }
  }
  
    func webView(_ webView: WKWebView,
                 didFinish navigation: WKNavigation!) {
        title = webView.title
         IJProgressView.shared.hideProgressView()
    }
    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }
  func configureView() {
    if let detailPokemon = detailPokemon {
        title = detailPokemon.name
        pokeNumber = detailPokemon.number
      
    }
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configureView()
    IJProgressView.shared.showProgressView(webView)
    webView.scrollView.isScrollEnabled = true
    let url = URL(string: "https://pokemon.thepokedex.me/" + pokeNumber)!
    print(url);
    webView.load(URLRequest(url: url))
    webView.allowsBackForwardNavigationGestures = true
    
  }
  
  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
  }
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        IJProgressView.shared.showProgressView(webView)
    }

}

