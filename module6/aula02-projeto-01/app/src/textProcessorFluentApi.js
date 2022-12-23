// o objetivo do Fluent API é executar tarefas
// como um pipeline, step by step
// e no fim, ele chama o build, que é muito similar ao padrão Builder
// a diferença aqui é sobre processos, o Builder sobre construção
// objetos
class TextProcessorFluentAPI {
  // propriedade privada
  #content 
  constructor(content) {
    this.#content = content
  }

  extractPeopleData(){
    // ?<= fala que vai extrair os dados que virao depois desse grupo
    // [contratante|contratada] ou um ou outro, (e tem a flag no final da expressão pra pegar maiusculo ou minusculo)
    // :\s{1} vai procurar o caracter literal de dois pontos seguindo de um espaço
    // tudo acima fica dentro de um paratenses pra falar "vamos pegar dai pra frente"

    // (?!\s) negative look around, vai ignorar os contratantes do fim do documento (que tem só espaço em frente deles)
    // .*\n pega tudo até a primeira quebra de linha
    // .*? non greety ?, faz com que ele pare na primeira recorrencia, assim ele evita ficar em loop
    // $ informar que a pesquisa acaba no fim da linha
    // g -> global
    // m -> multiline
    // i -> insensitive

    const matchPerson = /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi
    const onlyPerson = this.#content.match(matchPerson)
    this.#content = onlyPerson

    return this
  }

  build() {
    return this.#content
  }
}

module.exports = TextProcessorFluentAPI