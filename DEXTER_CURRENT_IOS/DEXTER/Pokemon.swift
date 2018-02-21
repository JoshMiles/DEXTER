import Foundation

struct Pokemon : Codable {
  let number : String
  let name : String
    enum CodingKeys : String, CodingKey {
        case number = "PID"
        case name = "NAME"
    }
}
