const fs = require("fs");
const path = require("path");

exports.textReplacePlugin = {
  name: "textReplace",
  setup(build) {
    build.onLoad({ filter: /.*.tsx|.*.ts/ }, async (args) => {
      const loader = path.extname(args.path).replace(".", "");

      const source = await fs.promises.readFile(args.path, "utf8");

      const contents = source.replace(
        "@material-ui/core/Radio/RadioButtonIcon",
        "@material-ui/core/esm/Radio/RadioButtonIcon"
      );

      return { contents, loader };
    });
  },
};
