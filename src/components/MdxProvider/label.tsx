import * as React from 'react'

interface LabelProps {
  type: string
}

const Label = ({ type }: LabelProps): JSX.Element => {
  return <span className={`documentation__${type}`}>{type}</span>
}

export default Label
