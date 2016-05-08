window.curImg = 1;
window.iOut = 1;
window.iIn = 0;

function imageViewer(imgNum, arrow, act){
	if(iOut != 1 || iIn != 0){
		act = "wait"
		arrow = "wait";
	}

	if(arrow == true){
		if(act == "next"){
			if(curImg != 8){
				curImg += 1;
				FadeOut();
			}

			else{
				curImg = 1;
				FadeOut();
			}
		}

		else if(act == "prev"){
			if(curImg != 1){
				curImg -= 1;
				FadeOut();
			}

			else{
				curImg = 8;
				FadeOut();
			}
		}

		else{
			//pass
		}
	}

	else if(arrow == false){
		curImg = imgNum;
		FadeOut();
	}

	if(act == "wait"){
		//wait
	}
}

function arrowKeys(event){
	var keyPressed = event.keyCode;

	if(keyPressed == 37){
		imageViewer('NA', true, 'prev');
	}

	else if(keyPressed == 39){
		imageViewer('NA', true, 'next');
	}

	else{
		//pass
	}
}

function FadeOut(){
	var fadeOut = setTimeout(function(){
		if(iOut < 0){
			var waiter = setTimeout(function(){
				document.getElementById("currentImage").src = "images/img" + curImg + ".jpg";;
				FadeIn();
				clearTimeout(waiter);
			}, 200);
		}

		else{
			document.getElementById("currentImage").style.opacity = iOut;
	        iOut -= 0.2;
	        FadeOut();
		}
	}, 10)
}

function FadeIn(){
	var fadeIn = setTimeout(function(){
		if(iIn > 1){
			iOut = 1;
			iIn = 0;
			clearTimeout(fadeIn);
		}

		else{
			document.getElementById("currentImage").style.opacity = iIn;
	        iIn += 0.1;
	        FadeIn();
		}
	}, 10)
}