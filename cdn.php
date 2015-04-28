<?php
require __DIR__ . '/vendor/autoload.php';

$config = require(__DIR__ . '/cdn.config.php');

$api = new MaxCDN($config['company_alias'], $config['consumer_key'], $config['consumer_secret']);

//Purge Zone
$output = $api->delete('/zones/pull.json/'.$config['zone_id'].'/cache');

echo $output;