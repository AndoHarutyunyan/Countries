import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WrrapCityDiv = styled.div`
  justify-content: space-between;
  padding: 10px;
`;
const CityDiv = styled.div`
  color: blue;
  cursor: pointer;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;
const FlagImgStyle = styled.img`
  width: 150px;
`;

const InputSearch = styled.input``;
// https://restcountries.eu/rest/v2/region/{region}
// https://restcountries.eu/rest/v2/all

export default function (props) {
  const region = ["africa", "americas", "asia", "europe", "oceania"];
  const [allCitys, setAllCitys] = useState();
  const [afrika, setAfrika] = useState();
  const [america, setAamerica] = useState();
  const [asia, setAsia] = useState();
  const [europe, setEurope] = useState();
  const [oceania, setOceania] = useState();
  const [cityInfo, setCityInfo] = useState("");
  const [searchValue, setSearchvalue] = useState("");
  const All = [setAfrika, setAamerica, setAsia, setEurope, setOceania];

  function SeeInfoCity(e) {
    setCityInfo(e);
  }

  function Fetch() {
    for (let i = 0; i < region.length; i++) {
      cityFetch(region[i], All[i]);
    }

    function cityFetch(reg, nameRegion) {
      fetch(`https://restcountries.eu/rest/v2/region/${reg}`)
        .then((res) => res.json())
        .then((data) => {
          nameRegion(data);
        });
    }
  }

  useEffect(Fetch, []);

  function AllCityfetch() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((respons) => respons.json())
      .then((data) => {
        setAllCitys(data);
      });
  }
  useEffect(AllCityfetch, []);
  function onChangevalue(e) {
    setSearchvalue(e.target.value);
  }
  function searchCity(city, arr) {
    let newArray = [];
    if (city === "") {
      return null;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(city.toLowerCase())) {
          newArray.push(arr[i]);
        }
      }
      return newArray.length > 0 ? newArray : "Not Found";
    }
  }

  return (
    <>
    <h1 style={{textAlign: "center"}}>Country information</h1>
      {cityInfo ? (
        <div>
          <div>Name: {cityInfo.name}</div>
          <div>Area: {cityInfo.area}</div>
          <div>Capital: {cityInfo.capital}</div>
          <div>Population: {cityInfo.population}</div>
          <div>Native-Name: {cityInfo.nativeName}</div>
          <FlagImgStyle src={cityInfo.flag} alt="flag" />
        </div>
      ) : null}
      <InputSearch
        type="search"
        placeholder="Search City..."
        value={searchValue}
        onChange={onChangevalue}
      />
      {searchValue && Array.isArray(searchCity(searchValue, allCitys)) ? (
        searchCity(searchValue, allCitys).map((el) => (
          <div key={el.name}>
            <CityDiv
              onClick={() => {
                SeeInfoCity(el);
              }}
            >
              {el.name}
            </CityDiv>
          </div>
        ))
      ) : searchValue ? (
        <div>{searchCity(searchValue, allCitys)}</div>
      ) : null}
      <WrrapCityDiv
        style={searchValue ? { display: "none" } : { display: "flex" }}
      >
        <div style={{ marginLeft: "0" }}>
          <h1>Africa</h1>
          {Array.isArray(afrika)
            ? afrika.map((el) => (
                <div key={el.name}>
                  <CityDiv
                    onClick={() => {
                      SeeInfoCity(el);
                    }}
                  >
                    {el.name}
                  </CityDiv>
                </div>
              ))
            : null}
        </div>
        <div style={{ marginLeft: "1.5vw" }}>
          <h1>Americas</h1>
          {Array.isArray(america)
            ? america.map((el) => (
                <div key={el.name}>
                  <CityDiv
                    onClick={() => {
                      SeeInfoCity(el);
                    }}
                  >
                    {el.name}
                  </CityDiv>
                </div>
              ))
            : null}
        </div>
        <div style={{ marginLeft: "1.5vw" }}>
          <h1>Asia</h1>
          {Array.isArray(asia)
            ? asia.map((el) => (
                <div key={el.name}>
                  <CityDiv
                    onClick={() => {
                      SeeInfoCity(el);
                    }}
                  >
                    {el.name}
                  </CityDiv>
                </div>
              ))
            : null}
        </div>
        <div style={{ marginLeft: "1.5vw" }}>
          <h1>Europe</h1>
          {Array.isArray(europe)
            ? europe.map((el) => (
                <div key={el.name}>
                  <CityDiv
                    onClick={() => {
                      SeeInfoCity(el);
                    }}
                  >
                    {el.name}
                  </CityDiv>
                </div>
              ))
            : null}
        </div>
        <div style={{ marginLeft: "1.5vw" }}>
          <h1>Oceania</h1>
          {Array.isArray(oceania)
            ? oceania.map((el) => (
                <div key={el.name}>
                  <CityDiv
                    onClick={() => {
                      SeeInfoCity(el);
                    }}
                  >
                    {el.name}
                  </CityDiv>
                </div>
              ))
            : null}
        </div>
      </WrrapCityDiv>
    </>
  );
}
