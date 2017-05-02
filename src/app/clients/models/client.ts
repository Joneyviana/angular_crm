import { Validators } from "@angular/forms";

export class Client {
    nome= ["",Validators.required];
    email = ["",[Validators.required,Validators.email]];
    cep = ["",Validators.required];
    uf = ["",Validators.required];
    localidade = ["",Validators.required];
    complemento:string = "";
    bairro = ["",Validators.required];
    logradouro = ["",Validators.required];
    data_de_nascimento = ["",Validators.required];
    tel = ["",Validators.required];


}