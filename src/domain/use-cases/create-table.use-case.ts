
export interface CreateTableUseCase {
    execute: ( options: options) => string;
}
export interface options {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase{

    constructor(
        /**
        * DI- Dependency Injection
        */
    ) {}

    execute({ base, limit = 10 }: options ) {

        let outputMessage = '';
        for (let i = 1; i <= limit; i++ ) {
            outputMessage +=`${base} x ${i} = ${base*i}`;
        
            if ( i < limit ) outputMessage += '\n';
        }

        return outputMessage
    }
}