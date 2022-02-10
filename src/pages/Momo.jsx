import React from 'react'
import MenuItems from "../components/MenuItem"

const Momo = () => {


    const momo = {
    title: "momo",
    category: "beverage",
    items: [{
            name: "coke",
            imageUrl: "https://i.ibb.co/HKf3BRk/coke.webp",
            price: [{
                title: '',
                price: 50
            }]
        },
        {
            name: "fanta",
            imageUrl: "https://i.ibb.co/L1hn1Pv/fanta.webp",
            price: [{
                title: '',
                price: 50
            }]
        },
        {
            name: "sprite",
            imageUrl: "https://i.ibb.co/MfmGYYs/fanta.webp",
            price: [{
                    title: '',
                    price: 50
                },

            ]
        },
        {
            name: "can juice (pineapple)",
            imageUrl: "https://i.ibb.co/6Y24qf6/can-juice.webp",
            price: [{
                    title: '',
                    price: 120
                }

            ]
        },
        {
            name: "can juice (mixed)",
            imageUrl: "https://i.ibb.co/F7V6TW4/can-juice.webp",
            price: [{
                title: '',
                price: 120
            }]
        }
    ]
};
    return (
        <>
        
        <MenuItems items={momo} />
        </>
    )
}

export default Momo
