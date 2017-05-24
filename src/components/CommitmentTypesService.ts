import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { SequelizeService } from './SequelizeService';
import Sequelize from 'sequelize';

@Component()
export class CommitmentTypesService {
  public instance: any;

  constructor(private sequelize: SequelizeService) {
    this.instance = sequelize.instance.define('commitmentTypes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  }

}