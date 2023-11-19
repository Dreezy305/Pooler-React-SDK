export interface PoolerConfig {
  email: string | any
  amount: number
  public_key: string | any
  transaction_reference: string | any
  success_message?: string
  error_message?: string
  onClose?: (response: any) => void
  callback: (response: any) => void
}
