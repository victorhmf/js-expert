export default class Marketing {
  update({id, userName}) {
    // importante lembrar que o [update] é responsável por gerenciar seus erros/exceptions
    // nao deve-se ter await no notify porque a reponsabilidade do notify é só emitir eventos
    // só notificar todo mundo
    console.log(`[${id}]: [marketing] will send welcome email to ${userName}`)
  }
}