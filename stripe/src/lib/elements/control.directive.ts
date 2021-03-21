import { AbstractControl, ControlValueAccessor, Validator, ValidationErrors } from '@angular/forms';
import { StripeElementDirective } from './element.directive';
import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import type { StripeElementType } from '@stripe/stripe-js';

/** @dynamic
 * Base class bridging the StripeElement with the Angular's form API implementing both a ControlValueAccessor
 * and a sync Validator enabling the use with FormControl
 */
@Directive()
export class StripeControlDirective<T extends Exclude<StripeElementType, 'paymentRequestButton'>> 
  implements ControlValueAccessor, Validator, OnDestroy {

  private sub = new Subscription(); 

  constructor(readonly element: StripeElementDirective<T>) {}

  ngOnDestroy() { this.sub.unsubscribe(); }

  /** 
   * Called by the forms API to write to the view when programmatic changes from model to view are requested. 
   * NOTE: Only clearing the control is allowed
   */
  writeValue(value: any): void {

    if(!value) { this.element.clear(); }
  }  

  /** 
   * Function that is called by the forms API when the control status changes to or from 'DISABLED'. 
   * Depending on the status, it enables or disables the appropriate DOM element. 
   */
  setDisabledState(disabled: boolean): void {

    this.element.disable(disabled);
  }

  /** 
   * Registers a callback function that is called when the control's value changes in the UI. 
   * The value passed along the FormControl is the stripe Element instance to be used in the
   * payment_method object to setup or confirm the payment.
   */
  registerOnChange(fn: (_:any) => void): void {

    this.sub.add( this.element.valueChange.subscribe( value => fn(value.complete ? this.element.instance : null) ) );
  }

  /** Registers a callback function is called by the forms API on initialization to update the form model on blur. */
  registerOnTouched(fn: () => void): void {

    this.sub.add( this.element.blurChange.subscribe( () => fn() ) );
  }

  /** Performs synchronous validation against the provided control. */
  validate(control: AbstractControl): ValidationErrors | null {

    // Whenever the element is complete...
    if(this.element.complete) {
      // Checks for errors
      const errorType = this.element.error && this.element.error.type;
      // Translates the StripeError into a ValidationError passing along the message
      return errorType ? { [errorType]: this.element.error.message } : null;
    }

    return { required: true };
  }
}