// export interface TreeViewInfo {
//     label?: string;
//     icon?: string;
//     url?: string;
//     isHeader: boolean;
//     childs?: TreeViewInfo[];
//     order?: number;
// }
export interface TreeViewInfo {
    header?: string;
    icon?: string;
    link?: string;
    title?: string;
    sublinks?: TreeViewInfo[];
    target?: string;
    external?: boolean;
    description?: string;
    order?: number;
}
