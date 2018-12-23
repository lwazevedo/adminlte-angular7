import { TreeViewInfo } from './tree-view.metadata';

export const MENUS: TreeViewInfo[] = [
    {
        'header': 'MAIN NAVIGATION'
    },
    {
        'title': 'Home',
        'icon': 'dashboard',
        'link': '/dashboard',
        'external': false,
        'target': '_blank'
    },
    {
        'title': 'Registration',
        'icon': 'share',
        'external': false,
        'target': '_blank',
        'sublinks': [
            {
                'title': 'Starships & Vehicles',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank',
                'sublinks': [
                    {
                        'title': 'Starships',
                        'link': '',
                        'icon': 'circle-o text-aqua',
                        'external': false,
                        'target': '_blank',
                        'sublinks': null
                    },
                    {
                        'title': 'Vehicles',
                        'link': '',
                        'icon': 'circle-o text-aqua',
                        'external': false,
                        'target': '_blank'
                    }
                ]
            },
            {
                'title': 'People',
                'link': '',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            },
            {
                'title': 'Species',
                'link': '',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            },
            {
                'title': 'Planets',
                'link': '',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            },
            {
                'title': 'Films',
                'link': '/films',
                'icon': 'circle-o text-aqua',
                'external': false,
                'target': '_blank'
            }
        ]
    }
];
