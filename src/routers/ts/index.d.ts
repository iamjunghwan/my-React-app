export type MenuObj = {
    parentMenuId: string;
    menuLevel: string;
    menuId: string;
    menuNm: string;
    menuUrl: string;
    children: childrenMenu[];
};

export type ChildrenProps = {
    index?: boolean;
    path: string;
    element: JSX.Element;
    errorElement: JSX.Element;
};
