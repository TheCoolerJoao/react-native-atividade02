// joao pedro ribeiro silva

import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 200px;
  height: 200px;
  justify-content:center;
  align-items:center;
`;

const Quadrado1 = styled.View`
  background-color: ${props => props.cor};
  width: 400px;
  height: 200px;
  justify-content:center;
  align-items:center;
`;

const Pagina = styled.View`
  background-image: linear-gradient(to right, #7B68EE, #DA70D6);
  align-items:center;
  flex:1;
`;

const Header = styled.View`
  flex-direction: row;
  /*background-color:#DDD;*/
  height:500px;
  flex-wrap:wrap;
  justify-content:center;
`;

const Texto = styled.Text`
  font-size: ${props => props.t};
  font-style: italic;
`;


function App() {
  return (
    <Pagina>
      <Texto t="16">Galeria de imagens de...</Texto>
      <Texto t="24">Joao Pedro Ribeiro</Texto>
      <Texto t="20">Tema da Galeria: Robertão</Texto>

      <Header>

        {/**
         * imagens que foram levantadas dos arquivos
         * "quadrado"
         */}
        <Quadrado cor="#ADFF2F">
          <Image source = {require('./src/images/RobertoCarlos.jpg')}
            style = {{ width: 180, height: 180, backgroundColor: '#AAA' }}
            resizeMode="cover"
          />
        </Quadrado>

        <Quadrado cor="#00FF00">
          <Image source = {require('./src/images/RobertoCarlos1.png')}
            style = {{ width: 180, height: 180, backgroundColor: '#AAA' }}
            resizeMode='cover'
          />
        </Quadrado>

        <Quadrado cor="#90EE90">
          <Image source = {require('./src/images/RobertoCarlos2.jpg')}
            style = {{ width: 180, height: 180, backgroundColor: '#AAA' }}
            resizeMode='cover'
          />
        </Quadrado>

        <Quadrado cor="#00FA9A">
          <Image source = {require('./src/images/RobertoCarlos3.jpg')}
            style = {{ width: 180, height: 180, backgroundColor: '#AAA' }}
            resizeMode='cover'
          />
        </Quadrado>
        
        {/**
         * imagens que foram levantadas dos arquivos
         * "quadrado1"
         */}
        <Quadrado1 cor="#32CD32">
          <Image source = {{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnoticiasdatv.uol.com.br%2Fmedia%2Fuploads%2Fartigos%2Froberto-carlos-especial-globo-fim-de-ano-2020-foto-mauricio-fidalgo.jpg&f=1&nofb=1'}}
            style = {{ width: 380, height: 180, backgroundColor: '#AAA' }}
            resizeMode='cover'
          />
        </Quadrado1>

      </Header>
    </Pagina>
  );
}

export default App;