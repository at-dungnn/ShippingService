import { Router } from "express";
import type { Container } from "inversify";

export const buildUserRouter = ({
  container,
}: {
  container: Container;
}): Router => {
  const userRouter = Router({ mergeParams: true });

  return userRouter;
};
