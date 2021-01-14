import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
            return (
                <div className="pokedex">
                    {/* {this.props.pokemons.map(poke => <Pokemon key={poke.id} name={poke.name} />)} */}
                    <Pokemon name='pikachu' />
                </div>
            );
    }
}

export default Pokedex;