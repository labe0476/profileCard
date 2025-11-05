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
            <img src="${users.images}" alt=""></img>
    <div>
      <span>

        <b>Name:</b>${users.firstName} ${users.middleName} ${users.lastName}
      </span>
    </div>;
                 <p><b>Gender:</b>${users.gender}</p>
                  <p><b>Address:</b>${users.address}</p>
                  <p><b>Company:</b>${users.company}</p>;
                  <p><b>Phone:</b>${users.phone}</p>
                  <p><b>Email</b>${users.email}</p>
                  

              </div>
          `;
      })
      .join("");
  })
  .catch(function (error) {
    alert("Error fetching product");
    console.log(error);
  });
