import cors from "cors";

import express, { type Request, type Response, type NextFunction } from 'express';
import { HttpError } from "express-openapi-validator/dist/framework/types";

import { initHandler } from "../init-handler";
import { type Logger } from "@/domain/support/logger";
import {
  LOGGER,
  ALLOW_ORIGINS
} from "@/di-container/service-id";
import { middleware as openApiValidatorMiddleware } from "express-openapi-validator";

import { join } from 'path';
import { buildUserRouter } from "@/handler/api/routers/user/user-router";
import { buildHandleOpenApiValidatorMiddleware } from "@/handler/api/middleware/handle-validator-middleware";


import {
  AccessDeniedError,
  ROLES_INVALID_ERROR_CODE,
  UnexpectedError,
} from "@/util/error-util";


const bootstrap = () => {
  const { container } = initHandler();

  const logger = container.get<Logger>(LOGGER);
  const allowOrigins = container.get<string>(ALLOW_ORIGINS);

  const app = express();

  // Validation
  app.use(
    openApiValidatorMiddleware({
      apiSpec: "./api.openapi.yaml",
      validateRequests: true,
    })
  );
  app.use(buildHandleOpenApiValidatorMiddleware({ logger }));

  app.use(
    cors(
      allowOrigins !== ""
        ? { origin: allowOrigins.split(","), optionsSuccessStatus: 200 }
        : undefined // If allowOrigins is an empty string, CORS will be set to wildcard
    )
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Logger configuration
  app.use((req, res, next) => {
    logger.resetKeys();
    logger.appendKeys({
      path: req.path,
      method: req.method,
    });
    logger.info("Log info", {
      method: req.method,
      path: req.path,
      params: req.params,
      query: req.query,
      body: req.body,
      header: req.headers,
    });

    res.on("finish", () => {
      logger.info("Status state", { statusCode: res.statusCode });
    });

    next();
  });

  // Routing

  app.get('/health', (req, res) => res.json({ status: 'ok' }));

  // Comprehensive error handling
  app.use(
    (error: HttpError, _req: Request, res: Response, _next: NextFunction) => {
      logger.error("Express catches unhandled errors", error);
      if (error.message === ROLES_INVALID_ERROR_CODE) {
        const errorContent = new AccessDeniedError();
        res.status(403).send({
          name: errorContent.name,
          message: errorContent.message,
        });
      } else {
        res.status(500).send({
          name: new UnexpectedError().name,
          message: error.message,
        });
      }
    }
  );

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
  });
}

bootstrap();
