# in the cms folder

cd cms/

rm -rfv LOGS/

mkdir LOGS/ # create the LOGS folder in the project root

rm -rfv node_modules/ # remove existing node_modules if any

export SKIP_DECR=TRUE # first skip to ensure smooth installation of node_modules

npm ci

npm install # in case any dependency is missed

export SKIP_DECR=FALSE

printf "\n\n=================================================================\n\n"
echo "Make sure you have set the PROD_DECR TO THE CORRECT SECRET"

# ---EDIT THIS VARIABLE---
export PROD_DECR=#correct env secret

echo "PROD_DECR is $PROD_DECR"
printf "\n\n=================================================================\n\n"

export NODE_ENV=production

npm run postinstall

printf "\n\n=================================================================\n\n"
echo "skipping build. Make sure you have the required files already built."
printf "\n\n=================================================================\n\n"

npm prune --production # remove the dev dependencies