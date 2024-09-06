// let a = document.getElementsByClassName('a');
let mood= 'large'

function plus(d) {
    
    let element = document.getElementById(d);
    let answer= element.querySelector('.answer');
    const icon = element.querySelector('.material-symbols-outlined');
    
    if(mood === 'large')
    {
        
        
        answer.classList.add('active');
        mood= 'mine'
        icon.innerHTML= 'close_fullscreen'
       
    }else{
        
        answer.classList.remove('active');
        mood= 'large'
        icon.innerHTML= 'add_box'
    }
   
}
// span1.innerHTML= 'minimize'
