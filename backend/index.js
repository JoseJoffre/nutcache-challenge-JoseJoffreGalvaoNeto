const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const { env } = process;

app.listen(7000, () => {
  console.log(`\n*** Server running on port 7000 ***\n`);
});
