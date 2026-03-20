export type NavItem =
  | { label: string; href: string }
  | { label: string; href: string; sub: { label: string; href: string }[] };

export type NavGroup = {
  group: string;
  items: NavItem[];
};

export const nav: NavGroup[] = [
  {
    group: 'Foundation',
    items: [
      { label: 'Brand system', href: '/brand-system' },
    ],
  },
  {
    group: 'Products',
    items: [
      { label: 'Select',  href: '/select' },
      { label: 'Access',  href: '/access' },
      { label: 'Intel',   href: '/intel' },
      { label: 'Awards',  href: '/awards' },
      {
        label: 'Events',
        href: '/events',
        sub: [
          { label: 'Connect',            href: '/connect' },
          { label: 'Connect New York',   href: '/connect-new-york' },
          { label: 'Connect San Diego',  href: '/connect-san-diego' },
          { label: 'Luxury Connect',     href: '/luxury-connect' },
          { label: 'On Tour — Nashville', href: '/on-tour-nashville' },
          { label: 'On Tour — Texas',    href: '/on-tour-texas' },
        ],
      },
    ],
  },
];
