import React from 'react'

/**
 * Компонент Button формирует кнопку
 */

function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

export default Button;