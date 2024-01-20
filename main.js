const form = document.getElementById('form');

// Função que valida se A é maior que B
function validaForm(va, vb){
    va = parseFloat(va);
    vb = parseFloat(vb);
    let result = (va>vb)
    return result
}

// Quando ocorre o evento de 'submit' no form acontece:
form.addEventListener('submit', function(e){
    e.preventDefault();

    const messageSuccess = `You Rock! <b>${va.value}</b> is bigger than <b>${vb.value}</b>`
    const messageFailure = 'Too Bad :C, Try Again!';
    // const alertSuccess = messageSuccess

    if(validaForm(va.value, vb.value)){
        // alert(messageSuccess)
        const alertSuccess = document.querySelector('.success-message');
        alertSuccess.innerHTML = messageSuccess;
        alertSuccess.style.display = 'flex';
        document.getElementById('va').value = '';
        document.getElementById('vb').value = '';


    }else{
        // alert(messageFailure)
        alertFailure = document.querySelector('.failure-message');
        alertFailure.innerHTML = messageFailure
        alertFailure.style.display='flex'
        document.getElementById('va').value = '';
        document.getElementById('vb').value = '';
    }
})