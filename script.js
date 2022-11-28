document.getElementById("Tip").value = "$" + "0.00"
document.getElementById("Total").value = "$" + "0.00"
document.getElementById("bill").value = 0
document.getElementById("people").value = 0

function five() {
    document.getElementById("btnfive").value = 5
    document.getElementById("btnten").value = 0
    document.getElementById("btnfifteen").value = 0
    document.getElementById("btntwentyfive").value = 0
    document.getElementById("btnfifty").value = 0
    document.getElementById("btnCustm").value = 0
    document.getElementById("CustmVal").style.display = "none"
    document.getElementById("btnCustm").style.display = "block"
}
document.getElementById("btnfive").addEventListener("click", five)

function ten() {
    document.getElementById("btnfive").value = 0
    document.getElementById("btnten").value = 10
    document.getElementById("btnfifteen").value = 0
    document.getElementById("btntwentyfive").value = 0
    document.getElementById("btnfifty").value = 0
    document.getElementById("btnCustm").value = 0
    document.getElementById("CustmVal").style.display = "none"
    document.getElementById("btnCustm").style.display = "block"
}
document.getElementById("btnten").addEventListener("click", ten)

function fifteen() {
    document.getElementById("btnfive").value = 0
    document.getElementById("btnten").value = 0
    document.getElementById("btnfifteen").value = 15
    document.getElementById("btntwentyfive").value = 0
    document.getElementById("btnfifty").value = 0
    document.getElementById("CustmVal").style.display = "none"
    document.getElementById("btnCustm").style.display = "block"
}
document.getElementById("btnfifteen").addEventListener("click", fifteen)

function twentyfive() {
    document.getElementById("btnfive").value = 0
    document.getElementById("btnten").value = 0
    document.getElementById("btnfifteen").value = 0
    document.getElementById("btntwentyfive").value = 25
    document.getElementById("btnfifty").value = 0
    document.getElementById("btnCustm").value = 0
    document.getElementById("CustmVal").style.display = "none"
    document.getElementById("btnCustm").style.display = "block"
}
document.getElementById("btntwentyfive").addEventListener("click", twentyfive)

function fifty() {
    document.getElementById("btnfive").value = 0
    document.getElementById("btnten").value = 0
    document.getElementById("btnfifteen").value = 0
    document.getElementById("btntwentyfive").value = 0
    document.getElementById("btnfifty").value = 50
    document.getElementById("btnCustm").value = 0
    document.getElementById("CustmVal").style.display = "none"
    document.getElementById("btnCustm").style.display = "block"
}
document.getElementById("btnfifty").addEventListener("click", fifty)

function Custom() {
    document.getElementById("btnfive").value = 0
    document.getElementById("btnten").value = 0
    document.getElementById("btnfifteen").value = 0
    document.getElementById("btntwentyfive").value = 0
    document.getElementById("btnfifty").value = 0
    document.getElementById("btnCustm").value = "Custm"
    document.getElementById("CustmVal").style.display = "block"
    document.getElementById("btnCustm").style.display = "none"
}
document.getElementById("btnCustm").addEventListener("click", Custom)

function calc() {

    if (document.getElementById("btnfive").value == 5) {
        let a = document.getElementById("bill").value / document.getElementById("people").value * 0.05;
        let resa = a.toFixed(2)
        let b = document.getElementById("bill").value / document.getElementById("people").value + document.getElementById("bill").value / document.getElementById("people").value * 0.05
        let resb = b.toFixed(2)
        let c = "Can't be zero!"
        if (document.getElementById("people").value >= 1) {
            console.log(resa)
            console.log(resb)
            document.getElementById("NpeopleErr").value = ""
            document.getElementById("people").style.borderColor = "hsl(0, 0%, 100%)"
            document.getElementById("Tip").value = "$" + resa
            document.getElementById("Total").value = "$" + resb
            document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)"
            document.getElementById("reset").style.Color = "hsl(183, 100%, 15%)"
        } else {
            document.getElementById("NpeopleErr").value = c
            document.getElementById("people").style.borderColor = "red"
            document.getElementById("Tip").value = "$" + "0.00"
            document.getElementById("Total").value = "$" + "0.00"
        }

    }

    if (document.getElementById("btnten").value == 10) {
        let a = document.getElementById("bill").value / document.getElementById("people").value * 0.1;
        let resa = a.toFixed(2)
        let b = document.getElementById("bill").value / document.getElementById("people").value + document.getElementById("bill").value / document.getElementById("people").value * 0.1
        let resb = b.toFixed(2)
        let c = "Can't be zero!"
        if (document.getElementById("people").value >= 1) {
            console.log(resa)
            console.log(resb)
            document.getElementById("NpeopleErr").value = ""
            document.getElementById("people").style.borderColor = "hsl(0, 0%, 100%)"
            document.getElementById("Tip").value = "$" + resa
            document.getElementById("Total").value = "$" + resb
            document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)"
            document.getElementById("reset").style.Color = "hsl(183, 100%, 15%)"
        } else {
            document.getElementById("NpeopleErr").value = c
            document.getElementById("people").style.borderColor = "red"
            document.getElementById("Tip").value = "$" + "0.00"
            document.getElementById("Total").value = "$" + "0.00"
        }

    }


    if (document.getElementById("btnfifteen").value == 15) {
        let a = document.getElementById("bill").value / document.getElementById("people").value * 0.15;
        let resa = a.toFixed(2)
        let b = document.getElementById("bill").value / document.getElementById("people").value + document.getElementById("bill").value / document.getElementById("people").value * 0.15
        let resb = b.toFixed(2)
        let c = "Can't be zero!"
        if (document.getElementById("people").value >= 1) {
            console.log(resa)
            document.getElementById("NpeopleErr").value = ""
            document.getElementById("people").style.borderColor = "hsl(0, 0%, 100%)"
            document.getElementById("Tip").value = "$" + resa
            document.getElementById("Total").value = "$" + resb
            document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)"
            document.getElementById("reset").style.Color = "hsl(183, 100%, 15%)"
        } else {
            document.getElementById("NpeopleErr").value = c
            document.getElementById("people").style.borderColor = "red"
            document.getElementById("Tip").value = "$" + "0.00"
            document.getElementById("Total").value = "$" + "0.00"
        }


    }



    if (document.getElementById("btntwentyfive").value == 25) {
        let a = document.getElementById("bill").value / document.getElementById("people").value * 0.25;
        let resa = a.toFixed(2)
        let b = document.getElementById("bill").value / document.getElementById("people").value + document.getElementById("bill").value / document.getElementById("people").value * 0.25
        let resb = b.toFixed(2)
        let c = "Can't be zero!"
        if (document.getElementById("people").value >= 1) {
            console.log(resa)
            console.log(resb)
            document.getElementById("NpeopleErr").value = ""
            document.getElementById("people").style.borderColor = "hsl(0, 0%, 100%)"
            document.getElementById("Tip").value = "$" + resa
            document.getElementById("Total").value = "$" + resb
            document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)"
            document.getElementById("reset").style.Color = "hsl(183, 100%, 15%)"
        } else {
            document.getElementById("NpeopleErr").value = c
            document.getElementById("people").style.borderColor = "red"
            document.getElementById("Tip").value = "$" + "0.00"
            document.getElementById("Total").value = "$" + "0.00"
        }


    }

    if (document.getElementById("btnfifty").value == 50) {
        let a = document.getElementById("bill").value / document.getElementById("people").value * 0.5;
        let resa = a.toFixed(2)
        let b = document.getElementById("bill").value / document.getElementById("people").value + document.getElementById("bill").value / document.getElementById("people").value * 0.5
        let resb = b.toFixed(2)
        let c = "Can't be zero!"
        if (document.getElementById("people").value >= 1) {
            console.log(resa)
            console.log(resb)
            document.getElementById("NpeopleErr").value = ""
            document.getElementById("people").style.borderColor = "hsl(0, 0%, 100%)"
            document.getElementById("Tip").value = "$" + resa
            document.getElementById("Total").value = "$" + resb
            document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)"
            document.getElementById("reset").style.Color = "hsl(183, 100%, 15%)"
        } else {
            document.getElementById("NpeopleErr").value = c
            document.getElementById("people").style.borderColor = "red"
            document.getElementById("Tip").value = "$" + "0.00"
            document.getElementById("Total").value = "$" + "0.00"
        }

    }



    if (document.getElementById("btnCustm").value == "Custm") {
        let a = document.getElementById("bill").value / document.getElementById("people").value * (document.getElementById("CustmVal").value / 100);
        let resa = a.toFixed(2)
        let b = document.getElementById("bill").value / document.getElementById("people").value + document.getElementById("bill").value / document.getElementById("people").value * (document.getElementById("CustmVal").value / 100)
        let resb = b.toFixed(2)
        let c = "Can't be zero!"
        if (document.getElementById("people").value >= 1) {
            console.log(resa)
            console.log(resb)
            document.getElementById("NpeopleErr").value = ""
            document.getElementById("people").style.borderColor = "hsl(0, 0%, 100%)"
            document.getElementById("Tip").value = "$" + resa
            document.getElementById("Total").value = "$" + resb
            document.getElementById("reset").style.backgroundColor = "hsl(172, 67%, 45%)"
            document.getElementById("reset").style.Color = "hsl(183, 100%, 15%)"
        } else {
            document.getElementById("NpeopleErr").value = c
            document.getElementById("people").style.borderColor = "red"
            document.getElementById("Tip").value = "$" + "0.00"
            document.getElementById("Total").value = "$" + "0.00"
        }


    }
}
document.getElementById("people").addEventListener("keyup", calc)

function reset() {
    document.getElementById("bill").value = 0
    document.getElementById("btnfive").value = ""
    document.getElementById("btnten").value = ""
    document.getElementById("btnfifteen").value = ""
    document.getElementById("btntwentyfive").value = ""
    document.getElementById("btnfifty").value = ""
    document.getElementById("btnCustm").value = ""
    document.getElementById("people").value = 0
    document.getElementById("CustmVal").value = ""
    document.getElementById("CustmVal").style.display = "none"
    document.getElementById("btnCustm").style.display = "block"
    document.getElementById("NpeopleErr").value = ""
    document.getElementById("people").style.borderColor = "hsl(0, 0%, 100%)"
    document.getElementById("Tip").value = "$" + "0.00"
    document.getElementById("Total").value = "$" + "0.00"
    document.getElementById("reset").style.backgroundColor = "hsl(186, 14%, 43%)"
    document.getElementById("reset").style.Color = "hsl(183, 100%, 15%)"
}
document.getElementById("reset").addEventListener("click", reset)
