import React from 'react'

/**
 * Компонент Link формирует ссылку
 */


function Link({children, ...props}) {
  return (
    <a {...props}>{children}</a>
  )
}

export default Link