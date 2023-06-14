const service_construct = (service_name) => {
  return `const get${service_name.charAt(0).toUpperCase() + service_name.slice(1)} = async () => {
  return "The ${service_name} is online!!"
}

module.exports = { get${service_name.charAt(0).toUpperCase() + service_name.slice(1)} }
`;
};

module.exports = service_construct;
