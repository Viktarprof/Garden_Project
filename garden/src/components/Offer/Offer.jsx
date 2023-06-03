// import React, { useState } from "react";
// import s from "./Offer.module.css";
// import smilingDwarf from "./media/smilingDwarf.png";
// import Form from "../Form/Form";
// import { order_sale_req } from "../../asyncActions/requests_products";

// function Offer() {

//   const [isDiscountSent, setIsDiscountSent] = useState(false);
//   console.log(isDiscountSent);
  
//   const submite = (event) => {
//     event.preventDefault();
//     const { phone } = event.target;
//     const numberPhone = {
//       id: Date.now(),
//       phone: phone.value,
//     };
//     console.log(numberPhone);

//     order_sale_req(numberPhone)
//       .then(() => {
//         setIsDiscountSent(true);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     event.target.reset();
//   };

//   return (
//     <div className={s.offerContainer}>
//       <div className={s.smilingDwarf}>
//         <img width={422} src={smilingDwarf} alt="smilingDwarf" />
//       </div>
//       <div className={s.offer}>
//         <h2>5% off</h2>
//         <p>on the first order</p>
//         <Form
//           submite={submite}
//           type="number"
//           name="phone"
//           placeholder="+49"
//           regexp={/^\+\d{10}$/}
//           styles={"inputOffer"}
//           title={isDiscountSent ? "Discount sent" : "Get a discount"}
//           stylesBtn={"btnOffer"}
//         />
//       </div>
//     </div>
//   );
// }

// export default Offer;
import React, { useState } from "react";
import s from "./Offer.module.css";
import smilingDwarf from "./media/smilingDwarf.png";
import Form from "../Form/Form";
import { sale_req } from "../../asyncActions/requests_products";

function Offer() {
  const [isDiscountSent, setIsDiscountSent] = useState(false);
  
  const submitForm = (event) => {
    event.preventDefault();
    const { phone } = event.target;
    const numberPhone = {
      id: Date.now(),
      phone: phone.value,
    };
    console.log(numberPhone);
    
    sale_req(numberPhone)
      .then(() => {
        setIsDiscountSent(true);
      })
      .catch((error) => {
        console.error(error);
      });
    
    event.target.reset();
  };

  return (
    <div className={s.offerContainer}>
      <div className={s.smilingDwarf}>
        <img width={422} src={smilingDwarf} alt="smilingDwarf" />
      </div>
      <div className={s.offer}>
        <h2>5% off</h2>
        <p>on the first order</p>
        <Form
          submit={submitForm}
          type="text"
          name="phone"
          placeholder="+49"
          regexp={/^\+\d{10}$/}
          styles={"inputOffer"}
          title={isDiscountSent ? "Discount sent" : "Get a discount"}
          stylesBtn={"btnOffer"}
        />
      </div>
    </div>
  );
}

export default Offer;
