import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories = { setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = { setCategories } /> );
    });

    test('debe de mostrar componente correctamente', () => {
                
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar input correctamente', () => {
        
        const input =   wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate( 'change', {
            target: {
                value
            }
        });

        // expect( input.text().trim () ).toBe( value );
    })
    
    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('debe de llamar a setacategories y limpiar la cajade texto', () => {        

        const value = 'hola mundo';

        wrapper.find('input').simulate( 'change', { target: { value }});
        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
        
        expect( setCategories ).toHaveBeenCalled();

        expect( wrapper.find('input').prop('value') ).toBe( '' );

    })

})
