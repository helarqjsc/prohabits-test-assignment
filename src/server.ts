import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as jwt from 'express-jwt';
import * as jwks from 'jwks-rsa';


const instance = express();
instance.use(cors());
instance.use(bodyParser.json());

// In a real application this should be applied only to certain routes, not all of them.
// It doesn't seem to work with WebAuth, so commented it out for now.

// instance.use(jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: "https://prohabits.auth0.com/.well-known/jwks.json"
//   }),
//   audience: 'https://prohabits.auth0.com/userinfo',
//   issuer: 'prohabits.auth0.com',
//   algorithms: ['RS256']
// }));

const app = NestFactory.create(ApplicationModule, instance);


app.listen(3030, () => console.log('Application is listening on port 3030.'));