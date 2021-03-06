const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.UNIFORM_API_KEY;
const layoutServiceHost = process.env.UNIFORM_API_URL;

const scjssConfig = {
  sitecore: {
    apiKey,
    layoutServiceHost,
  },
};

// File path is relative to the process invocation path, e.g. `process.cwd()`
// NOTE: this will overwrite any existing `scjssconfig.json` file.
fs.writeFileSync('scjssconfig.json', JSON.stringify(scjssConfig, null, 2));
