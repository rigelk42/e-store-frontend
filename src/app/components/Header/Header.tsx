import DeliverTo from "../DeliverTo/DeliverTo"

export default function Header() {
    return (
        <div className="fixed top-0 h-14 w-full bg-blue-600 grid grid-flow-col auto-cols-max gap-2">
            <h1 className="flex items-center justify-center p-2 text-white text-2xl font-bold">E-Commerce</h1>
            <DeliverTo />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
