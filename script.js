const firstClassIncrease = document.getElementById('firstClassIncrease');
firstClassIncrease.addEventListener('click', function(){
    handleQuantity(true, 'firstClassInput');
});

const firstClassDecrease = document.getElementById('firstClassDecrease');
firstClassDecrease.addEventListener('click', function(){
    handleQuantity(false, 'firstClassInput');
});

const economyIncrease = document.getElementById('economyIncrease');
economyIncrease.addEventListener('click', function(){
    handleQuantity(true, 'economyClassInput')
});

const economyDecrease = document.getElementById('economyDecrease');
economyDecrease.addEventListener('click', function(){
    handleQuantity(false, 'economyClassInput')
});

function handleQuantity(isIncreased, flightClass){
    const classInput = document.getElementById(flightClass);
    const classCount = parseInt(classInput.value);
    let newClassCount = 0;
    if(isIncreased == true){
        newClassCount = classCount + 1;
    }
    if(isIncreased == false && classCount>0){
        newClassCount = classCount - 1;
    }
    classInput.value = newClassCount; 
    
    calculateTotal()
}

function calculateTotal(){
    const firstClassInput = document.getElementById('firstClassInput');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyClassInput = document.getElementById('economyClassInput');
    const economyClassCount = parseInt(economyClassInput.value);

    const subTotal = (firstClassCount * 150) + (economyClassCount * 100);
    document.getElementById('subtotal').innerText = subTotal;

    const tax = subTotal * 0.1;
    document.getElementById('vatPrice').innerText = tax;

    const inTotal = subTotal + tax;
    document.getElementById('totalPrice').innerText = inTotal;

    document.getElementById('grandTotal').innerText = inTotal;

}

const bookNow = document.getElementById('bookNow');
bookNow.addEventListener('click', function(){
    const bookingForm = document.getElementById('bookingForm');
    bookingForm.style.display = 'none';
    const bookingConfirm = document.getElementById('bookingConfirm');
    bookingConfirm.style.display = 'block';

})