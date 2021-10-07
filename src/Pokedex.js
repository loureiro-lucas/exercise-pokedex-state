import React from 'react';
import Pokemon from './Pokemon';
// import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
		super();
		this.state = {
			pokemonIndex: 0,
		}
	}
	
	nextButtonHandler = (array) => {
		this.setState((current, _props) => {
			if (current.pokemonIndex === array.length - 1) {
				return {
					pokemonIndex: 0,
				}
			}
			return {
				pokemonIndex: current.pokemonIndex + 1,
			}
		}
	)}

	render() {
    return (
			<div className="pokedex">
				<Pokemon key={this.props.pokemons[this.state.pokemonIndex].id} pokemon={this.props.pokemons[this.state.pokemonIndex]} />
				<button onClick={() => this.nextButtonHandler(this.props.pokemons)}>Next</button>
			</div>
    );
  }
}

export default Pokedex;