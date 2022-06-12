

function login(){
    /////////////////////////////////
    //get the values from the form
    /////////////////////////////////
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();

    /////////////////////////////////
    //use a flag
    ////////////////////////////////
    let flag = false;


    //////////////////////////////////////
    //get the users from the Local Storage
    //////////////////////////////////////
    let userList = readUsers();


    //////////////////////////////////////
    //Travel the userlist
    //////////////////////////////////////
    for(index=0;index<userList.length;inde++){
        let user = userList[index];

        if(user.email == inputEmail && user.password == inputPassword){
            flag = true;
            window.location = "users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            },3000);
            }
        }
    }



function init(){
    $("#btnLogin".click(login));
}

window.onload=init;