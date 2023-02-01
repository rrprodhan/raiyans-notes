"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./services/authentication.service");
const authentication_controller_1 = require("./controllers/authentication.controller");
const authentication_dao_1 = require("./dao/authentication.dao");
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    (0, common_1.Module)({
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService, authentication_dao_1.AuthenticationDao],
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map