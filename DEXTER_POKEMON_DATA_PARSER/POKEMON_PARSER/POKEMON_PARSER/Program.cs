using System;
using System.Collections.Generic;
using System.Xml;
using HtmlAgilityPack;
using System.Reflection;

namespace POKEMON_PARSER
{
    class MainClass
    {
        static string fmt = "000.##";
        public static void Main(string[] args)
        {
            Console.WriteLine("Press enter to begin!");
            Console.ReadKey();
            Console.Clear();
            Console.WriteLine("Pulling data from https://rankedboost.com/pokemon-go/");
            Console.WriteLine("=======");
            getPokemons();
            Console.ReadLine();

        }

        static void getPokemon(int start_pokemon_id, int end_pokemon_id, List<Pokemon> pokemons){
            bool running = true;
            while(running){
                Pokemon pokemon = new Pokemon();

                pokemon.ID = start_pokemon_id - 1;
                pokemon.PID = start_pokemon_id.ToString(fmt);

                Console.Write("PID: #" + start_pokemon_id);

                var html = "https://db.pokemongohub.net/pokemon/" + start_pokemon_id;
                HtmlWeb web = new HtmlWeb();
                var htmlDoc = web.Load(html);
                Console.Write(" ->");
                var node = htmlDoc.DocumentNode.FirstChild;

                // find pokemon's name

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//h1")[0];
                    pokemon.name = node.InnerText;
                    cw(pokemon.name + " ..");
                }catch{
                    cw("name error ..");
                }


                // find pokemon's pokedex description

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//div[@class='pokemon-description']")[0];
                    pokemon.description = node.InnerHtml.Replace("<a href=\"#movesets\">Moves</a>","");
                    pokemon.description = pokemon.description.Replace("<a href=\"#counters\">Counters</a>", "");
                    pokemon.description = pokemon.description.Replace("<a href=\"#typechart\">Type chart</a>", "");
                    pokemon.description = pokemon.description.Replace("<a href=\"#minmaxcp\">Max CP / Lvl</a>", "");
                    pokemon.description = pokemon.description.Replace("<a href=\"#comments\">Comments</a>", "");
                    pokemon.description = pokemon.description.Replace("<ul>", "");
                    pokemon.description = pokemon.description.Replace("<li>", "");
                    pokemon.description = pokemon.description.Replace("</li>", "");
                    pokemon.description = pokemon.description.Replace("</ul>", "");
                    pokemon.description = pokemon.description.Replace("\n\n", "");
                }catch{
                    cw("description error ..");
                }

                // find pokemon's typing

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//div[@class='pokemon-typing']")[0];
                    string[] typing_splt = node.InnerHtml.Split('"');
                    pokemon.type1 = typing_splt[1].Replace("/type/", "").ToUpper();
                    pokemon.type2 = typing_splt[5].Replace("/type/", "").ToUpper();                                       
                }catch{
                    cw("only one type ..");
                }

                // find pokemon's max cp

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//tr[@class='max-cp']")[0];
                    pokemon.maxCP = node.InnerHtml.Split('\n')[3];
                                                              
                }catch{
                    cw("max cp error ..");
                }

                // find pokemon's normal image url
                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//img[@class='normal']")[0];
                    pokemon.imageURL = node.OuterHtml.Replace("<img class=\"normal\" src=\"", "https://db.pokemongohub.net");
                    string[] img_splt = pokemon.imageURL.Split('"');
                    pokemon.imageURL = img_splt[0];
                }catch{
                    cw("norm image error ..");   
                }

                // find pokemon's shiny image url
                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//img[@class='shiny']")[0];
                    pokemon.shinyImageURL = node.OuterHtml.Replace("<img class=\"shiny\" data-src=\"", "https://db.pokemongohub.net");
                    string[] img_splt = pokemon.shinyImageURL.Split('"');
                    pokemon.shinyImageURL = img_splt[0];
                }
                catch
                {
                    cw("shiny image error ..");
                }


                // find pokemon's attk value

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//tr[@class='stat atk']")[0];
                    string[] splt = node.InnerText.Split('\n');
                    pokemon.attack = splt[3];
                }catch{
                    cw("attk error ..");
                }

                // find pokemon's def value

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//tr[@class='stat def']")[0];
                    string[] splt = node.InnerText.Split('\n');
                    pokemon.defense = splt[3];
                }
                catch
                {
                    cw("def error ..");
                }

                // find pokemon's sta value

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//tr[@class='stat sta']")[0];
                    string[] splt = node.InnerText.Split('\n');
                    pokemon.stamina = splt[3];
                }
                catch
                {
                    cw("sta error ..");
                }

                // find rarity

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Rarity']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.rarity = splt[3];
                                                                  
                }catch{
                    cw("rarity error ..");
                }
                // find buddy distance

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Buddy Distance']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.buddyDistance = splt[4];

                }
                catch
                {
                    cw("buddy distance error ..");
                }
                // find candy to evolve

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Candy to evolve']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.candyEvolve = splt[3];

                }
                catch
                {
                    cw("evolve candy error ..");
                }
                // find rarity

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Capture Rate']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.captureRate = splt[3];

                }
                catch
                {
                    cw("capture rate error ..");
                }
                // find flee rate

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Flee Rate']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.fleeRate = splt[3];

                }
                catch
                {
                    cw("flee rate error ..");
                }
                // find weight

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Weight']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.weight = splt[3];

                }
                catch
                {
                    cw("weight error ..");
                }
                // find height

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Height']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.height = splt[3];

                }
                catch
                {
                    cw("height error ..");
                }
                // find generation

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Generation']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.generation = splt[3];

                }
                catch
                {
                    cw("generation error ..");
                }
                // find legendary

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Legendary']")[0];
                    string[] splt = node.ParentNode.InnerHtml.Split('\n');
                    pokemon.legendary = splt[3];

                }
                catch
                {
                    cw("legendary error ..");
                }
                // find weather boosts

                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Weather boost']")[0];
                    string[] splt = node.ParentNode.InnerHtml.Split('\n');
                    pokemon.weatherBoost = splt[7] + ", " + splt[11];

                }
                catch
                {
                    cw("weather boost error ..");
                }

                // find pokedex entry

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//h2[text()=' More information']")[0];
                    pokemon.pokedexEntry = node.ParentNode.InnerText.Split('\n')[4];
                }catch{
                    cw("pokedex entry error ..");
                }
                pokemons.Add(pokemon);

                cw("done\n");
                start_pokemon_id++;
                if (start_pokemon_id == end_pokemon_id + 1;)
                {
                    running = false;
                }
            }
            Console.WriteLine("\n\nfinished data collection.");
        }

        static void cw(string text) { Console.Write(text); }

  
        static void getPokemons()
        {
            List<Pokemon> pokemons = new List<Pokemon>();

            getPokemon(1, 386, pokemons);

           /* foreach (Pokemon mon in pokemons)
            {
                PropertyInfo[] properties = mon.GetType().GetProperties();
                foreach (PropertyInfo property in properties)
                {
                    Console.WriteLine("{0} = {1}", property.Name, property.GetValue(mon, null));
                }
            }
*/
        }
    }

    class Pokemon
    {
        public int ID { get; set; }
        public string PID { get; set; }
        public string description { get; set; }
        public string name { get; set; }
        public string generation { get; set; }
        public string imageURL { get; set; }
        public string shinyImageURL { get; set; }
        public string weight { get; set; }
        public string type1 { get; set; }
        public string type2 { get; set; }
        public string height { get; set; }
        public string maxCP { get; set; }
        public string attack { get; set; }
        public string defense { get; set; }
        public string stamina { get; set; }
        public string fleeRate { get; set; }
        public string captureRate { get; set; }
        public string rarity { get; set; }
        public string buddyDistance { get; set; }
        public string pokedexEntry { get; set; }
        public string candyEvolve { get; set; }
        public string legendary { get; set; }
        public string weatherBoost { get; set; }

    }

}
