exports.post = (req, res, next) => {
  console.dir("socorro, Deus");
  req.on("data", (chunk) => {
    console.log("You received a chunk of data", chunk);
  });
  res.status(201).send(req == undefined);
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

exports.get = (req, res, next) => {
  console.dir(req.query);
  res.status(200).send("Rota GET!");
};

exports.getById = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Rota GET com ID! ${id}`);
};
