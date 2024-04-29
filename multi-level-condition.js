/**
 * MULTI LEVEL CONDITION
 */

const price = 4000;

if(price >= 5000){
   // 10% discount price

   const discount = price * 10 /100;
//    console.log(discount)
    const payamount = price - discount;
    console.log(payamount)
}
else if(price > 2500){
    //5%
    const discount = price * 5 /100;
    const payamount = price - discount;
    console.log(payamount)
}
else{
    console.log(price);
}