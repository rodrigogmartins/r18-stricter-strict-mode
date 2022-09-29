# React 18 - Stricter Strict Mode

## What is Strict Mode? 

StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

StrictMode currently helps with:

* Identifying components with unsafe lifecycles
* Warning about legacy string ref API usage
* Warning about deprecated findDOMNode usage
* Detecting unexpected side effects
* Detecting legacy context API
* Ensuring reusable state


## What is Stricter Strict Mode?

If you've recently started a new react app, you might have noticed that useEffect was called twice when your component was mounted, even though you use the empty square brackets.

It is because React 18 introduces a new development-only check to Strict Mode. This new check will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the revious state on the second mount.

React will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the previous state on the second mount. If this breaks your app, consider removing Strict Mode until you can fix the components to be resilient to remounting with existing state.

## How to handle?

There are two possibilities to handle this behaviour using the useEffect cleanup or useRef hook:


### #1 - Using useEffect cleanup to undo what you did:

```javascript
useEffect(() => { 
  let clicks = 0 

  const handleButtonClick = () => {
    document
      .querySelector('#content')
      .innerHTML += `Teste ${clicks} <br>`
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
```


### #2 - Using useRef to run code once:
```javascript
const shouldGetData = useRef(true)

useEffect(() => {
  if (shouldGetData.current) {
    shouldGetData.current = false
    axios
      .get('http://numbersapi.com/random')
      .then(({ data }) => {
        document
          .querySelector('#content')
          .innerHTML += `${data}<br><br>`
      })
  }
}, [])
```


## Examples

To see the examples working you only need to run the app using `npm start` and then go to project page at [http://localhost:3000](http://localhost:3000) 


#### More details:
* [React Strict Mode](https://reactjs.org/docs/strict-mode.html)
* [React 18 - Breaking Changes](https://github.com/facebook/react/blob/main/CHANGELOG.md#react-1)
* [React 18 - Changelog](https://github.com/facebook/react/blob/main/CHANGELOG.md#1800-march-29-2022)
