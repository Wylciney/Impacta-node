module.exports = (app) => {
    const Contato = app.models.contato
    const contatoController = {
        home: (request, response) => {
            response.send ('Servidor no ar')
        },
        listarContatos: (request, response) =>{
            Contato.find((erro, contato) =>{
                if(erro) {
                    response.json(erro)
                 }else{
                    response.json(contato)
                 }
            })
        },
        buscarContatoPorId: (request, response) => {
            const id = request.params.id
            Contato.findById(id,(erro, contato) =>{
                if(erro) {
                    response.json(erro)
                 }else{
                    response.json(contato)
                 }
            })
        },
        cadastrarContato: (request,response) =>{
            const contato = request.body
            Contato.create(contato,(erro, contato) =>{
                if(erro) {
                    response.json(erro)
                 }else{
                    response.json(contato)
                 }
            })
        },
        atualizarContato: (request, response) =>{
            const id = request.params.id
            const contatoDto = request.body
            Contato.findById(id,(erro, contato) =>{
                if(erro) {
                    response.json(erro)
                 }else{
                    if(contatoDto.cpf){
                        contato.cpf = contatoDto.cpf
                    }
                    if(contatoDto.nome){
                        contato.nome = contatoDto.nome
                    }
                    if(contatoDto.telefone){
                        contato.telefone = contatoDto.telefone
                    }
                    contato.save((erro,contato)=>{
                        if(erro){
                            response.json(erro)
                        }else{
                            response.json(contato)
                        }
                    })        
                 }
            })
        },
        deletarContato: (request, response) => {
            const id = request.params.id
            Contato.remove({"_id":id},(erro, contato) =>{
                if(erro) {
                    response.json(erro)
                 }else{
                    response.send("Contato removido")
                 }
            })   
        }
    }

    return contatoController;
}