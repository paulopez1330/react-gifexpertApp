

export const getGifs = async ( category ) => {

    const url =  `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=zqr3pe7uxmBFhZ5Ab8zD5r9FTl2dGT0h`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ( { id, title, images } ) => {
        return {
            id,
            title,
            url: images.downsized_medium.url,
        }
    });
   
    return gifs;
}