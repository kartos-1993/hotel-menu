import React from "react";
import MenuItems from '../components/MenuItem'

function NonVeg(props) {


  
const snacks = {
  title: "snacks",
  category: "nonveg",
  items: [{
          name: "chicken fry",
          imageUrl: "https://i.ibb.co/vHgKyhk/chicken-fry.webp",
          price: [{
              title: '',
              price: 275
          }]
      },
      {
          name: "chicken roast",
          imageUrl: "https://i.ibb.co/828pDHL/chicken-fry.webp",
          price: [{
              title: '',
              price: 300
          }]
      },
      {
          name: "chicken chilly",
          imageUrl: "https://i.ibb.co/KbbvQW8/chicken-chilly.webp",
          price: [{
                  title: 'bone',
                  price: 280,      
                  
              },
              {
                title: 'boneless',
                  price: 290,
              }

          ]
      },
      {
          name: "chicken sadheko",
          imageUrl: "https://i.ibb.co/6Y24qf6/can-juice.webp",
          price: [{
                  title: '',
                  price: 260
              }

          ]
      },
      {
          name: "chicken choila",
          imageUrl: "https://i.ibb.co/Xy1pH42/chicken-choila.webp",
          price: [{
              title: '',
              price: 260
          }]
      },
      {
          name: "chicken kurkure",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 300
          }]
      },
      {
          name: "chicken nuggets",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 260
          }]
      },
      
      {
          name: "chicken nuggets",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 275
          }]
      },
      {
          name: "chicken tawa",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 325
          }]
      },
      {
          name: "chicken boil",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 250
          }]
      },
      {
          name: "buff choila",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 225
          }]
      },
      {
          name: "buff sadheko",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 225
          }]
      },
      {
          name: "buff chilly",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 275
          }]
      },
      {
          name: "buff sukuti sadheko",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 300
          }]
      },
      {
          name: "pork chilly",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 260
          }]
      },
      {
          name: "pork sadheko",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 250
          }]
      },
      {
          name: "pork choila",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 250
          }]
      },
      {
          name: "pork tawa",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 300
          }]
      },
      {
          name: "pork fry",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 300
          }]
      },
      {
          name: "mutton fry",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 400
          }]
      },
      {
          name: "mutton boil",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 375
          }]
      },
      {
          name: "mutton sadheko",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 425
          }]
      },
      {
          name: "mutton taas",
          imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
          price: [{
              title: '',
              price: 450
          }]
      }
  ]
};

const sausage = {
  title: "chicken sausage fry",
  items: [{
          name: "tuborg",
          imageUrl: "https://i.ibb.co/PgX2t2w/tuborg-glass.webp",
          price: [{
              title: "",
              price: 450
          }]
      },
      {
          name: "arna 8 (330ml)",
          imageUrl: "https://i.ibb.co/bbyLpxW/arna320ml.webp",
          price: [{
              title: "",
              price: 450
          }]
      },
      {
          name: "tuborg can",
          imageUrl: "https://i.ibb.co/r70W8DH/arna320ml.webp",
          price: [{
              title: "",
              price: 450
          }]
      },
      {
          name: "arna light",
          imageUrl: "https://i.ibb.co/G7DLsJX/arna-Light.webp",
          price: [{
              title: "",
              price: 450
          }]
      },
      {
          name: "apple cider",
          imageUrl: "https://i.ibb.co/qyRjYr2/apple-Cider.webp",
          price: [{
              title: "",
              price: 450
          }]
      }
  ]
};

const hard_drinks = {
  title: "hard drinks",
  items: [{
          name: "rum",
          imageUrl: "https://i.ibb.co/2dC3jXh/khukuri-rum.webp",
          price: [{
              title: 'qtr',
              price: 550
          }, {
              title: 'half',
              price: 1100
          }, {
              title: 'full',
              price: 2200
          }]
      },
      {
          name: "8848 vodka",
          imageUrl: "https://i.ibb.co/KyK88p2/8848.webp",
          price: [{
              title: 'qtr',
              price: 350
          }, {
              title: 'half',
              price: 1500
          }, {
              title: 'full',
              price: 3500
          }]
      },
      {
          name: "old durbar red",
          imageUrl: "https://i.ibb.co/KrDMx4m/old-durbar-red.webp",
          price: [{
              title: 'qtr',
              price: 700
          }, {
              title: 'half',
              price: 1400
          }, {
              title: 'full',
              price: 2800
          }]
      },
      {
          name: "od black chimney",
          imageUrl: "https://i.ibb.co/YdMVvmx/old-durbar-black-chimney.webp",
          price: [{
              title: 'qtr',
              price: 350
          }, {
              title: 'half',
              price: 1500
          }, {
              title: 'full',
              price: 3500
          }]
      },
      {
          name: "signature red",
          imageUrl: "https://i.ibb.co/BLPXhvF/signature-red.webp",
          price: [{
              title: 'qtr',
              price: 650
          }, {
              title: 'half',
              price: 1300
          }, {
              title: 'full',
              price: 2600
          }]
      },
      {
          name: "jack daneils",
          imageUrl: "https://i.ibb.co/nfd7qZ6/jack-daneilspsd.webp",
          price: [{
              title: 'qtr',
              price: 2000
          }, {
              title: 'half',
              price: 4000
          }, {
              title: 'full',
              price: 7800
          }]
      }
  ]
};

const barbeque = {
  title: "barbeque",
  items: [{
          name: "chicken",
          imageUrl: "https://i.ibb.co/g3NYnLP/bbq.webp",
          price: [{
              title: '1 kg',
              price: 800
          }]
      },
      {
          name: "buff",
          imageUrl: "https://i.ibb.co/MGN8kD8/buff-bbq.webp",
          price: [{
              title: '1 kg',
              price: 800
          }]
      },
      {
          name: "mutton",
          imageUrl: "https://i.ibb.co/MfthY4B/mutton.webp",
          price: [{
              title: '1 kg',
              price: 1600
          }]
      },
      {
          name: "pork",
          imageUrl: "https://i.ibb.co/YdMVvmx/old-durbar-black-chimney.webp",
          price: [{
              title: '1 kg',
              price: 900
          }]
      },
      
     
  ]
};
  return (
    <>    
    <MenuItems items={snacks} />
    <MenuItems items={sausage} />
    <MenuItems items={hard_drinks} />
    <MenuItems items={barbeque}/>
     </>
  );
}

export default NonVeg;





