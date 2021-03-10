import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";


describe('Pruebas em useFetchGifs', () => {
    
    test('debe retormar el estado inicial', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs ('One Punch'));
        const { data, loading } = result.current;
        
        await waitForNextUpdate();        
        
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    })
    
    test('debe retormar el arreglo de imagenes y el loading en true', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs ('One Punch'));
        
        await waitForNextUpdate();
        
        const { data, loading } = result.current;
        
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
})
