# React 18 - Stricter Strict Mode

## What is that?

If you've recently started a new react app, you might have noticed that useEffect was called twice when your component was mounted, even though you use the empty square brackets.

It is because React 18 introduces a new development-only check to Strict Mode. This new check will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the revious state on the second mount.

React will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the previous state on the second mount. If this breaks your app, consider removing Strict Mode until you can fix the components to be resilient to remounting with existing state.

## How to handle?

There are three possibilities to handle this behaviour using the useEffect cleanup, which are:


### #1 - Using useEffect clanup to undo what you do:


### #2 - Using useEffect clanup to ignore the first call's result:


### #3 - Using useEffect clanup to ignore the first call:

## Examples

To see the examples working you only need to run the app using `npm start`, then go to project page at [http://localhost:3000](http://localhost:3000) and then choose one example that you want to see.. 


#### More details:
* [React 18 - Breaking Changes](https://github.com/facebook/react/blob/main/CHANGELOG.md#react-1)
* [React 18 - Changelog](https://github.com/facebook/react/blob/main/CHANGELOG.md#1800-march-29-2022)
