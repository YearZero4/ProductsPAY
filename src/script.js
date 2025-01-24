let products = {
 "Arroz": 140,
 "Harina PAN": 90,
 "Empanada": 60,
 "Mantequilla": 80,
 "Mayonesa": 120,
 "Leche": 300,
 "Cafe": 110,
 "Refresco": 100
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  products[key] = value;
}

var prod = '';
let keys = Object.keys(products).sort();

let buy = [];
let price = [];
let listaHTML = '';
keys.forEach(x => {
 prod += '<option value="' + x + '">' + x + '</option>';
});
document.getElementById('products').innerHTML =
 '<label>AGREGAR AL CARRITO </label> <select id="stproducts" style="height:50px;">' +
 '<option selected="true" disabled="disabled">Productos</option>' + prod +
 '</select><div id="lista"></div><div id="total0"></div>';

document.getElementById('stproducts').addEventListener('change', function() {
 const producto = this.value;
 let prc = products[producto];
 price.push(prc)
 buy.push(`<tr><td id="nro">${buy.length+1}</td><td>${producto}</td><td>${prc}Bs</td><td>1</td></tr>`);
 listaHTML = '<table><thead><tr><th>Producto</th><th>Precio</th></tr></thead><tbody>';
 buy.forEach(item => {
  listaHTML += item;
 });
 listaHTML += '</tbody></table>';
 document.querySelector("#lista").innerHTML = listaHTML;
 let all_products='';
 buy.forEach(x=>{
 all_products+=x;
 })
let total = price.map(Number).reduce((acc, curr) => acc + curr, 0);
document.getElementById('total0').innerHTML = `Total a Pagar = ${total} Bs`;
document.getElementById('lista').innerHTML = `<table border="1" cellpadding="10" cellpacing="10"><thead><tr><th>Nro</th><th>Producto</th><th>Precio</th><th>CPROD</th></tr></thead><tbody>${all_products}</tbody></table>`;

 document.getElementById('stproducts').value = "Productos";
});

function add(){
 const inputs=document.querySelector("#inpt_products");
 const less=document.querySelector("#less");
 const add=document.querySelector("#add");
 inputs.style.display='flex';
 add.style.display='none';
 less.style.display='flex';
}

function less(){
 const inputs=document.querySelector("#less");
 const quit=document.querySelector("#inpt_products");
 const add=document.querySelector("#add");
 quit.style.display='none';
 inputs.style.display='none';
 add.style.display='flex';
}

document.getElementById('addx0').addEventListener('click', (event) => {
 const valor1 = document.getElementById('nprod').value;
 const valor2 = document.getElementById('pprod').value;

 if (valor1.length > 2 && valor2 > 2) {
  localStorage.setItem(valor1, valor2);
  products[valor1] = parseFloat(valor2); 
  let prod = '';
  let keys = Object.keys(products).sort();
  keys.forEach(x => {
   prod += '<option value="' + x + '">' + x + '</option>';
  });
  document.getElementById('stproducts').innerHTML = 
   '<option selected="true" disabled="disabled">Productos</option>' + prod;
  window.alert('SE AGREGO NUEVO PRODUCTO');
 }
});


document.getElementById('fvc').addEventListener('click', (event) => {
const calc=document.querySelector("#calculator");
const fvc=document.querySelector("#fvc");
fvc.style.display='none';
calc.style.display='flex';
});
