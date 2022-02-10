import React from "react";

const mainCard = {
    width: '100px',
    border: '2px solid black',
    height: '100px',
}

const imagem = {
    width: '50px',
    height: '50px'
}

const Card = (img, link) => {

  return (
    <>
    <div style={mainCard}>
        <img src={this.img} alt="logo" style={imagem}/>
        <a href={this.link} target="_blank">Link da globo</a>        
    </div>      
    </>
  );
};

export default Card;
