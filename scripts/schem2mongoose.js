
var in_schema, inspect, json_schema, mongoose_schema;

inspect = require('util').inspect;

json_schema = require('json-schema-converter');

in_schema = require(process.argv[2]);

if (!json_schema.is_valid(in_schema)) {
  throw new Error("JSON Schema is invalid, error is: " + (inspect(json_schema.validate(in_schema))));
}

mongoose_schema = json_schema.to_mongoose_schema(in_schema);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/interact');

var mongoose_object = new mongoose.Schema(mongoose_schema);

console.log("mongoose schema output: #{inspect mongoose_schema}")
