/**
 *
 * @param {td|th} tagname
 * @param {string} inner
 * @param {HTMLTableRowElement} parent
 */
function creatTableCell(tagname, inner, parent){
    const td = document.createElement(tagname);
    td.innerHTML = inner;
    parent.appendChild(td);
    return td;
}
function creatHtmlElement(tag, id, parent)
{
    const elem = document.createElement(tag)
    elem.id=id;
    parent.appendChild(elem)
}
function creatHtmlElementWithParentId(tag, id, parentid)
 {
    const par = document.getElementById(parentid)
    if(par != undefined)
    {
        creatHtmlElement(tag, id, par)
    }
 }

function renderTableHeader(personarray)
{
    const parent = document.getElementById(personarray)
    creatTableCell("th","vezetéknév",parent)
    const kerszt= creatTableCell("th","keresztnév", parent)
    kerszt.colSpan = 2
    creatTableCell("th","házas",parent)
    creatTableCell("th","állat",parent)
}

function renderTable() {
    const tbody = document.getElementById("persontbody")
    tbody.innerHTML = "";
    for (const pers of array) {
        const tr_body = document.createElement("tr");
        tbody.appendChild(tr_body);
        const td_lastname = document.createElement("td");
        td_lastname.innerHTML = pers.lastname;
        tr_body.appendChild(td_lastname);
        const td_firstname1 = document.createElement("td");
        td_firstname1.innerHTML = pers.firstname1;
        tr_body.appendChild(td_firstname1);


        if (pers.firstname2 === undefined) {
            td_firstname1.colSpan = 2;
        } else {
            const td_firstname2 = document.createElement("td");
            td_firstname2.innerHTML = pers.firstname2;
            tr_body.appendChild(td_firstname2);
        }
        tr_body.addEventListener("click", function (e) {
            console.log("clicked");
            const select = tbody.querySelector(".selected");
            if (select != undefined) {
                select.classList.remove("selected");
            }
            e.currentTarget.classList.add("selected");
        });
        const td_pet = document.createElement("td");
        td_pet.innerHTML = pers.pet;
        tr_body.appendChild(td_pet);
        if (pers.married == true) {
            const td_married = document.createElement("td");
            td_married.innerHTML = "igen";
            tr_body.appendChild(td_married);
        } else {
            const td_married = document.createElement("td");
            td_married.innerHTML = "nem";
            tr_body.appendChild(td_married);
        }

 
    }

}