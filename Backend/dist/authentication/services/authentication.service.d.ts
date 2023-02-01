export declare class AuthenticationService {
    constructor();
    signup(): Promise<string>;
    signin(): Promise<string>;
    signout(): Promise<string>;
}
