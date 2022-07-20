

//----------- MÁSCARA CPF

function is_cpf (c) {

  if((c = c.replace(/[^\d]/g,"")).length != 11)
    return false

    if (c == "00000000000")
      return false;

  var r;
  var s = 0;

  for (i=1; i<=9; i++)
    s = s + parseInt(c[i-1]) * (11 - i);  
    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))
      r = 0;
  
      if (r != parseInt(c[9]))
        return false;      
        s = 0;

  for (i = 1; i <= 10; i++)
    s = s + parseInt(c[i-1]) * (12 - i);  
    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))
    r = 0;

      if (r != parseInt(c[10]))
        return false;

  return true;
}  

function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
}

function fMascEx() {
  obj.value=masc(obj.value)
}

function mCPF(cpf){
cpf=cpf.replace(/\D/g,"")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
  cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return cpf
}

cpfCheck = function (el) {
  document.getElementById('cpfResponse').innerHTML = is_cpf(el.value)? 
  '<span style="color:green">cpf válido</span>' : '<span style="color:red"> cpf inválido </span>';

  if(el.value=='') document.getElementById('cpfResponse').innerHTML = '';
}




//----------- MÁSCARA CEP

function limparFormulario() {
  document.getElementById('uf').value = (""); 
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = (""); 
  document.getElementById('rua').value = (""); 
}

function meu_callback(endereco) {
  if (!("erro" in endereco)) {
    document.getElementById('uf').value=(endereco.uf);
    document.getElementById('bairro').value=(endereco.bairro);
    document.getElementById('cidade').value=(endereco.localidade);
    document.getElementById('rua').value=(endereco.logradouro);
  } else {
    limparFormulario();
    alert("CEP não encontrado");
  }
}

function pesquisacep(valor) {
  const cep = valor.replace(/\D/g, '');

  if (cep != ""){
    const validacep = /^[0-9]{8}$/; 
    
    if(validacep.test(cep)) {
      document.getElementById('uf').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";
      document.getElementById('rua').value="...";

      const script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/'+ cep +'/json/?callback=meu_callback';

      document.body.appendChild(script);

    } else {
      limparFormulario();
      alert("Formato de CEP inválido");
    }
  } else{
    limparFormulario();
  }
};




//----------- LIMITE TELEFONE

function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}

function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}

function mtel(v){
  v=v.replace(/[^\d]/g,""); //Remove tudo o que não é dígito 
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

function id( el ){
  return document.getElementById( el );
}

window.onload = function(){
  id('telefone').onkeyup = function(){
  mascara( this, mtel );
  }
}




//--------------- VALIDAR TODOS OS CAMPOS

const submitValidar = document.querySelector("#btn-validar");
const validar = document.querySelector(".msgValidar");

const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#dob");
const ruaInput = document.querySelector("#rua");
const numeroInput = document.querySelector("#numero");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector("#cidade");
const ufSelected = document.querySelector("#uf");
const cepInput = document.querySelector("#cep");
const apelidoInput = document.querySelector("#apelido");
const cpfInput = document.querySelector("#cpf");
const rgInput = document.querySelector("#rg");
const emailInput = document.querySelector("#email");


submitValidar.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const dateValue = dateInput.value;
  const ruaValue = ruaInput.value;
  const numeroValue = numeroInput.value;
  const bairroValue = bairroInput.value;
  const cidadeValue = cidadeInput.value;
  const ufValue = ufSelected.value;
  const cepValue = cepInput.value;
  const apelidoValue = apelidoInput.value;
  const cpfValue = cpfInput.value;
  const rgValue = rgInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || ruaValue === "" || numeroValue === "" || bairroValue === "" || dateValue === "" 
  || cidadeValue === ""  || cepValue === ""  || apelidoValue === ""  || cpfValue === "" || rgValue === ""
  || ufValue === "" || emailValue === "") {


    validar.textContent = "Por favor, preencha todos os campos!";
    validar.classList = "errorValidar"; //busca na classe error

    if (nameValue === ""){
      validar.textContent = "O campo 'Nome Completo' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (apelidoValue === ""){
      validar.textContent = "O campo 'Apelido' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (cpfValue === ""){
      validar.textContent = "O campo 'CPF' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (rgValue === ""){
      validar.textContent = "O campo 'RG' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (dateValue === ""){
      validar.textContent = "O campo 'Data de nascimento' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (cepValue === ""){
      validar.textContent = "O campo 'CEP' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (ruaValue === ""){
      validar.textContent = "O campo 'Rua' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (numeroValue === ""){
      validar.textContent = "O campo 'Número' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (bairroValue === ""){
      validar.textContent = "O campo 'Bairro' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (cidadeValue === ""){
      validar.textContent = "O campo 'Cidade' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    } 
    else if (ufValue === ""){
      validar.textContent = "O campo 'UF' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }
    else if (emailValue === ""){
      validar.textContent = "O campo 'Email' é obrigatório";
      validar.classList = "errorValidar"; //busca na classe error
    }

      
      //tempo para a faixa error ficar em tela
      setTimeout(() => {
        validar.textContent = "";
        validar.classList = "";
      }, 5000);        
      return;  //sai da função  

  }  
    validar.textContent = "Cadastro realizado com sucesso!";
    validar.classList = "sucessValidar";

    setTimeout(() => {
      validar.textContent = "";
      validar.classList = "";
    }, 9000);        
    return;  //sai da função  

});



//----------- CALCULAR IDADE

const submitAge = document.querySelector("#btn-idade");
const messageAge = document.querySelector(".msgIdade");

submitAge.addEventListener("click", (e) => {
  e.preventDefault();

  const messageAge = document.querySelector(".msgIdade");  
    
    //collect input from HTML form and convert into date format  
    const userinput = document.getElementById("dob").value;  
    const dob = new Date(userinput);  
      
    //check user provide input or not  
    if(userinput==null || userinput==''){  
      document.getElementById(".msgIdade").innerHTML = alert("**Escolha uma data por favor!");    
      return false;   
    }   
      
    //execute if user entered a date   
    else {  
    //extract and collect only date from date-time string  
    const mdate = userinput.toString();  
    const dobYear = parseInt(mdate.substring(0,4), 10);  
    const dobMonth = parseInt(mdate.substring(5,7), 10);  
    const dobDate = parseInt(mdate.substring(8,10), 10);  
      
    //get the current date from system  
    const today = new Date();  
    //date string after broking  
    const birthday = new Date(dobYear, dobMonth-1, dobDate);  
      
    //calculate the difference of dates  
    const diffInMillisecond = today.valueOf() - birthday.valueOf();  
  
    //convert the difference in milliseconds and store in day and year variable          
    const year_age = Math.floor(diffInMillisecond / 31536000000);  
    const day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
  
    const month_age = Math.floor(day_age/30);          
    day_ageday_age = day_age % 30;  
          
    const tMnt= (month_age + (year_age*12));  
    const tDays =(tMnt*30) + day_age;  
       
    //Invalid date    
      if (dob>today) {  
        document.getElementById(".msgIdade").innerHTML = alert("Data inválida");  
      }  
      else {          
        //document.getElementById(".msgIdade").innerHTML = alert(year_age + " ano(s) " + month_age + " meses " + day_age + " dia(s)"); 
        messageAge.innerHTML = "Idade: " + year_age + " ano(s), " + month_age + " meses e " + day_age + " dia(s)";
        messageAge.classList = "errorAge";      
      }  
   }  
    
});


//ESCOLHA FOTO
let photo = document.getElementById('imgPhoto');
let file = document.getElementById('fotoPerfil');


photo.addEventListener("click", (e) => {
  e.preventDefault();
    file.click();
});

file.addEventListener('change', () => {

    if(file.files.length <=0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);


});

