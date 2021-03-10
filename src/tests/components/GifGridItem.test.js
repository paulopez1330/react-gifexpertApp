import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en <GifGridItem/>', () => {

    const title = 'mi titulo';
    const url   = 'https://localhost/image.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('debe de mostrar componente correctamente', () => {
                
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe tener un parrafo con el texto', () => {
        
        const p = wrapper.find('p');

        expect( p.text().trim () ).toBe(title);        
    })

    test('debe tener una imagen al url y alt de los props', () => {
        
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('debe tenerel fadein', () => {
        
        const d = wrapper.find('div');
        const className = d.prop('className');
        
        expect( className.includes('animate__fadeIn') ).toBe( true );
    })    
})
