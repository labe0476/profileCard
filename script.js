const url = "https://dummyjson.com/users";
const fetchData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

let allUser = document.querySelector("#allUser");

fetch(url, fetchData)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let users = data.users;
    console.log(users);

    allUser.innerHTML = users.map(function (value, index, array) {
        return `
    
            <div class="eachUsers">
           <span> <img src="${value.image}" alt=""></img> </span>
    <div>
      <p>

        <b>Name:</b> ${value.firstName} ${value.middleName} ${value.lastName}
      </p>
    </div>
                 <p><b>Gender: </b>${  value.gender}</p>
                  <p><b>Address: </b>${ value.address.address}</p>
                  <p><b>Company: </b>${ value.company.title}</p>
                  <p><b>Phone: </b>${ value.phone}</p>
                  <p><b>Email: </b>${ value.email}</p>
                  

              </div>
          `;
      })
      .join("");
  })
  .catch(function (error) {
    alert("Error fetching product");
    console.log(error);
  });
