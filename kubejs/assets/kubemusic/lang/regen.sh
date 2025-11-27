#!/usr/bin/env bash

OUTPUTFILE="localeIn.json"
INPUTDIR="../../../data/kubemusic/melodies"
LOCALEKEY="immersive_melodies.melodies"

echo "{" >  $OUTPUTFILE

for file in $(find "${INPUTDIR}" -type f -name '*.mid'); do
  fileName=$(basename $file)
  songName=${fileName%.*}
  echo "  \"${LOCALEKEY}.${songName}\": \"\"," >> $OUTPUTFILE
done
echo "}" >> $OUTPUTFILE
