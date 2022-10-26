import { useRef, useState } from 'react';
import '../styles/addressPage.scss';
import React from 'react';
import SearchIcon from '../assets/searchIcon';

export default function SearchPage() {
  const [searchData, setSearchData] = useState<any[]>([]);

  const searchInput = useRef<HTMLInputElement>(null);

  async function fetchData(controller: AbortController, searchString?: string) {
    try {
      const data = await (
        await fetch(
          'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: 'Token ' + process.env.APITOKEN,
              'X-Secret': process.env.SECRET!,
            },
            signal: controller.signal,
            body: JSON.stringify({
              query: searchString ? searchString : '',
            }),
          }
        )
      ).json();

      setSearchData(data.suggestions);
    } catch {
      console.log('request aborted');
    }
  }

  function searchHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    if (searchInput.current && searchInput.current.value) {
      fetchData(new AbortController(), searchInput.current.value);
    }
  }

  return (
    <main>
      <h1>Поиск адресов</h1>
      <form onSubmit={searchHandler}>
        <label htmlFor="search">Введите интересующий вас адрес</label>
        <div className="searchBar">
          <input
            id="search"
            name="search"
            type="search"
            ref={searchInput}
            placeholder="Введите интересующий вас адрес"
            minLength={3}
          />
          <button className="searchButton" type="submit">
            <SearchIcon />
            <span>Поиск</span>
          </button>
        </div>
      </form>
      {searchData.length ? (
        <div className="searchResult">
          <h2>Адреса</h2>
          {searchData.map((address, idx) => (
            <h4 key={address.data.geo_lat + address.data.postal_code + idx}>
              {address.value}
            </h4>
          ))}
        </div>
      ) : (
        ''
      )}
    </main>
  );
}
