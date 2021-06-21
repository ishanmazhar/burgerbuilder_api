let a = [
    { income: 100, exp: 20 },
    { income: 200, exp: 10 },
    { income: 300, exp: 50 },
    { income: 50, exp: 40 },
    { income: 120, exp: 70 },
    { income: 180, exp: 90 },
    { income: 400, exp: 200 },
    { income: 120, exp: 70 },
    { income: 180, exp: 90 },
    { income: 400, exp: 200 },
]

console.log(a.length)
let totalIncome = 0
let totalExp = 0
for(var i in a) {   // for(var i=0; i < a.length; i++) 
    totalIncome += a[i].income;
    totalExp += a[i].exp;
}

console.log("Total Savings = ", totalIncome - totalExp)

let addAcc = document.getElementById("addAcc")
addAcc.addEventListener('click', addAccount);

let formField = document.getElementById("form-field")

function addAccount(e) {
    e.preventDefault();
    formField.innerHTML = `
        <fieldset>
            <label>Income: </label>
            <input type="number" id="income" style="border: solid;" /><br><br>

            <label>Expense: </label>
            <input type="number" id="exp" style="border: solid;" />

        </fieldset><br><br>
    `
}