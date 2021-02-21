import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
 
  return <section className='hero' onMouseOver={closeSubmenu} >
<div className="hero-center">
<article className='hero-info' > 
<h1>Payments infrasctructure for the internet</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptas asperiores sed praesentium cumque maiores obcaecati architecto? Odit libero animi doloremque, doloribus culpa corporis, beatae aliquid minus assumenda neque placeat?</p>
<button className="btn">start now</button>
</article>
<article className='hero-images' >
<img src={phoneImg} className='phone-img' alt="phone"/>

</article>

</div>
  </section>
}

export default Hero
