import { ActionFunctionArgs, type MetaFunction } from "@remix-run/node";
import FormWithRemixHookForm from "./_components/form-with-remix-hook-form";
import { withRemixHookFormFormAction } from "~/actions/with-remix-hook-form";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function action(args: ActionFunctionArgs) {
  return withRemixHookFormFormAction(args);
}

export default function Index() {
  return (
    <>
      <div className="flex justify-between items-center font-bold p-4">
        <h1>USING remix-hook-form </h1>
        <Link to="/form-without-remix-hook-form" className="underline">
          Go to form without remix-hook-form
        </Link>
      </div>
      {/* COMMENTING THIS WOULD MAKE THE BUILD SUCCESSFUL */}
      <FormWithRemixHookForm />
    </>
  );
}
