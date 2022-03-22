import React, { useState, useEffect } from "react";
import { auth, db } from "../utils/firebase-config";

export const UserContext = React.createContext(null);

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState("");

    const getUserProfile = async (email) => {
      const usersRef = db.collection("users");
  
      const usersCollection = await usersRef.where("email", "==", email).get();
  
      const profile = usersCollection[0];
  
      if (!profile) return null;
  
      return {
        id: profile.id,
        ...profile.data(),
      };
    };

    const createUser = async (userId, data) => {
      return db
        .collection("users")
        .doc(userId)
        .set({ ...data });

        

      
    };
  

    // Con esto manejo el envio de nuevos usuarios a la base de datos.
    useEffect(() => { 

      if(localStorage.getItem("usuario")){
        console.log("Entra por aca");
        const usu  = JSON.parse(localStorage.getItem("usuario"));
        setUser(usu);
        console.log(user);
      }

      auth.onAuthStateChanged(async (firebaseUser) => {

        
        let id="";
        if (firebaseUser) { 
          let profile = await getUserProfile(firebaseUser.email); // Se verifica si el usuario que se encuentra en la pagina esta en la base de datos.
  
          //console.log({ profile });
  
          if (!profile) { // Si no esta en la base de datos, lo envio a la base de datos con los datos recopilados necesarios
            try{
              profile = {
                
                  name: firebaseUser.displayName,
                  email: firebaseUser.email,
                  
                  tlf:firebaseUser.phoneNumber,
                  password: " ",
                  genero: "Sin especificar",
                  FechaDeNacimiento:"Sin especificar",
                  PaisDeOrigen: " Sin especificar",
                  img: "https://firebasestorage.googleapis.com/v0/b/tuposada-com.appspot.com/o/ImagenPredeterminada.webp?alt=media&token=06f64ecd-46b7-4508-9acc-10a7d240e0b2"
                }; 
                id= firebaseUser.uid;
                
            }catch(error){

            }

            
            // console.log(profile);
            // console.log(id);
            await createUser(id, profile);
          } else{
            
          }
          
          setUser(profile);
        } else {
          console.log("No detecta el firebaseUser")
          //setUser(null);
        }
      });
      return () => {};
    }, []);


    return (
        <div>
          <UserContext.Provider
            value={{
              user,
              setUser,
            }}
          >
            {children}
          </UserContext.Provider>
        </div>
      );
}