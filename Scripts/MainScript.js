let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/Re7GHeR1k3/market_place/';

xhr.open('GET', url);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
	const Text = xhr.response;
	const TextR = JSON.parse(Text);
	console.log(TextR);
};
