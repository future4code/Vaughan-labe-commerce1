import React from "react";
import { Filters } from "./componentes/Filters";
import "./App.css";

class App extends React.Component {
  state = {
    produtos: [
      {
        id: Date.now(),
        name: "Foguete Apollo 11",
        value: 400.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: Date.now(),
        name: "Foguete da Missão Apollo 1",
        value: 100.0,
        imageUrl: "https://picsum.photos/200/200?a=8",
      },
      {
        id: Date.now(),
        name: "Foguete joaozinho 9",
        value: 10.0,
        imageUrl: "https://picsum.photos/200/200?a=7",
      },
      {
        id: Date.now(),
        name: "Foguete bolinha 11",
        value: 20.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
      },
      {
        id: Date.now(),
        name: "Foguete smalatak 11",
        value: 2000.0,
        imageUrl: "https://picsum.photos/200/200?a=5",
      },
      {
        id: Date.now(),
        name: "Foguete abdubadala quinto",
        value: 200.0,
        imageUrl: "https://picsum.photos/200/200?a=6",
      },
      {
        id: Date.now(),
        name: "Foguete ronaldinho 44",
        value: 1.0,
        imageUrl: "https://picsum.photos/200/200?a=3",
      },
      {
        id: Date.now(),
        name: "Foguete mars ultimate 11",
        value: 8000.0,
        imageUrl: "https://picsum.photos/200/200?a=2",
      },
    ],

    valorInput: "",

    carrinho: [
      {
        /* 
            name: "",
            value: Number,
            quantidade: Number */
      },
    ],

    search: "",
    maxPrice: "",
    minPrice: "",
    orderningParamenter: "title",
    order: 1,
  };

  adicionarProduto = () => {
    //LOGICA DO CARRINHO ENTRA AQUI

    console.log("Adicionou no carrinho !");

    const produtoCarrinho = {
      name: "",
      value: Number,
      quantidade: Number,
    };

    this.setState({ carrinho: produtoCarrinho });
  };

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  updateMaxPrice = (e) => {
    this.setState({ maxPrice: e.target.value });
  };

  updateaMinPrice = (e) => {
    this.setState({ minPrice: e.target.value });
  };

  render() {
    const Produto = this.state.produtos.
      filter(produto => {
         return produto.name.toLowerCase().includes(this.state.search.toLowerCase())
      }).filter(produto => {
         return this.state.minPrice === "" || produto.value >= this.state.minPrice
      }).filter(produto => {
         return this.state.maxPrice === "" || produto.value <= this.state.maxPrice
      }).map((produto, x) => {
      return (
        <div key={x} className="cardsProdutos">
          <img
            className="CardImagem"
            src={produto.imageUrl}
            alt="Imagem bonita"
          ></img>
          <a className="CardNome" href="/#">
            {produto.name}
          </a>
          <a className="CardValor" />
          <a className="NomeValor">Valor R$ {produto.value}</a>
          <button className="BotaoProduto">Adicionar no carrinho</button>
        </div>
      );
    });
    /* 
      const Carrinho = this.state.carrinho.map((produto) => {

         return (

            <>


            </>

         )

      })
 */
    return (
      <div className="App">
        <header className="Topo">
          <div className="QuantidadeProdutos">
            Quantidade de produtos
            <div></div>
          </div>
          <div className="SeletorOrdenario">
            Seletor
            <select className="Seletor">
              <option value="valor0">Nenhum</option>
              <option value="valor1">Crescente</option>
              <option value="valor2">Decrescente</option>
            </select>
          </div>
        </header>

        <main className="App-header">
          <div className="FiltroDiv">
            Filtro
            <br />
            <Filters
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              search={this.state.search}
              updateaMinPrice={this.updateaMinPrice}
              updateMaxPrice={this.updateMaxPrice}
              updateSearch={this.updateSearch}
            />
          </div>
          <div className="ProdutosDiv">{Produto}</div>

          <div className="CarrinhoDiv">
            Carrinho
            <div className="ItemNoCarrinho">
              <button className="BotaoRemover">Remover</button>
            </div>
            {""}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
