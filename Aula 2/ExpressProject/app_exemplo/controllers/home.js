module.exports = function(app) {
    var Usuario = app.models.usuarios
    var HomeController = {
        index: function (requisição, resultado){
            var nome = "usuario novo"
            var email = "email@impacta.com"
            const usuario = {nome,email}

            Usuario.create(usuario, function (erro,usuario){
                if (erro) {
                    resultado = "Ocorreu um erro ao incluir usuario"
                }
                else {
                    resultado = "Usuario incluido com sucesso"
                }
            });

            resultado.render('home/index',{titulo: 'Exemplo express',subtitulo: 'exemplo de subtitulo',resultado: resultado});
        }
    }
    return HomeController
}