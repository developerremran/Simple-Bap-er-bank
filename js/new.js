// first time deposite option declare 
// 1/ input field declare 
document.getElementById('depositCalculation').addEventListener('click', function(){
    const depoInput = document.getElementById('depoInput');
    const depoInputValue = depoInput.value;
    const depoInputValueNumber = parseFloat(depoInputValue);
   

    const depoAmount = document.getElementById('depoAmount');
    const depoAmountValue = depoAmount.innerText;
    const depoAmountValueNumber = parseFloat(depoAmountValue);

    const depositBalance = depoInputValueNumber + depoAmountValueNumber;

    depoAmount.innerText = depositBalance;
    
    document.getElementById('depoInput').value = '';

    // last time i will set nan value 


    const totalAmountBoxx = document.getElementById('totalAmountBoxx');
    const totalAmountBoxxValue = totalAmountBoxx.innerText;
    const totalAmountBoxxValueNumber = parseFloat(totalAmountBoxxValue);
    
    // now conect to total amount in my balance 
    const totalMyBalance = depoInputValueNumber + totalAmountBoxxValueNumber;

    totalAmountBoxx.innerText = totalMyBalance;

})

// 2nd step in declare to withdraw option 
document.getElementById('withdrawToAmountBtn').addEventListener('click',function(){
    
    // now declare to input value 
    const withdrawInput = document.getElementById('withdrawInput');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputNumber = parseFloat(withdrawInputValue);
    
    const withdrawCount = document.getElementById('withdrawCount');
    const withdrawCountValue = withdrawCount.innerText;
    const withdrawCountNumber = parseFloat(withdrawCountValue);
   
    const totalWithdrawCount = withdrawInputNumber + withdrawCountNumber;
    
    withdrawCount.innerText = totalWithdrawCount;
    document.getElementById('withdrawInput').value = '';
    
    // now declare and calcualteion to withdraw and mainbalance 

   const totalAmountBoxx1 = document.getElementById('totalAmountBoxx');
   const totalAmountBoxx1Value = totalAmountBoxx1.innerText;
   const totalAmountBoxx1Number = parseFloat(totalAmountBoxx1Value);

   const totalBalance =totalAmountBoxx1Number  - withdrawInputNumber;
   totalAmountBoxx1.innerText = totalBalance;
   

})