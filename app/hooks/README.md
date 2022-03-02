# Hooks
## Summary
- [useBoolean()](#useBoolean)
- [useCopyToClipboard()](#useCopyToClipboard)
- [useEffectOnce()](#useEffectOnce)
- [useElementScrollSize()](#useElementScrollSize)
- [useElementSize()](#useElementSize)
- [useEventListener()](#useEventListener)
- [useInterval()](#useInterval)
- [useIsFirstRender()](#useIsFirstRender)
- [useIsomorphicLayoutEffect](#useIsomorphicLayoutEffect)
- [useOnClickOutside()](#useOnClickOutside)
- [useResponsive()](#useResponsive)
- [useTimeout()](#useTimeout)
- [camalize()](#camalize)
- [useTranslation()](#useTranslation)
- [useUpdateEffect()](#useUpdateEffect)
- [useWindowSize()](#useWindowSize)

## useBoolean()
```js
/**
 * A simple abstraction to play with a boolean state
 * @param {boolean} [defaultValue=false]
 * @return {
 *    value: boolean,
 *    setValue: Dispatch<SetStateAction<boolean>>,
 *    setTrue: () => void,
 *    setFalse: () => void,
 *    toggle: () => void,
 * }
 */
```
## useCopyToClipboard()
```js
/**
 * This React hook provides a copy method to save a string in the clipboard and the copied value (default: null).
 * If anything doesn't work, it prints a warning in the console and the value will be null.
 * @returns {[copiedText: (string | null), copy: (text: string) => Promise<boolean>]}
 */
```
## useEffectOnce()
```js
/**
 * Just modified version of useEffect that's executed only one time, at the mounting time.
 * @param {EffectCallback} effect 
 */
```
## useElementScrollSize()
```js
/**
 * This hook helps you to dynamically recover the scrollWidth and the scrollHeight of an HTML element. 
 * Dimensions are updated on load, on mount/un-mount, when resizing the window and when the ref changes.
 * @returns {[
 *      setRef: Dispatch<SetStateAction<extends HTMLElement = HTMLDivElement | null>>, 
 *      size: { width: number, height: number }
 * ]}
 */
```
## useElementSize()
```js
/**
 * This hook helps you to dynamically recover the width and the height of an HTML element. 
 * Dimensions are updated on load, on mount/un-mount, when resizing the window and when the ref changes.
 * @returns {[
 *      setRef: Dispatch<SetStateAction<extends HTMLElement = HTMLDivElement | null>>, 
 *      size: { width: number, height: number }
 * ]}
 */
```
## useEventListener()
```js
/**
 * Use EventListener with simplicity by React Hook. It takes as parameters a eventName, 
 * a call-back functions (handler) and optionally a reference element. 
 * You can see above two examples using useRef and window based event.
 * @param {keyof WindowEventMap | keyof HTMLElementEventMap} eventName 
 * @param {(WindowEventMap | HTMLElementEventMap | Event)=>void} handler 
 * @param {RefObject<HTMLElement | void>} [element=void]
 */
```
## useInterval()
```js
/**
 * Use setInterval in functional React component with the same API. 
 * Set your callback function as a first parameter and a delay (in milliseconds) for the second argument. 
 * You can also stop the timer passing null instead the delay.
 * The main difference between the setInterval you know and this useInterval hook is that its arguments are "dynamic".
 * @param {() => void} callback 
 * @param {number | null} delay 
 */
```
## useIsFirstRender()
```js
/**
 * Simple React hook that return a boolean, true at the mount time, then always false
 * @return {boolean}
 */
```
## useIsomorphicLayoutEffect
```js
/**
 * The React documentation says about useLayoutEffect:
 * | The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
 * That means this hook is a browser hook. But React code could be generated from the server without the Window API.
 * If you're using NextJS, you'll have this error message:
 * | Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format.
 * | This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be
 * | used in components that render exclusively on the client.
 * This hook fixes this problem by switching between useEffect and useLayoutEffect following the execution environment.
 * @const useIsomorphicLayoutEffect
 */
```
## useOnClickOutside()
```js
/**
 * React hook for listening for clicks outside of a specified element (see useRef).
 * This can be useful for closing a modal, a dropdown menu etc.
 * @param {RefObject<HTMLElement>} ref 
 * @param {(event: MouseEvent) => void} handler 
 * @param {'mousedown' | 'mouseup'} [mouseEvent='mousedown'] 
 */
```
## useResponsive()
```js
/**
 * Return an object to manage media queries state, Media queries are base on TaillWind default media queries
 * Do no hesitate to change values on name (dont forget to also update type) to be closer to your needs
 * min(breakpoint) : min-width breakpoint
 * max(breakpoint) : max-width breakpoint
 * between(breakpointSmallest, breakpointBiggest) : min-width breakpointSmallest max-width breakpointBiggest
 * breakpoint : current breakpoint
 * breakpoints : List of breakpoints available in an object
 * @returns {{
 *      min: (breakpoint: keyof Breakpoints) => boolean,
 *      max: (breakpoint: keyof Breakpoints) => boolean,
 *      between: (breakpointSmallest: keyof Breakpoints, breakpointBiggest: keyof Breakpoints) => boolean,
 *      breakpoint: keyof Breakpoints,
 *      breakpoints: Breakpoints,
 * }}
 */
```
## useTimeout()
```js
/**
 * Very similar to the useInterval hook, this React hook implements the native setTimeout function keeping the same interface.
 * You can enable the timeout by setting delay as a number or disabling it using null.
 * When the time finishes, the callback function is called.
 * @param {() => void} callback 
 * @param {number | null} delay 
 */
```
## useTranslation()
```js
/**
 * Return methods to get translation string
 * __: magic method to translate a string or a dotted context
 * trans: Basic method to translate a string or a dotted context
 * transChoice: Pluralize method to translate a string or a dotted context
 * More about translation in translation README
 * @param {string?} parentContext Use in magic method to prefix each context
 * @return {{
 *      __: (context: string, options?: {[key: string]: string | number)} => string,
 *      trans: (context: string, options?: {[key: string]: string | number)} => string, 
 *      transChoice: (context: string, count: number, options?: {[key: string]: string | number)}, language?: string) => string
 * }}
 */
```
## useUpdateEffect()
```js
/**
 * Just modified version of useEffect that is skipping the first render.
 * @param {EffectCallback} effect 
 * @param {DependencyList} deps 
 */
```
## useWindowSize()
```js
/**
 * Easily retrieve window dimensions with this Hook React which also works onRezise
 * @returns {{
 *    width: number,
 *    height: number
 * }}
 */
```



