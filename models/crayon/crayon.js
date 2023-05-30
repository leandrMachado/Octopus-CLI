const ansi_colors = require("./ansi-styles/ansi.json");

class crayon {
  constructor() {
    this.red = new Proxy((string) => { return applyOptions(string, ansi_colors.red.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.red.bold);
            };
          else
            return () => {
              throw new Error("Sintaxe error");
            };
        },
      }
    );

    this.blue = new Proxy((string) => { return applyOptions(string, ansi_colors.blue.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.blue.bold);
            };
          else
            return () => {
                throw new Error("Sintaxe error");
            };
        },
      }
    );

    this.green = new Proxy((string) => { return applyOptions(string, ansi_colors.green.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.green.bold);
            };
          else
            return () => {
                throw new Error("Sintaxe error");
            };
        },
      }
    );

    this.yellow = new Proxy((string) => { return applyOptions(string, ansi_colors.yellow.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.yellow.bold);
            };
          else
            return () => {
                throw new Error("Sintaxe error");
            };
        },
      }
    );

    this.purple = new Proxy((string) => { return applyOptions(string, ansi_colors.purple.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.purple.bold);
            };
          else
            return () => {
                throw new Error("Sintaxe error");
            };
        },
      }
    );
    
    this.gray = new Proxy((string) => { return applyOptions(string, ansi_colors.gray.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.gray.bold);
            };
          else
            return () => {
                throw new Error("Sintaxe error");
            };
        },
      }
    );

    this.coral = new Proxy((string) => { return applyOptions(string, ansi_colors.coral.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.coral.bold);
            };
          else
            return () => {
                throw new Error("Sintaxe error");
            };
        },
      }
    );

    this.orange = new Proxy((string) => { return applyOptions(string, ansi_colors.orange.normal) },
      {
        get: (target, prop) => {
          if (prop === "bold")
            return (string) => {
              return applyOptions(string, ansi_colors.orange.bold);
            };
          else
            return () => {
                throw new Error("Sintaxe error");
            };
        },
      }
    );
  }
}

const applyOptions = (string, color) => {
  const reset = "\x1b[0m";
  return color + string + reset;
};

module.exports = crayon;
