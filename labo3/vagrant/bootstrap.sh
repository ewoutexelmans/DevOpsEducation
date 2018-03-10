#!/usr/bin/env bash

sudo apt-get update
# downloaden en installeren van de lts versie van node.js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
# installeren git
sudo apt-get install git

# disable password authentication for ssh
#sudo sed -i -e "\\#PasswordAuthentication yes# s#PasswordAuthentication yes#PasswordAuthentication no#g" /etc/ssh/sshd_config
# sudo service ssh restart

# installeren van de forever tool 
sudo npm install forever -g
# dit zorgt ervoor dat de webserver altijd draait en automatisch wordt
# heropgestart wanneer de machine uitgevallen is
echo "Starting server.js"
forever start /vagrant/www/server.js