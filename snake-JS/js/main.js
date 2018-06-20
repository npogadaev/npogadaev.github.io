window.addEventListener('DOMContentLoaded', () => {

// Переменные
	let canvas = document.querySelector('.canv');
	let can = canvas.getContext('2d');
	let snakeBody = null;
	let direction = 1;
	let apple = null;
	let snake = 30;
// функции случайного числа, создания змейки и создания яблока
	function rand(min, max) {
		let p = Math.floor(Math.random() * (max - min) + min);

		return (Math.round(p / snake) * snake);
	};

	function newApple() {
		apple = [rand(0, 1000), rand(0, 800)];
	};

	function newBody() {
		snakeBody = [{x: 0, y: 0}];
	};

	newApple();
	newBody();

// Сохранения чёткости изображения путём придания канвасу полной ширины экрана
	canvas.width = 1000;
	canvas.height = 800;

// Отрисовка змейки
	setInterval(() => {
		if (apple[0] + snake >= canvas.width || apple[1] + snake >= canvas.height) {
			newApple();
		};
		can.clearRect(0, 0, canvas.width, canvas.height);
		can.fillStyle = 'red';
		can.fillRect(...apple, snake, snake);
		can.fillStyle = '#000000';

		snakeBody.forEach((el, i) => {
			let last = snakeBody.length - 1;
			if (el.x == snakeBody[last].x && el.y == snakeBody[last].y && i < last) {
				snakeBody.splice(0, last);
				snakeBody = [{x:0, y:0}];
				direction = 1;
			}
		});

		let m = snakeBody[0];
		let f = {x: m.x, y: m.y};
		let l = snakeBody[snakeBody.length - 1];

		// анимация движения
		// if right
		if (direction == 1) f.x = l.x + snake, f.y = Math.round(l.y / snake) * snake;
		// if down
		if (direction == 2) f.y = l.y + snake, f.x = Math.round(l.x / snake) * snake;
		// if left
		if (direction == 3) f.x = l.x - snake, f.y = Math.round(l.y / snake) * snake; 
		// if top
		if (direction == 4) f.y = l.y - snake, f.x = Math.round(l.x / snake) * snake;

		snakeBody.push(f);
		snakeBody.splice(0, 1);

		snakeBody.forEach((squre, i) => {
			// if right
			if (direction == 1) if (squre.x > Math.round(canvas.width / snake) * snake) squre.x = 0;
			// if down
			if (direction == 2) if (squre.y > Math.round(canvas.height / snake) * snake) squre.y = 0;
			// if left
			if (direction == 3) if (squre.x < 0) squre.x = Math.round(canvas.width / snake) * snake;
			// if top
			if (direction == 4) if (squre.y < 0) squre.y = Math.round(canvas.width / snake) * snake;

			// проверка на съеденное яблоко
			if (squre.x == apple[0] && squre.y == apple[1]) {
				newApple();
				snakeBody.unshift({x: f.x - snake, y: l.y});
			};

			// рисуем элементы змейки
			can.fillRect(squre.x, squre.y, snake, snake);
		});

	}, 1000/30);

	window.addEventListener('keydown', (e) => {
		let key = e.keyCode;
		if ([38,39,40,37].indexOf(key) >= 0) {
			e.preventDefault();
		};
		if (key == 39 && direction != 3) direction = 1; // right
		if (key == 40 && direction != 4) direction = 2;	// down
		if (key == 37 && direction != 1) direction = 3;	// left
		if (key == 38 && direction != 2) direction = 4;	// top
	});



});