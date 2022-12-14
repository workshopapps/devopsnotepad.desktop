filepath=$1
currentline=0
totallines=0
filehash=0
readlines() {
    # echo "Total Number of lines are : $totallines"
    # echo "The current line is $currentline"
    while [ $currentline -lt $totallines ]; do
        ((currentline++))
        echo "[READING] >>> line $currentline from file $filepath "
        echo $(awk "NR==$currentline{ print; exit }" $filepath)
    done
}
while true; do
    changehash="$(shasum -a 1 $filepath)"
    if [ $? != 0 ]; then
        break
    fi
    if [ "$changehash" != "$filehash" ]; then
        echo "[READING] >>> file changed from $filehash -> $changehash "
        filehash=$changehash
        currentline=$totallines
        totallines="$(wc -l $filepath | sed 's/[^0-9]*//g')"
        ((totallines++))
        readlines
    else
        echo "[WATCHING] >>> file: $filehash , last line: $currentline , total lines: $totallines"
    fi
    sleep 2
done