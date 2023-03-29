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
  return response.status(500).send({
    msg: "Pirates have stolen the map piece! We'll get back to you when we have it back!",
  });
};
