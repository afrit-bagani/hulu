interface Menu {
  id: number;
  menuItem: string;
}

interface Menus extends Array<Menu> {}

export const menus: Menus = [
  {
    id: 1,
    menuItem: "TV Shows",
  },
  {
    id: 2,
    menuItem: "Movies",
  },
  {
    id: 3,
    menuItem: "Originals",
  },
  {
    id: 4,
    menuItem: "Kids",
  },
  {
    id: 5,
    menuItem: "Networks",
  },
];
