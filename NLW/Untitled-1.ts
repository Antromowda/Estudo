//UUID -> Universally unique identifier

//function enviarEmail(para, id, assunto, corpo) {
    //Biblioteca de envio de email

//    console.log(para, id, assunto, corpo)
//}

//class EnviarEmailParaUsuario { 
    
//    send() {
//        enviarEmail("rico@gmai.com", 666, "Hello", "World");
//    }
//}

interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({ para, id, assunto, texto }: DadosDeEnvioEmail) { 
    
    console.log(para, id, assunto, texto);

}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail( {
            para: "rico@gmail.com",
            id: "666",
            assunto: "Hello",
            texto: "World"
        })
    }
}
