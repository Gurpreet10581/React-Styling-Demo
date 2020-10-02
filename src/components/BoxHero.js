//Styling with Radium
import React from 'react';
import Radium from 'radium';

const style ={
    boxhero:{
        backgroundColor: 'black',
        height: '80vh',
        color: '#F78A7e',
        textAlign: 'center',
        paddingTop: '12em'
    },
    button:{
        backgroundColor: '#F78A7e',
        borderColor: '#F78A7e',
        color: 'white',
        borderRadius: '5px',
        height: '4em',
        width: '10em',
        ':hover': {
            backgroundColor:'#FFAAA0',
            borderColor: '#FFAAA0'
        }
    }
}
const BoxHero = () => {
    return (
        <div style={style.boxhero}>
            <h2>SEE THE STARS THE WAY NATURE INTENDED</h2>
            <button style={style.button}>SHOP NOW</button>
        </div>
    )
}

export default Radium (BoxHero);