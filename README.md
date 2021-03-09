# DSC KIIT Website

# Setting Up

## DEVELOPMENT SETUP

If you are working on a unix enviroment, you can easily setup up the dev enviroment by runnning:

```sh
sh tools/dev_setup.sh
```

Otherwise, you can manually run the commands in [this script](./tools/dev_setup.sh) file one by one to complete your setup.
_(You have to do `SKIP_DECR=TRUE npm install` when running `npm install` on the cms folder)_

## PRODUCTION SETUP

### CMS FOLDER

Edit the variable name `PROD_DECR` [tools/cms_prod_setup.sh](./tools/cms_prod_setup.sh) with the **correct decryption password**.

Then run:

```sh
sh tools/cms_prod_setup.sh
```

### WEBHOOKS/STRAPI FOLDER

Pass an enviroment variable `DISCORD URL` with the **correct discord webhook link**.

Run the following commands to start the server:

```sh
npm ci

npm run build

npm start
```
