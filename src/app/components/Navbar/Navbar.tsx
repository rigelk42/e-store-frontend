import DeliveryAddressControl from "../DeliveryAddressControl/DeliveryAddressControl";
import AccountControl from "../AccountControl/AccountControl";

export default function Navbar() {
  return (
    <nav className="fixed top-0 h-14 w-full bg-blue-600 grid grid-flow-col auto-cols-max gap-2">
      <h1 className="flex items-center justify-center p-2 text-white text-2xl font-bold">
        E-Store
      </h1>
      <DeliveryAddressControl />
      <div className="w-[1000] p-2"></div>
      <div></div>
      <AccountControl />
      <div></div>
      <div></div>
    </nav>
  );
}
