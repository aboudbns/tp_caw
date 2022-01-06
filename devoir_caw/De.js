import React from 'react';

class De extends React.Component{
    render(){
        return (
           <img  src={"img/" + this.props.number + ".png"} alt='1' />
        );
    }
}
export default De;
