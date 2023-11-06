import { v4 } from 'uuid'
import Tab from '../../visual/tabs/Tab'

export default function SelectorMarcas ({ context, state, func }) {
  return (
    <ul id='marcas-selector' className='nav nav-tabs mb-4'>
      {context.map(item => {
        return (
          <Tab
            key={v4()}
            id={item.id}
            title={item.label}
            current={state}
            func={func}
          />
        )
      })}
    </ul>
  )
}
