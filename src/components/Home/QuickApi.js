import React,{Component} from 'react';
import QuickSearch from './QuickSearch';

const url = "https://restapp4002.herokuapp.com/meal";

class QuickApi extends Component{

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <QuickSearch quickdata={this.state.mealType}/>
        )
     }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickApi;