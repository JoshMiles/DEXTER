<?php
include('config.php'); // include config file

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$pn        = $_GET['o'];
$myaqldata = "";
$rows      = array();

if (!isset($pn)) {
    switch ($pn) {
        case "pn":
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
            $cnt     = 0;
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $rows[$cnt]['PID']  = $r['PID'];
                $rows[$cnt]['NAME'] = $r['name'];
                $cnt++;
            }
            echo (json_encode($rows));
            break;
        case "total":
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
            $count   = 0;
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $count++;
            }
            $rows["Total"] = $count;
            echo (json_encode($rows));
            break;
        case "pid":
            $pid     = $_GET['pid'];
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable . " WHERE PID='" . $pid . "'");
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $rows[] = $r;
            }
            echo (json_encode($rows));
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
            echo (json_encode($rows));
            break;
        case "iv":
        $doc = new DOMDocument;
        $doc->load("http://api.thepokedex.me/ivcal?name=".$_GET['name']."&cp=".$_GET['cp']."&hp=".$_GET['hp']."&dust=".$_GET['dust']."&powerup=".$_GET['powerup']);
        $xpath = new DOMXpath($doc);
        $elements = $xpath->query("*/div[@id='result']");
        echo $elements;
            break;
        default:
            $rows[]['ERR'] = "OPTION VARIABLE NOT SET";
            echo (json_encode($rows));
            break;
    }
}
mysqli_close($conn);
?>
