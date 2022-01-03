import React from 'react'
import classnames from 'classnames'
import CoreImage from './core/CoreImage'

export enum NoContentType {
  DEFAULT = 'DEFAULT',
  LOGIN = 'LOGIN',
}

interface INoContentProps {
  type?: NoContentType
  message?: string
  className?: string
}

const NoContent: React.FC<INoContentProps> = props => {
  const { className, message = 'No content available' } = props

  return (
    <div className={classnames('p-5 flex flex-col items-center justify-center', className)}>
      {/* <div className="w-20 h-20 bg-gray300 mb-4"></div> */}
      <div>
        <CoreImage url={'/images/empty/empty-cart-basket.webp'} className="w-80" alt="No content found" />
      </div>
      <div className="text-center">{message}</div>
    </div>
  )
}

export default NoContent
