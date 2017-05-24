import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { SequelizeService } from './SequelizeService';
import Sequelize from 'sequelize';

@Component()
export class CommitmentsService {
  public instance: any;

  constructor(private sequelize: SequelizeService) {
    this.instance = sequelize.instance.define('commitments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      commitmentId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      completed: {
        type: Sequelize.BOOLEAN,
        default: false
      }
    });
  }

}