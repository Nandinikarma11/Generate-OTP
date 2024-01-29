function generateOTP(length){
    var digits = "0123456789";
    let OTP ='';

    for(let i = 0; i< length; i++){
        OTP += digits[Math.floor(Math.random() * 10)];

    }
    var span = document.querySelector('.container span');
    span.innerHTML = OTP;


}


function generate4digitOTP(){
    generateOTP(4);
}

function generate6digitOTP(){
    generateOTP(6);
}