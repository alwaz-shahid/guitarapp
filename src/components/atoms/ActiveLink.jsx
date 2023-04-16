import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ActiveLink({ href, children, ...rest }) {
  const Router = useRouter()
  const { pathname } = Router
  const [isActive, setIsActive] = React.useState(false)
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   Router.push(href);
  // };
  React.useEffect(() => {
    if (pathname === href) {
      setIsActive(true)
      //   alert(href + ' is active' + pathname);
    } else {
      setIsActive(false)
    }
  }, [pathname])

  return (
    <Link href={href} {...rest}>
      <a
        className={`${
          isActive
            ? 'text-green-600 underline underline-offset-2'
            : ' text-emerald-600'
        }  font-bold text-xs md:text-base px-2  relative`}

        // onClick={handleClick}
      >
        {children}
      </a>
    </Link>
  )
}
