import { useCallback, useState } from "react"
import loading from "../helpers/loading";

const useGetRequest = (url) => {

        const [loadingState, setLoadingState] = useState(loading.isLoading);

        const get = useCallback(async () => {
            setLoadingState(loading.isLoading)
            try {
                const rsp = await fetch(url);
                const result = await rsp.json();
                setLoadingState(loading.loaded)
                return result;
            } catch (error) {
            }
        }, [url]);
        
    return { get, loadingState }
}

export default useGetRequest;