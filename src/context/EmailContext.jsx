import { createContext, useContext } from "react";
import { enqueueSnackbar } from "notistack";
import { sendEmailContact } from "../api/email";

export const EmailContext = createContext();

export const useEmail = () => {
  const context = useContext(EmailContext);

  if (!context) {
    throw new Error("UseUser most use dentro de un userprovider");
  }

  return context;
};

export const EmailProvider = ({ children }) => {
  const sendEmail = async (data) => {
    try {
      const res = await sendEmailContact(data);
      if (res.status === 200) {
        enqueueSnackbar("Correo enviado con exito", {
          variant: "success",
          autoHideDuration: 4000,
        });
      }
    } catch (error) {
      enqueueSnackbar("Error sending message", {
        variant: "error",
        autoHideDuration: 4000,
      });
    }
  };

  return (
    <EmailContext.Provider
      value={{
        sendEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
