// export const handle404s = (request, response, next) => {
//   response.status(404).send({ msg: "not found" });
// };

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

  if(error.errors.name.properties.type === 'required') {
    const path = error.errors.name.properties.path
    return response.status(400).send({ msg: `${path} is a required field` });
  } else {
    next(error)
  }

}