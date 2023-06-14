const fs = require("fs");
const readline = require("readline");
const path = require("path");
const crayon = require("../../models/crayon/crayon");

const router_construct = require("../code_parts/router_parts");
const services_construct = require("../code_parts/services_part");
const controller_construct = require("../code_parts/controller_parts")

const checkDirectory = async () => {
  return new Promise((resolve, reject) => {
    fs.access(path.join(process.cwd(), "octp.json"), fs.constants.F_OK, (err) => {
      if (err) reject();
      resolve();
    })
  })
}

const buildNewRoute = async (router_name) => {
  const lines = [];
  const routerPath =  path.join(process.cwd(), '/src/routes');

  // create folder or ignoring
  await buildNewFolder(routerPath);

  if (fs.existsSync(path.join(routerPath, `${router_name}.js`))) {
    console.log(new crayon().red(`The Route ${router_name} already exists`))
    process.exit(1);
  }

  // adding router file with chosen name
  fs.writeFile(path.join(routerPath, `${router_name}.js`), router_construct(router_name), "utf-8", (err) => {
    if (err) console.log(new crayon().red(err));
  })

  // modify app.js to adding new route
  const reader = readline.createInterface({
    input: fs.createReadStream(path.join(process.cwd(), "/src/app.js")),
    crlfDelay: Infinity
  })
  .on("line", (line) => lines.push(line))
  .on("close", () => {
    const topText = lines.slice(0, lines.length -1).join("\n");
    const bottomText = lines[lines.length -1];
    const app_construct = `${topText}\napp.use("/${router_name}", require("./routes/${router_name}"));\n\n${bottomText}`

    fs.writeFile(path.join(process.cwd(), "/src/app.js"), app_construct, "utf-8", (err => {
      if (err) return
    }))

  })
}

const buildNewService = async (service_name) => {
  const servicesPath =  path.join(process.cwd(), '/src/services');

  // create folder or ignoring
  await buildNewFolder(servicesPath);

  // adding router file with chosen name
  fs.writeFile(path.join(servicesPath, `${service_name}Service.js`), services_construct(service_name), "utf-8", (err) => {
    if (err) console.log(new crayon().red(err));
  })
}

const buildNewController = async (controller_name) => {
  const controllerPath = path.join(process.cwd(), '/src/controllers');

  // create folder or ignoring
  await buildNewFolder(controllerPath);

  // adding router file with chosen name
  fs.writeFile(path.join(controllerPath, `${controller_name}Controller.js`), controller_construct(controller_name), "utf-8", (err) => {
    if (err) console.log(new crayon().red(err));
  })

}

const buildNewFolder = async (targetDirectory) => {
  try {
    await fs.promises.mkdir(targetDirectory);
  } catch (err) {}
};

module.exports = { checkDirectory, buildNewRoute, buildNewService, buildNewController, buildNewFolder }