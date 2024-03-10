import {
  ListCitiesItem,
  ListCitiesItemDelete,
  ListCitiesItemTitle,
  ListCitiesWrapper,
  ListSearchResultItem,
  ListSearchResultItemAdd,
  ListSearchResultItemTitle,
  ListSearchResultWrapper,
  ListWrapper,
} from '.'
import {
  GeocodingResponse,
  OPEN_WEATHER_MAP_API_KEY,
  useGetGeocoding,
} from '@api/openweathermap'
import { IconLibrary } from '@assets/icons/icon-library'
import { InputDefault } from '@components/input-default'
import { useApp } from '@providers/provider-app'
import { City, MY_LOCATION, useCity } from '@providers/provider-city'
import { JeneseiTheme, SpanInterB36 } from 'jenesei-react-ui'
import { FC, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const List: FC = () => {
  /****************************************** Other *************************************************/
  const [search, setSearch] = useState<string>('')
  const [searchResult, setSearchResult] = useState<GeocodingResponse[] | null>(
    null
  )
  const { addToLocalStorage, removeFromLocalStorage, cities } = useCity()
  const { changeBackground } = useApp()

  /****************************************** Query *************************************************/
  const { mutate: mutateGetGeocoding } = useGetGeocoding({
    onSuccess: (data) => {
      setSearchResult(data)
    },
  })

  /****************************************** useEffect *************************************************/
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search.trim() !== '') {
        changeBackground('#000000')
        mutateGetGeocoding({
          params: {
            q: search,
            limit: '5',
            appid: OPEN_WEATHER_MAP_API_KEY,
          },
        })
      } else {
        changeBackground(null)
        setSearchResult(null)
      }
    }, 300)

    return () => {
      clearTimeout(debounceTimer)
    }
  }, [search, mutateGetGeocoding])

  useEffect(() => {
    return () => {
      setSearch('')
      changeBackground(null)
      setSearchResult(null)
    }
  }, [])
  /****************************************** Functions *************************************************/
  const handleAddToLocalStorage = (city: City, index: number) => {
    addToLocalStorage(city, index)
    setSearch('')
  }

  return (
    <ListWrapper>
      <SpanInterB36 color={JeneseiTheme.colors.white[100]}>
        {searchResult ? 'Cities' : 'Weather'}
      </SpanInterB36>
      <InputDefault
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search for a city"
        prefixContent={{
          width: '19px',
          content: <IconLibrary.Search />,
          left: '16px',
          right: '8px',
        }}
      />
      {searchResult && (
        <ListSearchResultWrapper>
          {searchResult.map((e, id) => (
            <ListSearchResultItem key={id}>
              <ListSearchResultItemTitle>
                {e.name}
                {e.state && ', ' + e.state}
                {', ' + e.country}
              </ListSearchResultItemTitle>
              <ListSearchResultItemAdd
                onClick={() =>
                  handleAddToLocalStorage(
                    {
                      name: e.name,
                      id: uuidv4(),
                      lan: e.lat,
                      lon: e.lon,
                    },
                    cities.length
                  )
                }
              >
                Add
              </ListSearchResultItemAdd>
            </ListSearchResultItem>
          ))}
        </ListSearchResultWrapper>
      )}
      {!searchResult && (
        <ListCitiesWrapper>
          {cities.map((e, id) => (
            <ListCitiesItem key={id}>
              <ListCitiesItemTitle>{e.name}</ListCitiesItemTitle>
              {e.id !== MY_LOCATION.id && (
                <ListCitiesItemDelete
                  onClick={() => removeFromLocalStorage(e.id)}
                >
                  Delete
                </ListCitiesItemDelete>
              )}
            </ListCitiesItem>
          ))}
        </ListCitiesWrapper>
      )}
    </ListWrapper>
  )
}
