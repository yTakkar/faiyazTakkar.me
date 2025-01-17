import React, { ReactNode } from 'react'

interface IPageContainerProps {
  children: ReactNode
}

const PageContainer: React.FC<IPageContainerProps> = props => {
  return <div className="container mx-auto min-h-[68vh]">{props.children}</div>
}

export default PageContainer
