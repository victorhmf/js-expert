const { evaluateRegex } = require("./util")

class Person {
  // (\w+):\s.*
  // $1

  constructor([  
    nome,
    nacionalidade,
    estadoCivil,
    documento,
    rua,
    numero,
    bairro,
    estado
  ]) {

    // ^ -> começo da string
    // + -> um ou mais recorrencias
    // (\w{1}) -> pega só a primeira letra e deixa em um grupo
    // (a-zA-Z) encontra letras maiusculas ou minusculas, adicionamos o + pra ele pegar todas até o caracter especial
    // g -> todas as ocorrencias

    const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
    const formatFirstLetter = (prop) => {
      return prop.replace(firstLetterExp, (fullMatch, group1, group2, index) => {
        return `${group1.toUpperCase()}${group2.toLowerCase()}`
      })
    }

    // (\w+),
    // this.$1 = $1

    this.nome = nome
    this.nacionalidade = formatFirstLetter(nacionalidade)
    this.estadoCivil = formatFirstLetter(estadoCivil)
    // tudo que não for digito vira vazio
    this.documento = documento.replace(evaluateRegex(/\D/g), "")
    this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
    // começa a procurar depois do " a " e pega tudo que tem a frente
    // (?<= faz com que ignore tudo que tiver antes desse match)
    // conhecido como positive lookBehind
    this.numero = numero
    // começa a buscar depois do espaço, pega qualquer letra ou digito até o fim da linha(poderia ser o .* tbm)
    this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
    // remove o ponto literal (.) do fim da frase
    this.estado = estado.replace(evaluateRegex(/\.$/), "")
  }
}

module.exports = Person