import { Component } from '@nestjs/common';
import { HttpException } from '@nestjs/core';
import { SequelizeService } from './SequelizeService';
import Sequelize from 'sequelize';
import { ManagementClient, AuthenticationClient } from 'auth0';


@Component()
export class UsersService {
  public instance: any;
  public authentication: AuthenticationClient;
  public management: ManagementClient;

  constructor(private sequelize: SequelizeService) {

    this.instance = sequelize.instance.define('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      accessToken: {
        type: Sequelize.STRING
      }
    });

    this.management = new ManagementClient({
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UZ3pSakpGTjBReE5UYzFSRFV5TnpRMFF6azJRemd5UTBRM05FRXlOVGcxTWtSRU9UZ3lOQSJ9.eyJpc3MiOiJodHRwczovL3Byb2hhYml0cy5hdXRoMC5jb20vIiwic3ViIjoiRkJRWVREWktFY0RKYTFWR1BxNmZGcFpkWmlTRG5rTk1AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcHJvaGFiaXRzLmF1dGgwLmNvbS9hcGkvdjIvIiwiZXhwIjoxMDAxNDk1NzEwMTQxLCJpYXQiOjE0OTU3MTAxNDIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIn0.qv4t6yfJKk0JACGHu-QRbzr1mLTdIXBRe_Cp1BbXOtIjVby7GPZVcAx73JxBr3vPtemKvFjlE9vYZavSRr0ICwRCCSycI5-fVVEpmwOv6waJ88gcr41mO5OyNJw0foYzq4quy53kanN1R69JgjR9gsLpuWWzUra1sXiNmKtyFrDKbIVCpzUjn4l-tmo3AhhCbKD2IJ9GQfwVxN2nWCpsjcK09bSXt8diNtXh2Qt_OFsrmsjqE8zTlT3zhc1bdyrljRypNm1XvWhWzEUmEB4VczmpwC0ww6LqVv07UsHIA8ORCDCXdZ64flUpHUe4HMhe0a4lNXfQR14DHdcdnF11qA',
      domain: 'prohabits.auth0.com'
    });

    this.authentication = new AuthenticationClient({
      clientId: 'PvA4XzMNmlCGoT5gUPev7XvYnETTsyYB',
      domain: 'prohabits.auth0.com'
    });
  }



}