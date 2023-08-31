/*const  filme = {
    direcao: "Stevie Jobs",
    nome: "Predador",
    ano: 1998,
    elenco: ["Arnold Schwasneger"],
    olhou: true
};
*/






/*
const pessoa = {
    nome: "Akame",
    idade: 15,
    generoMusical: "Eletrônica"
};
const frase = `O nome da pessoa é ${pessoa.nome}, sua idade é ${pessoa.idade} e gosta de ${pessoa.generoMusical}`
console.log(frase)*/
//spreads
/*const estudande = {
    nome: "aluno",
    curso:"3KTI",
};

const novoEstudante = {
    ...estudande,
    curso:"ADS"
}
*/
/*
    const pessoa = {
        nome: "Akame",
        idade: 15,
        generoMusical: "Eletrônica"
    };
    
    const alterarPessoa = (obj) => {
const novaPessoa = {
    ...obj,
    comidasfavs: [strogonoff, batata],
    BFF:{
        nome: "Akame",
        idade: 18, 
    } 


}
    
const frase = `O nome da pessoa é ${novaPessoa.nome} e suas comidadas favs são ${novaPessoa.comidasfavs[0]},${novaPessoa.comidasfavs[1]} .Meu bff é ${novaPessoa.BFF.nome}, sua idade é ${novaPessoa.BFF.idade}`
console.log(frase)
}
*/


//Exercicíos de Objetos
//Interpretação d'códigos
//Exercicío 1
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
*/
//1.a)
//Esses consoles.log vão mostrar as segunites informações de certas parte do código:
/*Matheus Nachtergaele
Virginia Cavendish
{canal: 'Globo', horario: '14h'}
undefined
*/

//Exercicío 2
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/
/*2.a)
{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'}
undefined

2.b)
A sintaxe de 3 pontos (...), ela cópia informações de um objeto ou array inteiro.
*/

//Exercicío 3
/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
3.a)
false

3.b)isso se deu pelas chamadas dos consoles não corresponderem 

*/

//Exercícios d'escrita

//(2)Exercício 1
//1(2).a) 
/*const humam = {
    nameOfMeliante:"Akame Bytes",
    nicknames:["Bite", "Kamezin", "Negão Japa"]
}
const frase = `O meu nome é ${humam.nameOfMeliante}, mas pode me chamar de ${humam.nicknames[0]},de ${humam.nicknames[1]} ou se preferir de ${humam.nicknames[2]}. Mas tem que ser meu amigo próximo.`
console.log(frase)
"O meu nome é Akame Bytes, mas pode me chamar de Bite,de Kamezin ou se preferir de Negão Japa. Mas tem que ser meu amigo próximo."
//1(2).b)
const newHumam = {
    ...humam,
    newName:"Bytes",
    newnicknames: ["Meia Noite", "Oreo sem Recheio", "Noite Ambulante"]
}
const newFrase = `Meu nome é ${newHumam.newName}, mas pode me chamar de ${newHumam.newnicknames[0]}, de ${newHumam.newnicknames[1]} ou de ${newHumam.newnicknames[2]}, mas deve ter minha confinça lá nas alturas`
console.log(newFrase)
"Meu nome é Bytes, mas pode me chamar de Meia Noite, de Oreo sem Recheio ou de Noite Ambulante, mas deve ter minha confinça lá nas alturas"
*/


//Exercício 2
//2(2).a)
const pessoa = {
    nome:"Ana Amari",
    idade:61,
    ocupação:"Franco-atiradora"
}
function minhaOcupation(pessoa) {
    const resultado = 
}