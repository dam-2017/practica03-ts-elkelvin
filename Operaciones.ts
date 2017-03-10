export class Operaciones{
    num1:number;
    num2:number;

    constructor(num1:number,num2:number){     
         this.num1=num1;
         this.num2=num2;   
    }

    set setNum1(num:number){
        this.num1=num;
    }
    set setNum2(num:number){
        this.num2=num;
    }

    get getSuma():number{       
        return this.num1+this.num2;
    }

    get getResta():number{
        return this.num1-this.num2;
    }

    get getFactorialN1():number{
        var valor=1;
        for(var i=this.num1; i>1;i--){
            valor*=i;
        }
        return valor;
    }

    get getEsPrimoN1():boolean{
        var valor=0;
        for(var i=2;i<=this.num1; i++){
            if(this.num1%i==0)
                valor++;
        }
        return valor==1;
    }
}