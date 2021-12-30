const btn = document.querySelector(".myButton");
const result = document.querySelector(".list");
const inputElement = document.querySelector(".input");

let dataArray = [];

let listTemplate = "";

const getDatafromStorage = () => {
  const users = JSON.parse(localStorage.getItem("user"));

  users.forEach((user) => {
    listTemplate += `<li>${user}</li>`;
  });

  result.innerHTML = listTemplate;
  listTemplate = '';
};

btn.addEventListener("click", () => {
  if (inputElement.value.length > 0) {
    dataArray.push(inputElement.value);

    const dataString = JSON.stringify(dataArray);

    localStorage.setItem("user", dataString);
    getDatafromStorage();
    inputElement.value = "";
  } else {
    alert("Please enter a value");
  }
});


getDatafromStorage();