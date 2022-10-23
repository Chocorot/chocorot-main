function myfunction () {
    if (document.getElementById("number").value == "") {
        alert('Please Enter your Height')
    }else{
        if (document.getElementById("number").value < 10){
            document.getElementById("number").value = 10
        }
        alert('Your Height is: ' + document.getElementById("number").value + "cm")
    }
    
}