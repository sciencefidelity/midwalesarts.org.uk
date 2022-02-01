#!/bin/sh
# delete all node modules and reinstall after dependabot
rm -rf ./node_modules yarn.lock &&
yarn &&
rm -rf */node_modules yarn.lock &&
for d in */; do cd "$d"; yarn; cd ..; done
