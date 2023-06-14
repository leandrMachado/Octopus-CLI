const path = require("path");
const fs = require("fs");
const { buildNewFolder } = require("./clone_endpoint");

const buildNewControllerExpress = async (controller_name) => {
    const controllerPath = path.join(process.cwd(), '/src/controllers');

    // create folder or ignoring
    await buildNewFolder(controllerPath);

    // adding router file with chosen name
    fs.writeFile(path.join(controllerPath, `${controller_name}Controller.js`), "", "utf-8", (err) => {
        if (err) console.log(new crayon().red(err));
    })
}

module.exports = buildNewControllerExpress;