const express = require("express");
const app = express();
const port = 3001;
const getvotersRouter = require("./routes/getVoters");
const getfederalRouter = require("./routes/getFederal");
const getstateRouter = require("./routes/getState");
const getasmracesRouter = require("./routes/asmgetRaces");
const getsenracesRouter = require("./routes/sengetRaces");
const getmemberRouter = require("./routes/getMembers");

const cors = require('cors');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/voters", getvotersRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.use("/api/federalraces", getfederalRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});
app.use("/api/stateraces", getstateRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.use("/api/asmraces", getasmracesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.use("/api/senraces", getsenracesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});


app.use("/api/members", getmemberRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
