import React from 'react'
import { PoolerConfig } from './types'
import usePooler from './usePooler'

interface PoolerButtonProps extends PoolerConfig {
  children?: string | React.ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
}

export default function poolerButton({
  children,
  className,
  disabled,
  loading,
  ...rest
}: PoolerButtonProps): JSX.Element {
  const { handlePoolerSend } = usePooler(rest)
  return (
    <button
      disabled={disabled}
      className={className || 'pooler-button '}
      onClick={handlePoolerSend}
    >
      {children}
    </button>
  )
}
