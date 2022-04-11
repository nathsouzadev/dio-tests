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
exports.UserService = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const UserRepository_1 = require("../repositories/UserRepository");
class UserService {
    constructor({ userRepository = (0, typeorm_1.getCustomRepository)(UserRepository_1.UserRepository), name, email }) {
        this.userRepository = userRepository;
        this.user = new User_1.User(name, email);
    }
    createUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.save(this.user);
        });
    }
}
exports.UserService = UserService;
