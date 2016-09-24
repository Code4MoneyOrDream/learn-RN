window.onload = function () {
	var container = document.getElementById("container");
	var list = document.getElementById("imgList");
	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var next = document.getElementById("next");
	var prev = document.getElementById("prev");
	var index = 1;
	var animated = false;//动画运行状态
	var timer;

	function showButton(){
		for (var i = 0; i < buttons.length; i++){
			if (buttons[i].className == "on"){
				buttons[i].className = "";
				break;
			}
		}
		buttons[index-1].className = "on";
	}

	function animate(offset){
		animated = true;
		var newLeft = parseInt(list.style.left) + offset;
		var time = 500;
		var interval = 50;
		var speed = offset/(time/interval);//每次位移量

		function go(){
			if ((speed < 0 && parseInt(list.style.left) > newLeft)||
				(speed > 0 && parseInt(list.style.left) < newLeft)){
				list.style.left = parseInt(list.style.left) + speed + "px";
				setTimeout(go,interval);
			}else{
				animated = false;
				list.style.left = newLeft + "px";

				if (newLeft > -1652){
					list.style.left = -4956 + "px";
				}
				if (newLeft < -4956){
					list.style.left = -1652 + "px";
				}
			}
		}
		go();
	}

	function play(){
		timer = setInterval(function(){
			next.onclick();
		},5000);
	}

	function stop(){
		clearInterval(timer);
	}

	next.onclick = function(){
		if (index == 3){
			index = 1;
		}else{
			index += 1;
		}
		showButton();
		if (!animated){
			animate(-1652);
		}
	}

	prev.onclick = function(){
		if (index == 1){
			index = 3;
		}else{
			index -= 1;
		}
		showButton();
		if (!animated){
			animate(1652);
		}
	}

	for (var i = 0; i < buttons.length; i++){
		buttons[i].onclick = function(){
			var myIndex = parseInt(this.getAttribute("index"));
			var offset = -1652 * (myIndex - index);
			if (!animated){
				animate(offset);
			}
			index = myIndex;
			showButton();
		}
	}

	container.onmouseover = stop;
	container.onmouseout = play;

	play();
}