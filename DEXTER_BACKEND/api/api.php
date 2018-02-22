<?php
<<<<<<< HEAD
=======
header('Content-Type: text/plain');
>>>>>>> 172af63... Backend update.
include('config.php'); // include config file

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$pn        = $_GET['o'];
$myaqldata = "";
$rows      = array();

<<<<<<< HEAD
if (!isset($pn)) {
=======
if ($pn != null) {
>>>>>>> 172af63... Backend update.
    switch ($pn) {
        case "pn":
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
            $cnt     = 0;
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $rows[$cnt]['PID']  = $r['PID'];
                $rows[$cnt]['NAME'] = $r['name'];
                $cnt++;
            }
<<<<<<< HEAD
            echo (json_encode($rows));
=======
>>>>>>> 172af63... Backend update.
            break;
        case "total":
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
            $count   = 0;
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $count++;
            }
            $rows["Total"] = $count;
<<<<<<< HEAD
            echo (json_encode($rows));
=======
>>>>>>> 172af63... Backend update.
            break;
        case "pid":
            $pid     = $_GET['pid'];
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable . " WHERE PID='" . $pid . "'");
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $rows[] = $r;
            }
<<<<<<< HEAD
            echo (json_encode($rows));
=======
>>>>>>> 172af63... Backend update.
            break;
        case "ivl":
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
            $cnt     = 0;
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $rows[$cnt]['id']      = ($r['ID'] + 1);
                $rows[$cnt]['name']    = $r['name'];
                $rows[$cnt]['stamina'] = intval($r['stamina']);
                $rows[$cnt]['attack']  = intval($r['attack']);
                $rows[$cnt]['defense'] = intval($r['defense']);
                $cnt++;
            }
<<<<<<< HEAD
            echo (json_encode($rows));
=======
>>>>>>> 172af63... Backend update.
            break;
        case "iv":
        $doc = new DOMDocument;
        $doc->load("http://api.thepokedex.me/ivcal?name=".$_GET['name']."&cp=".$_GET['cp']."&hp=".$_GET['hp']."&dust=".$_GET['dust']."&powerup=".$_GET['powerup']);
        $xpath = new DOMXpath($doc);
        $elements = $xpath->query("*/div[@id='result']");
        echo $elements;
            break;
        default:
<<<<<<< HEAD
            $rows[]['ERR'] = "OPTION VARIABLE NOT SET";
            echo (json_encode($rows));
            break;
    }
}
=======
            break;
    }
} else {
    $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
    $cnt     = 0;
    while ($r = mysqli_fetch_assoc($sqldata)) {
        //echo $r['name'] .$count;
        $rows[] = $r;
        $cnt++;
    }
    echo (json_encode($rows));

}
echo (json_encode($rows));
>>>>>>> 172af63... Backend update.
mysqli_close($conn);
?>
