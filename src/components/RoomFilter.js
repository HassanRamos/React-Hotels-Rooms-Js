import React from 'react'
import { useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

//get all unique values
const getUnique = (items,value) =>{
    return [...new Set(items.map(item=> item[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {handleChange,type,capacity,price,minPrice,maxPrice,
        minSize,maxSize,breackfast,pets}=context;

       


        //get unique type
        let types = getUnique(rooms,'type');
        //add all
        types=['all', ...types];
        // map to jsx
        types=types.map((item,index)=>{
            return<option value={item} key={index}>{item}</option>
        });

        let people = getUnique(rooms,'capacity');
        people = people.map((item,index)=>{
            return<option key={index} value={item}>{item}</option>
        })
    return (
        <section className='filter-container'>
           <Title title='search rooms'/>
           <form className='filter-form'>
               {/* select type*/}
               <div className='form-goup'>
                   <label htmlFor='type'>room type</label>
                   <select name='type' id='type' value={type} 
                   className='form-control'
                   onChange={handleChange}>
                       {types}
                   </select>
               </div>
               {/*end of select type*/}
                {/* GUEST*/}
                <div className='form-goup'>
                   <label htmlFor='capacity'>Guest</label>
                   <select name='capacity' id='capacity' value={capacity} 
                   className='form-control'
                   onChange={handleChange}>
                       {people}
                   </select>
               </div>
               {/*GUEST*/}
               {/*room price*/}

               <div className='form-goup'>
                   <lable htmlFor='price'>room price ${price}</lable>
                   <input type='range' name='price' id='price' min={minPrice} 
                   max={maxPrice} value={price} onChange={handleChange}
                   className='form-control'/>

               </div>
               {/*end of room price*/}

               {/*room size*/}
               <div className='form-goup'>
                   <lable htmlFor='size'>room size</lable>
                   <div className='size-inputs'>
                       <input type='number' name='minSize' id='size'
                       value={minSize} onChange={handleChange} 
                       className='size-input'/>
                        <input type='number' name='maxSize' id='size'
                       value={maxSize} onChange={handleChange} 
                       className='size-input'/>
                   </div>

               </div>
               {/*end room size*/}
                {/*extras*/}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breackfast' id='breackfast' 
                        chacked={breackfast} onChange={handleChange}/>
                        <label htmlFor='breakfast'>breackfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' 
                        chacked={pets} onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                    </div>

                </div>
                 {/*end of extras*/}


           </form>
        </section>
    )
}
