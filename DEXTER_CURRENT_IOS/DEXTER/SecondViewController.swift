//
//  SecondViewController.swift
//  DEXTER
//
//  Created by Joshua Miles on 17/02/2018.
//  Copyright © 2018 Joshua Miles. All rights reserved.
//

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

