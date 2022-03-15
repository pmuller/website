/* eslint-disable import/no-unused-modules */
import { program } from "@caporal/core";

program.action(({ logger }) => {
  logger.info("Hello, world!");
});

program.run();
