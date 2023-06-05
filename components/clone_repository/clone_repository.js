const path = require("path");
const ncp = require("ncp");
const copy = require("util").promisify(ncp);
const { exec } = require("child_process");

const clone = async (targetDirectoryName) => {
    const fullTargetDirectory = path.join(process.cwd(), targetDirectoryName);
    return await cloneFiles(fullTargetDirectory, "api");
};

const cloneService = () => {};

const cloneRouter = () => {};

const cloneFiles = async (targetDirectory, service) => {
    const cloneDirectory = path.join(__dirname, `../../templates/${service}`);

    return copy(cloneDirectory, targetDirectory, {
        clobber: false
    })
}

const initializeGit = async (directory_name) => {
    const fullTargetDirectory = path.join(process.cwd(), directory_name);

    return new Promise((resolve, reject) => {
        exec("git init", { cwd: fullTargetDirectory }, (err, stdout, stdin) => {
            if (err)
                reject(err)
            else
                resolve(stdout.trim())
        } )
    })

}

module.exports = { clone, cloneService, cloneRouter, initializeGit };
