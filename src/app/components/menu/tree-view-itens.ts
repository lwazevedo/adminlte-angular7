import { TreeViewInfo } from './tree-view.metadata';

export const MENUS: TreeViewInfo[] = [
    {
        'header': 'Header'
    },
    {
        'title': 'Home',
        'icon': 'dashboard',
        'link': '/',
        'external': false,
        'target': '_blank'
    },
    {
        'title': 'Multilevel',
        'icon': 'link',
        'external': false,
        'target': '_blank',
        'sublinks': [
            {
                'title': 'leval 1',
                'link': '',
                'external': false,
                'target': '_blank',
                'sublinks': [
                    {
                        'title': 'level 2',
                        'link': '',
                        'external': false,
                        'target': '_blank'
                    },
                    {
                        'title': 'level 2.1',
                        'link': '',
                        'external': false,
                        'target': '_blank'
                    }
                ]
            },
            {
                'title': 'level 1.1',
                'link': '',
                'external': false,
                'target': '_blank'
            }
        ]
    }
];
