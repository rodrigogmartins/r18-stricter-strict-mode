import axios from "axios";
import { useEffect, useRef } from "react";

export function RunCodeOnce() {
  const wrongSideCode = `
useEffect(() => {
  axios
    .get('http://numbersapi.com/random')
    .then(({ data }) => {
      document
        .querySelector('#content')
        .innerHTML += \`\${data}<br><br>\`
    })
}, [])
  `

  const rightSideCode = `
const shouldGetData = useRef(true)

useEffect(() => {
  if (shouldGetData.current) {
    shouldGetData.current = false
    axios
      .get('http://numbersapi.com/random')
      .then(({ data }) => {
        document
          .querySelector('#content')
          .innerHTML += \`\${data}<br><br>\`
      })
  }
}, [])
  `

  const NUMBERS_API_URL = 'http://numbersapi.com/random'
  const shouldGetData = useRef(true)

  useEffect(() => {
    axios
      .get(NUMBERS_API_URL)
      .then(({ data }) => {
        document.querySelector('#content-a-side-2').innerHTML += `${data}<br><br>`
      })

    if (shouldGetData.current) {
      shouldGetData.current = false
      axios
        .get(NUMBERS_API_URL)
        .then(({ data }) => {
          document.querySelector('#content-b-side-2').innerHTML += `${data}<br><br>`
        })
    }

    return () => {
      
    }
  }, [])


  return (
    <>
      <div className="container small">
        <div className="box-title">#2 - Using useRef to run code once</div>
        
        <div className="box-title">Wrong way</div>
        <div className="results-container">
          <div className="code-box">
            <pre>{wrongSideCode.trim()}</pre>
          </div>

          <div className="result-box">
            <div id="content-a-side-2"></div>
          </div>
        </div>
        
        <div className="box-title">Right way</div>
        <div className="results-container">
          <div className="code-box">
            <pre>{rightSideCode.trim()}</pre>
          </div>

          <div className="result-box">
            <div id="content-b-side-2"></div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}