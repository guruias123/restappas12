import React,{Component} from 'react'
import '../Listpage/Listing.css'
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const url='https://restapp4002.herokuapp.com/rest?name='

class Hoteldetails extends React.Component{
    constructor(){
        super()
            this.state={
                rest:''
            }
        }
    
    componentDidMount(){
        console.log(this.props.match.params.name)
        var restname=this.props.match.params.name;
        console.log(`${url}${restname}`)
        fetch(`${url}${restname}`,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({rest:data}))
    }
    renderRest=(data)=>{
        if(data){
            return(
                   data.map((item)=>{
                       return(
                           <React.Fragment>

                            <div className="Header">
                                <Link to='/'> <div className="logo">e!</div></Link>   
                                <span className="create">create account</span>
                                <span className="log">Login</span>
                            </div>


                            <div class="container" style={{marginTop:'5px'}}>
                                 <div class="panel panel-primary">
                                     <div class="panel-heading"> <h2>{item.name}</h2></div>
                                     <div class="panel-body"><img src={`${item.thumb}`} style={{width:"100%",height:"360px"}}/> 
                                      <h2>address</h2>
                                       <h4> {item.address}</h4> 
                                        <hr></hr>
                                        <Tabs>
                                            <TabList>
                                             <Tab>Overview</Tab>
                                             <Tab>Contact</Tab>
                                            </TabList>
 
                                            <TabPanel>
                                               <p> {item.name} is an Indian restaurant aggregator and food delivery start-up founded by {item.locality} and Deepinder Goyal in 2008. {item.name} provides information, menus and user-reviews of restaurants as well as food delivery options from partner restaurants in select cities.</p> 
                                            </TabPanel>
                                            <TabPanel>
                                                <p> 
                                                    <b>address</b> <br></br>
                                                    {item.address}
                                                    {item.locality} <br></br>
                                                    <h5> <b>phone:</b> 9908181304</h5>  
                                                </p>
                                            </TabPanel>
                                        </Tabs>
                                        <Link to='/' className='btn btn-danger'> back</Link>&nbsp;
                                        <Link to={`/bookings/${item.name}`} className='btn btn-success'> proceed order</Link>
                                     </div>
                                 </div>
                            </div>                                     
                                      
                            
                                   
                            </React.Fragment>
                       )
                   })
            )
           
        }else{
            return(
                <img src='/images/loader.gif' height='320px' width='420px' className='loader1'></img>
                
            )
        }
    }
   
    render(){
        return(
            <React.Fragment>

                {this.renderRest(this.state.rest)}
            </React.Fragment>
           
        )
    }

}
export default Hoteldetails