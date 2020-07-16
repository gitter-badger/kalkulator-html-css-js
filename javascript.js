let prevNumber='';
let kalkulasi='';
let current='0';
const inputnumber=(number)=>{
    if(current==='0'){
        current=number;
    }else{
        current+=number;
    }
}
const layar=document.querySelector(".kalkulator-layar");
const updatelayar=(number)=>{
    layar.value=number;
}
const numbers=document.querySelectorAll(".number");
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputnumber(event.target.value)
        console.log("number "+event.target.value+" ditekan");
        updatelayar(current);
    })
});
const operators=document.querySelectorAll(".operator");
operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        console.log(event.target.value);
        inputoperator(event.target.value);
    })
});
const inputoperator=(operator)=>{
    if(kalkulasi===''){
        prevNumber=current;
    }
    kalkulasi=operator;
    current='0';
};
const equalsign=document.querySelector(".equal-sign");
equalsign.addEventListener("click",()=>{
    calculate();
    updatelayar(current);
});
const calculate=()=>{
    let result='';
    switch(kalkulasi){
        case "+":
            result=parseFloat(prevNumber)+parseFloat(current);
            break;
        case "-":
            result=parseFloat(prevNumber)-parseFloat(current);
            break;
        case "*":
            result=parseFloat(prevNumber)*parseFloat(current);
            break;
        case "/":
            result=parseFloat(prevNumber)/parseFloat(current);
            break;
        default:
            return;
    }
    current=result;
    kalkulasi='';
}
const clearbtn=document.querySelector(".all-clear");
clearbtn.addEventListener("click",()=>{
    clearall();
    updatelayar(current);
    console.log("AC button is pressed");
});
const clearall=()=>{
    prevNumber='';
    kalkulasi='';
    current='0';
}
const desimal=document.querySelector(".decimal");
desimal.addEventListener("click",(event)=>{
    inputdesimal(event.target.value);
    updatelayar(current);
    console.log(event.target.value);
});
const inputdesimal=(dot)=>{
    if(current.includes('.')){
        return;
    }
    current+=dot;
}