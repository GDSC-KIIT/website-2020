# Setting Up the Environment

It is highly recommeded to use **Linux** for Development. However, **Windows** is still supported for you to contribute.

Also the please use **`node version as 14`**.

The project uses [yarn](https://yarnpkg.com/) as the package manager.
Please install yarn v1.

_If you are on a linux enviroment, you can simply run `sh tools/dev_setup.sh`_

### To Setup the CMS

Please [click here](https://github.com/DSC-KIIT/dsckiit-website-2.0/tree/main/cms#development).

### To Setup the Frontend

1. Install the dependencies

```
yarn install
```

2. Start the _nextjs_ development server

```
yarn dev
```

### To Setup the _Hapi Strapi_ Webhook

**It is not necessary to set this up and start running, if you are not looking to make contributions here**

1. Install the dependencies

```
npm install
```

2. Start the `ts-node-dev` server

```
npm run dev
```

# Testing

### Automated Testing

You do not need to run the `test` scripts manually or setup the testing.
Once you do a pull request to the main repository, GitHub Actions will run the tests for you and also notify if any of them failed.

### Writing Tests

If you are writing tests, you would need to check if your tests are working properly or not.

#### Setting up the Frontend Test

You will need a cms server running in `TEST` mode.
You can do this by:

```sh
# in the cms folder
npm run server:testing
```

Now, start the the jest test server by running:

```sh
# in the root folder of the project
npm run testw
```
