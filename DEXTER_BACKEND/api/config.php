<?php
$servername = "localhost:3306"; // MySQL server location
$username = "pogo"; // login username
$password = "Minimini99!!"; // password
$dbname = "thejoshmiles_pogo"; // database name
$dbtable = "new_pokemon"; // table with data in

// more funcs

function pretty_json($json, $ret= "\n", $ind=" ") {

    $beauty_json = '';
    $quote_state = FALSE;
    $level = 0;

    $json_length = strlen($json);

    for ($i = 0; $i < $json_length; $i++)
    {

        $pre = '';
        $suf = '';

        switch ($json[$i])
        {
            case '"':
                $quote_state = !$quote_state;
                break;

            case '[':
                $level++;
                break;

            case ']':
                $level--;
                $pre = $ret;
                $pre .= str_repeat($ind, $level);
                break;

            case '{':

                if ($i - 1 >= 0 && $json[$i - 1] != ',')
                {
                    $pre = $ret;
                    $pre .= str_repeat($ind, $level);
                }

                $level++;
                $suf = $ret;
                $suf .= str_repeat($ind, $level);
                break;

            case ':':
                $suf = ' ';
                break;

            case ',':

                if (!$quote_state)
                {
                    $suf = $ret;
                    $suf .= str_repeat($ind, $level);
                }
                break;

            case '}':
                $level--;

            case ']':
                $pre = $ret;
                $pre .= str_repeat($ind, $level);
                break;

        }

        $beauty_json .= $pre.$json[$i].$suf;

    }

    return $beauty_json;

}

php?>
