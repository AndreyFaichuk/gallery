export type MenuOptionBase = {
  title: string;
  link?: string;
};

export type MenuOptions = (MenuOptionBase & {
  subMenu?: MenuOptionBase[];
})[];
