#!/bin/bash
echo 'Updating Js and css'
scp -C flexprice.css root@192.168.100.117:/var/www/cdn.flexprice.com/flexprice/v1/
scp -C flexprice.js root@192.168.100.117:/var/www/cdn.flexprice.com/flexprice/v1/

echo 'Removing Existing Symlinks'
ssh root@192.168.100.117 'unlink /var/www/cdn.flexprice.com/flexprice/flexprice.css'
ssh root@192.168.100.117 'unlink /var/www/cdn.flexprice.com/flexprice/flexprice.js'

echo 'Creating New Symlinks'
ssh root@192.168.100.117 'ln -s /var/www/cdn.flexprice.com/flexprice/v1/flexprice.css /var/www/cdn.flexprice.com/flexprice/flexprice.css'
ssh root@192.168.100.117 'ln -s /var/www/cdn.flexprice.com/flexprice/v1/flexprice.js /var/www/cdn.flexprice.com/flexprice/flexprice.js'

echo 'Purge cdn.flexprice.com zone'
php cdn.php 

echo 'Done!'