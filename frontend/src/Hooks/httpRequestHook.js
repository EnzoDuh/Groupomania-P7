import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpRequest = () => {
    //useState pour définir l'état de chargement et les erreurs
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeRequest = useRef([]);

    //Fonction fetch avec callBack pour éviter les boucles infinies
    const sendRequest = useCallback(async (url, method = "", body = null, headers = {}) => {
        setIsLoading(true);
        const httpAbortCtrl = new AbortController();
        activeRequest.current.push(httpAbortCtrl);

        try {
            const response = await fetch (url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
            });

            const responseData = await response.json();

            activeRequest.current = activeRequest.current.filter((reqCtrl) => reqCtrl !== httpAbortCtrl);

            if(!response.ok) {
                throw new Error(responseData.message);
            }
            //Si la réponse est ok, envoie des datas
            setIsLoading(false);
            return responseData;
        } catch (err) {
            //Si il y a eu une erreur, renvoie d'une erreur
            setError(err.message);
            setIsLoading(false);
            throw err;
        }
    }, []);

    const clearError = () => {
        setError(null);
    };

    //Annulation de la requête
    useEffect(() => {
        return () => {
            activeRequest.current.forEach((abortCtrl) => abortCtrl.abort());
        };
    }, []);

    return { isLoading, error, sendRequest, clearError };
};