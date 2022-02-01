#!/bin/sh
# run `yarn remove` and `yarn add` for every dependency in package.json
npx yarn-upgrade-all &&
for d in */; do cd "$d"; npx yarn-upgrade-all; cd ..; done
