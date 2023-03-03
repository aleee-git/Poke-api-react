import React, { Component } from 'react';

export default class BuscarPoke extends Component {

    constructor () {
        super();
        this.state = {
            name : "",
            img : "",
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
            
            if(data.res != '') {
            this.setState ({
              img: data.sprites.front_default,
            });
          }
          else {
            this.setState ({
              img: '',
            });
          }
      
          }
      
          // Cuando se crea, ejecuta la funcion 
          // componentDidMount () {
          //   this.fechApi();
          // }
      
          handlesubmit = event => {
            let name = this.state.name;
      
            this.fechApi();
            event.preventDefault();
          }

  render() {
    return (

      <>      

      <div className="formulario container" >
          <form onSubmit={this.handlesubmit}>
            <h2>Ingrese un Pokemón</h2>
            <input onChange={this.handleName} type="text"/>
            <button type="submit" className="boton">Buscar</button>
          </form>
          <hr />

          {this.state.img != '' ? <img className='poke' src={this.state.img} /> : null}

        </div> 
      </>
        
    );
  }
}
