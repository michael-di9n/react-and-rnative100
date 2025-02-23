
// Good for orchestrating fetching
export function useFetch(fetchFn, initialValue) {
    const [isFetching, setIsFetching] = useState()
    const [error, setError] = useState()
    const [fetchedData, setFetchedData] = useState(initialValue)

    useEffect(() => {
        setIsFetching(true)
        tryFetch = async () => {
            try {
                const data = await fetchFn();
                setFetchedData(data)
            } catch (error) {
                setError({message: error.msg || 'Failed to fetch data.'})
            }
            setIsFetching(false)
        }
        tryFetch()
    }, [fetchFn])

    // Similar to useState which returns an object and the state updating function
    return {
        isFetching, error, fetchedData, setFetchedData
    }
}