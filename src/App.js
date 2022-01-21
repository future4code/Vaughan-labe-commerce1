import React from 'react';
import './App.css';

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
            name: "",
            value: Number,
            quantidade: Number
         }
      ]
   }


   adicionarProduto = () => {


      console.log("Adicionou no carrinho !")
      //LOGICA DO CARRINHO ENTRA AQUI 

   }

   



   render() {
      const Produto = this.state.produtos.map((produto) => {

         return (
            <>
               <div className='cardsProdutos'>
                  <img className='CardImagem' src={produto.imageUrl}></img>
                  <a className='CardNome'>{produto.name}</a>
                  <a className='CardValor'><a className='NomeValor'>Valor R$</a> {produto.value}</a>
                  <button className='BotaoProduto' onClick={this.adicionarProduto}>Adicionar no carrinho</button>
               </div>
            </>
         );
      });

      return (
         <div className="App">


            <header className='Topo'>

               <div className='QuantidadeProdutos'>Quantidade de produtos

                  <div></div>
               </div>
               <div className='SeletorOrdenario'>Seletor

                  <select className='Seletor'>
                     <option value='valor0'>Nenhum</option>
                     <option value='valor1'>Crescente</option>
                     <option value='valor2'>Decrescente</option>
                  </select>

               </div>
            </header>

            <main className="App-header">

               <div className="FiltroDiv" >Filtro<br />

                  <input placeholder='Entrada' type="number"></input>
                  <input placeholder='Entrada' type="number"></input>
                  <input placeholder='Entrada' type="text"></input>

               </div>
               <div className='ProdutosDiv'>

                  {Produto}

               </div>

               <div className='CarrinhoDiv'>Carrinho
                  <button onClick={'this.mostrarProdutos()'}>Botao</button>
                  {''}

               </div>
            </main>
         </div>
      );
   }
}

export default App;
