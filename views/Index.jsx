
//import pokemon from './models/pokemon'; 

const myStyle ={
    color: '#ffffff', 
    backgroundColor: '#000000',
};

class Index extends React.Component {
    render(){
        return(
            <div style={myStyle}>
              <h1>See All the Pokemon!</h1>
                <ul>
                    {this.props.pokemon.map((poke, index) => (
                        <li key={index}>
                            <a href={'/pokemon/${index}'}>{poke.name}</a> 
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Index;