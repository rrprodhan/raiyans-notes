import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
	constructor() {}

   async signup() {
        return `testing signup route`;
    }

    async signin() {
        return `testing signin route`;
    }

    async signout() {
        return `testing signout route`;
    }
}
