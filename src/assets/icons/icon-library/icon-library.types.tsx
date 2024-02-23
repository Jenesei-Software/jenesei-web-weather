export type IconLibraryProps = {
  [icon in IconLibraryNameString]: (props: IconLibraryItemProps) => JSX.Element
}

export interface IconLibraryItemProps {
  className?: string
}

export enum IconLibraryName {
  List = 'List',
  Search = 'Search',
  Map = 'Map',
}

export type IconLibraryNameString = keyof typeof IconLibraryName
