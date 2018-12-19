#!/usr/bin/env bash

echo 'LC_ALL="en_US.UTF-8"' > /etc/default/locale
export LC_ALL="en_US.UTF-8"

apt-get update
apt-get install -y python-pip python-dev libffi-dev libpq-dev libssl-dev python-software-properties

echo "cd /vagrant" >> /home/vagrant/.bashrc
echo ". /home/vagrant/activunitedev/bin/activate" >> /home/vagrant/.bashrc

cd /vagrant
pip install virtualenv
virtualenv /home/vagrant/activunitedev      
. /home/vagrant/activunitedev/bin/activate
pip install -r requirements.txt
pip install requests[security]

