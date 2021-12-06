import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

export default class Movies extends Component {
    state={movies: []}  
    
    componentDidMount(){
        this.setState({
            movies:[
                {id:1, title: 'Shawshank', runtime: 120},
                {id:2, title: 'Shaws', runtime: 10},
                {id:3, title: 'hank', runtime: 1230},
            ]
        })
    }

    render() {
        return(
            <Fragment>
            <h2>Choose a M0ovie</h2>

            <ul>
                {this.state.movies.map((m)=> (
                    <li key={m.id}>
                        <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </li>
                ))}
            </ul>
            </Fragment>
        )
    }
}