let amount = document.querySelector('.amount');
let invalidMessage = document.querySelector('.invalidMessage');
let invalidMessage2 = document.querySelector('.invalidMessage2');
let invalidMessage3 = document.querySelector('.invalidMessage3');
let but1 = document.querySelector('.but-1');
let but2 = document.querySelector('.but-2');
let but3 = document.querySelector('.but-3');
let but4 = document.querySelector('.but-4');
let but5 = document.querySelector('.but-5');
let personNumber = document.querySelector('.personNumber');
let customPer = document.querySelector('.customPer');         
let total = document.querySelector('.total');
let tip = document.querySelector('.tip');
let amountValue = Number;
let custom = Number;
let discount = Number;
let person = Number;
let tipPerson =Number;
let totalAmountPerson =Number;
console.log(amount)
document.addEventListener('DOMContentLoaded',function(){
    amount.addEventListener('input',function(event){
        event.preventDefault();
        amountValue = amount.value.trim();
        let amountReg = new RegExp('[0-9]');
        if(amountReg.test(amountValue)){

            if(amountValue == 0){
                invalidMessage.textContent= 'Can not be zero';
                invalidMessage.classList.remove('hidden');
                amount.style.borderStyle = 'solid'; 
                amount.style.borderColor = '#db2777'; 
                amount.style.borderWidth = '2px'; 
            }
            else{
                console.log(amountValue)
                return amountValue;

            }
        }
        else{
            invalidMessage.classList.remove('hidden');
            amount.style.borderStyle = 'solid'; 
            amount.style.borderColor = '#db2777'; 
            amount.style.borderWidth = '2px'; 
        }
    })
    
})
but1.addEventListener('click',function(event){
    discount = Math.floor(Number(amountValue*0.05));
    console.log(discount);
    return discount;
})

but2.addEventListener('click',function(event){
    discount = Math.floor(Number(amountValue*0.10));
    console.log(discount);
    return discount;
})

but3.addEventListener('click',function(event){
    discount = Math.floor(Number(amountValue*0.15));
    console.log(discount);
    return discount;
})
but4.addEventListener('click',function(event){
    discount = Math.floor(Number(amountValue*0.2));
    console.log(discount);
    return discount;
})
but5.addEventListener('click',function(event){
    discount = Math.floor(Number(amountValue*0.25));
    console.log(discount);
    return discount;
})

function totalCustom(){
    custom = customPer.value.trim();
    let customReg = new RegExp('[0-9]')
    if(customReg.test(custom)){
        if(custom === 0){
            discount = 0;
            return discount;
        }
        else{
            console.log(custom)
            discount = Math.floor(Number(amountValue*(custom/100)));
            return discount;
        }

    }
    else{
            invalidMessage2.classList.remove('hidden')
       
    }
}


function totalPerson(){
        person = personNumber.value.trim();
        let personReg = new RegExp('[0-9]');
        if(personReg.test(person)){
            if(discount === 0){
                tipPerson = 0;
                totalAmountPerson = amountValue/person;
                tip.textContent =`$${tipPerson}`
                total.textContent =`$${totalAmountPerson}`
                return person;
            }
            else{

                console.log(person)
                tipPerson = discount/person;
                totalAmountPerson = amountValue/person;
                tip.textContent =`$${tipPerson}`
                total.textContent =`$${totalAmountPerson}`
                return person;
            }
        }
        else{           
            invalidMessage3.classList.remove('hidden')
            
    }
}
function reset(){
    amount.placeholder= "0";
    amount.value= "";
    personNumber.placeholder= "0";
    personNumber.value= "";
    customPer.value  = "";
    window.location.reload();
}



