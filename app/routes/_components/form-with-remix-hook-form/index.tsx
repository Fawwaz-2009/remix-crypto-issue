import { useRemixForm } from "remix-hook-form"; // or cloudflare/deno
import { withRemixHookFormFormResolver, WithRemixHookFormFormData } from "~/actions/with-remix-hook-form";
import { Form } from "@remix-run/react";

export default function FormWithRemixHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRemixForm<WithRemixHookFormFormData>({
    mode: "onSubmit",
    resolver: withRemixHookFormFormResolver,
    defaultValues: {
      customerEmail: "",
    },
  });

  return (
    <Form method="POST" onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-2">
      <input
        type="email"
        placeholder="your email"
        className="bg-[#F0F0F0] placeholder:text-[#2E2514] p-6 text-lg"
        {...register("customerEmail", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.customerEmail?.message && typeof errors.customerEmail.message === "string" && <p className="text-red-500">{errors.customerEmail.message}</p>}
      <button type="submit" className="w-full bg-[#2E2514] text-white font-bold text-lg p-6" disabled={isSubmitting}>
        submit
      </button>
      {isSubmitting && <p className="text-center text-gray-500">Submitting...</p>}
    </Form>
  );
}
