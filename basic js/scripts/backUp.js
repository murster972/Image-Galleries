window.curImg = 1;

function imageViewer(imgNum, arrow, act){
	if(arrow == true){
		if(act == "next"){
			if(curImg != 8){
				curImg += 1;
				document.getElementById("currentImage").src = "images/img" + curImg + ".jpg";
			}

			else{
				curImg = 1;
				document.getElementById("currentImage").src = "images/img" + curImg + ".jpg";
			}
		}

		else if(act == "prev"){
			if(curImg != 1){
				curImg -= 1;
				document.getElementById("currentImage").src = "images/img" + curImg + ".jpg";
			}

			else{
				curImg = 8;
				document.getElementById("currentImage").src = "images/img" + curImg + ".jpg";
			}
		}

		else{
			//pass
		}
	}

	else{
		curImg = imgNum;
		document.getElementById("currentImage").src = "images/img" + curImg + ".jpg";
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