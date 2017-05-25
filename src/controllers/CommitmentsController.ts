import { Controller, Get, Put, Post, Req, Res, Headers, Param, Body, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CommitmentsService } from '../components/CommitmentsService';
import { UsersService } from '../components/UsersService';

@Controller('commitments')
export class CommitmentsController {

  constructor(
    private Commitments: CommitmentsService,
    private Users: UsersService
  ) {}

  @Get()
  async getAll(req: Request, res: Response, next: NextFunction) {
    const commitments = await this.Commitments.instance.findAll();
    res.status(HttpStatus.OK).json({commitments});
  }

  @Put()
  async addCommitment(@Req() req, @Res() res, @Headers() head, @Body('commitment') commitment) {
    const user = await this.Users.authentication.getProfile(head['access-token']);
    commitment.userId = user.sub();
    const savedCommitment = await this.Commitments.instance.create(commitment);

    res.status(HttpStatus.OK).json({});
  }


}