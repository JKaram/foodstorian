import React, { useState, useEffect, createRef } from "react"
import styled from "styled-components"
import { StyledLink } from "./index"
import algoliasearch from "algoliasearch/lite"

export const SearchBar = () => {
  const [text, setText] = useState("")
  const [results, setResults] = useState([])
  const updateText = input => setText(input)

  const searchClient = algoliasearch(
    "G98X5TNFRT",
    "e2314b17aadfc26f6c651a9e618eb5d4"
  )

  const index = searchClient.initIndex("blog-posts")

  const searchIndex = text =>
    index.search(text).then(({ hits }) => {
      return hits
    })

  useEffect(() => {
    if (text) {
      searchIndex(text).then(val => setResults([...val]))
    } else {
      setResults([])
    }
  }, [text])

  return (
    <div style={{ width: "300px" }}>
      <SearchInput
        type="text"
        value={text}
        onChange={e => {
          updateText(e.target.value)
        }}
      />
      {results.length > 0 && (
        <ResultsBox>
          {results.map(result => (
            <Hit>
              <StyledLink to={`/${result.fields.slug["en-US"]}`}>
                {result.fields.title["en-US"]}
              </StyledLink>
            </Hit>
          ))}
        </ResultsBox>
      )}
    </div>
  )
}

const SearchInput = styled.input`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;

  height: 3rem;
  font-size: 1.5em;
`

const ResultsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
`

const Hit = styled.div`
  background: #fff;
  max-width: 292px;
  width: 100%;
  padding: 20px 20px;
  border: 1px solid #000;
`
