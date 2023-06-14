const crayon = require("../models/crayon/crayon");
const listr = require("listr");
const { createNewWorkSpace, createFolder, execa } = require("./manage_cloning/clone_work_space");
const { checkDirectory, buildNewRoute, buildNewService, buildNewController } = require("./manage_cloning/clone_endpoint");
const buildNewRouteExpress = require("./manage_cloning/clone_router");
const buildNewServiceExpress = require("./manage_cloning/clone_service");
const buildNewControllerExpress = require("./manage_cloning/clone_controller");

const createProject = async (options) => {
    const tasks = new listr([
        {
            title: "Creating folder.",
            task: async () => await createFolder(options)
        },
        {
            title: 'Copy project files',
            task: async () => createNewWorkSpace(options)
        },
        {
            title: "Initialize git",
            task: async () => execa(options, "git init")
        },
        {
            title: "Installing packages",
            task: async () => execa(options, "npm install")
        }
    ])

    await tasks.run();
    console.log('%s Project ready', new crayon().green.bold("DONE → "));
}

const createEndpoint = async (options) => {

    checkDirectory().then( async () => {
        await tasks.run()
        console.log('%s Project ready', new crayon().green.bold("DONE → "));
    })
    .catch((err) => {
        console.error(new crayon().red(`This command only run inside of project directory`));
        process.exit(1);
    })

    const tasks = new listr([
        {
            title: `Building new ${options} service`,
            task: async () => buildNewService(options)
        },
        {
            title: `Building new ${options} controller`,
            task: async () => buildNewController(options)
        },
        {
            title: `Building new ${options} router`,
            task: async () => buildNewRoute(options)
        }
    ])
}

const createRouter = async (options) => {
    checkDirectory().then( async () => {
        await tasks.run()
        console.log('%s Project ready', new crayon().green.bold("DONE → "));
    })
    .catch((err) => {
        console.error(new crayon().red(`This command only run inside of project directory`));
        process.exit(1);
    }) 
    
    const tasks = new listr([
        {
            title: `Building new ${options} router`,
            task: async () => buildNewRouteExpress(options)
        }
    ])
}

const createService = async (options) => {
    checkDirectory().then( async () => {
        await tasks.run()
        console.log('%s Project ready', new crayon().green.bold("DONE → "));
    })
    .catch((err) => {
        console.error(new crayon().red(`This command only run inside of project directory`));
        process.exit(1);
    }) 

    const tasks = new listr([
        {
            title: `Building new ${options} service`,
            task: async () => buildNewServiceExpress(options)
        }
    ])
}

const createController = async (options) => {
    checkDirectory().then( async () => {
        await tasks.run()
        console.log('%s Project ready', new crayon().green.bold("DONE → "));
    })
    .catch((err) => {
        console.error(new crayon().red(`This command only run inside of project directory`));
        process.exit(1);
    }) 

    const tasks = new listr([
        {
            title: `Building new ${options} controller`,
            task: async () => buildNewControllerExpress(options)
        }
    ])
}

module.exports = { createProject, createEndpoint, createRouter, createService, createController }