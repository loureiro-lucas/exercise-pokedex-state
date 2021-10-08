import React from 'react';
import Pokemon from './Pokemon';
// import Button from './Button';

class Pokedex extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			pokemonIndex: 0,
			pokemonList: this.props.pokemons,
		}
	}
	
	pokemonFilter = (pokemonType) => {
		this.setState((_current, props) => {
			return {
				pokemonList: props.pokemons.filter((item) => item.type === pokemonType),
			}
		})
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
				<Pokemon key={this.state.pokemonList[this.state.pokemonIndex].id} pokemon={this.state.pokemonList[this.state.pokemonIndex]} />

				{/* BUTTON NEXT POKEMON */}
				<button onClick={() => this.nextButtonHandler(this.state.pokemonList)}>Next</button>

				{/* BUTTON FIRE */}
				<button onClick={() => this.pokemonFilter('Fire')}>Fire</button>

				{/* BUTTON PSYCHIC */}
				<button onClick={() => this.pokemonFilter('Psychic')}>Psychic</button>
			</div>
    );
  }
}

export default Pokedex;