import React from 'react';

/**
 * Компонент List формирует список
 */

function List({children, items, ...props}) {
  return <ul {...props}>{children(items)}</ul>;
}

export default List;
