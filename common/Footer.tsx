import { darken, lighten } from 'polished'
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from 'react-icons/fa'
import { contrastColorMode, hexColor } from './utils'

const SOCIALS = {
  discord: { icon: <FaDiscord />, link: 'https://discord.gg/00RR0R' },
  twitter: { icon: <FaTwitter />, link: 'https://twitter.com/00RR0R' },
}

export const Footer = ({
  bgColor = 'rgb(26, 27, 32)',
  accentColor = '#FFFFFF',
}: {
  bgColor?: string
  accentColor?: string
}) => {
  return (
    <div
      className="mt-10 px-10 pt-5 md:px-32"
      style={{
        background: darken(0.03, bgColor),
      }}
    >
      <div className="flex w-full flex-wrap items-start justify-between gap-10 py-10">
        <div className="flex items-center">
          <img
            className="inline-block h-[28px]"
            src={
              contrastColorMode(bgColor)[1]
                ? '/cardinal-crosshair.svg'
                : '/cardinal-crosshair-dark.svg'
            }
          />
          <span
            className="ml-3 text-2xl font-semibold"
            style={{ color: lighten(0.4, contrastColorMode(bgColor)[0]) }}
          >
            00RR0R
          </span>
        </div>
        <div className="flex gap-10 self-end text-center md:gap-20">
          
          <span className="flex flex-col items-start gap-1">
            <div
              className="mb-2 text-lg font-semibold"
              style={{ color: lighten(0.4, contrastColorMode(bgColor)[0]) }}
            >
              Pages
            </div>
            <a href="https://00RR0R.com/" className="text-gray-400">
              Home
            </a>
            <a
              href="https://stake.00rr0r.com"
              className="text-gray-400"
            >
              Stake
            </a>
            <a href="https://shop.00RR0R.com" className="text-gray-400">
              Shop
            </a>
            {/*<a href="" className="text-gray-400">
              Privacy
            </a> */}
          </span>
          {/* <span className="flex flex-col items-start">
            <div className="mb-5 text-lg font-semibold">Company</div>
            <a href="https://www.cardinal.so/" className="text-gray-400">
              Website
            </a>
            <a href="" className="text-gray-400">
              Blog
            </a>
            <a
              href="https://twitter.com/cardinal_labs"
              className="text-gray-400"
            >
              Twitter
            </a>
            <a
              href="https://discord.com/invite/byq6uNTugq"
              className="text-gray-400"
            >
              Discord
            </a>
          </span> */}
        </div>
      </div>
      <div
        className="text-md flex items-center justify-between border-t py-8 text-gray-400"
        style={{ borderColor: lighten(0.2, bgColor) }}
      >
        <div className="flex items-center justify-center gap-2 text-gray-400">
          00RRIBLE Staking powered by Cardinal
        </div>
        <div className="flex gap-4 text-gray-200">
          {Object.entries(SOCIALS).map(([id, { icon, link }]) => {
            return (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{ color: accentColor }}
                className={`hover:text-primary opacity-80 transition-opacity hover:opacity-100`}
              >
                {icon}
              </a>
            )
          })}
        </div>
      </div>
      {/* <div className="text-md flex flex-row justify-center font-medium">
        Copyright 2022 Cardinal Labs. All rights reserved
      </div> */}
    </div>
  )
}
