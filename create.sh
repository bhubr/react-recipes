#!/bin/sh
echo "Creating new project $1"
mkdir $1
cd $1
ln -s ../000-base/public
ln -s ../000-base/node_modules
cp ../000-base/package.json .
perl -pi -e "s/000\-base/$1/g" package.json
cp -R ../000-base/src src
