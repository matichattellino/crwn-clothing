import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_jlzhEmZf9nKS7y0TOCUJ64xh00hVonTQc6';

    const onToken = token => {
        alert('Payment Successful')
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