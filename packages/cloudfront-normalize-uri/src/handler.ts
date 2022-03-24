// XXX: This is incomplete (just enough to implement our features)
type CloudfrontFunctionEvent = {
  request: {
    uri: string;
  };
};

export const handler = ({ request }: CloudfrontFunctionEvent) => {
  request.uri = request.uri.replace(/\/$/, "/index.html");
  return request;
};
