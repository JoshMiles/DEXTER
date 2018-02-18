using System;
using Microsoft.VisualBasic.FileIO;

namespace POKEMON_PARSER
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Press enter to begin!");
            Console.ReadKey();
            using (TextFieldParser parser = new TextFieldParser("convertcsv.csv"))
            {
                parser.TextFieldType = FieldType.Delimited;
                parser.SetDelimiters(",");
                int i = 0;
                while (!parser.EndOfData)
                {
                    if (i != 0)
                    {
                        string[] fields = parser.ReadFields();
                        Console.WriteLine(fields[1]);
                        foreach (string field in fields)
                        {
                        }
                    }
                    i++;
                }
            }
            Console.WriteLine("DONE!");
            Console.ReadKey();

        }
    }


}
