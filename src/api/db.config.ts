const user = "dbuser";
const pwd = "dbpwd";
const dbname = "dbname";

const config = {
  url: `mongodb+srv://${user}:${pwd}@cluster0.hiagg.mongodb.net/${dbname}?retryWrites=true&w=majority`,
};

export default config;
