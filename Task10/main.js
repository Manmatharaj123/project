console.log("Hello world");
class Person {
  constructor(firstName, lastName, email, mobile, dob, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobile = mobile;
    this.dob = dob;
    this.address = address;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

/*function Person(firstName, lastName, email, mobile, dob, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.mobile = mobile;
  this.dob = dob;
  this.address = address;
}*/

const person1 = new Person(
  "Asai",
  "thambi",
  "asai@gmail",
  "9972935543",
  "19-05-1988",
  { city: "tirunelveli", pincode: "627011" }
);

const person2 = new Person(
  "Asai123",
  "thambi324",
  "asai343@gmail",
  "9972935543",
  "19-05-1988",
  { city: "tirunelveli", pincode: "627011" }
);

console.log(person1.fullName());

const persons = [
  {
    firstName: "asas",
    lastName: "thambi",
    email: "asas@gmail.com",
    dob: "1988-05-19",
    address: {
      city: "tn",
      pincode: "627011",
    },
  },
  {
    firstName: "asas",
    lastName: "thambi",
    email: "asas@gmail.com",
    dob: "1988-05-19",
    address: {
      city: "tn",
      pincode: "627011",
    },
  },
];

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const ul = document.createElement("ul");
ul.id = "person-list";

let ulHtml = `<table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>
                         </tr>`;
for (personobj of persons) {
  ulHtml += `<tr>
                <td>${personobj.firstName}</td>
                <td>${personobj.lastName}</td>
                <td>${personobj.email}</td>
                <td>${getAge(personobj.dob)}</td>
            </tr>`;
}

ulHtml += `</tbody>
        </table>`;
console.log(ulHtml);
ul.innerHTML = ulHtml;

document.body.appendChild(ul);
