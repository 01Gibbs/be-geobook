export const handleCustomError = (error, request, response, next) => {
  if (error.status && error.msg) {
    return response.status(error.status).send({ msg: error.msg });
  } else {
    next(error);
  }
};

export const handle500s = (error, request, response) => {
  console.log(error);
  return response.status(500).send({
    msg: "Pirates have stolen the map piece! We'll get back to you when we have it back!",
  });
};

export const handleMongooseErrors = (error, request, response, next) => {
  if(error.errors) {
    const kind = error.errors[Object.keys(error.errors)[0]].kind
    const path = error.errors[Object.keys(error.errors)[0]].path
    if (kind === 'required') {
      return response.status(400).send({ msg: `${path} is a required field` });
    } else if (kind === 'string') {
      return response.status(400).send({ msg: `${path} field should be a ${kind}` });
    } 
  } else {
    next(error)
  }

}