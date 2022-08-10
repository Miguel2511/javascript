var hoje = new Date()
var hora = hoje.getHours()
hora = 18
console.log(`hora: ${hora}`)
if (hora <= 12) {
    console.log('Bom dia!')
} else if (12 < hora && hora <= 18 ) {
    console.log('Boa tarde!')
} else if (hora > 18) {
    console.log('Boa noite!')
}