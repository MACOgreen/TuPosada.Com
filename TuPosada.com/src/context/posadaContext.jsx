import React, { useState, useEffect } from "react";
import { auth, db } from "../utils/firebase-config";
export const PoContext = React.createContext();

export default function PosadaContext({children}) {
    const [posada, setPosada] = useState("");
    
    useEffect(() => {
        if(localStorage.getItem("posada")){
            console.log("guarda posada");
            const usu = JSON.parse(localStorage.getItem("posada"));
            setPosada(usu);
            //console.log(posada);
        }

    }, []);
  return (
    <div>
        <PoContext.Provider
            value={{
              posada,
              setPosada,
            }}
          >
            {children}
        </PoContext.Provider>
    </div>
  )
}
