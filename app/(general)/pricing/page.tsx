import { Metadata } from "next";


export const metadata:Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de precios de mi servicio',
};


export default function PricingPage(){
    return (
        <>
            <span className="text-5xl">Pricing Page</span>
        </>
    )
}