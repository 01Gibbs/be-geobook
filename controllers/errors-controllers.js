exports.handleCustomError = (error, request, response, next) => {
  if (error.status && error.msg) {
    return response.status(error.status).send({ msg: error.msg });
  } else {
    next(error);
  }
};

exports.handleMongooseErrors = (error, request, response, next) => {
  if (error.errors) {
    const kind = error.errors[Object.keys(error.errors)[0]].kind;
    const path = error.errors[Object.keys(error.errors)[0]].path;
    if (kind === "required") {
      return response.status(400).send({ msg: `${path} is a required field` });
    } else if (kind === "string" || kind === "[Number]") {
      return response
        .status(400)
        .send({ msg: `${path} field should be a ${kind}` });
    } else {
      console.log('mongoose unresolved error', error.errors)
    }
  } else if (error.kind) {
    return response
      .status(400)
      .send({ msg: `${error.path} field should be a ${error.kind}` });
  } else {
    next(error);
  }
};

exports.handle500s = (error, request, response, next) => {
  console.log(error);
  return response.status(500).send({
    msg: "Internal Server Error",
  });
};
