const griglia = document.getElementById('griglia');
console.log( griglia );


function myFunction() {

function createOuput(){
    const div = document.createElement('div');
   
    div.classList.add('output');
    return div;
  }
 
 
  for( let i = 1; i < 101; i++ ){
    
    let ouputCorrente = createOuput();
    ouputCorrente.innerHTML = i;
    
  
    ouputCorrente.addEventListener('click', function(){
        console.log(this);
        this.classList.toggle('bg-primary');
      
    })
  
    griglia.append( ouputCorrente );
  
  
  }
}
