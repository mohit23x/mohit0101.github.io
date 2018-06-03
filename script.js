function OpenOverlay(){
    document.getElementById("overlay").style.width = "100%";
}

function CloseOverlay(){
    document.getElementById("overlay").style.width = "0%";    
}


// When the user clicks on <div>, open the popup
function palletfuntion(x) {
    var popup = document.getElementById(x);
    console.log(popup);
    popup.classList.toggle("show");
    setTimeout(function(){ popup.classList.remove("show") }, 2000);
}


var myindex = 0;
runcarousel();

function runcarousel(){
    var i;
    var x = document.getElementsByClassName("cimages");
    for(i=0; i< x.length; i++){
        x[i].style.display = "none";
    }
    myindex++;
    if (myindex > x.length) {myindex = 1}
    x[myindex-1].style.display = "block";
    setTimeout(runcarousel, 2000);

}

function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}

window.onload = function(){document.getElementById("hideall").style.display = "none";}


