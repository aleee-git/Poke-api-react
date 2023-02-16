import React, { Component } from 'react';

export default class BuscarPoke extends Component {

    constructor () {
        super();
        this.state = {
            name : "",
            img : "#",
        }
    }

    handleName = event => {
        this.setState ({
            name : event.target.value
        })
    }

        // Este metodo se trae los datos de PokeApi.co - los busca
        fechApi = async () => {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
            // Crea el objeto en base a la info que trae
            let data = await res.json();
      
            console.log(data);
      
            this.setState ({
              img: data.sprites.front_default,
            });
      
          }
      
          // Cuando se crea, ejecuta la funcion 
          // componentDidMount () {
          //   this.fechApi();
          // }
      
          handlesubmit = event => {
            let name = this.state.name;
      
            this.fechApi();
            event.preventDefault();
      
            console.log(name);
        }

  render() {
    return (
        <div className="card container" >
          <form onSubmit={this.handlesubmit}>
            <h2>Ingrese un Pokemon</h2>
            <hr/>
            <input onChange={this.handleName} type="text"/>
            <button type="submit" className="boton">Buscar</button>
          </form>
          <hr />
          <img src={this.state.img} alt="Pokemon-img"/>
        </div>
    );
  }
}
