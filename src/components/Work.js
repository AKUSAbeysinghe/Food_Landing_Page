// import React from 'react';
// import PickMeals from "../Assets/pick-meals-image.png";
// import ChooseMeals from "../Assets/choose-image.png";
// import DeliveryMeals from '../Assets/delivery-image.png';

// const Work = () => {
// const workInfoDate = [ {
//         image: PickMeals,
//         title: "Pick Meals",
//         text: "agjdhdk,,dghdglgf.vbnbvhjvhkdfgvbhkn vbcn bnc bv hdghkvbjf bvhn bvb nv bv fhdkgvuhcpkdmc.d,bvkdfvbk",
//     },

//     {
//         image: ChooseMeals,
//         title: "Choose How Often",
//         text: "agjdhdk,,dghdglgf.vbnbvhjvhkdfgvbhkn vbcn bnc bv hdghkvbjf bvhn bvb nv bv fhdkgvuhcpkdmc.d,bvkdfvbk",
//     },


//     {
//         image: DeliveryMeals,
//         title: "Fast Deliveries",
//         text: "agjdhdk,,dghdglgf.vbnbvhjvhkdfgvbhkn vbcn bnc bv hdghkvbjf bvhn bvb nv bv fhdkgvuhcpkdmc.d,bvkdfvbk",
//     },


// ];

//   return (
//     <div className="work-section-wrapper">
//         <div className="work-section-top">
//             <p className="primary-subheading">Work</p>
//             <h1 className='primary-subheading'>How It Works</h1>
//             <p className='primary-text'>
//                 jdnbckhvbiehfvgbgj vjncbdknhvfhlkv;.vbgfhvgdfhvdkvb.hnvbdv bn bhvjdfbhgf.kvfbnvfbhknvhbrefhk.gvfbjknbvnbvfjgvfhkdvbnfkbvnvbhjfvbhfvbfhvb;hfbhnbvfhnvbnb 
//             </p>

//         </div>
//         <div className='work-section-bottom'>
//             {
//                 workInfoData.map((data)=>{
//                     <div className="work-section-info">
//                         <div className='info-boxes-img-container'>
//                             <img src={data.image} alt=" "/>
//                         </div>
//                         <h2>{data.title}</h2>
//                         <p>{data.text}</p>
//                         </div>
//             })
//             }
//         </div>
//     </div>
//   )
// }

// export default Work;





import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose the frequency that suits your lifestyle.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Get your meals delivered fast and fresh to your door.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We make healthy eating easy and enjoyable with a few simple steps.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
