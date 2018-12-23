export interface TreeViewInfo {
    header?: string;
    icon?: string;
    link?: string;
    title?: string;
    sublinks?: TreeViewInfo[];
    target?: string;
    external?: boolean;
}
