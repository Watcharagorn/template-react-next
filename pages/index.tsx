import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Button</Button>;
      <Button>Button2</Button>;
      <button className="border border-slate-300 hover:border-slate-400">
        Send email
      </button>
    </div>

  )
}
