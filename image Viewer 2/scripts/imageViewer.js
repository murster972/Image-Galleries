window.currentImg = 1;
window.prevImg = 0;

$(document).ready(function(){
	$("#imageViewerContaineFore").mouseenter(function(){
		$(".imageNavStyle").fadeIn(100);
	})

	$("#imageViewerContaineFore").mouseleave(function(){
		$(".imageNavStyle").fadeOut(100);
	})

	$(".imgThumbStyle").on("mouseenter", function(){
		$(this).css("background-color", "#B0B0B0");
	})

	$(".imgThumbStyle").on("mouseleave", function(){
		$(this).css("background-color", "");
	})

	$("#imageNavLeft").click(function(){
		imageChange("NA", "prev");
	})

	$("#imageNavRight").click(function(){
		imageChange("NA", "next");
	})
})

$(document).keyup(function(e){
	if(e.which == 37){
		imageChange("NA", "prev");
	}

	else if(e.which == 39){
		imageChange("NA", "next");
	}
})

function imageChange(imgNum, changeEvent){
	if(changeEvent == "prev"){
		if(currentImg != 1){
			prevImg = currentImg;
			currentImg -= 1;
		}

		else{
			prevImg = currentImg;
			currentImg = 11;
		}
	}

	else if(changeEvent == "next"){
		if(currentImg != 11){
			prevImg = currentImg;
			currentImg += 1;
		}

		else{
			prevImg = currentImg;
			currentImg = 1;
		}
	}

	else{
		prevImg = currentImg;
		currentImg = imgNum;
	}

	$("#imgThumb" + prevImg).css("border-color", "#D0D0D0")
	$("#imgThumb" + currentImg).css("border-color", "#505050");
	$("#currentImage").fadeOut(200).queue(function(next) { $(this).attr("src", "images/img" + currentImg + ".jpg"); next(); }).fadeIn(300);
}	