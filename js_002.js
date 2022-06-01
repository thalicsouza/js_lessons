/*arrays e functions*/
let fruta = 'morango'
const array = [1,2, 'thalistarr', fruta, 'Capitu', 'Ron', 'Gabriel']

/*imprimindo o array*/
console.log(array)

/*imprimindo o tamanho da lista*/
console.log(array.length)

/*removendo o elemento na última posição da lista*/
array.pop()

console.log(array)

/*inserindo um novo elemento na última posição da lista*/
array.push(22)

/*buscando elementos por posição*/
console.log(array[5])

/*introduction to functions*/
function calcularIdade() {
	let nome = 'thalistarr'
	let ano_nascimento = 1988
	let agora = new Date()
	let idade = agora.getFullYear() - ano_nascimento

	console.log("Meu nome é " + nome + " e tenho " + idade + " anos de idade.")
}

calcularIdade()