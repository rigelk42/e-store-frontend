import Link from "next/link";

export default function AccountControl() {
  return (
    <div className="w-full flex flex-col justify-center p-2">
      <Link className="text-sm text-white font-bold" href="/login">Sign in</Link>
    </div>
  );
}
