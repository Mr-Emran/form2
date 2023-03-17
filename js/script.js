let forms = document.querySelector('form')
console.log(forms);

let email = forms.elements.email
let pas = forms.elements.pas

forms.addEventListener('submit',()=>{
    event.preventDefault()
    let obj = {
        email:email.value,
        password: pas.value
    }
    console.log(obj);
})