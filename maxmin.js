document.getElementById("submit").onclick = function(){
    submitFunction();
};

document.getElementById("more").onclick = function(){
    moreFunction();
};


function submitFunction(){
    var x = document.getElementById("input-list").value;
    var y = document.querySelectorAll("#input-list input");

    for(var i; i < y.length ; i++){
        console.log(y[i].value);
    }
}

function moreFunction(){
 
}