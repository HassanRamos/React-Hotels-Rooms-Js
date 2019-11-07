import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.'
                
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.'
                
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttlevan',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.'
                
            },
            {
                icon:<FaBeer/>,
                title:'Strongest Beers',
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.'
                
            },
        ]
    }
  render() {
    return (
      <section className='services'>
        <Title title='services'/>
        <div className='services-center'>
            {this.state.services.map((item,index)=>{
                return(
                    <article className='service' key={index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>

                    </article>
                )
            })}
        </div>
      </section>
    )
  }
}
