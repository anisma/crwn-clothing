import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey =
      'pk_test_51GrFtkHpfHV1moZi0wm9hL05qlHdihP8z7crIHHIDgfMVjctnowDF08JNSKHLfc2Ll9eDAU1BNzM0B8q2eYDpsMU009CTkb6FU';
   const onToken = (token) => {
      console.log(token);
      alert('Payment Succesful');
   };
   return (
      <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://sendeyo.com/up/d/f3eb2117da'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeCheckoutButton;
