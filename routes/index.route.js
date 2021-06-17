const myMiddleware = (req, res, next) => {
  console.log("Estoy ejecutando mi primer middleware dentro de index");
  next();
};

