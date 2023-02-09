'use strict'

let filter = document.getElementById("filter");
let result = document.getElementById("result");
let listItems = [];

function usersRequist(url) {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject("Error");
      });
  });
}

usersRequist()
  .then((response) => {
    response.data.forEach((element) => {
      let li = document.createElement("li");
      let img = document.createElement('img');

      img.src = `${element.avatar}`;
      li.innerText = `${element.email}`; 
      

      listItems.push(li);
    
      li.appendChild(img);
      result.appendChild(li);   
     
    });
  })
  .catch((reject) => console.log(reject));

function filterData(searchSymbol) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchSymbol.toLowerCase())) {
      item.classList.remove("hide");
    } 
    else {
      item.classList.add("hide");
    }
  });
}

filter.addEventListener("keyup", function (event) {
  filterData(event.target.value);
});