import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs con Fetch', () => {
    
    test('debe de traer elementos', async () => {
    
            const gifs = await getGifs('One punch');

            expect( gifs.length ).toBe( 10 );
    })

    test('debe de traer elementos', async () => {
    
        const gifs = await getGifs('');        

        expect( gifs.length ).toBe( 0 );
})    
    
})
