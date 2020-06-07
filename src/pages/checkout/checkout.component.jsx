import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
   selectCartitems,
   selectCartTotal,
} from './../../redux/cart/cart.selectors';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
   <div className='checkout-page'>
      <div className='checkout-header'>
         <div className='header-block'>
            <span>Product</span>
         </div>
         <div className='header-block'>
            <span>Description</span>
         </div>
         <div className='header-block'>
            <span>Quantity</span>
         </div>
         <div className='header-block'>
            <span>Price</span>
         </div>
         <div className='header-block'>
            <span>Remove</span>
         </div>
      </div>
      {cartItems.map((cartItem) => (
         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'>
         <span>TOTAL: ${total}</span>
      </div>
      <div className='test-warning'>
         *Please use tge following test card credit card for payment*
         <br />
         4242 4242 4242 4242 - Exp: 01/22 - SVV: 123
      </div>
      <StripeCheckoutButton price={total} />
   </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartitems,
   total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
