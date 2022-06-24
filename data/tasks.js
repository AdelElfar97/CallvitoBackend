//the hardcoded array
let data = [
  {
    id:"1",
    title: "Learn React",
    description: "Learn how to use react in building web app",
  },
  {
    id:"2",
    title: "Learn Node",
    description: "Learn how to use node in building server",
  },
  {
    id:"3",
    title: "Learn Array Manipulation",
    description: "Learn how to manipulate arrays in javascript",
  },
];

//a class has functions to manipulate the data
class handleData {
  alreadExist = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        return true;
      }
    }
    return false;
  };
  //function to return the data
  get = () => {
    return data;
  };

  //add new item to the array
  add = (id, title, description) => {
    if (!this.alreadExist(id)) {
      data.push({
        id: id,
        title: title,
        description: description,
      });
      return "added";
    } else {
      return "id already exists";
    }
  };

  //edit the item(task)
  edit = (id, title, description) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        if (title) data[i].title = title;

        if (description) data[i].description = description;
        return true;
      }
    }
    return false;
  };

  //delete a task
  del = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i, 1);
        return true;
      }
    }
    return false;
  };

  //search for a task given the filter(title or description)
  search = (searchMethod, searchValue) => {
    let searched = [];

    for (let i = 0; i < data.length; i++) {
      let position = data[i][searchMethod]
        .toLowerCase()
        .search(searchValue.toLowerCase());
      if (position !== -1) {
        searched.push(data[i]);
      }
    }
    console.log(searched)
    return searched;
  };
}

module.exports = handleData;
