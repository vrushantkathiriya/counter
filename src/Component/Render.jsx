import React from "react";
class Render extends React.Component{
    render()
    {
        console.log("Render Method" , this.props)
        return(
            <div>
                <h1>Render Component {this.props.name}</h1>
            </div>
        )
    }
}

export default Render;