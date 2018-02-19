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
            Console.WriteLine("Pulling data from https://rankedboost.com/pokemon-go/");
            getPokemons();
            Console.ReadLine();

        }

        static void getPokemon2(int pokemon_id, List<Pokemon> pokemons){
            bool running = true;
            while(running){
                Pokemon pokemon = new Pokemon();

                pokemon.ID = pokemon_id - 1;
                pokemon.PID = pokemon_id.ToString(fmt);

                Console.Write("PID: #" + pokemon_id);

                var html = "https://db.pokemongohub.net/pokemon/" + pokemon_id;
                HtmlWeb web = new HtmlWeb();
                var htmlDoc = web.Load(html);
                Console.Write(" ->");
                var node = htmlDoc.DocumentNode.FirstChild;

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//h1")[0];
                    pokemon.name = node.InnerText;
                }catch{
                    cw("name error");
                }


                pokemons.Add(pokemon);
                cw("done");
            }
            Console.WriteLine("\n\nfinished data collection.");
        }

        static void cw(string text) { Console.Write(text); }

        static void getPokemon(string pokemon_name, List<Pokemon> pokemons)
        {
            bool running = true;
            while (running)
            {
                if (pokemon_name == "nidoranf") { pokemon_name = "nidoran-2"; }

                if (pokemon_name == "nidoranm") { pokemon_name = "nidoran"; }

                // create new instance of Pokemon
                Pokemon pokemon = new Pokemon();
                Console.Write("\n\nGrabbing Pokemon: " + @"https://rankedboost.com/pokemon-go/" + pokemon_name + "/");
                // load pokemon
                var html = @"https://rankedboost.com/pokemon-go/" + pokemon_name + "/";
                HtmlWeb web = new HtmlWeb();
                Console.Write(" .");
                var htmlDoc = web.Load(html);
                //Console.Write("Grabbed...");
                //Console.Write("Parsing data...");
                Console.Write("..");
                var node = htmlDoc.DocumentNode.FirstChild;
                string temp = "";
                // get Pokémon ID and Generatio
                try
                {
                    node = htmlDoc.DocumentNode.SelectSingleNode("//div[@class='PokemonIDDiv']");
                    string[] gen_id = node.InnerText.Split('-');
                    temp = gen_id[0].Replace("Gen ", ""); // remove gen
                    temp = temp.Replace(" ", ""); // remove white space
                    pokemon.generation = temp; // set generation
                    temp = gen_id[1].Replace(" #", "");
                    int temp2 = int.Parse(temp); // convert to int
                    pokemon.ID = temp2; // set id 
                    temp = temp2.ToString(fmt); // format properly
                    pokemon.PID = temp; // set pid
                }
                catch
                {
                    Console.Write("Could not find generation / pokedex ID..");
                }
                // get Pokemon name
                try
                {
                    node = htmlDoc.DocumentNode.SelectSingleNode("//h2[@class='PokemonNameDivTitle']");
                    pokemon.name = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not find Pokemon name..");
                }
                // get pokemon's pogo image url
                try
                {
                    node = htmlDoc.DocumentNode.SelectSingleNode("//img[@class='MainPokemonImage']");
                    string[] parts_url = node.OuterHtml.Split('"');
                    pokemon.imageURL = parts_url[3];
                }
                catch
                {
                    Console.Write("Issue finding image. Attempting unreleased image grab... ");
                    try
                    {
                        node = htmlDoc.DocumentNode.SelectSingleNode("//img[@class='MainPokemonImageUnrealeased']");
                        string[] parts_url = node.OuterHtml.Split('"');
                        pokemon.imageURL = parts_url[3];
                        Console.Write("success..");
                    }
                    catch
                    {
                        Console.Write("fail..");
                    }
                }

                // get pokemon's weight
                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[0];
                    pokemon.weight = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get pokemon weight..");
                }
                // get pokemon types
                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[1];
                    string[] parts_type = node.InnerHtml.Split('"');
                    temp = parts_type[3].Replace("sm_type_img ", "");
                    pokemon.type1 = temp.ToUpper();
                    temp = parts_type[7].Replace("sm_type_img ", "");
                    pokemon.type2 = temp.ToUpper();
                }
                catch
                {
                    Console.Write("Error finding type 2. Presume no type 2..");
                }

                // get pokemon height
                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[2];
                    pokemon.height = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get pokemon height..");
                }

                // get pokemon max cp
                try
                {
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='one_col']")[0];
                    pokemon.maxCP = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get max cp..");
                }

                try
                {
                    // get pokemon attack
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='one_col']")[2];
                    pokemon.attack = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get atk..");
                }
                try
                {
                    // get pokemon defense
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='one_col']")[4];
                    pokemon.defense = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get def..");
                }
                try
                {
                    // get pokemon stanima
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='one_col']")[6];
                    pokemon.stamina = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get sta..");
                }
                try
                {
                    // get pokemon male percentile
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='GenderMaleTizzy']")[0];
                    pokemon.malePercent = node.InnerText.Replace(" /", "").Replace("Male ", "");
                }
                catch
                {
                    Console.Write("Could not get male perc..");
                }
                try
                {
                    // get pokemon female percentile
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='GenderFemaleTizzy']")[0];
                    pokemon.femalePercent = node.InnerText.Replace("Female ", "");
                }
                catch
                {
                    Console.Write("Could not get female perc..");
                }
                try
                {
                    // get flee rate
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[3];
                    pokemon.fleeRate = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get flee rate..");
                }
                try
                {
                    // get capture rate
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[4];
                    pokemon.captureRate = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get capture rate..");
                }
                try
                {
                    // get rarity
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[5];
                    pokemon.rarity = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get rarity..");
                }
                try
                {
                    // get buddy candy distance
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[6];
                    pokemon.buddyCandy = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get buddy distance..");
                }
                try
                {
                    // get egg hatch
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[7];
                    pokemon.eggHatch = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get egg hatch..");
                }
                try
                {
                    // get buddy size
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokemonWeightKG']")[8];
                    pokemon.buddySize = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get buddy size..");
                }
                try
                {
                    // get pokedex entry
                    node = htmlDoc.DocumentNode.SelectNodes("//td[@class='PokedexEntryText']")[0];
                    pokemon.pokedexEntry = node.InnerText;
                }
                catch
                {
                    Console.Write("Could not get pokedex entry..");
                }
                // get evolutions

                // get evolution description

                Console.Write("done.");
                pokemons.Add(pokemon);
                //Console.Write("..saved");
                //Console.Write("..retrieving next");
                node = htmlDoc.DocumentNode.SelectNodes("//div[@class='Next']")[0];
                string[] nxt_pkmn = node.ParentNode.OuterHtml.Split('"');
                string[] nxtpkmn = nxt_pkmn[1].Split('/');

                if (pokemon_name == "bayleef")
                {
                    pokemon_name = "meganium";
                }
                else
                {
                    pokemon_name = nxtpkmn[2];
                }
                if (pokemon_name == "turtwig")
                {
                    running = false;
                }


            }
            Console.WriteLine("\n\nFinished collecting data.");
            Console.ReadLine();
        }
        static void getPokemons()
        {
            List<Pokemon> pokemons = new List<Pokemon>();

            getPokemon("celebi", pokemons);

            foreach (Pokemon mon in pokemons)
            {
                PropertyInfo[] properties = mon.GetType().GetProperties();
                foreach (PropertyInfo property in properties)
                {
                    Console.WriteLine("{0} = {1}", property.Name, property.GetValue(mon, null));
                }
            }

            /*var html = @"https://rankedboost.com/pokemon-go/bulbasaur/";

            HtmlWeb web = new HtmlWeb();

            var htmlDoc = web.Load(html);

            var node = htmlDoc.DocumentNode.SelectSingleNode("//td[@class='PokemonWeightKG']");

            Console.WriteLine("Node Name: " + node.InnerText);*/
        }
    }

    class Pokemon
    {
        public int ID { get; set; }
        public string PID { get; set; }
        public string name { get; set; }
        public string generation { get; set; }
        public string imageURL { get; set; }
        public string weight { get; set; }
        public string type1 { get; set; }
        public string type2 { get; set; }
        public string height { get; set; }
        public string maxCP { get; set; }
        public string attack { get; set; }
        public string defense { get; set; }
        public string stamina { get; set; }
        public string malePercent { get; set; }
        public string femalePercent { get; set; }
        public string fleeRate { get; set; }
        public string captureRate { get; set; }
        public string rarity { get; set; }
        public string buddyCandy { get; set; }
        public string eggHatch { get; set; }
        public string buddySize { get; set; }
        public string pokedexEntry { get; set; }
        public string evolutions { get; set; }
        public string evolutionDesc { get; set; }

    }

}
