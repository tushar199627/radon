
const a = function printDate() {
    const date=new Date();  
    const day=date.getDate(); 
    console.log("Date is: "+day)
}
const b=function printMonth(){
    const date1=new Date();
    const month = date1.toLocaleString("en-US", { month: "long" });
    console.log("Month is: "+month);
}

const c=function getBatchInfo() {
    console.log("Radon, W3D1, the topic for today is Nodejs module system")
}
module.exports.a = a
module.exports.b = b
module.exports.c = c