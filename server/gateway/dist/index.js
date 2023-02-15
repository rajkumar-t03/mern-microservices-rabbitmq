"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/api/v1/seller', (0, express_http_proxy_1.default)('http://localhost:8084'));
app.use('/api/v1/buyer', (0, express_http_proxy_1.default)('http://localhost:8083'));
app.use('/api/v1/auction', (0, express_http_proxy_1.default)('http://localhost:8085'));
app.listen(3333, () => {
    console.log(`server is running at port 3333`);
});
