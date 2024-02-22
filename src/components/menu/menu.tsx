import { MenuWrapper } from '.'
import { IconLibrary } from '@assets/icons/icon-library'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Menu: FC = () => {
  return (
    <MenuWrapper>
      <NavLink to={'/home'}>
        <IconLibrary.Map />
      </NavLink>
      <NavLink to={'/list'}>
        <IconLibrary.List />
      </NavLink>
    </MenuWrapper>
  )
}
