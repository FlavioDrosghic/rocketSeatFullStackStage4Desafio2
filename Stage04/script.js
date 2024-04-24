let students = [
    {   
        nome: "Flávio",
        nota1: 8, 
        nota2: 7
    },
    {
        nome: "Bruno", 
        nota1: 3, 
        nota2: 6,
    }, 
    {
        nome: "Izabela",
        nota1: 10,
        nota2: 8,
    },
    {
        nome: "Beatriz",
        nota1: 7,
        nota2: 9,
    },
    {
        nome: "Juaquim",
        nota1: 6,
        nota2: 4,
    },
    {
        nome: "Chico",
        nota1: 1,
        nota2: 10,
    }
]

for(let i=0 ; i < students.length ; i++ ) {
    let media = (students[i].nota1 + students[i].nota2) / 2
    if (media >= 7){
        alert(`${students[i].nome} a media das suas notas é ${media}, meus parabens você foi aprovado!`)
    } else {
        alert(`${students[i].nome} a media das suas notas é ${media}, tente novamente não foi dessa vez!`)
    }
    console.log(media)
}
