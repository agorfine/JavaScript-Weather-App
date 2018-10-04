

// localStorage.setItem('zipCode', 10029)

// function zipCode () {
// 	let zip = document.querySelector('.zipcode-input').submit();
// 	console.log(zip)
// 	localStorage.setItem('info', zip)
// 	let info = window.localStorage.getItem('zipCode')
// 	console.log(info)
// }

// let submit = document.querySelector('.zipcode-submit-button')

// submit.addEventListener('click',zipCode)

let submitData = document.querySelector('.zipcode-submit-button')
let zip = document.querySelector('.zipcode-input').value


function addZip(event){
	let zip = document.querySelector('.zipcode-input').value
	// get input from user submit bar
	let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=1b2e511672ace229734a00a710bb`
	// replace zip in url with user input
	event.preventDefault()
	// https://www.w3schools.com/jsref/event_preventdefault.asp
	console.log(zip)
	makeCall(zip)
}

submitData.addEventListener('click', addZip)



function makeCall(zip) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=1b2e511672ace229734a00a710bb`)
	.then(result => result.json())
	.then(result => getData(result))
}

let getData = function(result){
	let location = result.name
	let temp = result.main.temp
	let description = result.weather[0].description
	manipulateDom(location, temp, description)
}

let manipulateDom = function(location,temp,description) {
	document.querySelector('.location').innerHTML = location
	document.querySelector('.temperature').innerHTML = Math.round(temp) + '&deg;';
	document.querySelector('.description').innerHTML = description 
	weatherImg()
}

let weatherImg = function () {

	let type = document.querySelector('.description');
	let img = document.querySelector('.img')
	let body = document.querySelector('body')

	if (type.innerHTML.includes('cloud')) {
		img.classList.add('cloud');
		body.classList.add('cloudBackground')
		console.log('test1')
	} else if (type.innerHTML.includes('sun') || type.innerHTML.includes('clear'))	{
		img.classList.add('sunny')
		body.classList.add('sunBackground')
		console.log('test2')
	} else if (type.innerHTML.includes('rain') || type.innerHTML.includes('drizzle')) {
		img.classList.add('rain')
		body.classList('rainBackground')
		console.log('test3')
	} else if (type.innerHTML.includes('partly')) {
		img.classList.add('partlyCloudy')
		body.classList.add('partlyCloudyBcg')
		console.log('test4')
	}
};




