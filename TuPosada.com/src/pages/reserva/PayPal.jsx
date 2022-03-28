import React from 'react'
import { useEffect, useRef } from 'react/cjs/react.development'

export default function PayPal() {
    const paypal = useRef()

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err)=>{
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description:  "Precio de la habitación",
                            amount: {
                                currency_code: "USD",
                                value: 50.00,
                            },
                        },
                    ],
                });
            },
            onApprove: async(data, actions) =>{
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err)=>{
                console.log(err)
            }
        })
        .render(paypal.current)
    }, [])


    return (
    <div>
        <div ref={paypal}></div>
    </div>
  )
}
