import React from 'react'

export const Cards = () => {
    return (
        <>
        <h1 className='container text-center mt-5'>What you'll get</h1>

<div class="container mt-5">
  <div class="row align-items-start">
    <div class="col">
        <img src="./public/mouse.png" alt="" height="50" />
      <h3 class="text-start mt-3" >Whole-food recipies</h3>
      <p class="text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
    </div>
    <div class="col">
        <img src="./public/fox.png" alt="" height="50"/>
      <h3 class="text-start mt-3">Minimus Fuss</h3>
        <p class="text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
    </div>
    <div class="col">
        <img src="./public/hamster.png" alt="" height="50"/>
      <h3 class="text-start mt-3">Search in Seconds</h3>
        <p class="text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit!</p>
    </div>
  </div>
</div>

        </>

        
    )
}