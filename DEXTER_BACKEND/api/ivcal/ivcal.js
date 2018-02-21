console.log(properties);
window.onload = function() {
	processData();
}
var result;

function processData() {
	//window.location.href = "";
	// $.post('ivcal.php', {data1: 'something'}, function(data) {
	// 	console.log(data);
	// });
	// convert powerup parameter to either true or false
	var upgraded_bool = false;
	if (properties.powerup.toLowerCase() == 'yes') {
		upgraded_bool = true;
	}
	result = evaluate(properties.name, properties.cp, properties.hp, properties.dust, upgraded_bool);
	//document.getElementById("result").innerHTML = JSON.stringify(result);
	var url = '/?o=ivr';
	var form = $('<form style="display: none;" action="' + url + '" method="post">' +
  '<textarea style="display: none;" name="res">' + (JSON.stringify(result)) + '</textarea>' +
  '</form>');
	$('body').append(form);
	form.submit();
}
//pokedex
var pokemon = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "stamina": 90,
    "attack": 118,
    "defense": 118
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "stamina": 120,
    "attack": 151,
    "defense": 151
  },
  {
    "id": 3,
    "name": "Venusaur",
    "stamina": 160,
    "attack": 198,
    "defense": 198
  },
  {
    "id": 4,
    "name": "Charmander",
    "stamina": 78,
    "attack": 116,
    "defense": 96
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "stamina": 116,
    "attack": 158,
    "defense": 129
  },
  {
    "id": 6,
    "name": "Charizard",
    "stamina": 156,
    "attack": 223,
    "defense": 176
  },
  {
    "id": 7,
    "name": "Squirtle",
    "stamina": 88,
    "attack": 94,
    "defense": 122
  },
  {
    "id": 8,
    "name": "Wartortle",
    "stamina": 118,
    "attack": 126,
    "defense": 155
  },
  {
    "id": 9,
    "name": "Blastoise",
    "stamina": 158,
    "attack": 171,
    "defense": 210
  },
  {
    "id": 10,
    "name": "Caterpie",
    "stamina": 90,
    "attack": 55,
    "defense": 62
  },
  {
    "id": 11,
    "name": "Metapod",
    "stamina": 100,
    "attack": 45,
    "defense": 94
  },
  {
    "id": 12,
    "name": "Butterfree",
    "stamina": 120,
    "attack": 167,
    "defense": 151
  },
  {
    "id": 13,
    "name": "Weedle",
    "stamina": 80,
    "attack": 63,
    "defense": 55
  },
  {
    "id": 14,
    "name": "Kakuna",
    "stamina": 90,
    "attack": 46,
    "defense": 86
  },
  {
    "id": 15,
    "name": "Beedrill",
    "stamina": 130,
    "attack": 169,
    "defense": 150
  },
  {
    "id": 16,
    "name": "Pidgey",
    "stamina": 80,
    "attack": 85,
    "defense": 76
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "stamina": 126,
    "attack": 117,
    "defense": 108
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "stamina": 166,
    "attack": 166,
    "defense": 157
  },
  {
    "id": 19,
    "name": "Rattata",
    "stamina": 60,
    "attack": 103,
    "defense": 70
  },
  {
    "id": 20,
    "name": "Raticate",
    "stamina": 110,
    "attack": 161,
    "defense": 144
  },
  {
    "id": 21,
    "name": "Spearow",
    "stamina": 80,
    "attack": 112,
    "defense": 61
  },
  {
    "id": 22,
    "name": "Fearow",
    "stamina": 130,
    "attack": 182,
    "defense": 135
  },
  {
    "id": 23,
    "name": "Ekans",
    "stamina": 70,
    "attack": 110,
    "defense": 102
  },
  {
    "id": 24,
    "name": "Arbok",
    "stamina": 120,
    "attack": 167,
    "defense": 158
  },
  {
    "id": 25,
    "name": "Pikachu",
    "stamina": 70,
    "attack": 112,
    "defense": 101
  },
  {
    "id": 26,
    "name": "Raichu",
    "stamina": 120,
    "attack": 193,
    "defense": 165
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "stamina": 100,
    "attack": 126,
    "defense": 145
  },
  {
    "id": 28,
    "name": "Sandslash",
    "stamina": 150,
    "attack": 182,
    "defense": 202
  },
  {
    "id": 29,
    "name": "Nidoran?",
    "stamina": 110,
    "attack": 86,
    "defense": 94
  },
  {
    "id": 30,
    "name": "Nidorina",
    "stamina": 140,
    "attack": 117,
    "defense": 126
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "stamina": 180,
    "attack": 180,
    "defense": 174
  },
  {
    "id": 32,
    "name": "Nidoran?",
    "stamina": 92,
    "attack": 105,
    "defense": 76
  },
  {
    "id": 33,
    "name": "Nidorino",
    "stamina": 122,
    "attack": 137,
    "defense": 112
  },
  {
    "id": 34,
    "name": "Nidoking",
    "stamina": 162,
    "attack": 204,
    "defense": 157
  },
  {
    "id": 35,
    "name": "Clefairy",
    "stamina": 140,
    "attack": 107,
    "defense": 116
  },
  {
    "id": 36,
    "name": "Clefable",
    "stamina": 190,
    "attack": 178,
    "defense": 171
  },
  {
    "id": 37,
    "name": "Vulpix",
    "stamina": 76,
    "attack": 96,
    "defense": 122
  },
  {
    "id": 38,
    "name": "Ninetales",
    "stamina": 146,
    "attack": 169,
    "defense": 204
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "stamina": 230,
    "attack": 80,
    "defense": 44
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "stamina": 280,
    "attack": 156,
    "defense": 93
  },
  {
    "id": 41,
    "name": "Zubat",
    "stamina": 80,
    "attack": 83,
    "defense": 76
  },
  {
    "id": 42,
    "name": "Golbat",
    "stamina": 150,
    "attack": 161,
    "defense": 153
  },
  {
    "id": 43,
    "name": "Oddish",
    "stamina": 90,
    "attack": 131,
    "defense": 116
  },
  {
    "id": 44,
    "name": "Gloom",
    "stamina": 120,
    "attack": 153,
    "defense": 139
  },
  {
    "id": 45,
    "name": "Vileplume",
    "stamina": 150,
    "attack": 202,
    "defense": 170
  },
  {
    "id": 46,
    "name": "Paras",
    "stamina": 70,
    "attack": 121,
    "defense": 99
  },
  {
    "id": 47,
    "name": "Parasect",
    "stamina": 120,
    "attack": 165,
    "defense": 146
  },
  {
    "id": 48,
    "name": "Venonat",
    "stamina": 120,
    "attack": 100,
    "defense": 102
  },
  {
    "id": 49,
    "name": "Venomoth",
    "stamina": 140,
    "attack": 179,
    "defense": 150
  },
  {
    "id": 50,
    "name": "Diglett",
    "stamina": 20,
    "attack": 109,
    "defense": 88
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "stamina": 70,
    "attack": 167,
    "defense": 147
  },
  {
    "id": 52,
    "name": "Meowth",
    "stamina": 80,
    "attack": 92,
    "defense": 81
  },
  {
    "id": 53,
    "name": "Persian",
    "stamina": 130,
    "attack": 150,
    "defense": 139
  },
  {
    "id": 54,
    "name": "Psyduck",
    "stamina": 100,
    "attack": 122,
    "defense": 96
  },
  {
    "id": 55,
    "name": "Golduck",
    "stamina": 160,
    "attack": 191,
    "defense": 163
  },
  {
    "id": 56,
    "name": "Mankey",
    "stamina": 80,
    "attack": 148,
    "defense": 87
  },
  {
    "id": 57,
    "name": "Primeape",
    "stamina": 130,
    "attack": 207,
    "defense": 144
  },
  {
    "id": 58,
    "name": "Growlithe",
    "stamina": 110,
    "attack": 136,
    "defense": 96
  },
  {
    "id": 59,
    "name": "Arcanine",
    "stamina": 180,
    "attack": 227,
    "defense": 166
  },
  {
    "id": 60,
    "name": "Poliwag",
    "stamina": 80,
    "attack": 101,
    "defense": 82
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "stamina": 130,
    "attack": 130,
    "defense": 130
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "stamina": 180,
    "attack": 182,
    "defense": 187
  },
  {
    "id": 63,
    "name": "Abra",
    "stamina": 50,
    "attack": 195,
    "defense": 103
  },
  {
    "id": 64,
    "name": "Kadabra",
    "stamina": 80,
    "attack": 232,
    "defense": 138
  },
  {
    "id": 65,
    "name": "Alakazam",
    "stamina": 110,
    "attack": 271,
    "defense": 194
  },
  {
    "id": 66,
    "name": "Machop",
    "stamina": 140,
    "attack": 137,
    "defense": 88
  },
  {
    "id": 67,
    "name": "Machoke",
    "stamina": 160,
    "attack": 177,
    "defense": 130
  },
  {
    "id": 68,
    "name": "Machamp",
    "stamina": 180,
    "attack": 234,
    "defense": 162
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "stamina": 100,
    "attack": 139,
    "defense": 64
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "stamina": 130,
    "attack": 172,
    "defense": 95
  },
  {
    "id": 71,
    "name": "Victreebel",
    "stamina": 160,
    "attack": 207,
    "defense": 138
  },
  {
    "id": 72,
    "name": "Tentacool",
    "stamina": 80,
    "attack": 97,
    "defense": 182
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "stamina": 160,
    "attack": 166,
    "defense": 237
  },
  {
    "id": 74,
    "name": "Geodude",
    "stamina": 80,
    "attack": 132,
    "defense": 163
  },
  {
    "id": 75,
    "name": "Graveler",
    "stamina": 110,
    "attack": 164,
    "defense": 196
  },
  {
    "id": 76,
    "name": "Golem",
    "stamina": 160,
    "attack": 211,
    "defense": 229
  },
  {
    "id": 77,
    "name": "Ponyta",
    "stamina": 100,
    "attack": 170,
    "defense": 132
  },
  {
    "id": 78,
    "name": "Rapidash",
    "stamina": 130,
    "attack": 207,
    "defense": 167
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "stamina": 180,
    "attack": 109,
    "defense": 109
  },
  {
    "id": 80,
    "name": "Slowbro",
    "stamina": 190,
    "attack": 177,
    "defense": 194
  },
  {
    "id": 81,
    "name": "Magnemite",
    "stamina": 50,
    "attack": 165,
    "defense": 128
  },
  {
    "id": 82,
    "name": "Magneton",
    "stamina": 100,
    "attack": 223,
    "defense": 182
  },
  {
    "id": 83,
    "name": "Farfetch&#x27;d",
    "stamina": 104,
    "attack": 124,
    "defense": 118
  },
  {
    "id": 84,
    "name": "Doduo",
    "stamina": 70,
    "attack": 158,
    "defense": 88
  },
  {
    "id": 85,
    "name": "Dodrio",
    "stamina": 120,
    "attack": 218,
    "defense": 145
  },
  {
    "id": 86,
    "name": "Seel",
    "stamina": 130,
    "attack": 85,
    "defense": 128
  },
  {
    "id": 87,
    "name": "Dewgong",
    "stamina": 180,
    "attack": 139,
    "defense": 184
  },
  {
    "id": 88,
    "name": "Grimer",
    "stamina": 160,
    "attack": 135,
    "defense": 90
  },
  {
    "id": 89,
    "name": "Muk",
    "stamina": 210,
    "attack": 190,
    "defense": 184
  },
  {
    "id": 90,
    "name": "Shellder",
    "stamina": 60,
    "attack": 116,
    "defense": 168
  },
  {
    "id": 91,
    "name": "Cloyster",
    "stamina": 100,
    "attack": 186,
    "defense": 323
  },
  {
    "id": 92,
    "name": "Gastly",
    "stamina": 60,
    "attack": 186,
    "defense": 70
  },
  {
    "id": 93,
    "name": "Haunter",
    "stamina": 90,
    "attack": 223,
    "defense": 112
  },
  {
    "id": 94,
    "name": "Gengar",
    "stamina": 120,
    "attack": 261,
    "defense": 156
  },
  {
    "id": 95,
    "name": "Onix",
    "stamina": 70,
    "attack": 85,
    "defense": 288
  },
  {
    "id": 96,
    "name": "Drowzee",
    "stamina": 120,
    "attack": 89,
    "defense": 158
  },
  {
    "id": 97,
    "name": "Hypno",
    "stamina": 170,
    "attack": 144,
    "defense": 215
  },
  {
    "id": 98,
    "name": "Krabby",
    "stamina": 60,
    "attack": 181,
    "defense": 156
  },
  {
    "id": 99,
    "name": "Kingler",
    "stamina": 110,
    "attack": 240,
    "defense": 214
  },
  {
    "id": 100,
    "name": "Voltorb",
    "stamina": 80,
    "attack": 109,
    "defense": 114
  },
  {
    "id": 101,
    "name": "Electrode",
    "stamina": 120,
    "attack": 173,
    "defense": 179
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "stamina": 120,
    "attack": 107,
    "defense": 140
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "stamina": 190,
    "attack": 233,
    "defense": 158
  },
  {
    "id": 104,
    "name": "Cubone",
    "stamina": 100,
    "attack": 90,
    "defense": 165
  },
  {
    "id": 105,
    "name": "Marowak",
    "stamina": 120,
    "attack": 144,
    "defense": 200
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "stamina": 100,
    "attack": 224,
    "defense": 211
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "stamina": 100,
    "attack": 193,
    "defense": 212
  },
  {
    "id": 108,
    "name": "Lickitung",
    "stamina": 180,
    "attack": 108,
    "defense": 137
  },
  {
    "id": 109,
    "name": "Koffing",
    "stamina": 80,
    "attack": 119,
    "defense": 164
  },
  {
    "id": 110,
    "name": "Weezing",
    "stamina": 130,
    "attack": 174,
    "defense": 221
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "stamina": 160,
    "attack": 140,
    "defense": 157
  },
  {
    "id": 112,
    "name": "Rhydon",
    "stamina": 210,
    "attack": 222,
    "defense": 206
  },
  {
    "id": 113,
    "name": "Chansey",
    "stamina": 500,
    "attack": 60,
    "defense": 176
  },
  {
    "id": 114,
    "name": "Tangela",
    "stamina": 130,
    "attack": 183,
    "defense": 205
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "stamina": 210,
    "attack": 181,
    "defense": 165
  },
  {
    "id": 116,
    "name": "Horsea",
    "stamina": 60,
    "attack": 129,
    "defense": 125
  },
  {
    "id": 117,
    "name": "Seadra",
    "stamina": 110,
    "attack": 187,
    "defense": 182
  },
  {
    "id": 118,
    "name": "Goldeen",
    "stamina": 90,
    "attack": 123,
    "defense": 115
  },
  {
    "id": 119,
    "name": "Seaking",
    "stamina": 160,
    "attack": 175,
    "defense": 154
  },
  {
    "id": 120,
    "name": "Staryu",
    "stamina": 60,
    "attack": 137,
    "defense": 112
  },
  {
    "id": 121,
    "name": "Starmie",
    "stamina": 120,
    "attack": 210,
    "defense": 184
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "stamina": 80,
    "attack": 192,
    "defense": 233
  },
  {
    "id": 123,
    "name": "Scyther",
    "stamina": 140,
    "attack": 218,
    "defense": 170
  },
  {
    "id": 124,
    "name": "Jynx",
    "stamina": 130,
    "attack": 223,
    "defense": 182
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "stamina": 130,
    "attack": 198,
    "defense": 173
  },
  {
    "id": 126,
    "name": "Magmar",
    "stamina": 130,
    "attack": 206,
    "defense": 169
  },
  {
    "id": 127,
    "name": "Pinsir",
    "stamina": 130,
    "attack": 238,
    "defense": 197
  },
  {
    "id": 128,
    "name": "Tauros",
    "stamina": 150,
    "attack": 198,
    "defense": 197
  },
  {
    "id": 129,
    "name": "Magikarp",
    "stamina": 40,
    "attack": 29,
    "defense": 102
  },
  {
    "id": 130,
    "name": "Gyarados",
    "stamina": 190,
    "attack": 237,
    "defense": 197
  },
  {
    "id": 131,
    "name": "Lapras",
    "stamina": 260,
    "attack": 165,
    "defense": 180
  },
  {
    "id": 132,
    "name": "Ditto",
    "stamina": 96,
    "attack": 91,
    "defense": 91
  },
  {
    "id": 133,
    "name": "Eevee",
    "stamina": 110,
    "attack": 104,
    "defense": 121
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "stamina": 260,
    "attack": 205,
    "defense": 177
  },
  {
    "id": 135,
    "name": "Jolteon",
    "stamina": 130,
    "attack": 232,
    "defense": 201
  },
  {
    "id": 136,
    "name": "Flareon",
    "stamina": 130,
    "attack": 246,
    "defense": 204
  },
  {
    "id": 137,
    "name": "Porygon",
    "stamina": 130,
    "attack": 153,
    "defense": 139
  },
  {
    "id": 138,
    "name": "Omanyte",
    "stamina": 70,
    "attack": 155,
    "defense": 174
  },
  {
    "id": 139,
    "name": "Omastar",
    "stamina": 140,
    "attack": 207,
    "defense": 227
  },
  {
    "id": 140,
    "name": "Kabuto",
    "stamina": 60,
    "attack": 148,
    "defense": 162
  },
  {
    "id": 141,
    "name": "Kabutops",
    "stamina": 120,
    "attack": 220,
    "defense": 203
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "stamina": 160,
    "attack": 221,
    "defense": 164
  },
  {
    "id": 143,
    "name": "Snorlax",
    "stamina": 320,
    "attack": 190,
    "defense": 190
  },
  {
    "id": 144,
    "name": "Articuno",
    "stamina": 180,
    "attack": 192,
    "defense": 249
  },
  {
    "id": 145,
    "name": "Zapdos",
    "stamina": 180,
    "attack": 253,
    "defense": 188
  },
  {
    "id": 146,
    "name": "Moltres",
    "stamina": 180,
    "attack": 251,
    "defense": 184
  },
  {
    "id": 147,
    "name": "Dratini",
    "stamina": 82,
    "attack": 119,
    "defense": 94
  },
  {
    "id": 148,
    "name": "Dragonair",
    "stamina": 122,
    "attack": 163,
    "defense": 138
  },
  {
    "id": 149,
    "name": "Dragonite",
    "stamina": 182,
    "attack": 263,
    "defense": 201
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "stamina": 193,
    "attack": 300,
    "defense": 182
  },
  {
    "id": 151,
    "name": "Mew",
    "stamina": 200,
    "attack": 210,
    "defense": 210
  },
  {
    "id": 152,
    "name": "Chikorita",
    "stamina": 90,
    "attack": 92,
    "defense": 122
  },
  {
    "id": 153,
    "name": "Bayleef",
    "stamina": 120,
    "attack": 122,
    "defense": 155
  },
  {
    "id": 154,
    "name": "Meganium",
    "stamina": 160,
    "attack": 168,
    "defense": 202
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "stamina": 78,
    "attack": 116,
    "defense": 96
  },
  {
    "id": 156,
    "name": "Quilava",
    "stamina": 116,
    "attack": 158,
    "defense": 129
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "stamina": 156,
    "attack": 223,
    "defense": 176
  },
  {
    "id": 158,
    "name": "Totodile",
    "stamina": 100,
    "attack": 117,
    "defense": 116
  },
  {
    "id": 159,
    "name": "Croconaw",
    "stamina": 130,
    "attack": 150,
    "defense": 151
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "stamina": 170,
    "attack": 205,
    "defense": 197
  },
  {
    "id": 161,
    "name": "Sentret",
    "stamina": 70,
    "attack": 79,
    "defense": 77
  },
  {
    "id": 162,
    "name": "Furret",
    "stamina": 170,
    "attack": 148,
    "defense": 130
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "stamina": 120,
    "attack": 67,
    "defense": 101
  },
  {
    "id": 164,
    "name": "Noctowl",
    "stamina": 200,
    "attack": 145,
    "defense": 179
  },
  {
    "id": 165,
    "name": "Ledyba",
    "stamina": 80,
    "attack": 72,
    "defense": 142
  },
  {
    "id": 166,
    "name": "Ledian",
    "stamina": 110,
    "attack": 107,
    "defense": 209
  },
  {
    "id": 167,
    "name": "Spinarak",
    "stamina": 80,
    "attack": 105,
    "defense": 73
  },
  {
    "id": 168,
    "name": "Ariados",
    "stamina": 140,
    "attack": 161,
    "defense": 128
  },
  {
    "id": 169,
    "name": "Crobat",
    "stamina": 170,
    "attack": 194,
    "defense": 178
  },
  {
    "id": 170,
    "name": "Chinchou",
    "stamina": 150,
    "attack": 106,
    "defense": 106
  },
  {
    "id": 171,
    "name": "Lanturn",
    "stamina": 250,
    "attack": 146,
    "defense": 146
  },
  {
    "id": 172,
    "name": "Pichu",
    "stamina": 40,
    "attack": 77,
    "defense": 63
  },
  {
    "id": 173,
    "name": "Cleffa",
    "stamina": 100,
    "attack": 75,
    "defense": 91
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "stamina": 180,
    "attack": 69,
    "defense": 34
  },
  {
    "id": 175,
    "name": "Togepi",
    "stamina": 70,
    "attack": 67,
    "defense": 116
  },
  {
    "id": 176,
    "name": "Togetic",
    "stamina": 110,
    "attack": 139,
    "defense": 191
  },
  {
    "id": 177,
    "name": "Natu",
    "stamina": 80,
    "attack": 134,
    "defense": 89
  },
  {
    "id": 178,
    "name": "Xatu",
    "stamina": 130,
    "attack": 192,
    "defense": 146
  },
  {
    "id": 179,
    "name": "Mareep",
    "stamina": 110,
    "attack": 114,
    "defense": 82
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "stamina": 140,
    "attack": 145,
    "defense": 112
  },
  {
    "id": 181,
    "name": "Ampharos",
    "stamina": 180,
    "attack": 211,
    "defense": 172
  },
  {
    "id": 182,
    "name": "Bellossom",
    "stamina": 150,
    "attack": 169,
    "defense": 189
  },
  {
    "id": 183,
    "name": "Marill",
    "stamina": 140,
    "attack": 37,
    "defense": 93
  },
  {
    "id": 184,
    "name": "Azumarill",
    "stamina": 200,
    "attack": 112,
    "defense": 152
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "stamina": 140,
    "attack": 167,
    "defense": 198
  },
  {
    "id": 186,
    "name": "Politoed",
    "stamina": 180,
    "attack": 174,
    "defense": 192
  },
  {
    "id": 187,
    "name": "Hoppip",
    "stamina": 70,
    "attack": 67,
    "defense": 101
  },
  {
    "id": 188,
    "name": "Skiploom",
    "stamina": 110,
    "attack": 91,
    "defense": 127
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "stamina": 150,
    "attack": 118,
    "defense": 197
  },
  {
    "id": 190,
    "name": "Aipom",
    "stamina": 110,
    "attack": 136,
    "defense": 112
  },
  {
    "id": 191,
    "name": "Sunkern",
    "stamina": 60,
    "attack": 55,
    "defense": 55
  },
  {
    "id": 192,
    "name": "Sunflora",
    "stamina": 150,
    "attack": 185,
    "defense": 148
  },
  {
    "id": 193,
    "name": "Yanma",
    "stamina": 130,
    "attack": 154,
    "defense": 94
  },
  {
    "id": 194,
    "name": "Wooper",
    "stamina": 110,
    "attack": 75,
    "defense": 75
  },
  {
    "id": 195,
    "name": "Quagsire",
    "stamina": 190,
    "attack": 152,
    "defense": 152
  },
  {
    "id": 196,
    "name": "Espeon",
    "stamina": 130,
    "attack": 261,
    "defense": 194
  },
  {
    "id": 197,
    "name": "Umbreon",
    "stamina": 190,
    "attack": 126,
    "defense": 250
  },
  {
    "id": 198,
    "name": "Murkrow",
    "stamina": 120,
    "attack": 175,
    "defense": 87
  },
  {
    "id": 199,
    "name": "Slowking",
    "stamina": 190,
    "attack": 177,
    "defense": 194
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "stamina": 120,
    "attack": 167,
    "defense": 167
  },
  {
    "id": 201,
    "name": "Unown",
    "stamina": 96,
    "attack": 136,
    "defense": 91
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "stamina": 380,
    "attack": 60,
    "defense": 106
  },
  {
    "id": 203,
    "name": "Girafarig",
    "stamina": 140,
    "attack": 182,
    "defense": 133
  },
  {
    "id": 204,
    "name": "Pineco",
    "stamina": 100,
    "attack": 108,
    "defense": 146
  },
  {
    "id": 205,
    "name": "Forretress",
    "stamina": 150,
    "attack": 161,
    "defense": 242
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "stamina": 200,
    "attack": 131,
    "defense": 131
  },
  {
    "id": 207,
    "name": "Gligar",
    "stamina": 130,
    "attack": 143,
    "defense": 204
  },
  {
    "id": 208,
    "name": "Steelix",
    "stamina": 150,
    "attack": 148,
    "defense": 333
  },
  {
    "id": 209,
    "name": "Snubbull",
    "stamina": 120,
    "attack": 137,
    "defense": 89
  },
  {
    "id": 210,
    "name": "Granbull",
    "stamina": 180,
    "attack": 212,
    "defense": 137
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "stamina": 130,
    "attack": 184,
    "defense": 148
  },
  {
    "id": 212,
    "name": "Scizor",
    "stamina": 140,
    "attack": 236,
    "defense": 191
  },
  {
    "id": 213,
    "name": "Shuckle",
    "stamina": 40,
    "attack": 17,
    "defense": 396
  },
  {
    "id": 214,
    "name": "Heracross",
    "stamina": 160,
    "attack": 234,
    "defense": 189
  },
  {
    "id": 215,
    "name": "Sneasel",
    "stamina": 110,
    "attack": 189,
    "defense": 157
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "stamina": 120,
    "attack": 142,
    "defense": 93
  },
  {
    "id": 217,
    "name": "Ursaring",
    "stamina": 180,
    "attack": 236,
    "defense": 144
  },
  {
    "id": 218,
    "name": "Slugma",
    "stamina": 80,
    "attack": 118,
    "defense": 71
  },
  {
    "id": 219,
    "name": "Magcargo",
    "stamina": 100,
    "attack": 139,
    "defense": 209
  },
  {
    "id": 220,
    "name": "Swinub",
    "stamina": 100,
    "attack": 90,
    "defense": 74
  },
  {
    "id": 221,
    "name": "Piloswine",
    "stamina": 200,
    "attack": 181,
    "defense": 147
  },
  {
    "id": 222,
    "name": "Corsola",
    "stamina": 110,
    "attack": 118,
    "defense": 156
  },
  {
    "id": 223,
    "name": "Remoraid",
    "stamina": 70,
    "attack": 127,
    "defense": 69
  },
  {
    "id": 224,
    "name": "Octillery",
    "stamina": 150,
    "attack": 197,
    "defense": 141
  },
  {
    "id": 225,
    "name": "Delibird",
    "stamina": 90,
    "attack": 128,
    "defense": 90
  },
  {
    "id": 226,
    "name": "Mantine",
    "stamina": 130,
    "attack": 148,
    "defense": 260
  },
  {
    "id": 227,
    "name": "Skarmory",
    "stamina": 130,
    "attack": 148,
    "defense": 260
  },
  {
    "id": 228,
    "name": "Houndour",
    "stamina": 90,
    "attack": 152,
    "defense": 93
  },
  {
    "id": 229,
    "name": "Houndoom",
    "stamina": 150,
    "attack": 224,
    "defense": 159
  },
  {
    "id": 230,
    "name": "Kingdra",
    "stamina": 150,
    "attack": 194,
    "defense": 194
  },
  {
    "id": 231,
    "name": "Phanpy",
    "stamina": 180,
    "attack": 107,
    "defense": 107
  },
  {
    "id": 232,
    "name": "Donphan",
    "stamina": 180,
    "attack": 214,
    "defense": 214
  },
  {
    "id": 233,
    "name": "Porygon2",
    "stamina": 170,
    "attack": 198,
    "defense": 183
  },
  {
    "id": 234,
    "name": "Stantler",
    "stamina": 146,
    "attack": 192,
    "defense": 132
  },
  {
    "id": 235,
    "name": "Smeargle",
    "stamina": 110,
    "attack": 40,
    "defense": 88
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "stamina": 70,
    "attack": 64,
    "defense": 64
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "stamina": 100,
    "attack": 173,
    "defense": 214
  },
  {
    "id": 238,
    "name": "Smoochum",
    "stamina": 90,
    "attack": 153,
    "defense": 116
  },
  {
    "id": 239,
    "name": "Elekid",
    "stamina": 90,
    "attack": 135,
    "defense": 110
  },
  {
    "id": 240,
    "name": "Magby",
    "stamina": 90,
    "attack": 151,
    "defense": 108
  },
  {
    "id": 241,
    "name": "Miltank",
    "stamina": 190,
    "attack": 157,
    "defense": 211
  },
  {
    "id": 242,
    "name": "Blissey",
    "stamina": 510,
    "attack": 129,
    "defense": 229
  },
  {
    "id": 243,
    "name": "Raikou",
    "stamina": 180,
    "attack": 241,
    "defense": 210
  },
  {
    "id": 244,
    "name": "Entei",
    "stamina": 230,
    "attack": 235,
    "defense": 176
  },
  {
    "id": 245,
    "name": "Suicune",
    "stamina": 200,
    "attack": 180,
    "defense": 235
  },
  {
    "id": 246,
    "name": "Larvitar",
    "stamina": 100,
    "attack": 115,
    "defense": 93
  },
  {
    "id": 247,
    "name": "Pupitar",
    "stamina": 140,
    "attack": 155,
    "defense": 133
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "stamina": 200,
    "attack": 251,
    "defense": 212
  },
  {
    "id": 249,
    "name": "Lugia",
    "stamina": 212,
    "attack": 193,
    "defense": 323
  },
  {
    "id": 250,
    "name": "Ho-oh",
    "stamina": 193,
    "attack": 239,
    "defense": 274
  },
  {
    "id": 251,
    "name": "Celebi",
    "stamina": 200,
    "attack": 210,
    "defense": 210
  },
  {
    "id": 252,
    "name": "Treecko",
    "stamina": 80,
    "attack": 124,
    "defense": 104
  },
  {
    "id": 253,
    "name": "Grovyle",
    "stamina": 100,
    "attack": 172,
    "defense": 130
  },
  {
    "id": 254,
    "name": "Sceptile",
    "stamina": 140,
    "attack": 223,
    "defense": 180
  },
  {
    "id": 255,
    "name": "Torchic",
    "stamina": 90,
    "attack": 130,
    "defense": 92
  },
  {
    "id": 256,
    "name": "Combusken",
    "stamina": 120,
    "attack": 163,
    "defense": 115
  },
  {
    "id": 257,
    "name": "Blaziken",
    "stamina": 160,
    "attack": 240,
    "defense": 141
  },
  {
    "id": 258,
    "name": "Mudkip",
    "stamina": 100,
    "attack": 126,
    "defense": 93
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "stamina": 140,
    "attack": 156,
    "defense": 133
  },
  {
    "id": 260,
    "name": "Swampert",
    "stamina": 200,
    "attack": 208,
    "defense": 175
  },
  {
    "id": 261,
    "name": "Poochyena",
    "stamina": 70,
    "attack": 96,
    "defense": 63
  },
  {
    "id": 262,
    "name": "Mightyena",
    "stamina": 140,
    "attack": 171,
    "defense": 137
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "stamina": 76,
    "attack": 58,
    "defense": 80
  },
  {
    "id": 264,
    "name": "Linoone",
    "stamina": 156,
    "attack": 142,
    "defense": 128
  },
  {
    "id": 265,
    "name": "Wurmple",
    "stamina": 90,
    "attack": 75,
    "defense": 61
  },
  {
    "id": 266,
    "name": "Silcoon",
    "stamina": 100,
    "attack": 60,
    "defense": 91
  },
  {
    "id": 267,
    "name": "Beautifly",
    "stamina": 120,
    "attack": 189,
    "defense": 98
  },
  {
    "id": 268,
    "name": "Cascoon",
    "stamina": 100,
    "attack": 60,
    "defense": 91
  },
  {
    "id": 269,
    "name": "Dustox",
    "stamina": 120,
    "attack": 98,
    "defense": 172
  },
  {
    "id": 270,
    "name": "Lotad",
    "stamina": 80,
    "attack": 71,
    "defense": 86
  },
  {
    "id": 271,
    "name": "Lombre",
    "stamina": 120,
    "attack": 112,
    "defense": 128
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "stamina": 160,
    "attack": 173,
    "defense": 191
  },
  {
    "id": 273,
    "name": "Seedot",
    "stamina": 80,
    "attack": 71,
    "defense": 86
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "stamina": 140,
    "attack": 134,
    "defense": 78
  },
  {
    "id": 275,
    "name": "Shiftry",
    "stamina": 180,
    "attack": 200,
    "defense": 121
  },
  {
    "id": 276,
    "name": "Taillow",
    "stamina": 80,
    "attack": 106,
    "defense": 61
  },
  {
    "id": 277,
    "name": "Swellow",
    "stamina": 120,
    "attack": 185,
    "defense": 130
  },
  {
    "id": 278,
    "name": "Wingull",
    "stamina": 80,
    "attack": 106,
    "defense": 61
  },
  {
    "id": 279,
    "name": "Pelipper",
    "stamina": 120,
    "attack": 175,
    "defense": 189
  },
  {
    "id": 280,
    "name": "Ralts",
    "stamina": 56,
    "attack": 79,
    "defense": 63
  },
  {
    "id": 281,
    "name": "Kirlia",
    "stamina": 76,
    "attack": 117,
    "defense": 100
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "stamina": 136,
    "attack": 237,
    "defense": 220
  },
  {
    "id": 283,
    "name": "Surskit",
    "stamina": 80,
    "attack": 93,
    "defense": 97
  },
  {
    "id": 284,
    "name": "Masquerain",
    "stamina": 140,
    "attack": 192,
    "defense": 161
  },
  {
    "id": 285,
    "name": "Shroomish",
    "stamina": 120,
    "attack": 74,
    "defense": 110
  },
  {
    "id": 286,
    "name": "Breloom",
    "stamina": 120,
    "attack": 241,
    "defense": 153
  },
  {
    "id": 287,
    "name": "Slakoth",
    "stamina": 120,
    "attack": 104,
    "defense": 104
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "stamina": 160,
    "attack": 159,
    "defense": 159
  },
  {
    "id": 289,
    "name": "Slaking",
    "stamina": 273,
    "attack": 290,
    "defense": 183
  },
  {
    "id": 290,
    "name": "Nincada",
    "stamina": 62,
    "attack": 80,
    "defense": 153
  },
  {
    "id": 291,
    "name": "Ninjask",
    "stamina": 122,
    "attack": 196,
    "defense": 114
  },
  {
    "id": 292,
    "name": "Shedinja",
    "stamina": 2,
    "attack": 153,
    "defense": 80
  },
  {
    "id": 293,
    "name": "Whismur",
    "stamina": 128,
    "attack": 92,
    "defense": 42
  },
  {
    "id": 294,
    "name": "Loudred",
    "stamina": 168,
    "attack": 134,
    "defense": 81
  },
  {
    "id": 295,
    "name": "Exploud",
    "stamina": 208,
    "attack": 179,
    "defense": 142
  },
  {
    "id": 296,
    "name": "Makuhita",
    "stamina": 144,
    "attack": 99,
    "defense": 54
  },
  {
    "id": 297,
    "name": "Hariyama",
    "stamina": 288,
    "attack": 209,
    "defense": 114
  },
  {
    "id": 298,
    "name": "Azurill",
    "stamina": 100,
    "attack": 36,
    "defense": 71
  },
  {
    "id": 299,
    "name": "Nosepass",
    "stamina": 60,
    "attack": 82,
    "defense": 236
  },
  {
    "id": 300,
    "name": "Skitty",
    "stamina": 100,
    "attack": 84,
    "defense": 84
  },
  {
    "id": 301,
    "name": "Delcatty",
    "stamina": 140,
    "attack": 132,
    "defense": 132
  },
  {
    "id": 302,
    "name": "Sableye",
    "stamina": 100,
    "attack": 141,
    "defense": 141
  },
  {
    "id": 303,
    "name": "Mawile",
    "stamina": 100,
    "attack": 155,
    "defense": 155
  },
  {
    "id": 304,
    "name": "Aron",
    "stamina": 100,
    "attack": 121,
    "defense": 168
  },
  {
    "id": 305,
    "name": "Lairon",
    "stamina": 120,
    "attack": 158,
    "defense": 240
  },
  {
    "id": 306,
    "name": "Aggron",
    "stamina": 140,
    "attack": 198,
    "defense": 314
  },
  {
    "id": 307,
    "name": "Meditite",
    "stamina": 60,
    "attack": 78,
    "defense": 107
  },
  {
    "id": 308,
    "name": "Medicham",
    "stamina": 120,
    "attack": 121,
    "defense": 152
  },
  {
    "id": 309,
    "name": "Electrike",
    "stamina": 80,
    "attack": 123,
    "defense": 78
  },
  {
    "id": 310,
    "name": "Manectric",
    "stamina": 140,
    "attack": 215,
    "defense": 127
  },
  {
    "id": 311,
    "name": "Plusle",
    "stamina": 120,
    "attack": 167,
    "defense": 147
  },
  {
    "id": 312,
    "name": "Minun",
    "stamina": 120,
    "attack": 147,
    "defense": 167
  },
  {
    "id": 313,
    "name": "Volbeat",
    "stamina": 130,
    "attack": 143,
    "defense": 171
  },
  {
    "id": 314,
    "name": "Illumise",
    "stamina": 130,
    "attack": 143,
    "defense": 171
  },
  {
    "id": 315,
    "name": "Roselia",
    "stamina": 100,
    "attack": 186,
    "defense": 148
  },
  {
    "id": 316,
    "name": "Gulpin",
    "stamina": 140,
    "attack": 80,
    "defense": 99
  },
  {
    "id": 317,
    "name": "Swalot",
    "stamina": 200,
    "attack": 140,
    "defense": 159
  },
  {
    "id": 318,
    "name": "Carvanha",
    "stamina": 90,
    "attack": 171,
    "defense": 39
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "stamina": 140,
    "attack": 243,
    "defense": 83
  },
  {
    "id": 320,
    "name": "Wailmer",
    "stamina": 260,
    "attack": 136,
    "defense": 68
  },
  {
    "id": 321,
    "name": "Wailord",
    "stamina": 340,
    "attack": 175,
    "defense": 87
  },
  {
    "id": 322,
    "name": "Numel",
    "stamina": 120,
    "attack": 119,
    "defense": 82
  },
  {
    "id": 323,
    "name": "Camerupt",
    "stamina": 140,
    "attack": 194,
    "defense": 139
  },
  {
    "id": 324,
    "name": "Torkoal",
    "stamina": 140,
    "attack": 151,
    "defense": 234
  },
  {
    "id": 325,
    "name": "Spoink",
    "stamina": 120,
    "attack": 125,
    "defense": 145
  },
  {
    "id": 326,
    "name": "Grumpig",
    "stamina": 160,
    "attack": 171,
    "defense": 211
  },
  {
    "id": 327,
    "name": "Spinda",
    "stamina": 120,
    "attack": 116,
    "defense": 116
  },
  {
    "id": 328,
    "name": "Trapinch",
    "stamina": 90,
    "attack": 162,
    "defense": 78
  },
  {
    "id": 329,
    "name": "Vibrava",
    "stamina": 100,
    "attack": 134,
    "defense": 99
  },
  {
    "id": 330,
    "name": "Flygon",
    "stamina": 160,
    "attack": 205,
    "defense": 168
  },
  {
    "id": 331,
    "name": "Cacnea",
    "stamina": 100,
    "attack": 156,
    "defense": 74
  },
  {
    "id": 332,
    "name": "Cacturne",
    "stamina": 140,
    "attack": 221,
    "defense": 115
  },
  {
    "id": 333,
    "name": "Swablu",
    "stamina": 90,
    "attack": 76,
    "defense": 139
  },
  {
    "id": 334,
    "name": "Altaria",
    "stamina": 150,
    "attack": 141,
    "defense": 208
  },
  {
    "id": 335,
    "name": "Zangoose",
    "stamina": 146,
    "attack": 222,
    "defense": 124
  },
  {
    "id": 336,
    "name": "Seviper",
    "stamina": 146,
    "attack": 196,
    "defense": 118
  },
  {
    "id": 337,
    "name": "Lunatone",
    "stamina": 180,
    "attack": 178,
    "defense": 163
  },
  {
    "id": 338,
    "name": "Solrock",
    "stamina": 180,
    "attack": 178,
    "defense": 163
  },
  {
    "id": 339,
    "name": "Barboach",
    "stamina": 100,
    "attack": 93,
    "defense": 83
  },
  {
    "id": 340,
    "name": "Whiscash",
    "stamina": 220,
    "attack": 151,
    "defense": 142
  },
  {
    "id": 341,
    "name": "Corphish",
    "stamina": 86,
    "attack": 141,
    "defense": 113
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "stamina": 126,
    "attack": 224,
    "defense": 156
  },
  {
    "id": 343,
    "name": "Baltoy",
    "stamina": 80,
    "attack": 77,
    "defense": 131
  },
  {
    "id": 344,
    "name": "Claydol",
    "stamina": 120,
    "attack": 140,
    "defense": 236
  },
  {
    "id": 345,
    "name": "Lileep",
    "stamina": 132,
    "attack": 105,
    "defense": 154
  },
  {
    "id": 346,
    "name": "Cradily",
    "stamina": 172,
    "attack": 152,
    "defense": 198
  },
  {
    "id": 347,
    "name": "Anorith",
    "stamina": 90,
    "attack": 176,
    "defense": 100
  },
  {
    "id": 348,
    "name": "Armaldo",
    "stamina": 150,
    "attack": 222,
    "defense": 183
  },
  {
    "id": 349,
    "name": "Feebas",
    "stamina": 40,
    "attack": 29,
    "defense": 102
  },
  {
    "id": 350,
    "name": "Milotic",
    "stamina": 190,
    "attack": 192,
    "defense": 242
  },
  {
    "id": 351,
    "name": "Castform",
    "stamina": 140,
    "attack": 139,
    "defense": 139
  },
  {
    "id": 352,
    "name": "Kecleon",
    "stamina": 120,
    "attack": 161,
    "defense": 212
  },
  {
    "id": 353,
    "name": "Shuppet",
    "stamina": 88,
    "attack": 138,
    "defense": 66
  },
  {
    "id": 354,
    "name": "Banette",
    "stamina": 128,
    "attack": 218,
    "defense": 127
  },
  {
    "id": 355,
    "name": "Duskull",
    "stamina": 40,
    "attack": 70,
    "defense": 162
  },
  {
    "id": 356,
    "name": "Dusclops",
    "stamina": 80,
    "attack": 124,
    "defense": 234
  },
  {
    "id": 357,
    "name": "Tropius",
    "stamina": 198,
    "attack": 136,
    "defense": 165
  },
  {
    "id": 358,
    "name": "Chimecho",
    "stamina": 150,
    "attack": 175,
    "defense": 174
  },
  {
    "id": 359,
    "name": "Absol",
    "stamina": 130,
    "attack": 246,
    "defense": 120
  },
  {
    "id": 360,
    "name": "Wynaut",
    "stamina": 190,
    "attack": 41,
    "defense": 86
  },
  {
    "id": 361,
    "name": "Snorunt",
    "stamina": 100,
    "attack": 95,
    "defense": 95
  },
  {
    "id": 362,
    "name": "Glalie",
    "stamina": 160,
    "attack": 162,
    "defense": 162
  },
  {
    "id": 363,
    "name": "Spheal",
    "stamina": 140,
    "attack": 95,
    "defense": 90
  },
  {
    "id": 364,
    "name": "Sealeo",
    "stamina": 180,
    "attack": 137,
    "defense": 132
  },
  {
    "id": 365,
    "name": "Walrein",
    "stamina": 220,
    "attack": 182,
    "defense": 176
  },
  {
    "id": 366,
    "name": "Clamperl",
    "stamina": 70,
    "attack": 133,
    "defense": 149
  },
  {
    "id": 367,
    "name": "Huntail",
    "stamina": 110,
    "attack": 197,
    "defense": 194
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "stamina": 110,
    "attack": 211,
    "defense": 194
  },
  {
    "id": 369,
    "name": "Relicanth",
    "stamina": 200,
    "attack": 162,
    "defense": 234
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "stamina": 86,
    "attack": 81,
    "defense": 134
  },
  {
    "id": 371,
    "name": "Bagon",
    "stamina": 90,
    "attack": 134,
    "defense": 107
  },
  {
    "id": 372,
    "name": "Shelgon",
    "stamina": 130,
    "attack": 172,
    "defense": 179
  },
  {
    "id": 373,
    "name": "Salamence",
    "stamina": 190,
    "attack": 277,
    "defense": 168
  },
  {
    "id": 374,
    "name": "Beldum",
    "stamina": 80,
    "attack": 96,
    "defense": 141
  },
  {
    "id": 375,
    "name": "Metang",
    "stamina": 120,
    "attack": 138,
    "defense": 185
  },
  {
    "id": 376,
    "name": "Metagross",
    "stamina": 160,
    "attack": 257,
    "defense": 247
  },
  {
    "id": 377,
    "name": "Regirock",
    "stamina": 160,
    "attack": 179,
    "defense": 356
  },
  {
    "id": 378,
    "name": "Regice",
    "stamina": 160,
    "attack": 179,
    "defense": 356
  },
  {
    "id": 379,
    "name": "Registeel",
    "stamina": 160,
    "attack": 143,
    "defense": 285
  },
  {
    "id": 380,
    "name": "Latias",
    "stamina": 160,
    "attack": 228,
    "defense": 268
  },
  {
    "id": 381,
    "name": "Latios",
    "stamina": 160,
    "attack": 268,
    "defense": 228
  },
  {
    "id": 382,
    "name": "Kyogre",
    "stamina": 182,
    "attack": 270,
    "defense": 251
  },
  {
    "id": 383,
    "name": "Groudon",
    "stamina": 182,
    "attack": 270,
    "defense": 251
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "stamina": 191,
    "attack": 284,
    "defense": 170
  },
  {
    "id": 385,
    "name": "Jirachi",
    "stamina": 200,
    "attack": 210,
    "defense": 210
  },
  {
    "id": 386,
    "name": "Deoxys",
    "stamina": 1,
    "attack": 1,
    "defense": 1
  }
];

var set_bounds = [0, 100, 200];
function boundKeyForValue(value) {
	var val_key;
	var i;
	var bound_key;
	var upperBound;
	for (i = 0; i < set_bounds.length; i++) {
		bound_key = set_bounds[i];
		upperBound = set_bounds[i + 1];
		if (!upperBound) {
			//We've reached the end
			return bound_key + '+';
		}
		if (value >= bound_key && value < upperBound) {
			return bound_key + '-' + upperBound;
		}
	}
	return val_key;
}
var boundKeys = set_bounds.map(boundKeyForValue);

var lookup_stats = {
	id_based : {},
	name_based : {},
	sta_based : {},
	atk_based : {},
	def_based : {},
};

[
	'sta_based',
	'atk_based',
	'def_based'
].forEach(function (name) {
	var dict = {
		all : {}
	};
	boundKeys.forEach(function (val_key) {
		dict[val_key] = [];
	});
	lookup_stats[name] = dict;
});

$.each(pokemon, function (i,pokeData) {
	// console.log(pokeData.id);
	lookup_stats.id_based[pokeData.id] = pokeData;
	lookup_stats.name_based[pokeData.name.toLowerCase()] = pokeData;

	lookup_stats.sta_based.all[pokeData.stamina] = lookup_stats.sta_based.all[pokeData.stamina] || [];
	lookup_stats.sta_based.all[pokeData.stamina].push(pokeData);
	lookup_stats.sta_based[boundKeyForValue(pokeData.stamina)].push(pokeData);

	lookup_stats.atk_based.all[pokeData.attack] = lookup_stats.atk_based.all[pokeData.attack] || [];
	lookup_stats.atk_based.all[pokeData.attack].push(pokeData);
	lookup_stats.atk_based[boundKeyForValue(pokeData.attack)].push(pokeData);

	lookup_stats.def_based.all[pokeData.defense] = lookup_stats.def_based.all[pokeData.defense] || [];
	lookup_stats.def_based.all[pokeData.defense].push(pokeData);
	lookup_stats.def_based[boundKeyForValue(pokeData.defense)].push(pokeData);
});

function pokemonByName(name) {
	console.log(lookup_stats);
	return lookup_stats.name_based[(name + '').toLowerCase()];
}

function pokemonById(id) {
	var pokeId = parseInt(id, 10);
	return lookup_stats.id_based[pokeId];
}

// LevelUpData
var levels = [
 {
  "level": 1,
  "dust": 200,
  "candy": 1,
  "cpScalar": 0.094
 },
 {
  "level": 1.5,
  "dust": 200,
  "candy": 1,
  "cpScalar": 0.1351374
 },
 {
  "level": 2,
  "dust": 200,
  "candy": 1,
  "cpScalar": 0.1663979
 },
 {
  "level": 2.5,
  "dust": 200,
  "candy": 1,
  "cpScalar": 0.1926509
 },
 {
  "level": 3,
  "dust": 400,
  "candy": 1,
  "cpScalar": 0.2157325
 },
 {
  "level": 3.5,
  "dust": 400,
  "candy": 1,
  "cpScalar": 0.2365727
 },
 {
  "level": 4,
  "dust": 400,
  "candy": 1,
  "cpScalar": 0.2557201
 },
 {
  "level": 4.5,
  "dust": 400,
  "candy": 1,
  "cpScalar": 0.2735304
 },
 {
  "level": 5,
  "dust": 600,
  "candy": 1,
  "cpScalar": 0.2902499
 },
 {
  "level": 5.5,
  "dust": 600,
  "candy": 1,
  "cpScalar": 0.3060574
 },
 {
  "level": 6,
  "dust": 600,
  "candy": 1,
  "cpScalar": 0.3210876
 },
 {
  "level": 6.5,
  "dust": 600,
  "candy": 1,
  "cpScalar": 0.335445
 },
 {
  "level": 7,
  "dust": 800,
  "candy": 1,
  "cpScalar": 0.3492127
 },
 {
  "level": 7.5,
  "dust": 800,
  "candy": 1,
  "cpScalar": 0.3624578
 },
 {
  "level": 8,
  "dust": 800,
  "candy": 1,
  "cpScalar": 0.3752356
 },
 {
  "level": 8.5,
  "dust": 800,
  "candy": 1,
  "cpScalar": 0.3875924
 },
 {
  "level": 9,
  "dust": 1000,
  "candy": 1,
  "cpScalar": 0.3995673
 },
 {
  "level": 9.5,
  "dust": 1000,
  "candy": 1,
  "cpScalar": 0.4111936
 },
 {
  "level": 10,
  "dust": 1000,
  "candy": 1,
  "cpScalar": 0.4225
 },
 {
  "level": 10.5,
  "dust": 1000,
  "candy": 1,
  "cpScalar": 0.4335117
 },
 {
  "level": 11,
  "dust": 1300,
  "candy": 2,
  "cpScalar": 0.4431076
 },
 {
  "level": 11.5,
  "dust": 1300,
  "candy": 2,
  "cpScalar": 0.45306
 },
 {
  "level": 12,
  "dust": 1300,
  "candy": 2,
  "cpScalar": 0.4627984
 },
 {
  "level": 12.5,
  "dust": 1300,
  "candy": 2,
  "cpScalar": 0.4723361
 },
 {
  "level": 13,
  "dust": 1600,
  "candy": 2,
  "cpScalar": 0.481685
 },
 {
  "level": 13.5,
  "dust": 1600,
  "candy": 2,
  "cpScalar": 0.4908558
 },
 {
  "level": 14,
  "dust": 1600,
  "candy": 2,
  "cpScalar": 0.4998584
 },
 {
  "level": 14.5,
  "dust": 1600,
  "candy": 2,
  "cpScalar": 0.5087018
 },
 {
  "level": 15,
  "dust": 1900,
  "candy": 2,
  "cpScalar": 0.517394
 },
 {
  "level": 15.5,
  "dust": 1900,
  "candy": 2,
  "cpScalar": 0.5259425
 },
 {
  "level": 16,
  "dust": 1900,
  "candy": 2,
  "cpScalar": 0.5343543
 },
 {
  "level": 16.5,
  "dust": 1900,
  "candy": 2,
  "cpScalar": 0.5426358
 },
 {
  "level": 17,
  "dust": 2200,
  "candy": 2,
  "cpScalar": 0.5507927
 },
 {
  "level": 17.5,
  "dust": 2200,
  "candy": 2,
  "cpScalar": 0.5588306
 },
 {
  "level": 18,
  "dust": 2200,
  "candy": 2,
  "cpScalar": 0.5667545
 },
 {
  "level": 18.5,
  "dust": 2200,
  "candy": 2,
  "cpScalar": 0.5745692
 },
 {
  "level": 19,
  "dust": 2500,
  "candy": 2,
  "cpScalar": 0.5822789
 },
 {
  "level": 19.5,
  "dust": 2500,
  "candy": 2,
  "cpScalar": 0.5898879
 },
 {
  "level": 20,
  "dust": 2500,
  "candy": 2,
  "cpScalar": 0.5974
 },
 {
  "level": 20.5,
  "dust": 2500,
  "candy": 2,
  "cpScalar": 0.6048188
 },
 {
  "level": 21,
  "dust": 3000,
  "candy": 3,
  "cpScalar": 0.6121573
 },
 {
  "level": 21.5,
  "dust": 3000,
  "candy": 3,
  "cpScalar": 0.6194041
 },
 {
  "level": 22,
  "dust": 3000,
  "candy": 3,
  "cpScalar": 0.6265671
 },
 {
  "level": 22.5,
  "dust": 3000,
  "candy": 3,
  "cpScalar": 0.6336492
 },
 {
  "level": 23,
  "dust": 3500,
  "candy": 3,
  "cpScalar": 0.640653
 },
 {
  "level": 23.5,
  "dust": 3500,
  "candy": 3,
  "cpScalar": 0.647581
 },
 {
  "level": 24,
  "dust": 3500,
  "candy": 3,
  "cpScalar": 0.6544356
 },
 {
  "level": 24.5,
  "dust": 3500,
  "candy": 3,
  "cpScalar": 0.6612193
 },
 {
  "level": 25,
  "dust": 4000,
  "candy": 3,
  "cpScalar": 0.667934
 },
 {
  "level": 25.5,
  "dust": 4000,
  "candy": 3,
  "cpScalar": 0.6745819
 },
 {
  "level": 26,
  "dust": 4000,
  "candy": 4,
  "cpScalar": 0.6811649
 },
 {
  "level": 26.5,
  "dust": 4000,
  "candy": 4,
  "cpScalar": 0.6876849
 },
 {
  "level": 27,
  "dust": 4500,
  "candy": 4,
  "cpScalar": 0.6941437
 },
 {
  "level": 27.5,
  "dust": 4500,
  "candy": 4,
  "cpScalar": 0.7005429
 },
 {
  "level": 28,
  "dust": 4500,
  "candy": 4,
  "cpScalar": 0.7068842
 },
 {
  "level": 28.5,
  "dust": 4500,
  "candy": 4,
  "cpScalar": 0.7131691
 },
 {
  "level": 29,
  "dust": 5000,
  "candy": 4,
  "cpScalar": 0.7193991
 },
 {
  "level": 29.5,
  "dust": 5000,
  "candy": 4,
  "cpScalar": 0.7255756
 },
 {
  "level": 30,
  "dust": 5000,
  "candy": 4,
  "cpScalar": 0.7317
 },
 {
  "level": 30.5,
  "dust": 5000,
  "candy": 4,
  "cpScalar": 0.734741
 },
 {
  "level": 31,
  "dust": 6000,
  "candy": 6,
  "cpScalar": 0.7377695
 },
 {
  "level": 31.5,
  "dust": 6000,
  "candy": 6,
  "cpScalar": 0.7407856
 },
 {
  "level": 32,
  "dust": 6000,
  "candy": 6,
  "cpScalar": 0.7437894
 },
 {
  "level": 32.5,
  "dust": 6000,
  "candy": 6,
  "cpScalar": 0.7467812
 },
 {
  "level": 33,
  "dust": 7000,
  "candy": 8,
  "cpScalar": 0.749761
 },
 {
  "level": 33.5,
  "dust": 7000,
  "candy": 8,
  "cpScalar": 0.7527291
 },
 {
  "level": 34,
  "dust": 7000,
  "candy": 8,
  "cpScalar": 0.7556855
 },
 {
  "level": 34.5,
  "dust": 7000,
  "candy": 8,
  "cpScalar": 0.7586304
 },
 {
  "level": 35,
  "dust": 8000,
  "candy": 10,
  "cpScalar": 0.7615638
 },
 {
  "level": 35.5,
  "dust": 8000,
  "candy": 10,
  "cpScalar": 0.7644861
 },
 {
  "level": 36,
  "dust": 8000,
  "candy": 10,
  "cpScalar": 0.7673972
 },
 {
  "level": 36.5,
  "dust": 8000,
  "candy": 10,
  "cpScalar": 0.7702973
 },
 {
  "level": 37,
  "dust": 9000,
  "candy": 12,
  "cpScalar": 0.7731865
 },
 {
  "level": 37.5,
  "dust": 9000,
  "candy": 12,
  "cpScalar": 0.776065
 },
 {
  "level": 38,
  "dust": 9000,
  "candy": 12,
  "cpScalar": 0.7789328
 },
 {
  "level": 38.5,
  "dust": 9000,
  "candy": 12,
  "cpScalar": 0.7817901
 },
 {
  "level": 39,
  "dust": 10000,
  "candy": 15,
  "cpScalar": 0.784637
 },
 {
  "level": 39.5,
  "dust": 10000,
  "candy": 15,
  "cpScalar": 0.7874736
 },
 {
  "level": 40,
  "dust": 10000,
  "candy": 15,
  "cpScalar": 0.7903
 },
 {
  "level": 40.5,
  "dust": 10000,
  "candy": 15,
  "cpScalar": 0.7931164
 }
];

var lookup_properties = {
	byLevel : {},
	byDust : {},
	byCandy : {}
};

$.each(levels, function (i,data) {
	lookup_properties.byLevel[data.level] = data;

	lookup_properties.byDust[data.dust] = lookup_properties.byDust[data.dust] || [];
	lookup_properties.byDust[data.dust].push(data);

	lookup_properties.byCandy[data.candy] = lookup_properties.byCandy[data.candy] || [];
	lookup_properties.byCandy[data.candy].push(data);
});

function allLevels () {
	return levels.splice();
}

function levelsByDust(dust) {
	dust = parseInt(dust, 10);
	return lookup_properties.byDust[dust].slice();
}

function levelsByCandy(candy) {
	candy = parseInt(candy, 10);
	return lookup_properties.byCandy[candy].slice();
}

// IV Cal
var letterGrades = [
	{ letter : 'A', min : 0.9, mid : 0.93, plus : 0.95 },
	{ letter : 'B', min : 0.8, mid : 0.83, plus : 0.87 },
	{ letter : 'C', min : 0.7, mid : 0.73, plus : 0.77 },
	{ letter : 'D', min : 0.6, mid : 0.62, plus : 0.67 },
	{ letter : 'F', min : 0 },
];

function grade(value) {
	var letter;
	var modifier;

	var i;
	var grade;
	for (i = 0; i < letterGrades.length; i++) {
		grade = letterGrades[i];
		if (value >= grade.min) {
			letter = grade.letter;
			if (value < grade.mid) {
				modifier = '-';
			} else if (value >= grade.plus) {
				modifier = '+';
			}
			break;
		}
	}

	var finalGrade = {
		letter: letter,
		preciseLetter : letter + (modifier || '')
	};

	return finalGrade;
}

function determineGrade(values) {
	if (values && !values.isArray()) {
		values = [values];
	}
	if (!values || !values.length) {
		return 'Unknown';
	}
	values.sort();
	var minGrade = grade(values[0]);
	var maxGrade = grade(values[values.length - 1]);
	var averageValue = values.reduce(function (memo, val) {return memo + val;}, 0) / values.length;
	var averageGrade = grade(averageValue);

	if (values.length === 1 || minGrade.preciseLetter === maxGrade.preciseLetter) {
		return {
			minGrade, maxGrade, averageGrade,
			explanation : `${minGrade.preciseLetter} (${Math.floor(averageValue * 1000) / 10}%)`
		};
	}

	if (averageGrade.letter === minGrade.letter && averageGrade.letter === maxGrade.letter) {
		return {
			minGrade, maxGrade, averageGrade,
			explanation : `Solid ${averageGrade.preciseLetter} (${Math.floor(averageValue * 1000) / 10}%)`
		};
	}

	return {
		minGrade, maxGrade, averageGrade,
		explanation : `Between ${maxGrade.preciseLetter} - ${minGrade.preciseLetter}`
	}
}


function testHP(hp, iv, levelData, pokemon) {
	return hp == parseInt(Math.floor((pokemon.stamina + iv) * levelData.cpScalar), 10);
}

function testCP(cp, atkIV, defIV, staIV, levelData, pokemon) {
	var attackFactor = pokemon.attack + atkIV;
	var defenseFactor = Math.pow(pokemon.defense + defIV, 0.5)
	var staminaFactor = Math.pow((pokemon.stamina + staIV), 0.5);
	var scalarFactor = Math.pow(levelData.cpScalar, 2);
	return cp == parseInt(attackFactor * defenseFactor * staminaFactor * scalarFactor / 10, 10);
}

function determinePerfection(ivs) {
	var perfection = (ivs.atkIV + ivs.defIV + ivs.staIV) / 45
	return Math.floor(perfection * 100) / 100;
}

/** list @param
 * @pokemonQuery  pokemon's id || name
 * @cp amount of cp that current of pokemon
 * @hp amount of hp that current of pokemon
 * @dustCost StarDust amount that cost for pokemon upgrade
 * @Upgraded_bool true if you upgraded, false otherwise
 */
function evaluate (pokemonQuery, cp, hp, dustCost, Upgraded_bool) {
	var pokemon = pokemonByName(pokemonQuery) || pokemonById(pokemonQuery);
	if (!pokemon) {
		return {error : `Could not find pokemon: ${pokemonQuery}`};
	}
	var potentialIVs = determinePossibleIVs(pokemon, cp, hp, dustCost, Upgraded_bool);

	$.each(potentialIVs, function (possibility) {
		possibility.perfection = determinePerfection(possibility);
	});

	potentialIVs.sort(function (a, b) {
		if (a.perfection == b.perfection) {
			return 0;
		}
		return a.perfection > b.perfection ? 1 : -1;
	})

	var pokeSnapshot = {
		grade : grade(potentialIVs.map(determinePerfection)),
		ivs : potentialIVs
	};

	return pokeSnapshot;
}

function determinePossibleIVs (pokemon, cp, hp, dust, Upgraded_bool) {
  var maxSta = 15;
  var maxDef = 15;
  var maxAtk = 15;
  var perfectIV = maxSta + maxDef + maxAtk;
	var potentialLevels = levelsByDust(dust);
	potentialLevels.sort(function (a, b) {
		return a.level > b.level ? 1 : -1;//no dupes
	});
	if (!Upgraded_bool) {
		potentialLevels = potentialLevels.filter(function (data) {
			return data.level % 2 === 0;
		});
	}

	var staIV, atkIV, defIV;
	var potentialHPIVs = [];

	var levelIndex;
	var levelData;
	for (levelIndex = 0; levelIndex < potentialLevels.length; levelIndex++) {
		levelData = potentialLevels[levelIndex];

		for (staIV = 0; staIV <= 15; staIV++) {
			if (testHP(hp, staIV, levelData, pokemon)) {
				potentialHPIVs.push({
					levelData,
					iv : staIV
				});
			}
		}

	}

	var hpIVIndex;
	var potentialIVs = [];
	for (hpIVIndex = 0; hpIVIndex < potentialHPIVs.length; hpIVIndex++) {
		staIV = potentialHPIVs[hpIVIndex].iv;
		levelData = potentialHPIVs[hpIVIndex].levelData;
		for (atkIV = 0; atkIV <= 15; atkIV++) {
			for (defIV = 0; defIV <= 15; defIV++) {
				if (testCP(cp, atkIV, defIV, staIV, levelData, pokemon)) {
					potentialIVs.push({
						atkIV, defIV, staIV,
						level : levelData.level,
            perfection: Math.round((10*((atkIV + defIV + staIV) / perfectIV) * 100))/10, // round to nearest 10th
            poke: pokemon
					})
				}
			}
		}
	}

	return potentialIVs;
}

/** list parameters
 * @pokemonQuery  pokemon's id || name
 * @cp amount of cp that current of pokemon
 * @hp amount of hp that current of pokemon
 * @dustCost StarDust amount that cost for pokemon upgrade
 * @Upgraded_bool true if you upgraded, false otherwise
 */
function possibleIVs (pokemonQuery, cp, hp, dust, Upgraded_bool) {
	var pokemon = pokemonByName(pokemonQuery) || pokemonById(pokemonQuery);
	if (!pokemon) {
		return {error:`Could not find pokemon: ${pokemonQuery}`};
	}
	var ivs = determinePossibleIVs(pokemon, cp, hp, dustCost, Upgraded_bool);
	if (!ivs.length) {
		return {error: `Could not find any IVs matching given information`};
	}
	return {ivs};
}
