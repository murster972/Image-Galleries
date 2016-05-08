window.currentImg = 1;
window.prevImg = 0;

$(document).ready(function(){
	$("#imageContainer").mouseenter(function(){
		$(".imageNavContainerMain").fadeIn(500);
		$("#thumbNailsContainerMain").fadeIn(500);
	})

	$("#imageContainer").mouseleave(function(){
		$(".imageNavContainerMain").fadeOut(200);
		$("#thumbNailsContainerMain").fadeOut(200);
	})

	$("#imgNavLeft").click(function(){
		imageChange("NA", "prev");
	})

	$("#imgNavRight").click(function(){
		imageChange("NA", "next");
	})
})

function imageChange(imgNum, act){
	if(act == "prev"){
		if(currentImg != 1){
			prevImg = currentImg;
			currentImg -= 1;
			$("#img1").fadeOut(300).queue(function(next) { $(this).attr("src", "images/img" + currentImg + ".jpg"); next(); }).fadeIn(300);
			$("#imgThumb" + prevImg).css("border-color", "black");
			$("#imgThumb" + currentImg).css("border-color", "white");
		}

		else{
			prevImg = currentImg;
			currentImg = 8;
			$("#img1").fadeOut(300).queue(function(next) { $(this).attr("src", "images/img" + currentImg + ".jpg"); next(); }).fadeIn(300);
			$("#imgThumb" + prevImg).css("border-color", "black");
			$("#imgThumb" + currentImg).css("border-color", "white");
		}
	}

	else if(act == "next"){
		if(currentImg != 8){
			prevImg = currentImg;
			currentImg += 1;
			$("#img1").fadeOut(300).queue(function(next) { $(this).attr("src", "images/img" + currentImg + ".jpg"); next(); }).fadeIn(300);
			$("#imgThumb" + prevImg).css("border-color", "black");
			$("#imgThumb" + currentImg).css("border-color", "white");
		}

		else{
			prevImg = currentImg;
			currentImg = 1;
			$("#img1").fadeOut(300).queue(function(next) { $(this).attr("src", "images/img" + currentImg + ".jpg"); next(); }).fadeIn(300);
			$("#imgThumb" + prevImg).css("border-color", "black");
			$("#imgThumb" + currentImg).css("border-color", "white");
		}
	}

	else{
		prevImg = currentImg;
		currentImg = imgNum;
		$("#img1").fadeOut(300).queue(function(next) { $(this).attr("src", "images/img" + currentImg + ".jpg"); next(); }).fadeIn(300);
		$("#imgThumb" + prevImg).css("border-color", "black");
		$("#imgThumb" + currentImg).css("border-color", "white");
	}
}

$(document).keyup(function(e){
	if(e.which == 37){
		imageChange("NA", "prev");
	}

	else if(e.which == 39){
		imageChange("NA", "next");
	}
})