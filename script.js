const initPrice= document.querySelector("#initprice")
const quant= document.querySelector("#quant")
const currentPrice= document.querySelector("#currprice")
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");
const sadGif = document.querySelector("#sad");
const happyGif = document.querySelector("#happy");
const body = document.querySelector("#body");

function calcProfitLoss()
{
 const initial = Number(initPrice.value);
 const current = Number(currentPrice.value);
 const quantity = Number(quant.value);
  var profit =0;
  var loss=0;
 if(current>initial)
 {
     profit = (current - initial) * quantity;
		var profitPercent = (profit / initial) * 100;
      output.innerText= "Total Profit Is : " +profit +" units and Profit Percent : " +profitPercent.toFixed(2);
      sadGif.style.display="none";
      happyGif.style.display="block";
      if(profitPercent>50)
      {
      body.style.backgroundColor = "green"
      }
      else
      {
        body.style.backgroundColor =  "#FBBF24"
      }
    
 }
 else if(current==initial)
 {
    output.innerText= "No Profit! No Loss!"
    happyGif.style.display="none";
    sadGif.style.display="none";
    body.style.backgroundColor =  "#FBBF24"
 }
 else
 {
     loss = (initial - current) * quantity;
     var lossPercent = (loss / initial) * 100;
     output.innerText= "Total Loss Is : " +loss +" units and Loss Percent :" +lossPercent.toFixed(2);
     happyGif.style.display="none";
     sadGif.style.display="block";
     if(lossPercent>50)
     {
     body.style.backgroundColor = "red"
     } else
     {
       body.style.backgroundColor =  "#FBBF24"
     }
     
 }
 
}

function calculate()
{
  if(initPrice.value && quant.value && currentPrice.value)
  {
    if(initPrice.value>0 && quant.value>0 && currentPrice.value>0)
    {
        calcProfitLoss()
    }  
    else
    {
        output.innerText ="All The Required Fields Should Be Greater Than 0" 
    }
  }
  else
  {
      output.innerText ="Enter All The Required Fields !!"
  }
}

submit.addEventListener("click",calculate)