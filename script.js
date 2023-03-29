
function displaygrade(){
    var s1=(sub1.value)*1;
    var s2=(sub2.value)*1;
    var s3=(sub3.value)*1;
    var s4=(sub4.value)*1;
    var s5=(sub5.value)*1;
    var s6=(sub6.value)*1;
    var s7=(sub7.value)*1;
    var avg=(s1+s2+s3+s4+s5+s6+s7)/7;
    document.getElementById("marks").innerHTML="Average = "+ avg;

    if (avg < 75) {
        document.getElementById("rem").innerHTML = "FAILED";
        document.getElementById("des").innerHTML = "DID NOT MEET EXPECTATION";
    } else if (avg >= 75 && avg <= 79) {
        document.getElementById("rem").innerHTML = "PASSED";
        document.getElementById("des").innerHTML = "FAIRLY SATISFACTORY";
    } else if (avg >= 80 && avg <= 84) {
        document.getElementById("rem").innerHTML = "PASSED";
        document.getElementById("des").innerHTML = "SATISFACTORY";
    } else if (avg >= 85 && avg <= 89) {
        document.getElementById("rem").innerHTML = "PASSED";
        document.getElementById("des").innerHTML = "VERY SATISFACTORY";
    } else if (avg >= 90 && avg <= 100) {
        document.getElementById("rem").innerHTML = "PASSED";
        document.getElementById("des").innerHTML = "OUTSTANDING";
    } else {
        document.getElementById("rem").innerHTML = "DOES NOT EXIST";
        document.getElementById("des").innerHTML = "";
    }

}
