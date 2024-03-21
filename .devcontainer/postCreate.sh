#!/bin/bash 

nohup node server.js

clear

echo "Your public url is:"
echo "------------------------------------------"
echo "http://$CODESPACE_NAME-3001.app.github.dev"
echo "------------------------------------------"