(function() {
	var music = document.getElementById("senola-audio-music");
	var play01 = document.getElementById("senola-audio-play01");
	var play02 = document.getElementById("senola-audio-play02");
	var pause01 = document.getElementById("senola-audio-pause01");
	var pause02 = document.getElementById("senola-audio-pause02");
	var playhead = document.getElementById("senola-elapsed");
	var timeline = document.getElementById("senola-slider");
	var timer = document.getElementById("senola-audio-timer");
	var senola_record_show = document.getElementById("senola-record-show");

	var duration;
	pause01.style.visibility = "hidden";
	pause02.style.visibility = "hidden";

	var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
	music.addEventListener("timeupdate", timeUpdate, false);

	function timeUpdate() {
		var playPercent = timelineWidth * (music.currentTime / duration);
		playhead.style.width = playPercent + "px";

		var secondsIn = Math.floor(music.currentTime);
		//时间处理
		if (!isNaN(secondsIn)) {
			if (secondsIn <= 9 ) {
				timer.innerHTML = "00:0" + secondsIn;
			} else if(secondsIn >= 10 && secondsIn <= 59){
				timer.innerHTML = "00:" + secondsIn;
			}else if (secondsIn > 60) {
				var _min = (secondsIn - secondsIn % 60) / 60;
				var _sec = secondsIn % 60;
				if(_min <= 9) {
					var min = "0" + _min + ":";
					if(_sec <= 9) {
						timer.innerHTML = min + "0" + _sec;
					}else if(_sec >= 10){
						timer.innerHTML = min + _sec;
					}
				}else if(_min >= 10) {
					var min = _min + ":";
					if(_sec <= 9) {
						timer.innerHTML = min + "0" + _sec;
					}else if(_sec >= 10){
						timer.innerHTML = min + _sec;
					}
				}
			}
		}
	}
	play01.onclick = function() {
		play();
	}
	play02.onclick = function() {
		play();
	}
	pause01.onclick = function() {
		pause();
	}
	pause02.onclick = function() {
		pause();
	}
    function play() {
    	music.play();
		play01.style.visibility = "hidden";
		pause01.style.visibility = "visible";
		play02.style.visibility = "hidden";
		pause02.style.visibility = "visible";
		senola_record_show.className = "senola-audio-cover senola-audio-play";
    }
    function pause() {
    	music.pause();
		play01.style.visibility = "visible";
		pause01.style.visibility = "hidden";
		play02.style.visibility = "visible";
		pause02.style.visibility = "hidden";
		senola_record_show.className = "senola-audio-cover";
    }
	music.addEventListener("canplaythrough", function () {
		duration = music.duration;
	}, false);
})();
