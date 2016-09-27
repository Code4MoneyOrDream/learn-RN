//设置GET方法从服务器获取信息
function GET(url, options, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status >= 200 && request.status < 300 || request.status == 304) {
        callback(request.responseText);
      }else {
      alert("Request was unsuccessful:");
    }
    } 
  }
  request.open("GET", url + "?" + serialize(options), true)
  request.send();
}

//格式化对象参数
function serialize(options) {
  if (!options) return "";
  var pairs = [];
  for (var name in options) {
    if (!options.hasOwnProperty(name)) continue;
    if (typeof options[name] === "function") continue;
    var value = options[name].toString();
    name = encodeURIComponent(name);
    value = encodeURIComponent(value);
    pairs.push(name + "=" + value);
  }
  return pairs.join("&");
}

//设置热门课程
function setHotCourses (data){
	var _data = JSON.parse(data);
	var oDiv = document.getElementById("hotCourses");
	for (i=0;i<20;i++){
		var oA = document.createElement("a");
		oA.setAttribute("class","clearfix");
		oDiv.appendChild(oA);
		var _img = document.createElement("img");
		var _name = document.createElement("p");
		var _learnerCount = document.createElement("p");

		_img.setAttribute("src", _data[i].smallPhotoUrl);
		_img.setAttribute("class", "hotListImg");
		_name.innerHTML=_data[i].name;
		_learnerCount.innerHTML=_data[i].learnerCount;
		oA.appendChild(_img);
		oA.appendChild(_name);
		oA.appendChild(_learnerCount);
	}
}

GET("http://study.163.com/webDev/hotcouresByCategory.htm",{},setHotCourses);


function circle(){
	var ohotCourses = document.getElementById("hotCourses");
	var otop = parseInt(ohotCourses.style.top);
	var timer;
	
	function autoplay(){
		timer = setInterval(function(){
			if (otop < -700){
				ohotCourses.style.top = 0;
			}else{
				ohotCourses.style.top = otop - 70 + "px";
			}
		},5000);
	}
	autoplay();

	ohotCourses.onmouseover = function(){
		clearInterval(timer);
	};

	ohotCourses.onmouseout = function(){
		autoplay();
	};
}

circle();