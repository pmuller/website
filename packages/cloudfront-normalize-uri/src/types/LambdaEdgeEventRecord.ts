import { LambdaEdgeEventRecordRequest } from "./LambdaEdgeEventRecordRequest";

export type LambdaEdgeEventRecord = {
  cf: {
    request: LambdaEdgeEventRecordRequest;
  };
};
