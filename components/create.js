const fs = require("fs");
const crayon = require("../models/crayon/crayon");
const path = require("path");
const listr = require("listr");
const { clone, cloneService, cloneRouter, initializeGit } = require("./clone_repository/clone_repository")

const createProject = async (options) => {
    const tasks = new listr([
        {
            title: "Creating folder.",
            task: async () => await createFolder(options)
        },
        {
            title: 'Copy project files',
            task: async () => clone(options)
        },
        {
            title: "Initialize git",
            task: async () => initializeGit(options)
        }
    ])

    await tasks.run();
    console.log('%s Project ready', new crayon().green.bold("DONE → "));
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

const createService = async (service_name) => {
    console.log("ola")
}

module.exports = { createProject, createService }