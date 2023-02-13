document.querySelector('.submitBtn').addEventListener('click', function(){
    // Now set the input filed value 
    const userInput = document.getElementById('loginName');
    const userInputValue = userInput.value;

    const userPass = document.getElementById('loginPassword');
    const userPassValue = userPass.value;

    if(userInputValue == 'emran' && userPassValue == '12345'){
        window.location.href = 'index.html'
    }else{
        console.log('Invalid User')
    }

})
