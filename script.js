var students = [
    {
        firstname: "Aïda",
        lastname: "Loemba"
    },
    {
        firstname: "Amruta",
        lastname: "Karanjekar"
    },
    {
        firstname: "Ana",
        lastname: "Durguz"
    },
    {
        firstname: "Elko",
        lastname: "Lemiso"
    },
    {
        firstname: "Melanie",
        lastname: "Nachef"
    },
    {
        firstname: "Nardo",
        lastname: "Kraaijeveld"
    },
    {
        firstname: "Nienke",
        lastname: "Westdijk"
    },
    {
        firstname: "Varun",
        lastname: "Kumar Chalotra"
    },
];

// Iteration 1
document.querySelector("h1").innerHTML = "hello class!";

// Iteration 2
let pElem = document.createElement("P");
pElem.innerHTML = "Today we're going to solidify our DOM skills!";
document.body.appendChild(pElem);

// Iteration 3
for (let x=0;x<students.length;x++){
    let studentsElem = document.createElement("H3");
    studentsElem.innerHTML = `Firstname: ${students[x].firstname}, Lastname: ${students[x].lastname}`;
    document.body.appendChild(studentsElem);
}

// Iteration 4
for (let x=0;x<students.length;x++){
    let studentsPic = document.createElement("IMG");
    studentsPic.setAttribute("src",`https://wd-ft-may.s3.amazonaws.com/${students[x].firstname}.png`);
    studentsPic.classList.add("picture")
    document.body.appendChild(studentsPic);
}


// Iteration 5
let studentsPictures = document.querySelectorAll(".picture");
for (x=0;x<studentsPictures.length;x++){
  studentsPictures[x].style.width = "200px";
  studentsPictures[x].style.border = "5px solid black";
}

function favPicture(){
    let header2 = document.querySelector("h2");
    let randomStudent = studentsPictures[Math.floor(Math.random() * studentsPictures.length)];
    header2.replaceChild(randomStudent,header2.childNodes[0]);
}


btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    favPicture();
});

