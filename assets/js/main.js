const griglia = document.getElementById('griglia');
console.log( griglia );


function myFunction() {

function createOuput(){
    const div = document.createElement('div');
    div.classList.add('output');
    return div;
  }
  

 
  for( let i = 0; i < 100; i++ ){

    let ouputCorrente = createOuput();
    
  
    ouputCorrente.addEventListener('click', function(){
        console.log(this);
        this.classList.toggle('bg-primary');
    })
  
    griglia.append( ouputCorrente );
  
  }
}
