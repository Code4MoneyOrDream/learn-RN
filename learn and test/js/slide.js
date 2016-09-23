window.onload = function () {
	var container = document.getElementById("container");
	var list = document.getElementById("imgList");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var next = document.getElementById("next");
	var prev = document.getElementById("prev");
	var index = 1;

	function animate (offset){
		var newLeft = parseInt(list.style.left) + offset;
		list.style.left = newLeft + "px";
		if (newLeft < -4956){
			list.style.left = -1652 + "px";
		}
		if (newLeft > -1652){
			list.style.left = -4956 + "px";
		}
	}

	function showButton(){
		for (var i = 0; i < buttons.length; i++){
			if (buttons[i].className == "on"){
				buttons[i].className = "";
				break;
			}
		}
		buttons[index-1].className = "on";
	}

	next.onclick = function (){
		if (index == 3){
			index = 1;
		}else {
			index += 1;
		}
		animate(-1652);
		showButton();
	}

	prev.onclick = function (){
		if (index == 1){
			index = 3;
		}else {
			index -= 1;
		}
		animate(1652);
		showButton();
	}
}