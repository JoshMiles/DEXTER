<?php
header('Content-Type: text/plain');
include('config.php'); // include config file

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$pn        = $_GET['o'];
$myaqldata = "";
$rows      = array();

if (isset($pn)) {
    switch ($pn) {
        case "pn":
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
            $cnt     = 0;
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $rows["POKEMON"][$cnt]['PID']  = $r['PID'];
                $rows["POKEMON"][$cnt]['NAME'] = $r['name'];
                $cnt++;
            }
            break;
        case "total":
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable);
            $count   = 0;
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $count++;
            }
            $rows["TOTAL"] = $count;
            break;
        case "data":
            $pid     = $_GET['pid'];
            $sqldata = mysqli_query($conn, "SELECT * FROM " . $dbtable . " WHERE PID='" . $pid . "'");
            while ($r = mysqli_fetch_assoc($sqldata)) {
                $rows[] = $r;
            }
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
            break;
        case "iv":
          $name = $_GET['name'];
          $cp = $_GET['cp'];
          $hp = $_GET['hp'];
          $dust = $_GET['dust'];
          $pu = $_GET['powerup'];
          if(!isset($name) ||!isset($cp) || !isset($hp) || !isset($dust) || !isset($pu))
          {
            $rows[]['ERR'] = "UNSET VARIABLES FOR IV";
          }else{
            header('Location: ' ."http://api.thepokedex.me/ivcal/".$name."/".$cp."/".$hp."/".$dust."/".$pu."/");
            die();
          }
          break;
        case "ivr":
          $results = $_POST['res'];
          echo pretty_json($results);
          die();
          break;
        default:
            $rows[]['ERR'] = "OPTION VARIABLE NOT RECOGNISED";
            break;
    }
} else {
    $rows[]['ERR'] = "OPTION VARIABLE NOT SET";
}
echo pretty_json(json_encode($rows));
mysqli_close($conn);
php;
?>
