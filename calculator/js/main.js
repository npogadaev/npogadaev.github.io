"use strict";

/*Переменные*/
const land = 5000,
	  corp = 12000,
	  cms = 4000,
	  changes = 1000,
	  blocks = 500,
	  pages = 2500; 

let total = 5000,
	time = 1,
	hourRate,
	tabLeft = document.querySelector(".tab-left"),
	tabRight = document.querySelector(".tab-right"),
	blocksBlock = document.getElementById("blocks-block"),
	pagesBlock = document.getElementById("pages-block"),
	counterBlock = document.getElementById("counter-blok"),
	counterPages = document.getElementById("counter-pages"),
	counterHours = document.getElementById("counter-hours"),
	counterRate = document.getElementById("counter-rate"),
	changesCheck = document.getElementById("changes-check"),
	changesCms = document.getElementById("changes-cms"),
	input = document.getElementsByTagName("input"),
	value = document.getElementById("total-value");

/*События*/
window.addEventListener("DOMContentLoaded", function () {
	tabLeft.addEventListener("click", () => {

		for (let i = 0; i < input.length; i++) {
			input[i].value = '' ;
		};

		blocksBlock.style.display = "flex";
		pagesBlock.style.display = "none";
		tabLeft.classList.add("active");
		tabRight.classList.remove("active");

		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (changesCms.checked) {
			changesCms.checked = false;
		};

		total = land;
		value.value = total;
	});

	tabRight.addEventListener("click", () => {
		for (let i = 0; i < input.length; i++) {
			input[i].value = '' ;
		};

		blocksBlock.style.display = "none";
		pagesBlock.style.display = "flex";
		tabRight.classList.add("active");
		tabLeft.classList.remove("active");

		if (changesCheck.checked) {
			changesCheck.checked = false;
		};
		if (changesCms.checked) {
			changesCms.checked = false;
		};

		total = corp;
		value.value = total;
	});

	counterBlock.addEventListener("change", () => {
		counterHours.value = "";
		counterRate.value = "";
		total = counterBlock.value * blocks;
		value.value = total;
	});

	counterPages.addEventListener("change", () => {
		counterHours.value = "";
		counterRate.value = "";
		total = counterPages.value * pages;
		value.value = total;
	});

	counterHours.addEventListener("change", () => {
		counterBlock.value = "";
		counterPages.value = "";
		total = 0;
		time = counterHours.value;
		hourRate = time * counterRate.value;
		value.value = hourRate;
		total = hourRate;
	});

	counterRate.addEventListener("change", () => {
		counterBlock.value = "";
		counterPages.value = "";
		total = 0;
		hourRate = time * counterRate.value;
		value.value = hourRate;
		total = hourRate;
	});

	changesCheck.addEventListener("change", () => {
		if (changesCheck.checked) {
			total += changes;
			value.value = total;
		} else {
			total -= changes;
			value.value = total;	
		};
	});

	changesCms.addEventListener("change", () => {
		if (changesCms.checked) {
			total += cms;
			value.value = total;
		} else {
			total -= cms;
			value.value = total;
		};
	});
});
