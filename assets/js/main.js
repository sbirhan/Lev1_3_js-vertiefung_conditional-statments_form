const result = document.getElementById("result")

function adult(age){

    event.preventDefault();
    
    if (age<0){
        window.alert("Bitte geben sie einen gültigen wert ein!");
        document.getElementById("age").value = 0;
    }
    else if (age<18){
        result.innerHTML = "Du darfst leider noch nicht Shisha rauchen.";  
    }
    else{
        result.innerHTML = "Ja. Du kannst Shisha rauchen.";
    }
}

function submit(){
    adult(parseInt(document.getElementById("age").value));
}