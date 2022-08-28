let btn = document.getElementsByClassName('btn');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active')[0];
        current.className = current.className.replace(' active', '');
        this.className += ' active'
    })
}


function addele(element, name){
    let elearr = element.className.split(' ');
    let namearr = name.split(' ');
    for(let i = 0; i < namearr.length ; i++){
        if(elearr.indexOf(namearr[i]) == -1){
            element.className += " " + namearr[i]
        }
    }
}

function removEle(element, name){
    let elearr = element.className.split(' ');
    let namearr = name.split(" ");
    for(let i = 0; i < namearr.length; i++){
        while(elearr.indexOf(namearr[i]) > -1){
            elearr.splice(elearr.indexOf(namearr[i]), 1)
        }
        element.className = elearr.join(' ')
    }
}
filterSelection('all')
function filterSelection(c){
    let x = document.getElementsByClassName('column');
    if(c == 'all') c = ''
    for(let i = 0; i < x.length; i++){
        removEle(x[i], 'show')
        if(x[i].className.indexOf(c) > -1){
            addele(x[i], 'show')
        }
    }
}
