// CREATE AN ARRAY OF EMPLOYEES
let employees=[[10010010, 'William', 1001, 'William@empl', 'Sales'], 
[20020020, 'Olivia', 2002, 'Olivia@empl', 'QA'], 
[30030030, 'Emma', 3003, 'Emma@empl', 'Marketing'], 
[40040040, 'Henry', 4004, 'Henry@empl', 'Engineering'], 
[50050050, 'Mia', 5005, 'Mia@empl', 'Executive'], 
[60060060, 'Noah', 6006, 'Noah@empl', 'Administrative']];

/* Some extra 
[
    [70070070, 'Benjamin', 7007, 'Benjamin@empl', 'Sales'],
    [80080080, 'Ava', 8008, 'Ava@empl', 'Marketing'], 
    [90090090, 'Lucas', 9009, 'Lucas@empl', 'Engineering']];
*/

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

let existingList=JSON.parse(localStorage.getItem('existingEmpl'));
if (existingList==null){
    localStorage.setItem("existingEmpl", JSON.stringify(employees));
    existingList = [...employees];
}

// GET DOM ELEMENTS
let fmEmpl = document.getElementById("addForm");
let tblEmpl = document.getElementById("empTable");



// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
window.onload = () => {buildGrid()};

// ADD EMPLOYEE
fmEmpl.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const obj       = (id) => document.getElementById(id)
    let valEmplId   = obj("id").value;
    let valEmplName = obj("name").value;
    let valEmplExt  = obj("extension").value;
    let valEmplEmail= obj("email").value;
    let valEmplDep  = obj("department").value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmpl = [valEmplId, valEmplName, valEmplExt, valEmplEmail, valEmplDep];
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    existingList.push(newEmpl);
    // BUILD THE GRID
    buildGrid();
    // RESET THE FORM
    fmEmpl.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    obj("id").focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH
    let tbodyEl = document.getElementsByTagName('tbody')[0];
    console.log (tbodyEl);
    let dataHTML='';
    for (let empl of existingList){
        dataHTML+=`
        <tr>
            <td>${empl[0]}</td>
            <td>${empl[1]}</td>
            <td>${empl[2]}</td>
            <td>${empl[3]}</td>
            <td>${empl[4]}</td>
            <td><button class='btn btn-sm bg-danger delete'>X</button></td>
        </tr>
    `;

    }
    tbodyEl.innerHTML+=dataHTML;
    console.log (tblEmpl);
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};