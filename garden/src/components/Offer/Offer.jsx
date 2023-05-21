import React from 'react'
import s from './Offer.module.css'
import smilingDwarf from './media/smilingDwarf.png'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

function Offer() {
  const submite = (event) => {
    event.preventDefault();
    const { phone } = event.target;
    const numberPhone = {
      id: Date.now(),
      phone: phone.value
    }
    console.log(numberPhone);
    event.target.reset()
  }

  return (
    <div className={s.offerContainer}>
        <div className={s.smilingDwarf}>
            <img width={422} src={smilingDwarf} alt="smilingDwarf"/>
        </div>
        <div className={s.offer}>
            <h2>5% off</h2>
            <p>on the first order</p>
            <form onSubmit={submite}>
              <Input 
                type="tel" 
                name='phone' 
                styles={'inputOffer'} 
                placeholder = '+49 XXX-XXX-XX-XX' 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
              <Button  
                title='Get a discount'  
                styles={'btnOffer'} />
            </form>
            
        </div>
    </div>
  )
}

export default Offer