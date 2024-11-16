import { useEffect, useState } from 'react';
import { user } from '../types/UserDataTypes';

function useFetchData(url: string): { data: user[], isLoading: Boolean } {

    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {

        async function fetchData() {
            await fetch(url).then(async (response: any) => {
                const userData = await response.json();
                setData(userData);
                setIsLoading(false);
            }).catch((error) => {
                console.log(error);

            });
        }

        fetchData();


    }, [url]);

    return { data, isLoading };

}

export default useFetchData;
