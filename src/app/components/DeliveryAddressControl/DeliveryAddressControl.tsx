import classes from "./DeliveryAddressControl.module.css";

export default function DeliveryAddressControl() {
  return (
    <div className={`${classes["delivery-address-control"]}`}>
      <span className="text-xs text-white">Deliver To</span>
      <span className="text-sm text-white font-bold">Chula Vista 91911</span>
    </div>
  );
}
