import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
          <svg
            viewBox="0 0 28 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
          >
            <g clipPath="url(#clip0_106_2)">
              <path
                d="M18.1128 34.9543H14.0183V37.6795H18.1128V34.9543Z"
                fill="#05FFDB"
              />
              <path
                d="M24.8014 33.1709C23.049 31.4202 20.2077 31.4202 18.4552 33.1709C16.7028 34.9216 16.7028 37.76 18.4552 39.5107C20.2077 41.2614 23.049 41.2614 24.8014 39.5107C26.5539 37.76 26.5539 34.9216 24.8014 33.1709Z"
                fill="#05FFDB"
              />
              <path
                d="M15.1242 31.8845L18.0199 34.7772L19.9489 32.8502L17.0533 29.9574L15.1242 31.8845Z"
                fill="#05FFDB"
              />
              <path
                d="M18.6231 22.3386L7.48358 33.4669L9.41257 35.3939L20.5521 24.2657L18.6231 22.3386Z"
                fill="#05A1B8"
              />
              <path
                d="M6.34621 40.8213C8.82456 40.8213 10.8337 38.8142 10.8337 36.3384C10.8337 33.8625 8.82456 31.8555 6.34621 31.8555C3.86786 31.8555 1.85876 33.8625 1.85876 36.3384C1.85876 38.8142 3.86786 40.8213 6.34621 40.8213Z"
                fill="#05A1B8"
              />
              <path
                d="M24.8014 18.1728C23.049 16.4221 20.2077 16.4221 18.4552 18.1728C16.7028 19.9235 16.7028 22.7619 18.4552 24.5126C20.2077 26.2633 23.049 26.2633 24.8014 24.5126C26.5539 22.7619 26.5539 19.9235 24.8014 18.1728Z"
                fill="#05A1B8"
              />
              <path
                d="M15.1656 16.9277L18.0613 19.8204L19.9903 17.8934L17.0946 15.0006L15.1656 16.9277Z"
                fill="#05A1B8"
              />
              <path
                d="M3.17309 9.50968C4.92555 11.2604 7.76684 11.2604 9.51929 9.50968C11.2717 7.75899 11.2717 4.92058 9.51929 3.16989C7.76684 1.41921 4.92554 1.41921 3.17309 3.16989C1.42063 4.92058 1.42063 7.75899 3.17309 9.50968Z"
                fill="#05A1B8"
              />
              <path
                d="M12.8583 10.781L9.96259 7.88821L8.03357 9.81527L10.9293 12.708L12.8583 10.781Z"
                fill="#05A1B8"
              />
              <path
                d="M18.6231 7.3405L7.48358 18.4688L9.41257 20.3958L20.5521 9.26753L18.6231 7.3405Z"
                fill="#05FFDB"
              />
              <path
                d="M18.1128 4.99936H14.0183V7.72463H18.1128V4.99936Z"
                fill="#05FFDB"
              />
              <path
                d="M13.9769 19.9975H9.88239V22.7227H13.9769V19.9975Z"
                fill="#05FFDB"
              />
              <path
                d="M21.649 10.8251C24.1274 10.8251 26.1364 8.81803 26.1364 6.34219C26.1364 3.86635 24.1274 1.85928 21.649 1.85928C19.1707 1.85928 17.1616 3.86635 17.1616 6.34219C17.1616 8.81803 19.1707 10.8251 21.649 10.8251Z"
                fill="#05FFDB"
              />
              <path
                d="M3.17309 24.5491C4.92554 26.2998 7.76684 26.2998 9.51929 24.5491C11.2717 22.7984 11.2717 19.96 9.51929 18.2093C7.76684 16.4586 4.92554 16.4586 3.17309 18.2093C1.42063 19.96 1.42063 22.7984 3.17309 24.5491Z"
                fill="#05FFDB"
              />
              <path
                d="M12.8996 25.8204L10.0039 22.9276L8.07492 24.8547L10.9706 27.7475L12.8996 25.8204Z"
                fill="#05FFDB"
              />
            </g>
            <defs>
              <clipPath id="clip0_106_2">
                <rect width="28" height="42.6806" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <svg
            className={`ham hamRotate ham4 ${click ? 'menuActive' : ''}`}
            viewBox="0 0 100 100"
            width="45"
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link href="/">
            <a onClick={closeMobileMenu}>
              <li className="nav-item">Home</li>
            </a>
          </Link>
          <Link href="https://biofidelicx-quizzard.vercel.app">
            <a onClick={closeMobileMenu}>
              <li
                className="nav-item"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                Quiz
              </li>
            </a>
          </Link>
          <Link href="/category">
            <a onClick={closeMobileMenu}>
              <li className="nav-item">Category</li>
            </a>
          </Link>
          <Link href="/about">
            <a onClick={closeMobileMenu}>
              <li className="nav-item">About</li>
            </a>
          </Link>
          <Link href="/contact">
            <a onClick={closeMobileMenu}>
              <li className="nav-item">Contact</li>
            </a>
          </Link>
          <Link href="/sign-up">
            <a onClick={closeMobileMenu}>
              <li className="nav-item">Sign Up</li>
            </a>
          </Link>
        </ul>
        <div className="share-link">
          <a
            href="https://www.youtube.com/channel/UCFwsPbrNazt7_hR91raqLPA"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-8 w-8"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
