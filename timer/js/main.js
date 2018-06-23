window.addEventListener('DOMContentLoaded', () => {

	let btn = document.querySelector('.timer-btn');
	let hours = document.querySelector('.hours span');
	let minutes = document.querySelector('.minutes span');
	let seconds = document.querySelector('.seconds span');

	function Timer(h,m,s) {
		let time = 0;
		let hour = 0;
		let min = 0;
		let sec = 0;

	 	let timerId = setInterval(() => {
	 		time++;
	 		hour = Math.floor(time/ 3600);
	 		min = Math.floor((time - hour * 3600) / 60);
	 		sec = time - (hour * 3600) - (min * 60);
	 		if (hour < 10) hour = '0' + hour;
	 		if (min < 10) min = '0' + min;
	 		if (sec < 10) sec = '0' + sec;
	 		h.textContent = hour;
	 		m.textContent = min;
	 		s.textContent = sec;
	 	}, 1000);
	 };

	 btn.addEventListener('click', () => {
	 	let t = Timer(hours, minutes, seconds);
	 });
});