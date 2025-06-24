"use server";

import { z } from "zod";

const registerSchema = z.object({
  firstname: z.string({ message: "Nombre inválido" }),
  lastname: z.string({ message: "Apellido inválido" }),
  email: z.string().email({ message: "Email inválido" }).trim(),
  phone: z
    .string()
    .min(5, {
      message: "El número de teléfono debe contener mínimo 5 caractéres",
    })
    .max(20, {
      message: "El número de teléfono no puede contener más de 20 caractéres",
    }),
  message: z
    .string()
    .min(5, { message: "La contraseña debe contener 5 caractéres" }),
  role: z.string(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function contact(prevState: any, formData: FormData) {
  const result = registerSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      success: false,
      msg: "",
      errors: result.error.flatten().fieldErrors,
    };
  }

  console.log("Home Action");

  // const { firstname, lastname, email, phone, message, role } = result.data;

  // const res = await fetch(process.env.GOOGLE_SCRIPT_URL || "", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     firstname,
  //     lastname,
  //     email,
  //     phone,
  //     message,
  //     role,
  //   }),
  // });

  // if (!res.ok) {
  //   return {
  //     success: false,
  //     msg: "Error al enviar formulario",
  //     errors: {},
  //   };
  // }

  return {
    success: true,
    msg: "Formulario enviado con éxito",
    errors: {},
  };
}
