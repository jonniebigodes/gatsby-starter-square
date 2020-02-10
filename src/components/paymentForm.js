import React, { useState } from "react"
import "./square.css"
const PaymentForm = ({ paymentForm, ammount }) => {
  const [cardBrand, setCardBrand] = useState("")
  const [nounce, setNounce] = useState(null)
  const [googlePay, setGooglePay] = useState(false)
  const [applePay, setApplePay] = useState(false)
  const [masterpass, setMasterpass] = useState(false)
  const config = {
    // Initialize the payment form elements

    //TODO: Replace with your sandbox application ID defubed in your .env file
    applicationId: process.env.GATSBY_SQUARE_APLLICATION_ID,
    inputClass: "sq-input",
    autoBuild: false,
    // Customize the CSS for SqPaymentForm iframe elements
    inputStyles: [
      {
        fontSize: "16px",
        lineHeight: "24px",
        padding: "16px",
        placeholderColor: "#a0a0a0",
        backgroundColor: "transparent",
      },
    ],
    // Initialize the payment methods placeholders
    applePay: {
      elementId: "sq-apple-pay",
    },
    masterpass: {
      elementId: "sq-masterpass",
    },
    googlePay: {
      elementId: "sq-google-pay",
    },
    cardNumber: {
      elementId: "sq-card-number",
      placeholder: "Your Card Number",
    },
    cvv: {
      elementId: "sq-cvv",
      placeholder: "CVV",
    },
    expirationDate: {
      elementId: "sq-expiration-date",
      placeholder: "MM/YY",
    },
    postalCode: {
      elementId: "sq-postal-code",
      placeholder: "Zip Code",
    },
    /**
     * SqPaymentForm callback functions.
     * For more information see https://developer.squareup.com/docs/api/paymentform#_callbackfunctions_detail
     */
    callbacks: {
      methodsSupported: methods => {
        console.log(methods)
        if (methods.googlePay) {
          setGooglePay(methods.googlePay)
        }
        if (methods.applePay) {
          setApplePay(methods.applePay)
        }
        if (methods.masterpass) {
          setMasterpass(methods.masterpass)
        }
        return
      },
      /*
       * callback function: createPaymentRequest
       * required for Apple Pay, Google Pay, Masterpass (leave it or the build will not go through, generates misleading cross origin error)
       * Triggered when: a digital wallet payment button is clicked
       */
      createPaymentRequest: () => {
        return {
          requestShippingAddress: false,
          requestBillingInfo: true,
          currencyCode: "USD",
          countryCode: "US",
          total: {
            label: "MERCHANT NAME",
            amount: "100",
            pending: false,
          },
          lineItems: [
            {
              label: "Subtotal",
              amount: "100",
              pending: false,
            },
          ],
        }
      },
      /*
       * callback function: cardNonceResponseReceived
       * Triggered when: SqPaymentForm completes a card nonce request
       */
      cardNonceResponseReceived: (errors, nonce, cardData) => {
        if (errors) {
          // Log errors from nonce generation to the Javascript console
          console.log("Encountered errors:")
          errors.forEach(function(error) {
            console.log("  " + error.message)
          })
          return
        }
        setNounce(nonce)
      },
      unsupportedBrowserDetected: () => {},
      inputEventReceived: inputEvent => {
        switch (inputEvent.eventType) {
          case "focusClassAdded":
            break
          case "focusClassRemoved":
            break
          case "errorClassAdded":
            document.getElementById("error").innerHTML =
              "Please fix card information errors before continuing."
            break
          case "errorClassRemoved":
            document.getElementById("error").style.display = "none"
            break
          case "cardBrandChanged":
            if (inputEvent.cardBrand !== "unknown") {
              setCardBrand(inputEvent.cardBrand)
            }
            break
          case "postalCodeChanged":
            break
          default:
            break
        }
      },
    },
  }
  // creates a new instance of the component
  paymentForm = new paymentForm(config, ammount)

  paymentForm.build()

  const requestCardNonce = () => {
    paymentForm.requestCardNonce()
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-around",
          margin: "1rem",
        }}
      >
        <button onClick={() => setGooglePay(!googlePay)}>Test googlePay</button>
        <button onClick={() => setMasterpass(!masterpass)}>
          Test masterpass
        </button>
        <button onClick={() => setApplePay(!applePay)}>Test applePay</button>
      </div>
      <div>
        <div id="form-container">
          <div id="sq-ccbox">
            <p>
            <span className='leftCenter'>Enter Card Info Below </span>
              <span className='blockRight'>
                {cardBrand.toUpperCase()}
              </span>
            </p>
            <div id="sq-card-number"></div>
            <input type="hidden" id="card-nonce" name="nonce" />
            <div className="third" id="sq-expiration-date"></div>
            <div className="third" id="sq-cvv"></div>
            <div className="third" id="sq-postal-code"></div>
            <p style={{ textAlign: "center" }} id="error" />
          </div>
          <button
            id="sq-creditcard"
            className="button-credit-card"
            onClick={requestCardNonce}
          >
            {" "}
            Pay with credit card
          </button>
          <div id="sq-walletbox">
            <button
              style={{ display: masterpass ? "block" : "none" }}
              className="button-masterpass"
              id="sq-masterpass"
            />
            <button
              style={{ display: googlePay ? "inherit" : "none" }}
              className="button-google-pay"
              id="sq-google-pay"
            />
            <button
              style={{ display: applePay ? "inherit" : "none" }}
              className="button-applepay"
              id="sq-apple-pay"
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentForm
