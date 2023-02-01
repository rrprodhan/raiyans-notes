import { AuthenticationService } from '../services/authentication.service';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    signup(): Promise<string>;
    signin(): Promise<string>;
    signout(): Promise<string>;
}
