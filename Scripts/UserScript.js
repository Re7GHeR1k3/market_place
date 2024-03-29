const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let productsGrid = document.getElementById('user-product-grid');
let url = 'https://my-json-server.typicode.com/Re7GHeR1k3/market_place';


let userRequest = new XMLHttpRequest();
userRequest.open('GET', `${url}/users/${id}`);
userRequest.responseType = 'json'

userRequest.onload = function(){
	let user = userRequest.response;
	profile.innerHTML = `
		<h2> ${user.name} </h2>
		<h2> ${user.sirname} </h2>
		<img class = "profile-img" src = "${user.photo_url}">
		<p>Balance: ${user.balance} </p>
		`
}

userRequest.send();


let productsRequest = new XMLHttpRequest();
productsRequest.open('GET', `${url}/products?author_id=${id}`);
productsRequest.responseType = 'json'

productsRequest.onload = function(){
	let products = productsRequest.response;
	productsGrid.innerHTML = null;
	products.forEach( p => {
		productsGrid.innerHTML += `
			<div class = "product">
				<h2 class = "product-name"> ${p.name} </h2>
				<img class = "product-photo" src = "${p.photo_url}">
				<p class = "product-price"> <b> Price: </b> ${p.price} </p>
				<p class = "product-decription"> <b> Description: </b> ${p.description} </p>
			</div>
		`;
	});
}

productsRequest.send();