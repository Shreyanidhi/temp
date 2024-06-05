const celsiusField=document.querySelector("celsius");
const degree=document.querySelector("degree");
const convertBtn=document.querySelector("convert-btn");
const tempType=document.querySelector("temp-type");


window.addEventListener("load",()=>{
    degree.value="";
celsiusField.innerHTML="";}
)
convertBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertToCelsius();
// convertBtn.innerHTML="<i class="fa-solid fa-circle-notch"></i>"
})
function convertToCelsius() {
    let inputValue = degree.value;

    // setTimeout(()=>{
        // convertBtn.innerHTML="<span>convert</span>";

    // },1000)
    if(tempType.value === "fahrenheit"){
        const fahrenheitToCelsius=(inputValue -32)*(5/9);
    celsiusField.innerHTML=`${fahrenheitToCelsius.toFixed(3)} &deg;
    c`;}
    // else if(tempType.value === "kelvin") {
    //  const kelvinitToCelsius= inputValue -273.15;
    // celsiusField.innerHTML=`${kelvinitToCelsius.toFixed(3)} &deg;
    // c`;
    //  }


        }