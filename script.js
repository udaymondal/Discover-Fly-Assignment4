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
    let subtotal = 0;
    if(flightClass == 'firstClassInput'){
       subtotal = newClassCount * 150;
    }
    if(flightClass == 'economyClassInput'){
        subtotal = newClassCount * 100;
    }
    //subtotal = firstClassTotal + economyClassTotal;
    document.getElementById('subtotal').innerText = subtotal;
}

const bookNow = document.getElementById('bookNow');
bookNow.addEventListener('click', function(){
    console.log(subtotal);
})