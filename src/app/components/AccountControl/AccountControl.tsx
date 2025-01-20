import Link from "next/link";
import classes from "./AccountControl.module.css";

export default function AccountControl() {
  return (
    <div className={`${classes["account-control"]}`}>
      <Link className="text-sm text-white font-bold" href="/login">Sign in</Link>
    </div>
  );
}
