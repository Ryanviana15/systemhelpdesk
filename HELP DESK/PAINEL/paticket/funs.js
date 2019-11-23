function login(){
        var user = document.form_log.usuario.value;
        var senha = document.form_log.senha.value;
        if (user == 'Ryan' && senha == 123 ) {
          alert('Acesso concedido');
          window.close("index.html");
          window.open("paticket/index1.html");
        }
        else{
          alert('dados incorretos');
          window.close("index.html");
          window.open("index.html");
        }
        
}