const fs = require("fs");
const crayon = require("../models/crayon/crayon");
const path = require("path");
const listr = require("listr");

const createProject = async (options) => {
    const tasks = new listr([
        {
            title: "Creating folder.",
            task: async () => await createFolder(options)
        }
    ])

    await tasks.run();
    console.log('%s Project ready', new crayon().green.bold("DONE"));
}

const createFolder = async (targetDirectoryName) => {
    try {
        const fullTargetDirectory = path.join(process.cwd(), targetDirectoryName);
        await fs.promises.mkdir(fullTargetDirectory);
    }
    catch (err) {
        console.error(new crayon().red(`It was not possible to create the folder '${targetDirectoryName}': Folder already exists`))
        process.exit(1);
    }
}

module.exports = { createProject }