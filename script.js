function emailSend(){

    var naam = document.getElementById('naam').value;
    var email = document.getElementById('email').value;
    var beschrijving = document.getElementById('beschrijving').value;


    var messageBody = "Naam " + naam +
    "<br/>Email " + email +
    "<br/>Beschrijving " + beschrijving;

    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "timgoovers@gmail.com",
    Password : "911A14365D8C7F6C273D6050C578B6BCD9ED",
    To : 'tjf.goovers@student.avans.nl',
    From : "timgoovers@gmail.com",
    Subject : "Nieuwe Lead !!!",
    Body : messageBody
}).then(
  message => {
    if(message=='OK'){
        swal("Bedankt!", "Ik neem zo snel mogelijk contact met u op.", "success");    
    }
    else {
        swal("Oeps", "Er is iets fout gegaan, probeer het opnieuw!", "error");
    }
  }
);
}