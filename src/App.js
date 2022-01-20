import React from 'react';
import './App.css';

class App extends React.Component {

   state = {
      produto: [ 
         {
            id: Date.now(),
            name: "Foguete da Missão Apollo 11",
            value: 400.0,
            imageUrl: "https://picsum.photos/200/200",
         },
         {
            id: Date.now(),
            name: "Foguete da Missão Apollo 11",
            value: 10000.0,
            imageUrl: "https://picsum.photos/200/200",
         },

      ],

      valorInput: ""
   }



   render() {







      return (
         <div className="App">




            <header className='Topo'>
            

               <div className='QuantidadeProdutos'>Quantidade de produtos</div>
               <div className='SeletorOrdenario'>Seletor
               
               <select className='Seletor'>
               <option>Nenhum</option>
               <option>Crescente</option>
               <option>Decrescente</option>
               </select>
               
               </div>
            </header>



            <main className="App-header">



            

             <div className="FiltroDiv" >Filtro<br/>



             <input placeholder='Entrada' type="number"></input>
             <input placeholder='Entrada' type="number"></input>
             <input placeholder='Entrada' type="text"></input>



             </div>
             <div className='ProdutosDiv'>Produtos
             
             
             
             </div>
             
             <div className='CarrinhoDiv'>Carrinho
             
             
             
             </div>
            </main>
         </div>
      );

   }

}

export default App;
