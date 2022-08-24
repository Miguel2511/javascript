// //sintaxe
// function primeiraFuncao() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("meio");
//             resolve()
//           }, 2000);
//     })
// }
// async function segundaFuncao() {
//     console.log('inicio')
//     await primeiraFuncao()
//     console.log('fim')
// }

// segundaFuncao()

//prático
function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err)) //se der algum erro na fetch vai mostar o .catch
}

async function showUserName(id) {
    // vai tentar executar
    try {
        const user = await getUser(id)
        console.log(`O nome do usuário é: ${user.data.first_name} ${user.data.last_name}`)
        
        // se der erro, vai entrar no catch
    } catch(err) {
        console.log(`Erro: ${err}`) //vai printar o erro

    }
}

showUserName(5)