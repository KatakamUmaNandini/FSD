
function hours(){
    let x = new Date();
    document.getElementsByClassName("hours")[0].innerHTML = x.getHours();
}
function minutes(){
    let x = new Date();
    document.getElementsByClassName("minutes")[0].innerHTML = x.getMinutes();
}
function seconds(){
    let t = new Date();
    document.getElementsByClassName("seconds")[0].innerHTML = t.getSeconds();
    // console.log("hai")
}
hours();
minutes();
setInterval(seconds,1000);

