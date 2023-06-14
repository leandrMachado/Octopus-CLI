const router_construct = (route_name) => {
  return `const router = require("express").Router();
const ${route_name}Controller = require("../controllers/${route_name}Controller");

router.get("/", ${route_name}Controller.get${
    route_name.charAt(0).toUpperCase() + route_name.slice(1)
  });

module.exports = router;`;
};

module.exports = router_construct;