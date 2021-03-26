# Backend as CMS

CMS - Strapi
Database - SQLite3

## Skip Env Variables

Set **`SKIP_DECR`** to `TRUE`.

# Production

Set **`PROD_DECR`** to the correct env secret.
Set **`ABSOLUTE_PRODUCTION_URL`** to the domain where it is hosted.

### Authenticated Endpoints

-   **score**

CREATE

-   **quiz**

FIND

### UnAuthenticated Endpoints

All with FIND and FINDONE enabled

## Settings

#### Media

Set _Enable responsive friendly upload_ in **Media Library** to _Off_.
(This is to disable uploading the same in `large`, `medium` and `small` formats)

# Development

1. Install the dependencies

```
npm install
```

_Check that `.env` file is create in the `cms` folder_

2. Start the _strapi_ development server

```
npm run dev
```

3. Add the Google OAuth Credentials

In you **`.env.example`** file, copy the **client id** and the **client secret** and paste them in the _Strapi Provider for Google Authentication_.
