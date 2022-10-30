# Address search app

## Installation and start

Clone the repository on your machine and install all necessary dependencies via **npm**:

```bash
npm i
```

or your favourite package manager.

### Setting .env

**_IMPORTANT:_** Create .env file in the root directory of the project and initialize several variables in it:

```env
APITOKEN = *your token from dadata.com (Authorization)*
SECRET = *your secret token from dadata.com (X-Secret)*
```

Then run the app in development mode with:

```bash
npm run dev
```

or build and start the app in production mode:

```bash
npm run build
npm run start
```

Have fun
