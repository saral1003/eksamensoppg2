// Leser inn elementer
let gray = document.getElementById("gray");
let color = document.getElementById("info");
let sales = document.getElementById("sales");
let button = document.getElementById("button");
let buttonDiv = document.getElementById("buttonDiv");

// Funksjoner
function bilde1() {
    gray.style.visibility = 'visible';
    info.style.visibility = 'visible';
    info.style.top = '400px'
    info.innerHTML = `<div id="info1">
    <div id="infoBilde1"></div>
    <h3>Pepperoni pizza</h3>
    <p>Ipsum faucibus vitae aliquet nec ullamcorper sit amet. A cras semper auctor neque vitae. Massa eget egestas purus viverra accumsan in nisl.</p>
    <p style="color:brown"><b>Size L - $15</b></p>
    </div>`
}

function bilde2() {
    gray.style.visibility = 'visible';
    info.style.visibility = 'visible';
    info.style.top = '400px'
    info.innerHTML = `<div id="info2">
    <div id="infoBilde2"></div>
    <h3>Vegetarian pizza with like smoked sausage</h3>
    <p>A pellentesque sit amet porttitor eget. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Convallis aenean et tortor at risus viverra adipiscing.</p>
    <p style="color:brown"><b>Size L - $18</b></p>
    </div>`
}

function bilde3() {
    gray.style.visibility = 'visible';
    info.style.visibility = 'visible';
    info.style.top = '400px'
    info.innerHTML = `<div id="info3">
    <div id="infoBilde3"></div>
    <h3>Hawaiian pizza with chicken</h3>
    <p>Ultrices dui sapien eget mi proin. Proin nibh nisl condimentum id. Dictum non consectetur a erat nam at lectus urna duis. At quis risus sed vulputate odio ut enim blandit volutpat.</p>
    <p style="color:brown"><b>Size L - $15</b></p>
    </div>`
}

function back() {
    gray.style.visibility = 'hidden';
    info.style.visibility = 'hidden';
    info.style.top = '-100%';
    info.style.transition = 'all .5 ease-in.out';
}

function showSales() {
    sales.innerHTML = `<h3>20% off!</h3><p>Ultrices dui sapien eget mi proin. Proin nibh nisl condimentum id. Dictum non consectetur a erat nam at lectus urna duis. At quis risus sed vulputate odio ut enim blandit volutpat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><br>`
    buttonDiv.innerHTML = `<input id="button" type="button" onclick="hideSales()" value="Hide">`
}

function hideSales() {
    sales.innerHTML = ""
    buttonDiv.innerHTML = `<input id="button" type="button" onclick="showSales()" value="Show current sales">`
}