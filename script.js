function config() {
    let noteConfig = document.getElementsByName("radnote")
    let contNote = 0
    let stuconfig = document.querySelector("input#qtdenum")
    let check
    let contStu = Number(stuconfig.value)

    for (let i = 0; i < 5; i++) {
        if (noteConfig[i].checked) {
            check = i
        }
        
    }
        
    

    switch (check) {
        case 0:
            contNote = 1
            break;
        case 1:
            contNote = 2
            break;
        case 2:
            contNote = 4
            break;
        case 3:
            contNote = 6
            break
        case 4:
            contNote = 12
           break
    
        default:
            contNote = "Erro nos cases"
            break;
    }  
    register(contStu,contNote) 
    alert(contNote)



}

function register(qtdeStu,qtdeNote) {
    
}