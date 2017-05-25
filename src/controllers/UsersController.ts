import { Controller, Get, Put, Post, Req, Res, Param, Body, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Controller('users')
export class UsersController {

  constructor() {}

  @Get()
  async getAll(req: Request, res: Response, next: NextFunction) {
    res.status(HttpStatus.OK).json({});
  }



}