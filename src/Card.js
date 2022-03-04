import React from 'react';
// this code will generate a card component that will be used in the 
// cardlisst component to generate multiple cards 
// you can import this to the index.js to see what a card looks like
//ReactDom.render{<> <Card id= {} name= {} email= {}/> </> }

// you can destructure within the parameters
const Card = ({name, id , email}) => {
  // the actionn below is known as destructuring
//  or const {name, id , email}= props;
  return(
    <a href={`https://robohash.org/${id}?size=100x100`}>
    <div className='bg-light-green dib br3 pa3 ma2 grow dim bw2 shadow-5'>
     <img src={`https://robohash.org/${id}?size=100x100`} alt="robot" />
    
    <div>
      <h2>{name}</h2>
      <p>{email} </p>
    </div>
    </div> </a>
  );
}

export default Card;