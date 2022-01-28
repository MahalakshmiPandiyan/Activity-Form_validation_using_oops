class FormValidation 
{
  constructor(firstName,lastName,emailId,phoneNo,genderName,domainName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.emailId=emailId;
    this.phoneNo=phoneNo;
    this.genderName=genderName;
    this.domainName=domainName;
  }
  firstNameValidate()
  {
    if(firstName.value.trim()===""){
      validation.onError(firstName,"First name cannot be empty");
    }
    else if (!validation.nameValidation(firstName.value.trim())){
      validation.onError(firstName,"First name should contain only letters");
    }
    else {
      validation.onSuccess(firstName); 
    }
  }
  lastNameValidate()
  {
    if(lastName.value.trim()===""){
      validation.onError(lastName,"Last name cannot be empty");
    }
    else if (!validation.nameValidation(lastName.value.trim())){
      validation.onError(lastName,"Last name should contain only letters");
    }
    else {
      validation.onSuccess(lastName);
    }
  }
  
  emailIdValidate()
  {
    if(emailId.value.trim()===""){
      validation.onError(emailId,"Email Id cannot be empty");
    }
    else if (!validation.emailIdValidation(emailId.value.trim())){
      validation.onError(emailId,"Invalid Email Id");
    }
    else {
      validation.onSuccess(emailId);
    }
  }
  
  phoneNumberValidate()
  {
    if(phoneNo.value.trim()===""){
      validation.onError(phoneNo,"Phone Number cannot be empty");
    }
    else if (!validation.phoneNumberValidation(phoneNo.value.trim())){
      validation.onError(phoneNo,"Phone Number should start with [6-9] followed by 9 digits");
    }
    else {
      validation.onSuccess(phoneNo);
    }
  }
  
  genderNameValidate()
  {
      if(genderName.value.trim()===""){
        validation.onError(genderName,"gender cannot be empty");
    }
    else if (!validation.genderNameValidation(genderName.value.trim())){
      validation.onError(genderName,"gender should male or female");
    }
    else {
      validation.onSuccess(genderName);
    }
  }
  
  domainNameValidate()
  {
    if(domainName.value.trim()===""){
      validation.onError(domainName,"Domain Name cannot be empty");
    }
    else if (!validation.domainNameValidation(domainName.value.trim())){
      validation.onError(domainName,"Domain Name should be BFS or EBA");
    }
    else {
      validation.onSuccess(domainName);
    }
  }
  

}


let form= document.getElementById("form");
let firstName=document.getElementById("firstname");
let lastName=document.getElementById("lastname");
let companyName=document.getElementById("company");
let emailId=document.getElementById("email");
let phoneNo=document.getElementById("phoneNumber");
let genderName=document.getElementById("gender");
let domainName=document.getElementById("domain");

let output=new FormValidation(firstName,lastName,emailId,phoneNo,genderName,domainName);

firstName.addEventListener('blur',output.firstNameValidate);
lastName.addEventListener('blur',output.lastNameValidate);
emailId.addEventListener('blur',output.emailIdValidate)
phoneNo.addEventListener('blur',output.phoneNumberValidate);
genderName.addEventListener('blur',output.genderNameValidate);
domainName.addEventListener('blur',output.domainNameValidate);

class Validation extends FormValidation
{
   onSuccess(input){
	  let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    input.style.border="3px solid green"; 
}

 onError(input,message){
	  let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    input.style.border="3px solid red"; 

}

 nameValidation(name){
	var firstNameRegx= /^[a-zA-Z]{3,15}$/;
	if (name.match(firstNameRegx)){
		return true;
	}
	else{
		return false;
	}
}

 emailIdValidation(emailId){
  var emailIdRegx=/^[a-z0-9]+@[a-z]+\.[a-z\.]{2,6}$/
  if(emailId.match(emailIdRegx)){
    return true;
  }
  else{
    return false;
  }

}
 phoneNumberValidation(phoneNo){
	var phoneNumberRegx=/^[6-9]{1}[0-9]{9}$/;
	if(phoneNo.match(phoneNumberRegx)){
		return true;
	}
	else{
		return false;
	}
}

 genderNameValidation(genderName)
{
  if (genderName.toLowerCase()==="male" || genderName.toLowerCase()==="female") {
    return true;
  }
  else{
    return false;
  }
}
 domainNameValidation(domainName){
	if(domainName.toLowerCase()==="bfs"|| domainName.toLowerCase()==="eba" ){
		return true;
	}
	else{
		return false;
	}
}
}

let validation= new Validation();