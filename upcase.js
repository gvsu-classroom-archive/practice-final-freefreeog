console.log("initial startup");

document.getElementById("decorate").onclick = function(){
    myFunction();
};

// SAMPLE HELP
// var headers = document.getElementsByTagName("th");
// for (var i = 0; i < headers.length; i++) {
//   var header = headers[i];
//   header.innerHTML = header.innerHTML.toUpperCase();
// }

function myFunction() {
    var x = document.getElementsByClassName("allcaps");
    var y = document.getElementsByClassName("upcase");

    for(var i = 0; i< x.length; i++){
        //x.getElementsByClassName("allcaps")[i].innerHTML = "v";
        var words = x[i];
        words.innerHTML = words.innerHTML.toUpperCase();
    }

    // for(var j = 0; j< y.length; j++){
        
        
    //     // var words = y[j];
    //     // words.innerHTML = words.innerHTML.charAt(0).toUpperCase() + words.innerHTML.slice(1);

    // }
    
    

}
