// eslint-disable-next-line import/no-unresolved
import { Handler } from "aws-lambda";

import { LambdaEdgeEvent } from "./types";

export const handler: Handler<LambdaEdgeEvent> = (
  event,
  _context,
  callback
) => {
  const [record] = event.Records;
  if (!record)
    throw new Error(`No record found in event: ${JSON.stringify(event)}`);
  const { request } = record.cf;
  request.uri = request.uri.replace(/\/$/, "/index.html");
  return callback(null, request);
};
