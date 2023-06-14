const path = require("path");
const ncp = require("ncp");
const crayon = require("../../models/crayon/crayon");
const copy = require("util").promisify(ncp);
const { exec } = require("child_process");
const fs = require("fs");

const createNewWorkSpace = async (targetDirectoryName) => {
  const targetDirectory = path.join(process.cwd(), targetDirectoryName);
  const cloneDirectory = path.join(__dirname, `../../templates/api`);

  fs.readFile(
    path.join(__dirname, "../../package.json"),
    "utf8",
    (err, data) => {
      if (err) console.log(new crayon().red(err));

      const parseFile = JSON.parse(data);
      const octpFile = {
        version: parseFile.version,
        name: targetDirectoryName,
      };

      fs.writeFile(
        path.join(targetDirectory, "octp.json"),
        JSON.stringify(octpFile, null, 2),
        "utf8",
        (err) => {
          if (err) console.log(new crayon().red(err));
        }
      );
    }
  );

  const package = {
    name: "",
    version: "1.0.0",
    description: "",
    main: "src/server.js",
    scripts: {
      "start:dev": "nodemon server.js",
    },
    keywords: [],
    author: "",
    license: "ISC",
    dependencies: {
      "body-parser": "^1.20.2",
      cors: "^2.8.5",
      dotenv: "^16.1.4",
      express: "^4.18.2",
      nodemon: "^2.0.22",
    },
  };

  package.name = targetDirectoryName;

  fs.writeFile(
    path.join(targetDirectory, "package.json"),
    JSON.stringify(package, null, 2),
    "utf8",
    (err) => {
      if (err) console.log(new crayon().red(err));
    }
  );

  return copy(cloneDirectory, targetDirectory, {
    clobber: false,
  });
};

const createFolder = async (targetDirectoryName) => {
  try {
    const fullTargetDirectory = path.join(process.cwd(), targetDirectoryName);
    await fs.promises.mkdir(fullTargetDirectory);
  } catch (err) {
    console.error(
      new crayon().red(
        `It was not possible to create the folder '${targetDirectoryName}': Folder already exists`
      )
    );
    process.exit(1);
  }
};

const execa = async (directory_name, command) => {
  const fullTargetDirectory = path.join(process.cwd(), directory_name);

  return new Promise((resolve, reject) => {
    exec(command, { cwd: fullTargetDirectory }, (err, stdout, stdin) => {
      if (err) reject(err);
      else resolve(stdout.trim());
    });
  });
};

module.exports = { createNewWorkSpace, createFolder, execa };
