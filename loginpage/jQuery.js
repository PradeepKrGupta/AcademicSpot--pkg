/* Show login form on button click */

$('.loginBtn').click(function () {
  $('.login').show();
  $('.signUp').hide();
  /* border bottom on button click */
  $('.loginBtn').css({ 'border-bottom': '2px solid #ff4141' });
  /* remove border after click */
  $('.signUpBtn').css({ 'border-style': 'none' });
});


/* Show sign Up form on button click */

$('.signUpBtn').click(function () {
  $('.login').hide();
  $('.signUp').show();
  /* border bottom on button click */
  $('.signUpBtn').css({ 'border-bottom': '2px solid #ff4141' });
  /* remove border after click */
  $('.loginBtn').css({ 'border-style': 'none' });
});

//--------for form validation login------------------

function clearerror() {
  error = document.getElementsByClassName('loginerror');
  for (let item of error) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName('loginerror')[0].innerHTML = error;
}

function loginvalidation() {
  var returnval = true;
  clearerror();

  // perform the validation and if validation fails returnval as false
  var name = document.forms['myform1']["loginname"].value;
  if (name.length < 5) {
    seterror("logname", "*Name is too short!");
    returnval = false;
  }

  var lemail = document.forms['myform1']["email"].value;
  if (lemail.length>15) {
    seterror("logemail", "*Email is too long!");
    returnval = false;
  }

  var lpass = document.forms['myform1']["pass"].value;
  if (lpass.length>8) {
    seterror("logpass", "*Password is too long!");
    returnval = false;
  }

  var lcpass = document.forms['myform1']["cpass"].value;
  if (lcpass != lpass) {
    seterror("cpass", "*Password and Confirm password should match!");
    returnval = false;
}

  var loemail = document.forms['myform2']["lemail"].value;
  if (loemail.length>15) {
    seterror("logagainemail", "*Email is too long!");
    returnval = false;
  }

  var lopass = document.forms['myform2']["lopass"].value;
  if (lopass.length>8) {
    seterror("lagagainpass", "*Password is too long!");
    returnval = false;
  }

  return returnval;
  }

  
  


