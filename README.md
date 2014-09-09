# stormpath-express-sample

A sample web application using node.js and Stormpath Express integration 

## Getting started

To get started, clone this repository locally:

```bash
$ git clone https://github.com/stormpath/stormpath-express-api-auth-sample
```
Next, go into the sample app directory:

```bash
$ cd stormpath-express-api-auth-sample
```

Now, install all of the node.js dependencies (via npm):
```bash
$ npm install
```

Create a `.env` file:
```bash
$ touch .env
```

Inside, add the following:
  export STORMPATH_API_KEY_ID=[api_key_id]
  export STORMPATH_API_KEY_SECRET=[api_key_secret]
  export STORMPATH_APP_HREF=[app_href]
  export STORMPATH_SECRET_KEY=[secret_key]
  
Export the .env file:
```bash
$ source .env
```

Finally you are ready to fire up the application server:
```bash
$ node server.js
```

Go to localhost:8080 to run the application.

The application is also available online: http://pure-shelf-8870.herokuapp.com/

## Screenshots

Here are some screenshots to give you a feel of what you are in for:

![Login Screen](https://github.com/stormpath/stormpath-express-api-auth-sample/raw/master/assets/loginscreen.png)

![Api Key](https://github.com/stormpath/stormpath-express-api-auth-sample/raw/master/assets/apikey.png)

![Basic REST call](https://github.com/stormpath/stormpath-express-api-auth-sample/raw/master/assets/basicrestcall.png)

![Get OAuth token](https://github.com/stormpath/stormpath-express-api-auth-sample/raw/master/assets/getoauthtoken.png)

![Permitted OAuth call](https://github.com/stormpath/stormpath-express-api-auth-sample/raw/master/assets/permittedoauth.png)

![Denied OAuth call](https://github.com/stormpath/stormpath-express-api-auth-sample/raw/master/assets/deniedoauth.png)
