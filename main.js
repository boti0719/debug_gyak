let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    }
]

creatHtmlElement("table", "persontable", document.body);
creatHtmlElementWithParentId("thead", "personthead", "persontable");
creatHtmlElementWithParentId("tbody", "persontbody", "persontable");

renderTableHeader("personthead");
renderTable(array);


const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const lastName = document.getElementById("lastname");
    const firstName1 = document.getElementById("firstname1");
    const firstName2 = document.getElementById("firstname2");
    const married = document.getElementById("married");
    const pet = document.getElementById("pet");

    const lastNameValue = lastName.value;
    const firstName1Value = firstName1.value;
    let firstName2Value = firstName2.value;
    const marriedValue = married.checked;
    const petValue = pet.value;

    if (firstName2Value === "") {
        firstName2Value = undefined;
    }
    const newPerson = {
        firstname1: firstName1Value,
        firstname2: firstName2Value,
        lastname: lastNameValue,
        married: marriedValue,
        pet: petValue
    }

    if (validateField(lastName, firstName1, pet)) {
        array.push(newPerson);
        console.log(array)


        renderTable(array);
    }

})



function validateField(lastname, firstName1, pet) {
    let result = true
    if (lastname.value === "") {
        const apa = lastname.parentElement
        const error = apa.querySelector(".error")
        error.innerHTML = "kötelező"
        result = false

    }
    if (firstName1.value === "") {
        const firstapa = firstName1.parentElement
        const firsterror = firstapa.querySelector(".error")
        firsterror.innerHTML = "kötelező"
        result = false
    }
    if (pet.value === "") {
        const petapa = pet.parentElement
        const peterror = petapa.querySelector(".error")
        peterror.innerHTML = "kötelező"
        result = false
    }
    return result
}