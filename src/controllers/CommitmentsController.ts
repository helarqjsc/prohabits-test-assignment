import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CommitmentsService } from '../components/CommitmentsService';

@Controller('commitments')
export class CommitmentsController {

  constructor(private Commitments: CommitmentsService) {}

  @Get()
  async getAll(req: Request, res: Response, next: NextFunction) {
    const commitments = await this.Commitments.instance.findAll();
    res.status(HttpStatus.OK).json({commitments});
  }

  // public async getUser(@Response() res, @Param('id') id) {
  //   const user = await this.usersService.getUser(id);
  //   res.status(HttpStatus.OK).json(user);
  // }
}