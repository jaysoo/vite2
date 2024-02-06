#!/bin/bash

# Base file name
baseFileName="test-0.spec.ts"

# Loop from 1 through 9
for i in {1..9}
do
  # Construct the new file name by replacing the number in the base file name
  newFileName=$(echo $baseFileName | sed "s/0/$i/")

  # Copy the base file to the new file
  cp "$baseFileName" "$newFileName"
done
