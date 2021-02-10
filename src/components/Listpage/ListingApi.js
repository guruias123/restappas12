import React,{Component} from 'react'
import Listing from './Listing'
import {Link} from 'react-router-dom'

import CuisineFilter from '../Filter/cuisinefilter'
import CostFilter from '../Filter/CostFilter'
import '../Filter/filter.css'
import CityFilter from '../Filter/cityfilter'
const url='https://restapp4002.herokuapp.com/rest?mealtype=';
const curl="https://restapp4002.herokuapp.com/city";



class ListingApi extends React.Component
{   
    constructor(){
        super()
            this.state={
                restList:'',
                city:'',
                cuisineName:''
                
            }
    }
    setDataPerFilter=(sortedData)=>{
        this.setState({restList:sortedData})
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        var mid=this.props.match.params.id;
        sessionStorage.setItem('mealId',mid)
        console.log(`${url}${mid}`)

        fetch(`${url}${mid}`,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({restList:data})})
        fetch(curl,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({city:data})})


    }

   /*renderCity=(data)=>{
       if(data){
           return(
               data.map((item)=>{
                   return(
                       <option>{item.city_name}</option>
                   )
               })
           )
       }
     }
     renderCuisine=(data)=>{
         if(data){
             return(
                 data.map((item)=>{
                     return(
                        <>  
                             <input type='checkbox'></input> {item.name} <br></br>
                        </>
                     )
                 })
             )
         }
     }*/
    render(){
        return(
            <React.Fragment>
                
                <div className="Header">
                       <Link to='/'> <div className="logo">e!</div></Link>   
                     <span className="create">create account</span>
                     <span className="log">Login</span>
                </div>
                <div className='filter'>
                    <div style={{marginLeft:'48px'}}>
                        <div class="head">
                            Filters
                        </div> 
                            select location <br></br>    
                            <CityFilter restPerCity={(data)=>{this.setDataPerFilter(data)}}/>
                        <br/>
                             <span className='cuisine'>Cuisine</span>
                            <CuisineFilter restPerCuisine={(data) => {this.setState({restList:data})}}/>
                            <span className='cuisine' >Cost</span>
                            <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                            <span className='cuisine' >Sort</span>

                            
                    </div>
                   
                   
                </div>
               
               
                
                <Listing Listdata={this.state.restList}/>
                


            </React.Fragment>
           

        )
    }
}
export default ListingApi