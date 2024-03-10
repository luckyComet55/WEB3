"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const dotenv_1 = __importDefault(require("dotenv"));
var cookieParser = require('cookie-parser');
const root_1 = __importDefault(require("./routes/root"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', root_1.default);
app.use(function (err, req, res, next) {
    throw http_errors_1.default.NotFound('Not Found');
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
    res.json({ message: err.message });
});
const port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
