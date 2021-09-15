var dataEvento='2021-09-30'
var dataHoje= '2021-09-14'
var idadePessoa= 16
var listadeParticipantes= ['participante 1, participante2']
var listaPalestrantes= ['palestrante 1, palestrante2']
if (dataEvento<dataHoje){
    console.log('o cadastro não será permitido por data inválida')
}

if (idadePessoa<18) {
    console.log ('cadastro não permitido por conta da idade')
}
for(let i=0;i<listadeParticipantes.length;i++){
    console.log(listadeParticipantes[i])
}
for(let i=0;i<listaPalestrantes.length;i++) {
    console.log(listaPalestrantes[i])
}
