///////////////////////////////////////////////
//This function needs an array to work
///////////////////////////////////////////////

function displayUsers(usersArray){

    let row;

    //////////////////////////////////////////
    //Travel the array
    /////////////////////////////////////////
    for(let index=0;index<usersArray.length;index++){
        let user=usersArray[index];
        console.log(user);
    //////////////////////////////////////////
    //Create the row = `<>$() <>`
    /////////////////////////////////////////
    row = `
        <tr>
            <td>${user.firstName}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td style="background-color:${user.color[0]}">${user.color[1]}</td>
        </tr>
        `;
    $("#users").append(row);

    }
    
    //////////////////////////////////////////
    //Append the row to the table
    /////////////////////////////////////////

}



function init(){
    console.log("Listing Users");
    let users = readUsers();//geting the array


    displayUsers(users);

}


window.onload=init;