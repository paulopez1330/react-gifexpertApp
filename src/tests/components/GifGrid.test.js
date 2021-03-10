import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', () => {
    
    const category = 'mapa'
    // const setCategories = jest.fn();
    // let wrapper = shallow( <GifGrid category = { category } /> );

    beforeEach( () => {
        jest.clearAllMocks();
       /* 
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false,
        });

        wrapper = shallow( <GifGrid category = { category } /> );
        */
    });

    test('debe de mostrar componente correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: false,
        });
        
        const wrapper = shallow( <GifGrid category = { category } /> )
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar items cuando se carga imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'AB',
            url: 'https:localhosts/coaulsd',
            title: 'pureba',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow( <GifGrid category = { category } /> )
        
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );        
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })

})