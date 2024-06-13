
import './Header.css'

function Header() {
  return (
    <>
    <div className='top'>
        <h1>GITHUB FINDER</h1>
        <p>By <a href='https://github.com/Viniek'>Victory Njeri</a></p>
        <div className='form'>
        <input type='text' placeholder='enter a username' />
        {/* <label for='search'>Search</label> */}
        <button type='submit'>Search</button>
     </div>
    </div>
    </>
  )
}

export default Header;
