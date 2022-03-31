// XMLHttpRequest Web Service RESTful (GET, POST, PUT, DELETE)



// Get all users
function httpGet(){
var url  = "http://localhost/javascript/curs5/restfull/users.php";
var xhr  = new XMLHttpRequest();
xhr.open('GET', url, true)
//xhr.readystatechange = function () {
//https://teamtreehouse.com/community/xhronreadystatechange-vs-xhronload
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);
}

//Get a user
var url  = "http://localhost/javascript/curs5/restfull/users.php";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url+'?id=2', true)
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(null);


// Post a user
// var url = "http://localhost/javascript/curs5/restfull/users.php";

// var data = 'id=4&nume=Vasiliescu&prenume=Vlad';

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(data);


// Update a user
// var url = "http://localhost/javascript/curs5/restfull/users.php";

// var data = 'nume=Anton&prenume=Vlad';

// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url+'?id=1', true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(data);


// Delete a user
// var url = "http://localhost/javascript/curs5/restfull/users.php";
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url+'?id=1', true);
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(null);