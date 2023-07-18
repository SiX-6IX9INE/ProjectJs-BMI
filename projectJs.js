document.getElementById("calculate").onclick = function(){
    var weight = 0;var height = 0;var result = 0

    weight = document.getElementById("getweight").value; // น้ำหนัก
    height = document.getElementById("getheight").value; // ส่วนสูง
    if (weight == 0 || height == 0){
        result = 0.00;
    }else{
        result = weight / (height/100)**2;
    }
    document.getElementById("answer").innerHTML = result.toFixed(2);

}
