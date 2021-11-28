import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pancakeswap.finance/swap?outputCurrency=0x6C8d1e69971964395272194A460c3A0F8Aefd38a',
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.finance/add/BNB/0x6C8d1e69971964395272194A460c3A0F8Aefd38a',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'DoctorIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'TestTubeIcon',
    href: '/pools',
  },
  {
    label: 'Vaults (COMING SOON)',
    icon: 'VaultIcon',
    href: '',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Pancakeswap',
        href: 'https://pancakeswap.info/token/0x6C8d1e69971964395272194A460c3A0F8Aefd38a',
      },
      {
        label: 'Bscscan',
        href: 'https://www.bscscan.com/token/0x6C8d1e69971964395272194A460c3A0F8Aefd38a',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Covid Stats',
        href: 'https://www.worldometers.info/coronavirus/',
      },
    ],
  },
]

export default config
