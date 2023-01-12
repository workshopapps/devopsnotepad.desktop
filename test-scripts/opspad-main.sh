#!/bin/bash

while true; do
    read -e -p "Please enter your directory to your logs: " FILEPATH
    read -p "Please enter your serverId to continue: " serverId
    # read -p "Please enter your directory to your logs: " FILEPATH

    ################################################################

    if [ -z "$serverId" ] || [ -z "$FILEPATH" ]; then
        echo "input cannot be blank. Please try again"
    else
        echo $FILEPATH

        if [ ! -f $FILEPATH ]; then
            echo "File not found!. Please try again"
        else
            echo $serverId
            break
        fi
    fi
    ################################################################
done

# set the file to read from
#60a482ff-76ca-11ed-82ea-50ebf62a0ed9
# FILEPATH="./logs.txt"
# 3c8c8baf-7601-11ed-8b19-b808cf2f05d4
# ENDPOINT="http://localhost:9600/server/$serverId/notifications"


# read each line of the file
while read -r line; do
    # print the line
    sleep 1

    data=$(jq -n -Rsa --arg KEY 'logs' --arg VAL "$line" '{"\($KEY)":$VAL}')

     echo '\n'

    curl -X POST -H "Content-Type: application/json" -d "$data" "https://opspad.dev/api/server/$serverId/notifications"

done < "$FILEPATH"

# listen for write operations
# while true; do
#     # Send each new line to the endpoint as it is written to the log file
#     tail -f "$FILEPATH" | while read -r line; do

#         data=$(jq -n -Rsa --arg KEY 'logs' --arg VAL "$line" '{"\($KEY)":$VAL}')
#         echo '\n'
#         sleep 1
#         curl -X POST -H "Content-Type: application/json" -d "$data" "http://localhost:9600/server/$serverId/notifications"
#     done
# done

# sudo apt install inotify-tools
