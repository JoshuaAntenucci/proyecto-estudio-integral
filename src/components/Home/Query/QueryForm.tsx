"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

// import styles from "./HomeContactForm.module.css";

import FormField from "@/components/Forms/Field/FormField";
import SubmitBtn from "@/components/Forms/SubmitBtn/SubmitBtn";

import { contact } from "@/app/homeActions";
import TextareaField from "@/components/Forms/Textarea/TextareaField";

const QueryForm = () => {
  const [state, contactAction] = useActionState(contact, {
    success: false,
    msg: "",
    errors: {},
  });

  useEffect(() => {
    if (state?.success) {
      toast.success(state?.msg);
    } else if (!state?.success && state?.msg !== "") {
      toast.error(state?.msg);
    }
  }, [state]);

  return (
    <>
      <form action={contactAction}>
        <FormField
          name="firstname"
          placeholder="Nombre"
          error={state?.errors?.firstname}
        />

        <FormField
          name="lastname"
          placeholder="Apellido"
          error={state?.errors?.lastname}
        />

        <FormField
          name="province"
          placeholder="Provincia"
          error={state?.errors?.province}
        />

        <FormField
          name="city"
          placeholder="Ciudad"
          error={state?.errors?.city}
        />

        <FormField
          name="payment"
          placeholder="N° Comprobante"
          error={state?.errors?.payment}
        />

        <FormField
          name="email"
          placeholder="E-mail"
          error={state?.errors?.email}
        />

        <FormField
          name="phone"
          placeholder="Teléfono"
          error={state?.errors?.phone}
        />

        {/* <FormField
          name="consult"
          placeholder="Consulta"
          error={state?.errors?.message}
        /> */}

        <TextareaField
          name="message"
          placeholder="Consulta"
          error={state?.errors?.message}
        />

        {/* <div className={styles.radioField}>
          <p>Rol</p>

          <input
            type="radio"
            id="parent"
            name="role"
            value="parent"
            defaultChecked
          />
          <label htmlFor="parent"> Padre / Madre / Tutor</label>
          <br />
          <input type="radio" id="teacher" name="role" value="teacher" />
          <label htmlFor="teacher"> Maestro / a</label>
          <br />
          <input type="radio" id="both" name="role" value="both" />
          <label htmlFor="both"> Ambos</label>
        </div> */}

        <SubmitButton />
      </form>
    </>
  );
};

export default QueryForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return <SubmitBtn title="Enviar" pending={pending} />;
}
