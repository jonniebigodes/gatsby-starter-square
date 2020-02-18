import React from "react"
import Layout from "../components/layout"

/**
 * @param {Object} location is destructured from the internal gatsby navigation api
 */
const PaymentReciept = ({ location }) => {
    // destructures the state passed via the payment form component
  const { state } = location

  // checks for state values, if they don't exist it might mean someone tried to access the route directly
  if (state === null) {
    return (
      <Layout>
        <h2> No payment information is present.</h2>
      </Layout>
    )
  }
 
  // destructures the payment object that was injected through the gatsby navigation api
  const { paymentInfo } = state
  return (
    <Layout>
      <>
        <h1 style={{ textAlign: "center" }}>
          Your payment for Awesome dog chew toy for $1 was sucessfull
        </h1>
        <h2 style={{ textAlign: "center" }}>
          Here's your payment reciept information:
        </h2>
        <pre>{JSON.stringify(paymentInfo, null, 2)}</pre>
      </>
    </Layout>
  )
}
export default PaymentReciept
