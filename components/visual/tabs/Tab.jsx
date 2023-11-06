export default function Tab ({ id, title, current, func }) {


    return (
        <li className='nav-item'>
                    <button 
                      aria-current='page'
                      className={'nav-link px-1' + (id === current && ' active') }
                      onClick={() => func(id)}
                    >
                        {title}
                    </button>
                </li>
    )
}