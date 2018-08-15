interface IInterface {
    soma(a, b): number;
}


//Interfaces podem extender de outras
interface IInterface2 extends IInterface {
    
}



class NomeDaClasse implements IInterface, IInterface2 {
    
    private atributo: number;
    public atributo2: boolean;
    public atributo3: Object;

    constructor(parametros: boolean) {
        //Quando desejamos referenciar um atributo da classe, usar o this.
        this.atributo2 = parametros;

    }

    imprimir(menssage: string): void {
        if(this.atributo2) {
            console.log(menssage);
        }
    }

    soma(x, y) {
        return x + y;
    }
}

const novo = new NomeDaClasse(true);

novo.imprimir('Hello World');
novo.soma(3, 4);

export default NomeDaClasse;