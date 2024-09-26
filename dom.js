document.addEventListener("DOMContentLoaded", function () {


    function myMove() {

        let id = null;
        const elem = document.getElementById("animate");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
            if (pos == 1500) {
                clearInterval(id);
            }
            else {
                pos++;
                elem.style.right = pos + "px";
                elem.style.left = pos + "px";
            }
        }
        
    }
    document.getElementById("myMove").addEventListener("click", myMove);
  
});


function mOver() {
     document.getElementById("Mous").style.background='red';
    document.getElementById("Mous").innerHTML = "Mouse In";
}
function mOut() {

    document.getElementById("Mous").style.background='blue';
    document.getElementById("Mous").innerHTML="Mouse Out";

}