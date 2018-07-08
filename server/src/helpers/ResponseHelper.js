export const ResponseHelper = {
  headAndContentResponse: true,
  respondWithError: (responseObj, status, message, body) => responseObj.status(status).send({
    error: {
      message,
      body,
    },
  }),
  respondWithSuccess: (responseObj, status, message, body, headAndContentFlag) => {
    if (!headAndContentFlag) {
      return responseObj.status(status).send({
        header: message,
        content: body,
      });
    }
    return responseObj.status(status).send({
      message,
      header: body.header,
      content: body.content,
    });
  },
};
