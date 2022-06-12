const STORE_KEY = "users";


function saveUser(user){
    let oldData = readUsers();
    oldData.push(user);

    let val = JSON.stringify(oldData);  //Creating the string
    //console.log(user);
    //console.log(val);
    localStorage.setItem(STORE_KEY,val);
}


function readUsers(){
    //////////////////////////////////////
    //get the values from the localStorage
    //////////////////////////////////////

    let data=localStorage.getItem(STORE_KEY);
    console.log(data);  //this is JSON, not going to work
    if(!data){
        return []; //Creating the array
    }
    else{
        let list = JSON.parse(data);
        console.log(list);
        return list;
    }



    let list = JSON.parse(data);
    console.log(list);
}


