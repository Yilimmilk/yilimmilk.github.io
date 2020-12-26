var iUp = (function () {
	var t = 0,
		d = 150,
		clean = function () {
			t = 0;
		},
		up = function (e) {
			setTimeout(function () {
				$(e).addClass("up")
			}, t);
			t += d;
		},
		down = function (e) {
			$(e).removeClass("up");
		},
		toggle = function (e) {
			setTimeout(function () {
				$(e).toggleClass("up")
			}, t);
			t += d;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	}
})();

$(document).ready(function () {

	// 获取一言数据
	fetch('https://v1.hitokoto.cn').then(function (res) {
		return res.json();
	}).then(function (e) {
		$('#description').html(e.hitokoto + "<br/> -「<strong>" + e.from + "</strong>」")
	}).catch(function (err) {
		console.error(err);
	})


	// var url = 'https://query.yahooapis.com/v1/public/yql' +
    // '?q=' + encodeURIComponent('select * from json where url=@url') +
    // '&url=' + encodeURIComponent('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8') +
	// '&format=json&callback=?';

	/**
	 * 获取Bing壁纸
	 * 原先 YQL 已经无法提供服务了
	 * 改用 JsonBird：https://bird.ioliu.cn/
	 *
	 */
	var url = 'https://bird.ioliu.cn/v1/?url=https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8';
	var imgUrls = JSON.parse(sessionStorage.getItem("imgUrls"));
	var index = sessionStorage.getItem("index");
	var $panel = $('#nav');
	if(imgUrls == null){
		imgUrls = new Array();
		index = 0;
		$.get(url,function (result) {
			images = result.images;
			for (let i = 0; i < images.length; i++) {
				const item = images[i];
				imgUrls.push(item.url);
			}
			var imgUrl = imgUrls[index];
			var url = "https://www.bing.com"+imgUrl;
			$panel.css("background", "url('"+url+"') center center no-repeat #666");
			$panel.css("background-size", "cover");
			sessionStorage.setItem("imgUrls",JSON.stringify(imgUrls));
			sessionStorage.setItem("index",index);
			});
	}else{
		if(index == 7)
			index = 0;
		else
			index++;
		var imgUrl = imgUrls[index];
		var url = "https://www.bing.com"+imgUrl;
		$panel.css("background", "url('"+url+"') center center no-repeat #666");
		$panel.css("background-size", "cover");
		sessionStorage.setItem("index",index);
	}

	$(".iUp").each(function (i, e) {
		iUp.up(e);
	});
});

console.clear();
console.log("%c 你想干啥 Σ( ° △ °|||)︴.", "background:#24272A; color:#ffffff", "");
console.log("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/Yilimmilk");
console.log("%c 版本号: %c", "background:#24272A; color:#ffffff", "", "2.0.1");


(function($) {
  $.fn.snow = function(options) {
    var $flake = $('<div id="snowbox" />').css({
        'position': 'absolute',
        'z-index': '9999',
        'top': '-50px'
      }).html('&#10052;'),
      documentHeight = $(document).height(),
      documentWidth = $(document).width(),
      defaults = {
        minSize: 10,
        maxSize: 20,
        newOn: 1000,
        flakeColor: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
      },
      options = $.extend({}, defaults, options);
    var interval = setInterval(function() {
      var startPositionLeft = Math.random() * documentWidth - 100,
        startOpacity = 0.5 + Math.random(),
        sizeFlake = options.minSize + Math.random() * options.maxSize,
        endPositionTop = documentHeight - 200,
        endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
        durationFall = documentHeight * 10 + Math.random() * 5000;
      $flake.clone().appendTo('body').css({
        left: startPositionLeft,
        opacity: startOpacity,
        'font-size': sizeFlake,
        color: options.flakeColor
      }).animate({
        top: endPositionTop,
        left: endPositionLeft,
        opacity: 0.2
      }, durationFall, 'linear', function() {
        $(this).remove()
      });
    }, options.newOn);
  };
})(jQuery);
$(function() {
  $.fn.snow({
    minSize: 5,
    /* 定义雪花最小尺寸 */
    maxSize: 20,
    /* 定义雪花最大尺寸 */
    newOn: 800 /* 定义密集程度，数字越小越密集 */
  });
});
