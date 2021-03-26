# DSC KIIT Website

# Setting Up

## DEVELOPMENT SETUP

Please refer [here](./CONTRIBUTING.md) for setting up the development environment.

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

# Production Runs _(For CMS Backend)_

### Checking the Console Server Output

To check the status, memory and other get logs from the application when the server is running in _production_, run `npm run pm2 monit`.

### Stopping the Server

To stop the server, run `npm run pm2 kill`. This will stop all the running processes for the cms.
If still some node processes are left, run `killall node`.

### Checking Error Logs

If the **application has stopped** or you want to **check for errors**, visit the `cms` folder and then visit the `LOGS` folder.

You will find the different server log files, and you can open and then check for the log.
