'use client'

import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import LogoImg from '../../public/images/Logo-removebg-preview.png';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 xlg:px-8">
        {/* =================================================== */}
        <div className="flex xlg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Lá-tte Cafe</span>
            <Image
              alt="Lá-tte"
              src={LogoImg}
              className="h-auto max-h-28 min-h-16 w-auto min-w-16"
            />
          </a>
        </div>
        {/* =================================================== */}
        <div className="flex xlg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* =================================================== */}
        <PopoverGroup className="hidden xlg:flex xlg:gap-x-10">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Trang chủ
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Menu
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Chương trình hiện có
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Chuyện nhà
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Tuyển dụng
          </a>
        </PopoverGroup>
        {/* =================================================== */}
        <div className="hidden xlg:flex xlg:flex-1 xlg:justify-end">
          <Button
            id="button-contact"
            className="relative inline-flex justify-center items-center z-[1] gap-2 rounded-full py-2 px-3 text-[#a2af7f] text-sm/6 text-center font-semibold border-2 border-[#a2af7f] bg-white transition-all duration-350 overflow-hidden w-[75%]"
          >
            Liên hệ
          </Button>
        </div>
        {/* =================================================== */}
      </nav>
      {/* =================================================== */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="xlg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Lá-tte Cafe</span>
              <Image
                alt="Lá-tte"
                src={LogoImg}
                className="h-20 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Trang chủ
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900"
                >
                  Menu
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900"
                >
                  Chương trình hiện có
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900"
                >
                  Chuyện nhà
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900"
                >
                  Tuyển dụng
                </a>
              </div>
              <div className="py-6">
                <Button
                  id="button-contact"
                  className="relative inline-flex justify-center items-center z-[1] gap-2 rounded-md py-2 px-3 text-[#212121] text-sm/6 text-center text-[16px] font-semibold bg-white shadow-[4px_8px_19px_-3px_rgba(0,0,0,0.27)] transition-all duration-350 overflow-hidden w-full"                 
                >
                  Liên hệ
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* =================================================== */}
    </header>
  )
}

export default Header;