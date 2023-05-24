var verUrl = document.querySelector('.ver-url');
var url = window.location.origin
var buttos = document.querySelectorAll('button').length;
var content = document.querySelector('#content');

verUrl.textContent = url

for (i = 0; i < buttos; i++) {
	let butto = document.querySelectorAll('button');
	let novaUrl = url + "/public" + "/" + butto[i].value + ".html";

	butto[i].addEventListener("click", () => {
		verUrl.textContent = novaUrl;

		fetch(novaUrl)
		.then((res) => {
			if(!res.ok) {
				throw new Error("http error")
			}
			return res.text()
		})
		.then((text) => {
			content.innerHTML = text
		})
		.catch((error) => {
			content.innerHTML = '<p>Erro de carregamento</p>'
		})
	})
}