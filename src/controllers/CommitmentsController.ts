import { Controller, Get, Put, Post, Req, Res, Param, Body, HttpStatus } from '@nestjs/common';
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

  @Put()
  async addCommitment(@Req() req, @Res() res, @Body('commitment') commitment) {
    commitment.userId = 34;
    const savedCommitment = await this.Commitments.instance.create(commitment);

    res.status(HttpStatus.OK).json({a: 123});
  }


}