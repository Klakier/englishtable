/// <reference path="../typings/main.d.ts" />

import * as winston from 'winston';
import * as objectInspections from './Utils/objectInspections';

export var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ]
});

export function httpRequestsLogger(req, res, next) {
    logger.info(`Request: ${req.method}:${req.path}`);
    if (!objectInspections.isEmpty(req.params)) {
        logger.debug('\t -- Params:', objectInspections.isDefined(req.params) ? req.params : {});
    }

    if (!objectInspections.isEmpty(req.body)) {
        logger.debug('\t -- Body:', objectInspections.isDefined(req.body) ? req.body : {});
    }
    next();
}

export default logger;