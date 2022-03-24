/* eslint-disable import/unambiguous,@typescript-eslint/no-unused-vars,import/no-unused-modules */

// XXX: This is incomplete (just enough to implement our features)
type CloudfrontFunctionEvent = {
  request: {
    uri: string;
  };
};

const handler = ({ request }: CloudfrontFunctionEvent) => {
  request.uri = request.uri.replace(/\/$/, "/index.html");
  return request;
};
