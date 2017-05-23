import { Middleware, NestMiddleware } from '@nestjs/common';
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

@Middleware()
export class AuthMiddleware implements NestMiddleware {

  resolve(): (req, res, next) => void {
    return jwt({
      secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://prohabits.auth0.com/.well-known/jwks.json"
      }),
      audience: 'https://prohabits.auth0.com/userinfo',
      issuer: 'prohabits.auth0.com',
      algorithms: ['RS256']
    })(req, res, next);
  }
}