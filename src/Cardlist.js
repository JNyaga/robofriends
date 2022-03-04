import React from 'react';
import Card from './Card';
// this code is to generate an array of the multiple cards 
// needed in our app 
// you can import this to the index.js to see what a card looks like
// impor Cardlist from ./Cardlist
//ReactDom.render{<>  <Cardlist robots={robots} />}

function Cardlist({ robots }) {
    const Cardcomponents = robots.map((user, i) => {
        return ( <
            Card key = { robots[i].id }
            id = { robots[i].id }
            name = { user.name }
            email = { user.email }
            />
        )
    })
    return ( <div> {
            /* the sentence below is wrapped in curly brackets since it is 
                    javascript
                    on can decide to use the robots.map() part without using Cardcomponents 
                    as shown below */
        } { Cardcomponents } 
        </div>
    );


}
export default Cardlist;