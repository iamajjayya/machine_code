const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList');
xhr.setRequestHeader('x-rapidapi-key', 'd5daf30267msh9a75dd74a16416ap1da97cjsnf80e4fe77175');
xhr.setRequestHeader('x-rapidapi-host', 'exercisedb.p.rapidapi.com');

xhr.send(data);