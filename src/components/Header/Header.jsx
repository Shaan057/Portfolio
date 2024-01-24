import './Header.css'

const headersList = [
    {id:1,navItem:'About',path:'#about'},
    {id:2,navItem:'Projects',path:'#projects'},
    {id:3,navItem:'Contacts',path:'#contact'}
]


const Header = () => {
  return (
    <nav className='nav-bar'>
        <div className='folio-name'>
          <h3 className='logo-name'>Roshan Patil</h3>
        </div>
        <ul className='nav-bar-list'>
            {headersList.map((each)=>
            <li key={each.id} className='nav-bar-navs'>
              <a className='link link-hover' href={each.path}>{each.navItem}</a>
            </li>
            )}
        </ul>
    </nav>
  )
}

export default Header