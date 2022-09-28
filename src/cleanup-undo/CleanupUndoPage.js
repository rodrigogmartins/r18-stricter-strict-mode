import { useEffect } from "react";

export function CleanupUndoPage() {

  const wrongSideCode = `
useEffect(() => { 
  let clicks = 0 

  const handleButtonClick = () => {
    document
      .querySelector('#content')
      .innerHTML += \`Teste \${clicks} <br>\`
    clicks++
  }

  document
    .querySelector('#button-to-click')
    .addEventListener('click', handleButtonClick)
}, [])
  `

  const rightSideCode = `
useEffect(() => { 
  let clicks = 0 

  const handleButtonClick = () => {
    document
      .querySelector('#content')
      .innerHTML += \`Teste \${clicks} <br>\`
    clicks++
  }

  document
    .querySelector('#button-to-click')
    .addEventListener('click', handleButtonClick)
  
  return () => {
    document
      .querySelector('#button-to-click')
      .removeEventListener('click', handleButtonClick)
  }
}, [])
  `

  useEffect(() => { 
    let clicksASide = 0 
    let clicksBSide = 0 

    const handleButtonClickASide = () => {
      document.querySelector('#content-a-side').innerHTML += `Teste ${clicksASide} <br>`
      clicksASide++
    }
    const handleButtonClickBSide = () => {
      document.querySelector('#content-b-side').innerHTML += `Teste ${clicksBSide} <br>`
      clicksBSide++
    }

    document
      .querySelector('#button-to-click-a-side')
      .addEventListener('click', handleButtonClickASide)
    document
      .querySelector('#button-to-click-b-side')
      .addEventListener('click', handleButtonClickBSide)

    return () => {
      document
        .querySelector('#button-to-click-b-side')
        .removeEventListener('click', handleButtonClickBSide)
    }
  }, [])


  return (
    <>
      <div className="container">
        <div className="box-title">#1 - Using useEffect cleanup to undo what you did</div>
        
        <div className="box-title">Wrong way</div>
        <div className="results-container">
          <div className="code-box">
            <pre>{wrongSideCode.trim()}</pre>
          </div>

          <div className="result-box">
            <button id="button-to-click-a-side">Click-me</button>
            <div id="content-a-side"></div>
          </div>
        </div>
        
        <div className="box-title">Right way</div>
        <div className="results-container">
          <div className="code-box">
            <pre>{rightSideCode.trim()}</pre>
          </div>

          <div className="result-box">
            <button id="button-to-click-b-side">Click-me</button>
            <div id="content-b-side"></div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}