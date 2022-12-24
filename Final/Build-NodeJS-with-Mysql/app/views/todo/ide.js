const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser());

//compileX
const compiler = require("compilex");
const option = { stats: true };
compiler.init(option);

app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.post("/compilecode", function (req, res) {
  const code = req.body.code;
  const input = req.body.input;
  const inputRadio = req.body.inputRadio;
  const lang = req.body.lang;
  if (lang === "C++") {
    if (inputRadio === "true") {
      const envData = {
        OS: "linux",
        cmd: "g++",
        options: { timeout: 600000 },
      };
      compiler.compileCPPWithInput(envData, code, input, function (data) {
        if (data.error) {
          res.send(data.error);
        } else {
          res.send(data.output);
        }
      });
    } else {
      const envData = {
        OS: "linux",
        cmd: "g++",
        options: { timeout: 600000 },
      };
      compiler.compileCPP(envData, code, function (data) {
        if (data.error) {
          res.send(data.error);
        } else {
          res.send(data.output);
        }
      });
    }
  }
  if (lang === "C") {
    if (inputRadio === "true") {
      const envData = {
        OS: "linux",
        cmd: "gcc",
        options: { timeout: 600000 },
      };
      compiler.compileCPPWithInput(envData, code, input, function (data) {
        if (data.error) {
          res.send(data.error);
        } else {
          res.send(data.output);
        }
      });
    } else {
      const envData = {
        OS: "linux",
        cmd: "gcc",
        options: { timeout: 600000 },
      };
      compiler.compileCPP(envData, code, function (data) {
        if (data.error) {
          res.send(data.error);
        } else {
          res.send(data.output);
        }
      });
    }
  }
  if (lang === "Java") {
    if (inputRadio === "true") {
      const envData = { OS: "linux", options: { timeout: 600000 } };
      console.log(code);
      compiler.compileJavaWithInput(envData, code, input, function (data) {
        res.send(data);
      });
    } else {
      const envData = { OS: "linux", options: { timeout: 600000 } };
      console.log(code);
      compiler.compileJava(envData, code, function (data) {
        res.send(data);
      });
    }
  }
  if (lang === "Python") {
    if (inputRadio === "true") {
      const envData = { OS: "linux", options: { timeout: 600000 } };
      compiler.compilePythonWithInput(envData, code, input, function (data) {
        res.send(data);
      });
    } else {
      const envData = { OS: "linux", options: { timeout: 600000 } };
      compiler.compilePython(envData, code, function (data) {
        res.send(data);
      });
    }
  }
  if (lang === "CS") {
    if (inputRadio === "true") {
      const envData = { OS: "linux", options: { timeout: 600000 } };
      compiler.compileCSWithInput(envData, code, input, function (data) {
        res.send(data);
      });
    } else {
      const envData = { OS: "linux", options: { timeout: 600000 } };
      compiler.compileCS(envData, code, function (data) {
        res.send(data);
      });
    }
  }
});

app.get("/fullStat", function (req, res) {
  compiler.fullStat(function (data) {
    res.send(data);
  });
});

app.listen(3000);
