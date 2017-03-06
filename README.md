#Stormpath is Joining Okta
We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit [the Migration FAQs](https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement) for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).

# stormpath-express-api-auth-sample

This sample web application uses node.js and [Stormpath-Express](https://github.com/stormpath/stormpath-express) to secure an API:

+ Assign API keys to users stored in Stormpath 
+ Generate, manage and revoke keys
+ Authenticate users to your API using HTTP Basic Auth or OAuth2 
+ Manage scopes

[Stormpath-Express](https://github.com/stormpath/stormpath-express) is an extension for Express.js that makes it incredibly simple to add users and user data to your application. It aims to completely abstract away all user registration, login, authentication, and authorization problems, including API authentication

## Links
+ [API Authentication Tutorial for Node](https://stormpath.com/blog/express-sample-api-key-management/) - walks you though this sample
+ [express-stormpath documentation](http://docs.stormpath.com/nodejs/express/)
+ [Stormpath Node.js SDK](https://github.com/stormpath/stormpath-sdk-node)
+ [Stormpath website](http://stormpath.com/)

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
```
  export STORMPATH_API_KEY_ID=[api_key_id]
  export STORMPATH_API_KEY_SECRET=[api_key_secret]
  export STORMPATH_APP_HREF=[app_href]
  export STORMPATH_SECRET_KEY=[secret_key]
```
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


### Contributing 

You can make your own contributions by forking the <code>development</code> branch, making your changes, and issuing pull-requests on the <code>development</code> branch.

We regularly maintain our GitHub repostiory, and are quick about reviewing pull requests and accepting changes!

### Copyright ###

Copyright &copy;2014 Stormpath, Inc. and contributors.

This project is open-source via the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).

