import React from 'react'

/**
 * Компонент ListItem формирует элементы списка
 */

export default function ListItem({children, ...props}) {
  return (
    <li {...props}>{children}</li>
  )
}
