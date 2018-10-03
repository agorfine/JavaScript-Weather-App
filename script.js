

// localStorage.setItem('zipCode', 10029)


// 


function zipCode () {
	let zip = document.querySelector('.zipcode-input').submit();
	console.log(zip)
	localStorage.setItem('info', zip)
	let info = window.localStorage.getItem('zipCode')
	console.log(info)
}

let submit = document.querySelector('.zipcode-submit-button')

submit.addEventListener('click',zipCode)



function makeCall() {
	fetch('https://api.openweathermap.org/data/2.5/weather?zip=10029,us&units=imperial&appid=2b2e1b2e511672ace229734a00a710bb')
	.then(result => result.json())
	.then(result => getData(result))
}

makeCall();

let getData = function(result){
	let location = result.name
	let temp = result.main.temp
	let description = result.weather[0].description
	manipulateDom(location, temp, description)
}

let manipulateDom = function(location,temp,description) {
	document.querySelector('.location').innerHTML = location
	document.querySelector('.temperature').innerHTML = Math.round(temp)
	document.querySelector('.description').innerHTML = description 
}

let weatherImg = function () {

	let type = document.querySelector('.description');
	let img = document.querySelector('.img')

	if (type.innerHTML.includes('cloud')) {
		img.classList.add('.cloudy');
		console.log('test1')
	} else if (type.innerHTML.includes('sun'))	{
		img.classList.add('.sunny')
		console.log('test2')
	} else if (type.innerHTML.includes('rain')) {
		img.classList.add('.rain')
		console.log('test3')
	} else if (type.innerHTML.includes('partly')) {
		img.classList.add('.partlyCloudy')
		console.log('test4')
	}
};

weatherImg();



