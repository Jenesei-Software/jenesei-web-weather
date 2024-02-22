import { FontInterSB16 } from '@styles/fonts/inter'
import styled from 'styled-components'

export const ListWrapper = styled.div`
  max-width: 500px;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 89px 16px 0px 16px;
  box-sizing: border-box;
  gap: 12px;
`

export const ListSearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 26px;
  box-sizing: border-box;
  margin-top: 12px;
`
export const ListSearchResultItem = styled.div`
  color: #ffffff;
  width: auto;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ListSearchResultItemTitle = styled.div`
  ${FontInterSB16};
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ListSearchResultItemAdd = styled.div`
  ${FontInterSB16};
  color: #ffffff;
  cursor: pointer;
`

export const ListCitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 26px;
  box-sizing: border-box;
  margin-top: 12px;
`

export const ListCitiesItem = styled.div`
  color: #ffffff;
  width: auto;
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ListCitiesItemTitle = styled.div`
  ${FontInterSB16};
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ListCitiesItemDelete = styled.div`
  ${FontInterSB16};
  color: #ffffff;
  cursor: pointer;
`
