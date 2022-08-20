import { useCallback, useState } from "react"

const useFetch = () => {
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback( async (configuration, applyData) => {
        setIsLoading(true);
        setIsError(null)

        try {

            const response = await fetch(configuration.url, {
                body: configuration.body ? JSON.stringify(configuration.body) : null,
                headers: configuration.headers ? configuration.headers : {},
                method: configuration.method ? "POST" : "GET",
            })

            if(!response.ok){throw new Error("Fetch operation went wrong!")}

            const data = await response.json();
            applyData(data);
            setIsLoading(false);


        } catch (error) {setIsError(error || "Something went wrong!")}
    }, []);

    return {
        isError,
        isLoading,
        fetchData,
    }
}


export default useFetch

//headers => 'Content-Type': 'application/json',