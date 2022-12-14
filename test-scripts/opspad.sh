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

filepath=$FILEPATH
currentline=0
totallines=0
filehash=0


parsedAndinitiateRequest(){
  local data=$(jq -n -Rsa --arg KEY 'logs' --arg VAL "$1" '{"\($KEY)":$VAL}')
  sleep 1
  curl -X POST -H "Content-Type: application/json" -d "$data" "http://localhost:9600/server/3c8c8baf-7601-11ed-8b19-b808cf2f05d4/notifications"
  echo "\n"
  echo "Successfully posted line $2"
}

readlines() {
    # echo "Total Number of lines are : $totallines"
    # echo "The current line is $currentline"
    while [ $currentline -lt $totallines  ]; do
        echo "$currentline\n $totallines";
        ((currentline++))
        echo "[READING] >>> line $currentline from file $filepath "
        # echo $(awk "NR==$currentline{ print; exit }" $filepath)
        data=$(awk "NR==$currentline{ print; exit }" $filepath)

        if [ ! -z "$data" ]; then
            parsedAndinitiateRequest "$data" "$currentline"
        fi

    done
}

while true; do
    changehash="$(shasum -a 1 $filepath)"
    echo $changehash
    echo $filehash
    if [ $? != 0 ]; then
        break
    fi
    if [ "$changehash" != "$filehash" ]; then
        echo "[READING] >>> file changed from $filehash -> $changehash "
        filehash=$changehash
        currentline=$totallines
        totallines="$(wc -l $filepath | sed 's/[^0-9]*//g')"
        # ((totallines++))
        readlines
    else
        echo "[WATCHING] >>> file: $filehash , last line: $currentline , total lines: $totallines"
    fi
    sleep 2
done
