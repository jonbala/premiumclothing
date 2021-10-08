import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JgaUIJmq0ZCEnc9NI0G63Ry7djo3Gcw0bRaBMAmtl2cqmhzbhRTyjLOQfttt3SCmvh8ahin5YiLdnNZEUjpKBiR00rtV43pNU';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name = 'Premium Clothing'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is €${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;