import React from 'react';
import De from './De';

class LancerDe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wins:0,
            Round:0,
            dece_one: 1,
            dece_two: 2,
                    }
    }
    
    lancer =()=> {
        
        if(this.state.Round < 10){

            let dece_one_Random = Math.floor(Math.random() * 6) + 1
            let dece_two_Random = Math.floor(Math.random() * 6) + 1
            
            this.setState({dece_one: dece_one_Random})
            this.setState({dece_two: dece_two_Random})
    
            if(dece_one_Random == dece_two_Random){
                console.log("wins " + this.state.Round)
                this.setState({wins:this.state.wins + 1})
            }else{
                console.log("try again " + this.state.Round)
                this.setState({wins:this.state.wins - 1})
            }
            this.setState({Round: this.state.Round + 1})
        }else{
            this.setState({wins: 0,Round:0})
        }
        
        
    }
    render(){
        return (
            <div className="cont" >
                <div className='de'>
                    <De number={this.state.dece_one}/>
                    <De number={this.state.dece_two}/>
                </div>
                {(this.state.Round >= 10)?<h1>{(this.state.wins >= 0)?<span className="win" >"You win"</span>:<span className="lose" >"You lose"</span>}</h1>:<h1 className="round">{"Round " +`'`+ (this.state.Round + 1)+`'`}</h1>}

                {(this.state.wins > 0)?<h1>Score:<span className='pw'>+{this.state.wins}</span></h1>:(this.state.wins < 0)?<h1>Score:<span className='pl'>{this.state.wins}</span></h1>:<h1>Score:<span >{this.state.wins}</span></h1>}
                
                <button className="butt" onClick={this.lancer}>{(this.state.Round < 10)?"Lancer les Dés":"Reset"}</button>
            </div>
        );
    }
}
export default LancerDe;















{/* {(this.state.wins > 0)?<h1>Point:<span className='pw'>+{this.state.wins}</span></h1>:<h1>Point:<span className='pl'>{this.state.wins}</span></h1>} */}
{/* <h1>Point: {this.state.wins}</h1> */}