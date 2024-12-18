'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaTasks, FaUserFriends } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { IoLogoGameControllerA } from 'react-icons/io'

const navItems = [
  {
    name: 'home',
    href: '',
    icon: <FaHome className="text-2xl" />,
  },
  { name: 'Tasks', href: '/tasks', icon: <FaTasks className="text-2xl" /> },
  {
    name: 'Leaders',
    href: '/leaders',
    icon: <FaStar className="text-2xl" />,
  },
  {
    name: 'Friends',
    href: '/friends',
    icon: <FaUserFriends className="text-2xl" />,
  },
  {
    name: 'Games',
    href: '/games',
    icon: <IoLogoGameControllerA className="text-2xl" />,
  },
]
export default function NavBar() {
  const location = usePathname()

  console.log(location)

  return (
    <div
      className={`bottom-0 left-0 right-0 fixed grid grid-cols-5 grid-rows-1 gap-2 p-2 border-t border-outline`}>
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`flex flex-col items-center justify-center font-[600] text-[12px] gap-1 ${
            location !== `/game${item.href}`
              ? 'text-on-surface-variant'
              : 'text-on-surface'
          }`}>
          <Link
            className={`px-3 py-1 rounded-lg ${
              location !== `/game${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface bg-secondary-container'
            }`}
            href={`/game${item.href}`}>
            {item.icon}
          </Link>
          <span
            className={` ${
              location !== `/game${item.href}`
                ? 'text-on-surface-variant'
                : 'text-on-surface'
            }`}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}
