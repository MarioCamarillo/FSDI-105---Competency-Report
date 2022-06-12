
//Object Constructor
class User {
    constructor(email, password, firstName, lastName, age, address, phoneNumber, payment, color) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.payment = payment;
        this.color = color;

    }
}


////////////////////////////////////////////////////////////////////////////////////
//
//Validating information (not blank)
//return false when the user is not valid
//retunr True whien the user is valid
////////////////////////////////////////////////////////////////////////////////////
function isValid(user){
let valid=true;
    if(user.email.length==0){
    valid=false;
    console.log("Please add an email");
    $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.log("Please add a password");
        $("#txtPassword").addClass("input-error");
    }
    if(user.payment.length==0){
        valid=false;
        console.log("Please add a payment");
        $("#txtPayment").addClass("input-error");
        }
        if(user.address.length==0){
            valid=false;
            console.log("Please add an address");
            $("#txtAddress").addClass("input-error");
        }   
    return valid;
}


function validatePass(){
    console.log("validating password");
    ////////////////////////////////////////////////
    //get the value from the input (password)
    ////////////////////////////////////////////////
    let txtPassword =$("#txtPassword");
    let password = txtPassword.val();
    
    ////////////////////////////////////////////////
    //if the password is less than 6 characters?
    ////////////////////////////////////////////////
    if(password.length<6){
        txtPassword.css("background","#ff9898");
        displayError("the password is too small");
    }
    else{
        txtPassword.css("background","#64cc66");
        hideError();
    }
}


function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}

function hideError(){
    $("#alertError").addClass("hide");
}




//Register function
function register(){
    let userName = $("#txtEmail").val();
    let userPassword = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();
    let userAge = $("#txtAge").val();
    let userAddress = $("#txtAddress").val();
    let userPhoneNumber = $("#txtPhoneNumber").val();
    let userPayment = $("#txtPayment").val();
    let userColor = ntc.name($("#Color").val());

    //let userColor = $("#Color").val();

    
    console.log(userName,userPassword,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);

    ///////////////////////////////////////////////////////////////////////////
    // Creating the object
    ///////////////////////////////////////////////////////////////////////////
    let newUser = new User(userName,userPassword,userFirstName,userLastName,userAge,userAddress,userPhoneNumber,userPayment,userColor);

    ///////////////////////////////////////////////////////////////////////////
    // Is the user valid?
    ///////////////////////////////////////////////////////////////////////////
    if(isValid(newUser)==true){
       //console.log(newUser);
       saveUser(newUser);
    ///////////////////////////////////////////////////////////////////////////
    // Clear the inputs
    ///////////////////////////////////////////////////////////////////////////
    $('input').val("");
    }
}



function init(){
    console.log("Register");

    //Hook events
    $("#btbRegister").click(register);
    $("#txtLastName").keypress(function(e){
        if(e.key=="Enter"){
            register();
        }
    });
    $("#txtPassword").keyup(validatePass); //it executes everytime that key is up
        

}


window.onload=init;