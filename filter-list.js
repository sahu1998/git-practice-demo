const students = [
    {
        name: "Abhishek",
        email: "gupta@gmail.com",
        contact: "28121"
    },
    {
        name: "Sajal",
        email: "sahu@gmail.com",
        contact: "2221321"
    },
    {
        name: "Aradhna",
        email: "patidar@gmail.com",
        contact: "2209834"
    },
    {
        name: "Chanchal",
        email: "kag@gmail.com",
        contact: "23213122"
    },
    {
        name: "Aman",
        email: "nekiya@gmail.com",
        contact: "765721"
    },
    {
        name: "Mahesh",
        email: "patidar@gmail.com",
        contact: "24387329"
    },
    {
        name: "Shivam",
        email: "sahu@gmail.com",
        contact: "210938453"
    },
    {
        name: "Rahul",
        email: "ahirwar@gmail.com",
        contact: "2354353"
    },
    {
        name: "Shashank",
        email: "jain@gmail.com",
        contact: "8678444"
    },
    {
        name: "Umashankar",
        email: "sen@gmail.com",
        contact: "97665624"
    }
];

let x;

function showCompleteData() {
    let data = '';
    students.map((s, index) => {
        data += `<tr>
                    <td id="std-name-${index}">${s.name}</td> 
                    <td id="std-email-${index}">${s.email}</td> 
                    <td id="std-contact-${index}">${s.contact}</td>
                    <td><button id='up-${index}' onclick="updateData(${index})">Update</button></td>
                    <td><button id='del-${index}' onclick="deleteData(${index})">Delete</button></td>
                </tr>`;
    })
    document.getElementById("list").innerHTML = data;
}

function searchData() {
    const searchInput = document.getElementById("search").value;
    document.getElementById("list").innerHTML = '';
    students.filter((s, index) => {
        if (s.name.includes(searchInput) || s.email.includes(searchInput))
            document.getElementById("list").innerHTML += `<tr> 
                                                            <td id="std-name-${index}">${s.name}</td> 
                                                            <td id="std-email-${index}">${s.email}</td> 
                                                            <td id="std-contact-${index}">${s.contact}</td>
                                                            <td><button id='up-${index}' onclick="updateData(${index})">Update</button></td>
                                                            <td><button id='del-${index}' onclick="deleteData(${index})">Delete</button></td>
                                                        </tr>`;

    });
}

function displayForm() {
    // e.preventDefault();
    document.getElementById("addNewData").setAttribute("class", "d-none")
    document.getElementById("newData").setAttribute("class", "d-show")

}

function addNewData(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("mob").value;

    let x = {
        name, email, contact,
    }
    students.push(x);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mob").value = "";

    document.getElementById("addNewData").setAttribute("class", "d-show")
    document.getElementById("newData").setAttribute("class", "d-none")

    showCompleteData();
}

function deleteData(id) {
    console.log(id);
    students.splice(id, 1)
    showCompleteData();

}

function updateData(id) {
    console.log(students[id].name + " " + students[id].email + " " + students[id].contact);
    x = students[id];
    document.getElementById(`std-name-${id}`).innerHTML = `<input type="text" id="update-name-${id}" placeholder="${x.name}">`;
    document.getElementById(`std-email-${id}`).innerHTML = `<input type="text" id="update-em-${id}" placeholder="${x.email}">`;
    document.getElementById(`std-contact-${id}`).innerHTML = `<input type="text" id="update-mob-${id}" placeholder="${x.contact}">`;
    document.getElementById(`up-${id}`).innerText = "Save";
    document.getElementById(`up-${id}`).setAttribute("onclick", `saveData(${id})`);

}

function saveData(id) {
    console.log(x)
    let name = document.getElementById(`update-name-${id}`).value;
    let email = document.getElementById(`update-em-${id}`).value;
    let contact = document.getElementById(`update-mob-${id}`).value;
    if (name) {
        console.log(name+"!!!!!!!!!");
        students[id].name=name;
    }
    if(email){
        students[id].email = email;
    }
    
    if(contact){
        students[id].contact = contact;
    }
    showCompleteData();

}