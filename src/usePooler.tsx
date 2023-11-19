import React from 'react'
import usePoolerScript from './script'
import { PoolerConfig } from './types'

export default function usePooler(poolerConfig: PoolerConfig): any {
  const [loaded, error] = usePoolerScript()

  React.useEffect(() => {
    if (error) throw new Error('Unable to initialise Pooler SDK')
  }, [error])

  const handlePoolerSend = (): any => {
    if (error) throw new Error('Unable to initialise Pooler SDK')

    if (loaded) {
      const config: PoolerConfig = {
        amount: poolerConfig?.amount,
        callback: poolerConfig?.callback,
        email: poolerConfig?.email,
        public_key: poolerConfig?.public_key,
        transaction_reference: poolerConfig?.transaction_reference,
        success_message: poolerConfig?.success_message,
        error_message: poolerConfig?.error_message,
        onClose: poolerConfig?.onClose
      }
      // @ts-ignore
      const Pooler = window?.Pooler
      return (
        // @ts-ignore
        Pooler.Popup(config)
      )
    }
  }

  return handlePoolerSend
}
