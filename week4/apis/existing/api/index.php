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
    $requestMethod = 'GET';
    $getfields = "?q=hello";
    $twitter = new TwitterAPIExchange($settings);
    /*$resp = $twitter->buildOauth($url, $requestMethod)
             ->setGetfield($getfields)
             ->performRequest();
*/
    $resp = array();
    for($i = 0; $i < 10; $i++) {
        $resp []= new stdClass();
        $resp[$i]->tweet = "I'm a tweet!";
        $resp[$i]->author = "Author";
    }
    
    echo json_encode($resp);
}

?>