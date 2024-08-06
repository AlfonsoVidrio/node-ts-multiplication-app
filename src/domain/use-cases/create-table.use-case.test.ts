import { CreateTable } from './create-table.use-case';

describe('CreateTableUseCase', ()=> {

    test('should create table with default values', () => {

        const createTable = new CreateTable();

        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n');

        // console.log( table );

        // verifica que createTable  sea una instancia de CreateTable
        expect( createTable ).toBeInstanceOf( CreateTable  );
        expect( table ).toContain('2 x 1 = 2');
        expect( table ).toContain('2 x 10 = 20');
        expect( rows.length ).toBe(10);
    });

    test('should create table with custom values', () => {
        
        const options = {
            base: 3,
            limit: 20
        }

        const createTable = new CreateTable();

        const table = createTable.execute(options);
        const rows = table.split('\n');

        rows.forEach(row => {
            expect(row.substring(0, 3)).toBe(options.base.toString() + " x");
        });
        

        expect(rows.length).toBe(options.limit);
        
    });

});