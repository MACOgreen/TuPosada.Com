import React from 'react'
import { useEffect, useRef } from 'react'
import { useNavigate, Link } from "react-router-dom";

export default function PayPal() {
    const paypal = useRef()
    const navigate = useNavigate();
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
                alert("Gracias por utilizar TuPosada.com .");
                navigate("/");
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
