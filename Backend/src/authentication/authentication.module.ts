import { Module } from '@nestjs/common';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationController } from './controllers/authentication.controller';
import { AuthenticationDao } from './dao/authentication.dao';

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, AuthenticationDao],
})
export class AuthenticationModule {}
