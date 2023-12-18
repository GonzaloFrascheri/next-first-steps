import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Contact Page',
    description: 'Esta es la pagina de contacto de mi servicio',
};

export default function ContactPage(){
    return (
        <>
            <span className="text-5xl">Contact Page</span>
        </>
    )
}