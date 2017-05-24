import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import Sequelize from 'sequelize';

let instance;

@Component()
export class SequelizeService {
  public instance: any;

  constructor() {
    if (!instance) {
      // instance = this;
      instance = new Sequelize('prohabits', 'homestead', 'secret', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          idle: 10000
        },
      });
    }
    this.instance = instance;
  }
}

