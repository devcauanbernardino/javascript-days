/*
 Sistema de autenticação que verifica várias condições antes de permitir acesso
 let usuariovalido
 let senhaCorreta
 let temPermissao

 Mensagens: 
 Acesso permitido!
 Acesso negado. Usuário sem permissão
 Senha incorreta. Tente novamente
 Usuário não encontrado
*/

const autenticaoUsuario = ({
  usuarioValido = true,
  senhaCorreta = false,
  temPermissao = true,
} = {}) => {
  if (usuarioValido) {
    if (senhaCorreta) {
      if (temPermissao) {
        console.log("Acesso permitido!");
      } else {
        console.log("Acesso negado. Usuário sem permissão");
      }
    } else {
      console.log("Senha incorreta. Tente novamente");
    }
  } else {
    console.log("Usuário não encontrado");
  }
};

autenticaoUsuario()