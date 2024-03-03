// Creating clearerror function to clear the all the errors before entering the input
function clearerror(){
    error=document.getElementsByClassName('formerror');
    for(let item of error){
        item.innerHTML= "";
    }
}

// Now creating the seterror function for setting errors
function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML= error;
}

// creating the validation function for form validation
function validation(){
    var returnval=true;
    clearerror();

    // perform the validation and if validation fails returnval as false
    var name=document.forms['myform']["fname"].value;
    if(name.length<5){
        seterror("sname","*Name is too short!");
        returnval=false;
    }
    
    var fatherName=document.forms['myform']["fathname"].value;
    if(fatherName.length<5){
        seterror("fathename","*fathername is too short!");
        returnval=false;
    }

    var Email=document.forms['myform']["femail"].value;
    if(Email.length>20){
        seterror("email","*Email length is too long!");
        returnval=false;
    }

    var number=document.forms['myform']["fphone"].value;
    
    if(number.length!=10){
        seterror("phone","*Phone/Mobile number should be 10 digit only!");
        returnval=false;
    }
    if(isNaN(number)){
        seterror("phone","*incorrect input!");
        returnval=false;
    }  
    return returnval;
}
