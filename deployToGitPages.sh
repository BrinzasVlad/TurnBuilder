#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# add all files that have been built
git init
git add -A
git commit -m 'deploy'

# push to repository
# make sure to check if the push happened and, if not, to push manually
# keep in mind that it may take up to 10 minutes for the changes
# to appear on GitHub, though, and potentially some more until
# GitHub Pages updates
git push -f git@github.com:BrinzasVlad/TurnBuilderPage.git master:gh-pages

# navigate out of build directory so it can be manipulated again
cd ..
