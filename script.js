function configForm() {
    let noteConfig = document.getElementsByName("radnote")
    let contNote = 0
    let stuconfig = document.querySelector("input#qtdenum")
    let check
    let contStu = Number(stuconfig.value)

    for (let i = 0; i < noteConfig.length; i++) {
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
            alert("Selecione uma das Opções de notas!")
            break;
    }  
    if (!contStu || contStu <= 0) {
        alert("Digite uma quantidade válida de alunos")
        return
    }
    createForm(contStu,contNote) 
    



}

function createForm(qtdeStu,qtdeNote) {
    const div = document.getElementById("stu")
    div.innerHTML = ''
   
        for (let i = 1; i <= qtdeStu; i++) {
            let bloco = document.createElement("fieldset")
            let leg = document.createElement("legend")
            leg.textContent = `${i}º Aluno`
            bloco.appendChild(leg)

            let itemStu = document.createElement("input")
            itemStu.type = 'text'
            itemStu.placeholder = "Nome do aluno: "
            itemStu.classList.add("input-aluno")
            bloco.appendChild(itemStu)
            bloco.appendChild(document.createElement("br"))
            for (let j = 1; j <= qtdeNote; j++) {
                let itemN = document.createElement("input")
                itemN.type = 'number'
                itemN.placeholder = `Digite a ${j}º nota do aluno`
                itemN.classList.add(`nota-aluno-${i}`)
                bloco.appendChild(itemN)
                
            }

            div.appendChild(bloco)
            
        }
        let spa = document.createElement("br")
        let btncalc = document.createElement("input")
        btncalc.type = 'button'
        btncalc.value = 'Mostrar Resultados'
        btncalc.onclick = () => {
            let stu = calcform(qtdeStu)
            resultform(stu)

        }
        div.appendChild(spa)
        div.appendChild(btncalc)
}
function calcform(qtdeStu){
    const names = document.querySelectorAll(".input-aluno")
    let stu = []

    for (let i = 1; i <= qtdeStu; i++) {
        let notesE1 = document.querySelectorAll(`.nota-aluno-${i}`)
        let notes = Array.from(notesE1).map(e1 => Number(e1.value) || 0)
        let media = notes.reduce((a,b) => a+b, 0) / notes.length
        
        let students = {
            nome: names[i - 1].value || `Aluno ${i}`,
            notas: notes,
            média: media
        }
        stu.push(students)
    }
    return stu
}
function resultform(stu){
    const resDiv = document.getElementById("res")
    resDiv.innerHTML = ''

    stu.forEach(students => {
        let p = document.createElement("p")
        p.textContent = `${students.nome}: média ${students.média.toFixed(2)}`
        resDiv.appendChild(p)
    });

}