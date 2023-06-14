const controller_construct = (controller_name) => {
    return `const ${controller_name}Services = require("../services/${controller_name}Service");

const get${controller_name.charAt(0).toUpperCase() + controller_name.slice(1)} = async (req, res) => {
    try {
        const result = await ${controller_name}Services.get${controller_name.charAt(0).toUpperCase() + controller_name.slice(1)}();
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { get${controller_name.charAt(0).toUpperCase() + controller_name.slice(1)} }
    `
};
  
module.exports = controller_construct;

