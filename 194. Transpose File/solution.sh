# Read from the file file.txt and print its transposed content to stdout.
COLUMNS=$(awk '{print NF}' file.txt | head -1) # assume all rows have same count
INDEX=1

while [ $INDEX -le $COLUMNS ]; do
    echo $(cat file.txt | awk -v COL="${INDEX}" '{print $COL}' | xargs)
    INDEX=$(( $INDEX + 1 ))
done
