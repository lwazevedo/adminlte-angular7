import { TreeViewInfo } from './tree-view.metadata';

export const MENUS: TreeViewInfo[] = [
    {
        'header': 'MAIN NAVIGATION'
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
        'icon': 'share',
        'external': false,
        'target': '_blank',
        'sublinks': [
            {
                'title': 'Level One',
                'link': '',
                'icon': 'circle-o',
                'external': false,
                'target': '_blank',
                'sublinks': [
                    {
                        'title': 'Level Two',
                        'link': '',
                        'icon': 'circle-o',
                        'external': false,
                        'target': '_blank',
                        'sublinks': [
                            {
                                'title': 'Level Three',
                                'link': 'www.google.com.br',
                                'icon': 'circle-o',
                                'external': true,
                                'target': '_self'
                            },
                            {
                                'title': 'Level Three',
                                'link': '',
                                'icon': 'circle-o',
                                'external': false,
                                'target': '_blank'
                            }
                        ]
                    },
                    {
                        'title': 'Level Two',
                        'link': '',
                        'icon': 'circle-o',
                        'external': false,
                        'target': '_blank'
                    }
                ]
            },
            {
                'title': 'Level One',
                'link': '',
                'icon': 'circle-o',
                'external': false,
                'target': '_blank'
            }
        ]
    }
];
