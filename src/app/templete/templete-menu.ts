import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/templete/dashboard1',
    home: true,
  }, {
    title: 'Tables',
    icon: 'nb-locked',
    children: [
      {
        title: 'smart-table',
        link: '/templete/tables/smart-table',
      },
      {
        title: 'handsontable',
        link: '/templete/tables/handsontable',
      },
    ],
  },
];
