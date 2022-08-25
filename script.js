/* Coinbase ADA*/
let ws_coinbase = new WebSocket('wss://ws-feed.pro.coinbase.com');
let div_coinbase = document.getElementById('price_coinbase');

let last_price_coinbase = null;

ws_coinbase.onopen = function () {
    ws_coinbase.send(JSON.stringify ({
        'type': 'subscribe',
        'channels': [{'name': 'ticker', 'product_ids': ['ADA-USDT']}]
    }))
};

ws_coinbase.onmessage = function (event) {
    let current_price_coinbase = JSON.parse(event.data);
    let price_coinbase = parseFloat(current_price_coinbase.price).toFixed(2);
    div_coinbase.innerText = price_coinbase;

    if ((price_coinbase < last_price_coinbase) && (isNaN(price_coinbase) == false)) {
        div_coinbase.innerText = '↓' + price_coinbase;
        div_coinbase.style.color = 'red';
        
    } else if ((price_coinbase > last_price_coinbase) && (isNaN(price_coinbase) == false)) {
        div_coinbase.innerText = '↑' + price_coinbase;
        div_coinbase.style.color = 'green';

    } else if ((price_coinbase == last_price_coinbase) && (isNaN(price_coinbase) == false)) {
        div_coinbase.innerText = '=' + price_coinbase;
        div_coinbase.style.color = 'black';
    }

    last_price_coinbase = price_coinbase;
};


/* Coinbase BTC*/
let ws_coinbases = new WebSocket('wss://ws-feed.pro.coinbase.com');
let div_coinbases = document.getElementById('price_coinbases');

let last_price_coinbases = null;

ws_coinbases.onopen = function () {
    ws_coinbases.send(JSON.stringify ({
        'type': 'subscribe',
        'channels': [{'name': 'ticker', 'product_ids': ['BTC-USDT']}]
    }))
};

ws_coinbases.onmessage = function (event) {
    let current_price_coinbases = JSON.parse(event.data);
    let price_coinbases = parseFloat(current_price_coinbases.price).toFixed(2);
    div_coinbases.innerText = price_coinbases;

    if ((price_coinbases < last_price_coinbases) && (isNaN(price_coinbases) == false)) {
        div_coinbases.innerText = '↓' + price_coinbases;
        div_coinbases.style.color = 'red';
        
    } else if ((price_coinbases > last_price_coinbases) && (isNaN(price_coinbases) == false)) {
        div_coinbases.innerText = '↑' + price_coinbases;
        div_coinbases.style.color = 'green';

    } else if ((price_coinbases == last_price_coinbases) && (isNaN(price_coinbases) == false)) {
        div_coinbases.innerText = '=' + price_coinbases;
        div_coinbases.style.color = 'black';
    }

    last_price_coinbases = price_coinbases;
};
