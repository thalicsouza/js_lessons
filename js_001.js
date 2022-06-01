/*tipos de variáveis*/

let nome = 'thalistarr'
let ano_nascimento = 1988
let agora = new Date()
let idade = agora.getFullYear() - ano_nascimento

console.log("Meu nome é " + nome + " e tenho " + idade + " anos de idade.")

/*estruturas de decisão*/
if(idade >= 18){
	console.log("Parabéns, você é maior de idade e está apto a dirigir")
  if (idade >20){
  console.log("Você pode ter um carro 0K")
  } else {
  console.log("Você só pode ter um carro usado")
  }
} else {
	console.log("Infelizmente você ainda não está apto a dirigir, pois é menor de idade")
}
