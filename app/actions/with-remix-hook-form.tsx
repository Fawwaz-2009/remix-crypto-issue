import { getValidatedFormData } from "remix-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { redirect } from "@remix-run/react";

export const withRemixHookFormformSchema = z.object({
  customerEmail: z.string().email().min(1),
});

export type WithRemixHookFormFormData = z.infer<typeof withRemixHookFormformSchema>;

export const withRemixHookFormFormResolver = zodResolver(withRemixHookFormformSchema);

export async function withRemixHookFormFormAction({ request }: ActionFunctionArgs) {
  const { receivedValues, errors, data } = await getValidatedFormData<WithRemixHookFormFormData>(request, withRemixHookFormFormResolver);
  if (errors) {
    return json({ errors, receivedValues });
  }

  console.log(data);
  return redirect("/thank-you");
}

export type WithRemixHookFormFormAction = typeof withRemixHookFormFormResolver;
