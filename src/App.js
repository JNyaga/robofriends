import React,{Component} from "react";
import SearchBox from './searchBox';
/*import {robots} from './robots';  */
import Cardlist from './Cardlist';
import './App.css';
import Scroll from './Scroll';


//bfor using class component**** const App = ()=> {
    // return(
    //     <div className= 'tc'>
    //     <h1>Robot friends</h1>
    //     <SearchBox />
    //     <Cardlist robots= {robots}/>
    //     </div>
        
    // )
// }

//we need to use the component from react to use changing state in 
// react
class App extends Component {
 constructor(){
//constructor should point to the super component constructor
    super()
//you should readup on states
//states can be changed but props cant
//states feed the values to the props
    this.state= {
        //the robots should be served by an api hence
        // robots: robots --> is replaced by
        robots:[],
        searchfield:''
    }
}
// when the component above mounts it should take a second to 
// load the code below
componentDidMount(){
    // we load robots from an API
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=> response.json()).then(users=> this.setState({robots : users}))
}
// new fxn in this class is created like this
//event.target.value used to acess user input
 onSearchChange= (event)=> {
    //  this.setState changes a particular state of something to reflects 
    // on the input by user as shown blow
      this.setState({searchfield:event.target.value});
}
    render(){
        const {robots, searchfield} = this.state;
        //upon getting input we need to filter the input inaccordance
        // to the user input
    const filteredRobots= robots.filter(robot=>{
        return (robot.name.toLowerCase().includes(searchfield.toLowerCase())||
        robot.email.toLowerCase().includes(searchfield.toLowerCase()))
    })
     
    if (this.state.robots.length === 0){
        return <h1> LOADING</h1>
    }else{
        return(
            <div className= 'tc'>
            <h1 className= 'f1'>Robots API app</h1>
            <SearchBox searchChange= {this.onSearchChange}/>
            {/* then we need to change the robots to filtered robots inorder
            toonly display the matching result */}
            <Scroll>
            <Cardlist robots={filteredRobots} />
            </Scroll>
            </div>
            
        )  }   }


}


export default App;

// lifecycle mthods
// this are methods that come with react 
// 