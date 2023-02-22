let xhr = new XMLHttpRequest();
let url = 'https://alex0palii.github.io/repository1/db.json';

xhr.open('GET', url);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function(){
	const Text = xhr.response;
	const TextR = JSON.parse(Text);
	console.log(TextR);
};
