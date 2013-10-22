<?php
require 'Slim/Slim.php';
require_once('TwitterAPIExchange.php');
use Slim\Slim;
Slim::registerAutoloader();

$app = new Slim();


$app->get('/twitter', 'getTweets');
 
$app->run();

function getTweets() {
    $request = Slim::getInstance()->request();
    $message = json_decode($request->getBody());


    $settings = array(
        'oauth_access_token' => "16831684-PV4JH3MoXSQNwUhHH3Jhw35KGAOPYgNXBFwGjvptP",
        'oauth_access_token_secret' => "5BMD6wn8NxjtWbPs4ygeJbWq74aYt9jlrax14YUY1s",
        'consumer_key' => "CMvLoH0IshMTeTQvgXFfzA",
        'consumer_secret' => "5B5jtTGB3NX5hmLKXA9HoTWMsb6A2jewgbpuNxWooyM"
    );
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $requestMethod = 'POST';
    $getfields = "?q=hello";
    $twitter = new TwitterAPIExchange($settings);
    echo $twitter->buildOauth($url, $requestMethod)
             ->setGetfield($getfields)
             ->performRequest();
}


/**
 * Get Database Connection
 * @return PDO The database connection
 */

function getConnection() {

    $dbname="blaineadmin";
    
    if(isset($_SERVER['APPLICATION_ENV'])) {
        $dbhost="localhost";
        $dbuser="admin";
        $dbpass="3m3rg3";
    }
    else {
        /*$dbhost="mysql.periscopic.com";
        $dbuser="periscopic";
        $dbpass="3m3rg3n0w";*/
        $dbhost="localhost";
        $dbuser="periscopic_earl";
        $dbpass="p3risc0p1c_earl";
        $dbname="tweets";
    }
    
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    //mysql_query("SET NAMES 'utf8' COLLATE 'utf8_unicode_ci'");
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    return $dbh;
}

?>