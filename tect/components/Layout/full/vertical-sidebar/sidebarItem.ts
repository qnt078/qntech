import {
  ApertureIcon,
  CopyIcon,
  LayoutDashboardIcon,
  LoginIcon,
  MoodHappyIcon,
} from 'vue-tabler-icons'

export interface menu {
  header?: string
  title?: string
  icon?: any
  to?: string
  chip?: string
  chipColor?: string
  chipVariant?: string
  chipIcon?: string
  children?: menu[]
  disabled?: boolean
  type?: string
  subCaption?: string
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: 'Dashboard',
    icon: LayoutDashboardIcon,
    to: '/admin',
  },
  { header: 'Items' },
  {
    title: 'Products',
    icon: ApertureIcon,
    to: '/admin/product',
  },
  {
    title: 'Orders',
    icon: CopyIcon,
    to: '/admin/order',
  },
  { header: 'Accounts' },
  {
    title: 'User',
    icon: MoodHappyIcon,

    to: '/admin/user',
  },
  {
    title: 'Logout',
    icon: LoginIcon,
  },
]

export default sidebarItem
