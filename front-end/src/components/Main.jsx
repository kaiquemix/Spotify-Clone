import React from "react";
import ItemsList from "./ItemsList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  const itemsPerRow = type
    ? Infinity
    : Math.floor((window.innerWidth - 25 * 2 - 8 * 2) / 172);

  return (
    <section className="main">
      {!type || type === "artists" ? (
        <ItemsList
          title="Artistas populares"
          type="Artista"
          path="/artists"
          individualPath="/artist"
          itemsToShow={itemsPerRow}
          itemsArray={artistArray}
        />
      ) : (
        ""
      )}

      {!type || type === "songs" ? (
        <ItemsList
          title="Músicas populares"
          path="/songs"
          individualPath="/song"
          itemsToShow={itemsPerRow * 2}
          itemsArray={songsArray}
          style="square"
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default Main;

// type ? Infinity : ...:
// Isso é uma expressão ternária. Ela verifica se a variável type é verdadeira ou falsa.
// Se type for verdadeira (truthy), então itemsPerRow será Infinity.
// Se type for falsa (falsy), então a expressão após o : é executada, que é o cálculo do número de itens por linha.

//tentar fazer o infinity carregar com o scroll hover em vez de já carregar totalmente, para diminuir a carga de processamento.

// Vamos analisar o cálculo:

// window.innerWidth:

// Isso retorna a largura da janela do navegador em pixels. Ou seja, é a largura da tela do dispositivo ou da janela onde a página está aberta.
// 25 * 2:

// Subtrai um total de 50px. Isso provavelmente representa a margem de 25px em cada lado da tela (um total de 50px de margem esquerda e direita).
// 8 * 2:

// Subtrai 16px. Isso pode representar outros espaçamentos internos, como padding ou margens de algum item dentro da tela.
// 172:

// O valor 172px é provavelmente a largura de cada item (como um cartão ou um bloco) dentro da linha.
// Math.floor(...):

// A função Math.floor() arredonda o resultado para baixo, garantindo que o número de itens por linha seja um número inteiro (sem casas decimais).
// Resultado final:
// O cálculo basicamente determina quantos itens de 172px cabem na largura da janela, levando em consideração as margens e espaçamentos.

// Exemplo de como seria calculado:
// Digamos que window.innerWidth (largura da janela) seja 1000px.
// Subtraindo as margens e espaçamentos:
// 1000px - 50px - 16px = 934px
// Agora, dividindo isso pela largura de cada item (172px):
// 934px / 172px = 5,43
// Com o Math.floor(), o valor seria arredondado para 5, ou seja, 5 itens cabem por linha.