"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./v1/users"));
const vehicles_1 = __importDefault(require("./v1/vehicles"));
exports.default = {
    users: users_1.default,
    vehicles: vehicles_1.default
};
//# sourceMappingURL=index.js.map