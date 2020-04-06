const fatura = [
    {
        lancamento: 'Uber',
        valor: 1430.00,
        mes: 12
    },
    {
        lancamento: 'PS Store',
        valor: 40.00,
        mes: 03
    },
    {
        lancamento: 'GPlay',
        valor: 37.50,
        mes: 03
    },
    {
        lancamento: 'Uber',
        valor: 1382.00,
        mes: 03
    },
    {
        lancamento: 'iFood',
        valor: 77.00,
        mes: 02
    },
    {
        lancamento: 'Uber',
        valor: 3.00,
        mes: 01
    },
    {
        lancamento: 'iFood',
        valor: 20.34,
        mes: 01
    },
    {
        lancamento: 'iFood',
        valor: 37.40,
        mes: 01
    },
    {
        lancamento: 'Uber',
        valor: 17.70,
        mes: 03
    },
    {
        lancamento: 'GPlay',
        valor: 16.70,
        mes: 03
    },
    {
        lancamento: 'AppStore',
        valor: 15.00,
        mes: 02
    },
    {
        lancamento: 'Uber',
        valor: 96.11,
        mes: 02
    },
    {
        lancamento: 'GPlay',
        valor: 7.71,
        mes: 02
    },
    {
        lancamento: 'AppStore',
        valor: 3.33,
        mes: 02
    },
    {
        lancamento: 'iFood',
        valor: 47.98,
        mes: 03
    },
    {
        lancamento: 'AppStore',
        valor: 12.22,
        mes: 03
    },
    {
        lancamento: 'Uber',
        valor: 2.56,
        mes: 04
    },
    {
        lancamento: 'Uber',
        valor: 5.32,
        mes: 03
    },
    {
        lancamento: 'PS Store',
        valor: 5.44,
        mes: 03
    },
    {
        lancamento: 'PS Store',
        valor: 98.37,
        mes: 03
    },
    {
        lancamento: 'PS Store',
        valor: 78.90,
        mes: 01
    },
    {
        lancamento: 'GPlay',
        valor: 65.03,
        mes: 03
    },
    {
        lancamento: 'iFood',
        valor: 32.12,
        mes: 03
    },
    {
        lancamento: 'Uber',
        valor: 34.56,
        mes: 01
    },
    {
        lancamento: 'iFood',
        valor: 1480.00,
        mes: 03
    },
    {
        lancamento: 'Uber',
        valor: 5.34,
        mes: 03
    },
    {
        lancamento: 'iFood',
        valor: 6.12,
        mes: 01
    },
    {
        lancamento: 'Uber',
        valor: 344.12,
        mes: 03
    },
    {
        lancamento: 'GPlay',
        valor: 96.10,
        mes: 03
    },
    {
        lancamento: 'Uber',
        valor: 6.09,
        mes: 01
    },
    {
        lancamento: 'PS Store',
        valor: 3.21,
        mes: 03
    }
]

var bodyTable = document.querySelector("tbody");
var bodyTableTotal = document.querySelector("#bodytotal");
var lancamento;
var valor;
var mes;
var total = 0;
var mesTotal;

createLineTable = function () {
    // criando os elementos
    let lineHtml = document.createElement("tr");
    let campoLancamento = document.createElement("td");
    let campoValor = document.createElement("td");
    let campoMes = document.createElement("td");
    // criandos os nós
    let textNodeLancamento = document.createTextNode(lancamento);
    let textNodeValor = document.createTextNode(valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    let textNodeMes = document.createTextNode(mes);
    // linkando os nós aos elementos
    campoLancamento.appendChild(textNodeLancamento);
    campoValor.appendChild(textNodeValor);
    campoMes.appendChild(textNodeMes);
    lineHtml.appendChild(campoLancamento);
    lineHtml.appendChild(campoValor);
    lineHtml.appendChild(campoMes);
    // linkando os elementos ao documento HTML
    bodyTable.appendChild(lineHtml);
}

var faturaMes = fatura.sort(function  (a, b) {
    return (a.mes - b.mes);
});

for(var i = 0; i < faturaMes.length; i++) {
    this.lancamento = faturaMes[i].lancamento;
    this.valor = faturaMes[i].valor;
    this.mes = faturaMes[i].mes;
    this.createLineTable();
}

createLineTotalSpend = function () {
    // criando os elementos
    let lineHtmlTotal = document.createElement("tr");
    let campoValor = document.createElement("td");
    let campoMes = document.createElement("td");
    // criandos os nós
    let textNodeMes = document.createTextNode(mesTotal);
    let textNodeValor = document.createTextNode(total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    // linkando os nós aos elementos
    campoMes.appendChild(textNodeMes);
    campoValor.appendChild(textNodeValor);
    lineHtmlTotal.appendChild(campoMes);
    lineHtmlTotal.appendChild(campoValor);
    // linkando os elementos ao documento HTML
    bodyTableTotal.appendChild(lineHtmlTotal);
}

resultado = function(x) { 
    this.total = 0;
    let values = x.map(item => item.valor);
    for (var cont = 0; cont < values.length; cont++) {
        total = parseFloat(total) + parseFloat(values[cont]);
    }
    createLineTotalSpend();
}

let january = fatura.filter(item => item.mes === 01);
this.mesTotal = 'Janeiro';
this.resultado(january);
let february = fatura.filter(item => item.mes === 02);
this.mesTotal = 'Fevereiro';
this.resultado(february);
let march = fatura.filter(item => item.mes === 03);
this.mesTotal = 'Março';
this.resultado(march);
let april = fatura.filter(item => item.mes === 04);
this.mesTotal = 'Abril';
this.resultado(april);
let december = fatura.filter(item => item.mes === 12);
this.mesTotal = 'Dezembro';
this.resultado(december);