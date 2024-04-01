import React, { useEffect, useState } from "react";
import cookie from "cookie";

interface Props {
  userId: string;
  serverUrl: string;
}

const CookieSession: React.FC<Props> = ({ userId, serverUrl }) => {
  const [cookieSet, setCookieSet] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${serverUrl}/api/cookie-session`, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (res.ok) {
          setCookieSet(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [serverUrl, userId]);

  useEffect(() => {
    if (cookieSet) {
      const sessionCookie = cookie.serialize("session", userId, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });

      document.cookie = sessionCookie;
    }
  }, [cookieSet, userId]);

  return null;
};

export default CookieSession;