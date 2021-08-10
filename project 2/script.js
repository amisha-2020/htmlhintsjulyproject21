document.getElementById('loginBtn').addEventListener('click', function(){

    
  let username=document.getElementById('username').value;
  let email=document.getElementById('email').value;
  let password=document.getElementById('password').value;

  document.getElementById('username_errorMsg').innerText='';
  document.getElementById('email_errorMsg').innerText='';
  document.getElementById('password_errorMsg').innerText='';

  var request_emailregex= new RegExp( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  var request_passwordregex= new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,})');
  var valid=false;
  if(username==''){
    document.getElementById('username_errorMsg').innerText='* username is required';
    document.getElementById('username_errorMsg').style.color="red";
  }
  else if(email==''){
    document.getElementById('email_errorMsg').innerText='* email is required';
    document.getElementById('email_errorMsg').style.color="red";
  }
  else if(!email.match(request_emailregex)){
    document.getElementById('email_errorMsg').innerText='* email is required';
    document.getElementById('email_errorMsg').style.color="red";
  }
  else if(password==''){
    document.getElementById('password_errorMsg').innerText='* password is required';
    document.getElementById('password_errorMsg').style.color="red";
  }
  else if(!password.match(request_passwordregex)){
    document.getElementById('password_errorMsg').innerText='* password has at least 8 characters in which one lowercase letter,one uppercase letter,one digit and one special characters';
    document.getElementById('password_errorMsg').style.color="red";
  }
  else if(!document.getElementById('terms').checked){
    valid=true;
    document.getElementById('terms_errorMsg').innerText='* agree to the terms of service';
    document.getElementById('terms_errorMsg').style.color="red";
  }
  
  else
  {
    alert('Submitted');
  }
});

