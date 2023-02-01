import { Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) {}

    @Post('sign-up')
    signup() {
        return this.authenticationService.signup();
    }

    @Post('sign-in')
    signin() {
        return this.authenticationService.signin();
    }

    @Get('sign-out')
    signout() {
        return this.authenticationService.signout();
    }
}
