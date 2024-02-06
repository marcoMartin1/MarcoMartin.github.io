function validation(){
   
    var text = document.getElementsByName('textarea')[0];
    
    var notvalid = false;
    var word = text.ariaValueMax.split(' ');

    for(let i = 0; i<word.length-1; i++){
        if(word<5 && word > 100){
            return notvalid;
            
        }
        if(notvalid){
            break;
        }
    }



}