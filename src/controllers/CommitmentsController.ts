import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Controller('commitments')
export class CommitmentsController {

  @Get()
  getAll(req: Request, res: Response, next: NextFunction) {
    res.status(HttpStatus.OK).json({sosat: "hui"});
  }

  // public async getUser(@Response() res, @Param('id') id) {
  //   const user = await this.usersService.getUser(id);
  //   res.status(HttpStatus.OK).json(user);
  // }
}