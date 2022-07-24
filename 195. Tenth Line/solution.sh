# Read from the file file.txt and output the tenth line to stdout.
INDEX=0;
while IFS= read -r LINE; do
    INDEX=$(( $INDEX + 1 ));
    [[ $INDEX == 10 ]] && echo "$LINE";
done < file.txt
