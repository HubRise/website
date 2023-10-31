type State<Result> =
  | { status: "neverComputed" }
  | { status: "computed"; result: Result; timestamp: number }
  | { status: "computing"; promise: Promise<Result>; timestamp: number }

/**
 * Executes a given computation in a non-reentrant manner based on a timestamp.
 *
 * This function returns an async function that wraps the original computation to:
 * 1) Cache the result of the computation along with a timestamp.
 * 2) If a subsequent call is made with the same timestamp while a computation is ongoing,
 *    it returns the Promise of the ongoing computation.
 * 3) If a subsequent call is made with the same timestamp and the computation has completed,
 *    it returns the cached result.
 * 4) If a subsequent call is made with a new timestamp, it starts a new computation.
 *
 * @param {() => Promise<Result>} computation - The computation to be executed.
 * @param {() => Promise<number>} getTimestamp - A function to get the current timestamp to use for caching.
 * @return {() => Promise<Result>} An async function wrapping the original computation with caching and non-reentrant behavior.
 */
function executeWithTimestampCache<Result>(
  computation: () => Promise<Result>,
  getTimestamp: () => Promise<number>,
): () => Promise<Result> {
  let currentState: State<Result> = { status: "neverComputed" }

  return async () => {
    const targetTimestamp = await getTimestamp()

    if (currentState.status === "computed") {
      if (currentState.timestamp === targetTimestamp) {
        return currentState.result
      }
    } else if (currentState.status === "computing") {
      if (currentState.timestamp === targetTimestamp) {
        return await currentState.promise
      }
    }

    const newPromise = computation().then((newResult) => {
      currentState = {
        status: "computed",
        result: newResult,
        timestamp: targetTimestamp,
      }
      return newResult
    })

    currentState = {
      status: "computing",
      promise: newPromise,
      timestamp: targetTimestamp,
    }

    return await newPromise
  }
}

export default executeWithTimestampCache
