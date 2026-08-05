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
      // 'Select', 'Access', and 'Intel' are being sunsetted — pages kept in place
      // (still reachable directly), just hidden from nav.
      { label: 'Select Plus',       href: '/select-plus' },
      { label: 'Select Advantage',  href: '/select-advantage' },
      { label: 'Awards',            href: '/awards' },
      { label: 'CEO Connect',       href: '/ceo-connect' },
      {
        label: 'Insights By Blueprint',
        href: '/insights-by-blueprint',
      },
      {
        label: 'Events',
        href: '/events',
        sub: [
          { label: 'Blueprint',          href: '/blueprint' },
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
