const handleData = require("../data/tasks");
let obj = new handleData();

//get all the data
exports.get_tasks = (request, response, next) => {


    response.status(200).json(obj.get());
  
};

//get the data from search
exports.search_tasks = (request, response, next) => {
  response.status(200).json(obj.search(request.params.searchMethod,request.params.searchValue));

};

//add new task
exports.add_task = (request, response, next) => {
  let res = obj.add(request.body.id,request.body.title,request.body.description)
  
  response.status(200).json(obj.get());

};

//edit a task
exports.edit_task = (request, response, next) => {
  let res = obj.edit(request.body.id,request.body.title,request.body.description)
  
  response.status(200).json(obj.get());

};

//delete a task
exports.del_task = (request, response, next) => {
  let res = obj.del(request.body.id,request.body.title,request.body.description)
  
  response.status(200).json(obj.get());

};

