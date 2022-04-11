"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email } = request.body;
            if (name.length < 1 || email.length < 1) {
                return response.status(400).json({});
            }
            const userService = new UserService_1.UserService({ name, email });
            try {
                const newUser = yield userService.createUser();
                return response.status(201).json(newUser);
            }
            catch (error) {
                console.log(error);
                return response.status(500);
            }
        });
    }
}
exports.UserController = UserController;
