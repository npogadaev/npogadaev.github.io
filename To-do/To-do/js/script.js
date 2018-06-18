window.addEventListener('DOMContentLoaded', () => {

	let list = document.querySelector('.list-task');

	function toLocal() {
		let toDo = list.innerHTML;
		localStorage.setItem('toDo', toDo);
	};

	list.addEventListener('click', (event) => {
		if (event.target.tagName === 'LI') {
			event.target.classList.toggle('checked');
			toLocal();
		} else if (event.target.tagName === 'SPAN') {
			let div = event.target.parentNode;
			div.remove();
			toLocal();
		}
	});

	function newElement() {
		let li = document.createElement('li');
		let inputValue = document.querySelector('.list-input').value;
		let a = document.createTextNode(inputValue);

		li.className = 'list-task__item';
		li.appendChild(a);

		if (inputValue == '') {
			alert('Заполните поле')
		} else {
			list.appendChild(li);
		}

		inputValue = '';
		let span = document.createElement('span');
		let t = document.createTextNode('\u00D7');
		span.appendChild(t);
		span.className = 'close-btn';
		li.appendChild(span);
		toLocal();
	};

	let btn = document.querySelector('.list-btn');
	btn.addEventListener('click', newElement);

	if (localStorage.getItem('toDo')) {
		list.innerHTML = localStorage.getItem('toDo');
	}

});