import { PoolerButton, PoolerConfig, usePooler } from 'pooler-sdk'
import 'pooler-sdk/dist/index.css'
import React from 'react'

const App = () => {
  const config = {
    email: process.env.REACT_APP_EMAIL,
    amount: 2500,
    public_key: process.env.REACT_APP_PUBKEY_TEST,
    transaction_reference: '',
    success_message: 'Payment successful',
    error_message: 'Payment failed',
    onClose: (response: any) => {
      console.log(response)
    },
    callback: (response: any) => {
      console.log(response)
    }
  }
  return (
    <div className='App'>
      <PoolerButton
        children='pay now'
        disabled={false}
        loading={false}
        {...config}
      />
    </div>
  )
}

export default App
