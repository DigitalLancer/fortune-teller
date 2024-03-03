const orb=document.querySelector(".orb");
const container=document.querySelector(".container");
const submitButton=document.querySelector("button");
const fortuneTeller=document.querySelector("div .fortuneTeller");
const input=document.querySelector(".textField");
const speechBubble=document.querySelector(".answer");

const answers = ["Yes", "No", "Most definitely", "Uncertain","Absolutely","Unlikely"];

container.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value){
        const index=Math.floor(Math.random() * 6);
        const answer=answers[index];
        console.log(`Asnwer given: ${answer}`);
        question=input.value;
        input.value="";
        speechBubble.textContent=answer;
        speechBubble.style.visibility="visible";
    }

    
});