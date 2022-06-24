const handleData = require("../data/tasks");
let obj = new handleData();

exports.get_tasks = (request, response, next) => {


    response.status(200).json(obj.get());
  
};

exports.search_tasks = (request, response, next) => {
  response.status(200).json(obj.search(request.params.searchMethod,request.params.searchValue));

};


exports.add_task = (request, response, next) => {
  let res = obj.add(request.body.id,request.body.title,request.body.description)
  
  response.status(200).json(obj.get());

};

exports.edit_task = (request, response, next) => {
  let res = obj.edit(request.body.id,request.body.title,request.body.description)
  
  response.status(200).json(obj.get());

};

exports.del_task = (request, response, next) => {
  let res = obj.del(request.body.id,request.body.title,request.body.description)
  
  response.status(200).json(obj.get());

};

