import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild
} from '@headlessui/react';
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
}

interface Team {
  id: number;
  name: string;
  href: string;
  initial: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false }
];

const teams: Team[] = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MobileSidebar = ({
  sidebarOpen,
  setSidebarOpen
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) => (
  <Transition show={sidebarOpen}>
    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
      <TransitionChild
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="fixed inset-0 bg-gray-900/80" />
      </TransitionChild>

      <div className="fixed inset-0 flex">
        <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
          <TransitionChild
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full">
            <div className="flex h-full flex-1 flex-col">
              {/* Close button */}
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
              <SidebarContent />
            </div>
          </TransitionChild>
        </DialogPanel>
      </div>
    </Dialog>
  </Transition>
);

const DesktopSidebar = () => (
  <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <SidebarContent />
  </div>
);

const SidebarContent = () => (
  <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 px-6">
    <div className="flex h-16 shrink-0 items-center">
      <img alt="Scangrid Logo" src="/scangrid_logo.svg" className="h-8 w-auto" />
    </div>
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </li>
        <li>
          <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {teams.map((team) => (
              <TeamItem key={team.name} team={team} />
            ))}
          </ul>
        </li>
        <li className="-mx-6 mt-auto">
          <a
            href="#"
            className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="size-8 rounded-full bg-gray-50"
            />
            <span className="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

const NavItem = ({ item }: { item: NavigationItem }) => (
  <li key={item.name}>
    <a
      href={item.href}
      className={classNames(
        item.current
          ? 'bg-gray-50 text-indigo-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
      )}>
      <item.icon
        aria-hidden="true"
        className={classNames(
          item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
          'size-6 shrink-0'
        )}
      />
      {item.name}
    </a>
  </li>
);

const TeamItem = ({ team }: { team: Team }) => (
  <li key={team.name}>
    <a
      href={team.href}
      className={classNames(
        team.current
          ? 'bg-gray-50 text-indigo-600'
          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
        'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
      )}>
      <span
        className={classNames(
          team.current
            ? 'border-indigo-600 text-indigo-600'
            : 'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600',
          'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium'
        )}>
        {team.initial}
      </span>
      <span className="truncate">{team.name}</span>
    </a>
  </li>
);

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DesktopSidebar />
      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-xs sm:px-6 lg:hidden">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>
        <div className="flex-1 text-sm/6 font-semibold text-gray-900">Dashboard</div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full bg-gray-50"
          />
        </a>
      </div>
      <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>
    </>
  );
};

export default Sidebar;
