import { Middleware, NestMiddleware } from '@nestjs/common';
const cors = require('cors');

// TODO: We should wrap this into a helper function
@Middleware()
export class CorsMiddleware implements NestMiddleware {
  resolve(): (req, res, next) => void {
    return cors();
  }
}