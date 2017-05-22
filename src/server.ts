import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const app = NestFactory.create(ApplicationModule);

const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
    jwksUri: "https://{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
  }),
  // This is the identifier we set when we created the API
  audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
  issuer: '{YOUR-AUTH0-DOMAIN}',
  algorithms: ['RS256']
});



app.listen(3000, () => console.log('Application is listening on port 3000.'));