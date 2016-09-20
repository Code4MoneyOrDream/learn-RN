//设置GET方法从服务器获取信息
function GET (url,options,callback){
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		if (request.readyState == 4){
			if (request.status >= 200 && request.status < 300 || request.status == 304){
				callback(request.responseText);
				}
			}else{
			alert("Request was unsuccessful:" + request.status);
			}
		}
	}


request.open("GET",url + "?" + serialize(options),true)
request.send();


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
}

//设置课程信息
function setCourses (data){
				var _data = JSON.parse(data);
				var oDiv = document.getElementById("okdklkd");

				for(i=0;i<_data.list.length;i++){
					var oLi = document.createElement("li");
					oDiv.appendChild(oLi);

					var _img = document.createElement("img");
					var _name = document.createElement("p");
					var _price = document.createElement("p");
					var _description = document.createElement("p");

					_img.setAttribute("src", _data.list[i].bigPhotoUrl);

					_name.setAttribute("class", "okmyy");
					_name.innerHTML=_data.list[i].name;
					_price.innerHTML="价格："+_data.list[i].price;
					_description.innerHTML=_data.list[i].description;

					oLi.appendChild(_img);
					oLi.appendChild(_name);
					oLi.appendChild(_price);
					oLi.appendChild(_description);
}

GET("http://study.163.com/webDev/couresByCategory.htm", {pageNo:1,psize:12,type:10},setCourses);
/*
//设置热门课程
function setHitCourses (){
	GET("http://study.163.com/webDev/hotcouresByCategory.htm",{}, function(data)){
		function (data){
			var _data = JSON.parse(data);
			var oDiv = document.getElementById("okd");
			for (i=0;i<_data.list.length;i++){
				var oLi = document.createElement("li");
				oDiv.appendChild(oLi);
				var _img = document.createElement("img");
				var _name = document.createElement("p");
				var _learnerCount = document.createElement("p");

				_img.setAttribute("src", _data.list[i].smallPhotoUrl);
				_name.innerHTML=_data.list[i].name;
				_learnerCount.innerHTML=_data.list[i].learnerCount;
				oLi.appendChild(_img);
				oLi.appendChild(_name);
				oLi.appendChild(_learnerCount);
			}
		}
	}
}

setHitCourses();

*/
















/*function get (url){

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
	if (request.readyState == 4){
		if (request.status >= 200 && request.status < 300 || request.status == 304){
			var _data = JSON.parse(request.responseText);
			var oDiv = document.getElementById("okd");

			for(i=0;i<_data.list.length;i++){
				var oLi = document.createElement("li");
				oDiv.appendChild(oLi);

				var _img = document.createElement("img");
				var _name = document.createElement("p");
				var _price = document.createElement("p");
				var _description = document.createElement("p");

				_img.setAttribute("src", _data.list[i].bigPhotoUrl);

				_name.setAttribute("class", "okmyy");
				_name.innerHTML=_data.list[i].name;
				_price.innerHTML="价格："+_data.list[i].price;
				_description.innerHTML=_data.list[i].description;

				oLi.appendChild(_img);
				oLi.appendChild(_name);
				oLi.appendChild(_price);
				oLi.appendChild(_description);
			}
		}else{
			alert("Request was unsuccessful:" + request.status);
		}
	}
}

request.open("GET",url,true)
request.send();

}



//获取服务器数据
	function setoptions(num,element){
		
	get('http://study.163.com/webDev/couresByCategory.htm',{pageNo:1,psize:20,type:num},function(options){   //设置课程
		var options = JSON.parse(options)
		for( var i=0; i<options.list.length; i++){
			var oTeam = document.createElement('div');
			oTeam.className = 'm-team'
			element.appendChild(oTeam);
			var oImg = document.createElement('img');
			var oP = document.createElement('p');
			var oDiv = document.createElement('div');
			var oSpan = document.createElement('span');
			var oStrong = document.createElement('strong');
			var oA = document.createElement('a');
			oImg.src = options.list[i].middlePhotoUrl;
			oP.className = 'coursename f-toe';
			oP.innerHTML = options.list[i].name;
			oDiv.className = 'provider';
			oDiv.innerHTML = options.list[i].provider;
			oSpan.innerHTML = options.list[i].learnerCount;
			if(!options.list[i].categoryName){
				  options.list[i].categoryName = '无';
			}
			// 不清楚 createElement 和 innerHTML 哪个性能较好，所以在生成弹窗时使用了innerHTML
			oA.innerHTML = '<img src="' + options.list[i].middlePhotoUrl +'" /><h3>' + options.list[i].name + '</h3><span>' + options.list[i].learnerCount + '人在学</span><p class="categoryname">发布者：' + options.list[i].provider + '</br>分类：' + options.list[i].categoryName + '</p><p class="description">' +  options.list[i].description + '</p>';
			if( options.list[i].price == 0){
				oStrong.innerHTML = '免费';
			}else{
			oStrong.innerHTML = '￥' + options.list[i].price;
			}
			oTeam.appendChild(oImg);
			oTeam.appendChild(oP);
			oTeam.appendChild(oDiv);
			oTeam.appendChild(oSpan);
			oTeam.appendChild(oStrong);
			oTeam.appendChild(oA);
			
		}
	});
	}
	setoptions(10,aDesign[0]);
	setoptions(20,aLanguage[0]);
	*/