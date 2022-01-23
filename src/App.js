import React from "react";
import { Filters } from "./componentes/Filters";
import "./App.css";

class App extends React.Component {
  state = {
    produtos: [
      {
        id: Math.random(),
        name: "Foguete Apollo 11",
        value: 400.0,
        imageUrl: "https://picsum.photos/200/200",
      },
      {
        id: Math.random(),
        name: "Foguete da Missão Apollo 1",
        value: 100.0,
        imageUrl: "https://picsum.photos/200/200?a=8",
      },
      {
        id: Math.random(),
        name: "Foguete joaozinho 9",
        value: 10.0,
        imageUrl: "https://picsum.photos/200/200?a=7",
      },
      {
        id: Math.random(),
        name: "Foguete bolinha 11",
        value: 20.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
      },
      {
        id: Math.random(),
        name: "Foguete smalatak 11",
        value: 2000.0,
        imageUrl: "https://picsum.photos/200/200?a=5",
      },
      {
        id: Math.random(),
        name: "Foguete abdubadala quinto",
        value: 200.0,
        imageUrl: "https://picsum.photos/200/200?a=6",
      },
      {
        id: Math.random(),
        name: "Foguete ronaldinho 44",
        value: 1.0,
        imageUrl: "https://picsum.photos/200/200?a=3",
      },
      {
        id: Math.random(),
        name: "Foguete mars ultimate 11",
        value: 8000.0,
        imageUrl: "https://picsum.photos/200/200?a=2",
      },
    ],

    valorInput: "",

    carrinho: [],

    search: "",
    maxPrice: "",
    minPrice: "",
    orderningParamenter: "title",
    order: 1,
  };

  adicionarProduto = (productId) => {
    const produtoNoCarrinho = this.state.carrinho.find(
      (produto) => productId === produto.id
    );

    if (produtoNoCarrinho) {
      const acrescentaCarrinho = this.state.carrinho.map((produto) => {
        if (productId === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1,
          };
        }

        return produto;
      });

      this.setState({ carrinho: acrescentaCarrinho });
    } else {
      const adicionarProdutoNaoExistente = this.state.produtos.find(
        (produto) => productId === produto.id
      );

      const novoProdutoIndoCarrinho = [
        ...this.state.carrinho,
        { ...adicionarProdutoNaoExistente, quantidade: 1 },
      ];

      this.setState({ carrinho: novoProdutoIndoCarrinho });
    }
  };

  removeProdutoCarrinho = (produtoId) => {
    const novoProduto = this.state.carrinho
      .map((produto) => {
        if (produto.id === produtoId) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({ carrinho: novoProduto });
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
    const Carrinho = this.state.carrinho.map((produtoCarrinho) => {
      return (
        <div>
          <div className="ProdutoNoCarrinho">
            {produtoCarrinho.name} X{produtoCarrinho.quantidade}
            <br />
            R$ {produtoCarrinho.value * produtoCarrinho.quantidade}
            <button
              className="botao"
              onClick={() => this.removeProdutoCarrinho(produtoCarrinho.id)}
            >
              Remover
            </button>
          </div>
        </div>
      );
    });

    const Produto = this.state.produtos
      .filter((produto) => {
        return produto.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      })
      .filter((produto) => {
        return (
          this.state.minPrice === "" || produto.value >= this.state.minPrice
        );
      })
      .filter((produto) => {
        return (
          this.state.maxPrice === "" || produto.value <= this.state.maxPrice
        );
      })
      .map((produto, x) => {
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
            {Carrinho}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
