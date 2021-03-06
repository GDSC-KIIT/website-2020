# USE THIS SCRIPT TO AUTOMATICALLY SETUP ALL THE REQUIRED FOLDERS
# THIS IS ALSO USEFUL TO CLEAN INSTALL EVERYTHING IF NEEDED

# setup cms

cd cms/

rm -rfv node_modules/ .cache/ build/ .strapi-updater.json

export NODE_ENV=development

npm install

# frontend setup

cd ..

rm -rfv node_modules/ .next/ coverage/ out/

npm install

# webhooks setup

cd webhooks/strapi/

rm -rfv build/ node_modules/

npm install

printf "\n\n=================================================================\n\n"
echo "Completed setting everything up"
printf "\n\n=================================================================\n\n"
