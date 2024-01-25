$(document).ready(function(){
    $('#tel').mask('(00) 0 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#zip-code').mask('00000-000');

    $(form).validade({
        rules: {
            name: {required: true},
            email: {required: true, email: true},
            tel: {required: true},
            cpf: {required: true},
            address: {required: true},
            zipcode: {required: true},
        },
        sumitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let campoIncorreto = validador.numberOfInvalids();
            if(campoIncorreto){
                alert(`Existem ${campoIncorreto} campos incoretos!`)
            }
        }
    })
})