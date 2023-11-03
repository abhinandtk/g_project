import React, { useEffect, useState } from 'react';

export function useLanguageHook() {
    const [userLang, setLangua] = useState("english");
    // let userLang;

    useEffect(() => {
        const listenStorageChange = () => {
          if (localStorage.getItem("language") === null) {
            setLangua("english");
          } else {
            setLangua(localStorage.getItem("language"));
          }


          return userLang
        };
        window.addEventListener("storage", listenStorageChange);
        return () => window.removeEventListener("storage", listenStorageChange);
      }, []);

      return userLang
}
