function getCities(country) {
	let countryPlaceholder = document.querySelector("#country");
	let cityPlaceholder = document.querySelector("#city");
	let citiesDropDown = document.querySelector("#cities");

	cityPlaceholder.innerHTML = "";
	countryPlaceholder.innerHTML = "";

	if (country.trim() === "") {
		citiesDropDown.disabled = true;
		citiesDropDown.selectedIndex = 0;
		return false;
	}

	//  fetch() reurneaza o promisiune
	fetch("countries.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			let cities = data[country];
			let out = "";
			out += `<option value="">Choose a city</option>`;
			for (let city of cities) {
				out += `<option value="${city}">${city}</otion>`;
			}
			citiesDropDown.innerHTML = out;
			citiesDropDown.disabled = false;
			countryPlaceholder.innerHTML = country;
		})
		.catch((e) => {

			console.log('Mesaj de eroare; ', e);
		})
		.finally(() => {
			console.log(
				"Promisiunea s-a incheiat: cu succes sau fara succes."
			);
		});
}

function getCity(city) {
	return document.querySelector("#city").innerHTML = city;
}