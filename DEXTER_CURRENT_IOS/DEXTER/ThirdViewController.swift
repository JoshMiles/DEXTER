//
//  ThirdViewController.swift
//  DEXTER
//
//  Created by Joshua Miles on 17/02/2018.
//  Copyright © 2018 Joshua Miles. All rights reserved.
//

import UIKit
import WebKit
class ThirdViewController: UIViewController, WKNavigationDelegate {
    
    var webView: WKWebView!
    
    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }
    override func viewDidLoad() {
        IJProgressView.shared.showProgressView(webView)
        super.viewDidLoad()
        webView.scrollView.isScrollEnabled = false
        let url = URL(string: "https://thesilphroad.com/atlas")!
        webView.load(URLRequest(url: url))
        webView.allowsBackForwardNavigationGestures = true
    }

    @IBAction func oh(_ sender: UIBarButtonItem) {
        print("works?")
    }
    
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        IJProgressView.shared.showProgressView(webView)
    }
    
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        IJProgressView.shared.hideProgressView()
    }

    
}


