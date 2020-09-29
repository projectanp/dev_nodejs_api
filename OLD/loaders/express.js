"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var api_1 = __importDefault(require("../api"));
var config_1 = __importDefault(require("../config"));
var errors = require('celebrate').errors;
exports.default = (function (_a) {
    var app = _a.app;
    // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    // It shows the real origin IP in the heroku or Cloudwatch logs
    app.get('/status', function (req, res) {
        res.status(200).end();
    });
    app.head('/status', function (req, res) {
        res.status(200).end();
    });
    // handle errors from 'celebrate'
    app.use(errors());
    app.enable('trust proxy');
    // The magic package that prevents frontend developers going nuts
    // Alternate description:
    // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors_1.default());
    // Middleware that transforms the raw string of req.body into json
    app.use(body_parser_1.default.json());
    // Load API routes
    app.use(config_1.default.api.prefix, api_1.default());
    /// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
});
