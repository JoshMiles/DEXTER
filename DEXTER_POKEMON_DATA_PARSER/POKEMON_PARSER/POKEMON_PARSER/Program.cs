﻿using System;
using System.Collections.Generic;
using System.Xml;
using HtmlAgilityPack;
using System.Reflection;
using System.IO;

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
            Console.WriteLine("Pulling data from https://db.pokemongohub.net/pokemon/");
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
                    pokemon.name = " ";
                }


                // find pokemon's pokedex description

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//div[@class='pokemon-description']")[0];
                    string[] lines = node.InnerHtml.Split('\n');
                    for (int i = 0; i < lines.Length; i++)
                    {
                        if (i <= 14)
                        {
                            pokemon.description += lines[i] + " ";
                        }
                    }
                    pokemon.description = pokemon.description.Replace(".", ".<br>").Replace("It evolves for", "It takes ").Replace("Candy.", " candy to evolve!").Replace("Pokemon","<h2>Pokemon").Replace("CP.","CP.<h2>");
                    /*pokemon.description = node.InnerHtml.Replace("<a href=\"#movesets\">Moves</a>","");
                    pokemon.description = pokemon.description.Replace("<a href=\"#counters\">Counters</a>", "");
                    pokemon.description = pokemon.description.Replace("<a href=\"#typechart\">Type chart</a>", "");
                    pokemon.description = pokemon.description.Replace("<a href=\"#minmaxcp\">Max CP / Lvl</a>", "");
                    pokemon.description = pokemon.description.Replace("<a href=\"#comments\">Comments</a>", "");
                    pokemon.description = pokemon.description.Replace("<ul>", "");
                    pokemon.description = pokemon.description.Replace("<li>", "");
                    pokemon.description = pokemon.description.Replace("</li>", "");
                    pokemon.description = pokemon.description.Replace("</ul>", "");
                    pokemon.description = pokemon.description.Replace("\n\n", "");*/
                }catch{
                    cw("description error ..");
                    pokemon.description = " ";
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
                    pokemon.type2 = " ";
                }

                // find pokemon's max cp

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//tr[@class='max-cp']")[0];
                    pokemon.maxCP = node.InnerHtml.Split('\n')[3];
                                                              
                }catch{
                    cw("max cp error ..");
                    pokemon.maxCP = " ";
                }

                // find pokemon's normal image url
                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//img[@class='normal']")[0];
                    pokemon.imageURL = node.OuterHtml.Replace("<img class=\"normal\" src=\"", "https://db.pokemongohub.net");
                    string[] img_splt = pokemon.imageURL.Split('"');
                    pokemon.imageURL = img_splt[0];
                }catch{
                    cw("norm image error ..");
                    pokemon.imageURL = " ";
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
                    pokemon.shinyImageURL = " ";
                }


                // find pokemon's attk value

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//tr[@class='stat atk']")[0];
                    string[] splt = node.InnerText.Split('\n');
                    pokemon.attack = splt[3];
                }catch{
                    cw("attk error ..");
                    pokemon.attack = " ";
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
                    pokemon.defense = " ";
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
                    pokemon.stamina = " ";
                }

                // find rarity

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//th[text()='Rarity']")[0];
                    string[] splt = node.ParentNode.InnerText.Split('\n');
                    pokemon.rarity = splt[3];
                                                                  
                }catch{
                    cw("rarity error ..");
                    pokemon.rarity = " ";
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
                    pokemon.buddyDistance = " ";
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
                    pokemon.candyEvolve = " ";
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
                    pokemon.captureRate = " ";
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
                    pokemon.fleeRate = " ";
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
                    pokemon.weight = " ";
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
                    pokemon.height = " ";
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
                    pokemon.generation = " ";
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
                    pokemon.legendary = " ";
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
                    pokemon.weatherBoost = " ";
                }

                // find pokedex entry

                try{
                    node = htmlDoc.DocumentNode.SelectNodes("//h2[text()=' More information']")[0];
                    pokemon.pokedexEntry = node.ParentNode.InnerText.Split('\n')[4].Replace('’','\'');
                }catch{
                    cw("pokedex entry error ..");
                    pokemon.pokedexEntry = " ";
                }
                pokemons.Add(pokemon);

                cw("done\n");
                start_pokemon_id++;
                if (start_pokemon_id == end_pokemon_id + 1)
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

            string csv_file = "";
            Pokemon pmon = new Pokemon();
            PropertyInfo[] properties = pmon.GetType().GetProperties();
           /* foreach (PropertyInfo property in properties)
            {
                csv_file += property.Name + ",";
                //Console.WriteLine("{0} = {1}", property.Name, property.GetValue(mon, null));
            }
            csv_file += '\n';*/

           foreach (Pokemon mon in pokemons)
            {
                csv_file += "Pokemon(number:\"" + mon.PID + "\", name:\"" + mon.name + "\"),\n";
                /*PropertyInfo[] properties2 = mon.GetType().GetProperties();
                foreach (PropertyInfo property in properties2)
                {
                    try
                    {
                        string line = property.GetValue(mon, null).ToString();
                        string end = ",";
                        if(property.Name == "weatherBoost"){
                            end = "";
                        }
                        csv_file += "\"" + line.Replace("\n", "").Replace("\"", "\"\"").Replace('é','e').Replace('`','\'') + "\"" + end;
                        //Console.WriteLine("{0} = {1}", property.Name, property.GetValue(mon, null));
                    }catch{
                        Console.Write("[!]");
                    }
                }
                csv_file += "\n";*/
            }
            File.WriteAllText("pokemon.txt", csv_file);
            Console.WriteLine("Outputted file.");
            Console.ReadKey(false);
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
