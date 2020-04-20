import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_jlzhEmZf9nKS7y0TOCUJ64xh00hVonTQc6';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
         }).then(response => {
             alert('Payment successful')
         }).catch(error => {
             console.log('Payment error: ', JSON.parse(error));
             alert(
                 'There was an issue with your payment. Please sure you use the provided credit cart'
             )
         })
    }

    return (
        <StripeCheckOut 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckOutButton;