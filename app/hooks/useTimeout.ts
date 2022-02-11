// https://usehooks-ts.com/react-hook/use-timeout
import { useEffect, useLayoutEffect, useRef } from 'react'


/**
 * Very similar to the useInterval hook, this React hook implements the native setTimeout function keeping the same interface.
 * You can enable the timeout by setting delay as a number or disabling it using null.
 * When the time finishes, the callback function is called.
 */
function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setTimeout(() => savedCallback.current(), delay)

    return () => clearTimeout(id)
  }, [delay])
}

export default useTimeout
