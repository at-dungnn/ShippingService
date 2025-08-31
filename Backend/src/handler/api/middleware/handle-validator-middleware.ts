import type { NextFunction, Request, Response } from "express";
import {
  HttpError,
  InternalServerError,
} from "express-openapi-validator/dist/framework/types";
import type { Logger } from "@/domain/support/logger";

export class OpenApiValidatorInternalServerError extends Error {
  override name = "OpenApiValidatorInternalServerError" as const;

  override message = "An internal error has occurred" as const;
}

/**
 * Middleware to handle the result of OpenApiValidator.
 */
export const buildHandleOpenApiValidatorMiddleware =
  ({ logger }: { logger: Logger }) =>
  (error: HttpError, _req: Request, res: Response, _next: NextFunction) => {
    logger.debug("OpenApiValidator problem", {
      message: error.message,
    });

    if (error instanceof InternalServerError) {
      logger.error("OpenApiValidator INTERNAL_SERVER_ERROR", {
        message: error.message,
        name: error.name,
        status: error.status,
        path: error.path,
      });
      const openApiValidatorInternalServerError =
        new OpenApiValidatorInternalServerError();
      return res.status(500).send({
        name: openApiValidatorInternalServerError.name,
        message: openApiValidatorInternalServerError.message,
      });
    }

    logger.info("OpenApiValidator A problem when authenticate", {
      message: error.message,
      name: error.name,
      errorPath: error.path,
      errorStatus: error.status,
    });
    return res.status(400).send({
      name: error.name,
      message: error.message,
    });
  };
