function calculate(){
    var x = Math.floor(Math.random()*100)+1;
    document.getElementsByTagName("h1")[0].innerHTMl="<i class='fas fa-heart'></i> Your Love Percent is "+ x + " %<i class='fas fa-heart'></i>";
    if(x>=80){
        document.getElementById("result").innerHTML="<i class='fas fa-heart'></i> CONGRATULATION , YOU BOTH ARE MADE FOR EACH OTHERS <i class='fas fa-heart'></i>";
    }
     else{
         DocumentTimeline.getElementById("result").innerHTML="Sorry !! "
     }
     document.getElementById("result").style.fontSize="xx-large";
}