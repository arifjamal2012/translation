var btnTrans = document.querySelector('#btn-trans');
var textInput = document.querySelector('#text-area');
var outputTxt = document.querySelector('#output');

var serverUrl = 'https://api.funtranslations.com/translate/pirate.json';

function txtTranslate(input) {
	return serverUrl + '?' + 'text=' + input;
}

function errorHandler(error) {
	console.log('Error occured', error);
	alert('some error');
}

function clickEventHandler() {
	var inputText = textInput.value;

	fetch(txtTranslate(inputText))
		.then((response) => response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			outputTxt.innerText = translatedText;
		})
		.catch(errorHandler);
}
btnTrans.addEventListener('click', clickEventHandler);
