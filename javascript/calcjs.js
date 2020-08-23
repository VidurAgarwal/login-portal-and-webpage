var alert;var document;
var input1=document.getElementById('input1');
var input2=document.getElementById('input2');
var output1=document.getElementById('output1');
var form=document.getElementById('percentagecalculator');
form.addEventListener('submit', function(event){
    if(!input1.value||!input2.value)
        {
            alert("Plz enter values");
        }
    else
        {
            var x=parseFloat(input1.value);
            var y=parseFloat(input2.value);
            var percent=x/y*100;
            output1.innerText="Answer: "+percent+"%";
            event.preventDefault();
        }
