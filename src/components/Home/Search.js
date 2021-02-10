import React,{Component} from 'react';
import './Search.css';
const url="https://api4002.herokuapp.com/city";
const rurl="https://api4002.herokuapp.com/rest?city=";

class Search extends Component{

    constructor(){
        super()
        this.state={
            city:'',
            rest:''
        }
    }
    //displaying data in 
    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return  <option value={item.city}>{item.city_name}</option>
                
            })
        }

    }
    renderRest=(data)=>{
        if(data){
            return data.map((item)=>{
                return <option>{item.name}</option>
            })
        }
    }
   

    //calling API to get data
    componentDidMount(){
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({city:data}))
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({city:data}))
    }
    handleCity=(event)=>{
        console.log(event.target.value)
        const cityId=event.target.value
        console.log(`${rurl}${cityId}`)
        fetch(`${rurl}${cityId}`,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({rest:data})});
    }
    handleRest=(event)=>{
        console.log(event.target.value)
    }

     render(){
        return(
            <React.Fragment>
                <div class="imagecontainer img-responsive ">
              <div>
                     <a href="https://www.youtube.com/" target="-blank"> <img src="https://i.ibb.co/gtf1HY9/youtube.png" class="sociallogo"/></a>
                     <a href="https://www.facebook.com/" target="-blank"> <img src="https://i.ibb.co/5csJktW/facebook.png " class="sociallogo"/></a>
              </div>
              <div id="logo">
                     <b> e! </b>
              </div>

              

              <div id="heading" class="row">
                     Find Best Resturants,Cafes,Bars
              </div>

              <div class="finder">
                     <select class="locator" onChange={this.handleCity}>
                            <option>...city here...</option>
                            {this.renderCity(this.state.city)}

                     </select>

                     <select class="locator" onChange={this.handleRest}>
                         <option>...select hote...</option>
                           {this.renderRest(this.state.rest)}
                     </select>

              </div>
       </div>
               
            </React.Fragment>
        )
    }

  
}

export default Search;