import { useState, useEffect } from 'react';
import { deleteSessionCookie, getCookie } from '../lib/CookieSession'; // Certifique-se de importar a função getCookie também

export function useSession() {
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const cookieValue = getCookie('session');
        if (cookieValue) {
            const userIdFromCookie = cookieValue.split('=')[1]; // Alterado para extrair diretamente o valor do cookie
            if (userIdFromCookie) {
                setUserId(userIdFromCookie);
            }
        }
    }, []);

    function getSessionUserId() {
        return userId; // Retorna diretamente o estado userId
    }

    function deleteSessionUserId() {
        deleteSessionCookie();
        setUserId(null);
    }

    return { userId, getSessionUserId, deleteSessionUserId };
}
