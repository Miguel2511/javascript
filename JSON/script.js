const objs = [
	{
		"nome": "Miguel",
		"idade": 21,
		"esta_trabalhando": true,
		"detalhes_profissao": { 
			"profissao": "Programador",
			"empresa": "Empresa x"
		},
		"hobbies": ["programar", "correr", "ler"]
	},
    {
		"nome": "João",
		"idade": 30,
		"esta_trabalhando": false,
		"detalhes_profissao": { 
			"profissao": false,
			"empresa": false
		},
		"hobbies": ["correr", "ler"]
	}
]

console.log(objs)

// converter objeto para JSON
const jsonData = JSON.stringify(objs)
console.log(jsonData)

// converter JSON para objeto
const objData = JSON.parse(jsonData)
console.log(objData)