const path = require("path");
const fs = require("fs");
const readline = require("readline");
const { buildNewFolder } = require("./clone_endpoint");

const buildNewRouteExpress = async (router_name) => {
    const lines = [];
    const routerPath = path.join(process.cwd(), '/src/routes');

    // create new folder or ignoring 
    await buildNewFolder(routerPath);

    if (fs.existsSync(path.join(routerPath, `${router_name}.js`))) {
        console.log(new crayon().red(`The Route ${router_name} already exists`))
        process.exit(1);
    }

    // adding router file with chosen name
    fs.writeFile(path.join(routerPath, `${router_name}.js`), "", "utf-8", (err) => {
        if (err) console.log(new crayon().red(err));
    })

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

module.exports = buildNewRouteExpress;