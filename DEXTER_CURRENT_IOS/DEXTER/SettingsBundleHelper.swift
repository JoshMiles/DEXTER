//
//  SettingsBundleHelper.swift
//  DEXTER
//
//  Created by Joshua Miles on 22/02/2018.
//  Copyright © 2018 Joshua Miles. All rights reserved.
//

import Foundation
class SettingsBundleHelper {
    public struct SettingsBundleKeys {
        static let offline_mode = "offline_mode_pref"
        static let BuildVersionKey = "build_preference"
        static let AppVersionKey = "version_preference"
    }
    class func checkAndExecuteSettings() {
        if UserDefaults.standard.bool(forKey: SettingsBundleKeys.offline_mode) {
            UserDefaults.standard.set(false, forKey: SettingsBundleKeys.offline_mode)
            let appDomain: String? = Bundle.main.bundleIdentifier
            UserDefaults.standard.removePersistentDomain(forName: appDomain!)
            // reset userDefaults..
            // CoreDataDataModel().deleteAllData()
            // delete all other user data here..
        }
    }
    
    class func setVersionAndBuildNumber() {
        let version: String = Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as! String
        UserDefaults.standard.set(version, forKey: "version_preference")
        let build: String = Bundle.main.object(forInfoDictionaryKey: "CFBundleVersion") as! String
        UserDefaults.standard.set(build, forKey: "build_preference")
    }
}
