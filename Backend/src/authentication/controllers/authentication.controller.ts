import { Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) {}

    @Post('sign-up')
    signup() {
        return `signup route`;
    }

    @Post('sign-in')
    signin() {
        return `signin route`;
    }

    @Get('sign-out')
    signout() {
        return `signout route`;
    }
}
