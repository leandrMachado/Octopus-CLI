const path = require("path");
const fs = require("fs");
const { buildNewFolder } = require("./clone_endpoint");

const buildNewServiceExpress = async (service_name) => {
    const servicesPath = path.join(process.cwd(), '/src/services');

    // create folder or ignoring
    await buildNewFolder(servicesPath);

    // adding router file with chosen name
    fs.writeFile(path.join(servicesPath, `${service_name}Service.js`), "", "utf-8", (err) => {
        if (err) console.log(new crayon().red(err));
    })
}

module.exports = buildNewServiceExpress;