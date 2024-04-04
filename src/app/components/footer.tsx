import React from "react";

export default function Footer() {
return (
        <footer className="bg-[#0d1c28] shadow dark:bg-gray-900">
            <div className="mx-auto pt-10">
                <div className="flex flex-row justify-center pb-5">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/brand/alvigene-logo-c65d07955c1d97ae1efe6e10b90d98e332760c7ed3747a18771b8fda9cd5685c.svg" className="h-12 md:h-16" alt="Flowbite Logo" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 justify-center text-white mx-3">
                    <p className="text-center md:col-start-2">
                        Alvigène SARL est une société de cosmétiques basée au Cameroun.
                        Nous sommes fiers de produire uniquement des produits de soins de
                        la peau et de beauté à partir de composants biologiques et
                        cultivés localement.
                    </p><br />

                    <p className="text-center md:col-start-2 py-4">
                        Tous nos produits sont contrôlés et approuvés par l'ANOR (Agence des Normes et de la Qualité du Cameroun).
                    </p><br />
                    <p className="text-center md:col-start-2 py-4">
                        N° RCCM: RC/DLA/2021/B/5884
                    </p><br />
                    
                    <div className="md:col-start-2">
                        <p className="text-center">
                            Contactez-nous
                        </p>
                        <p className="text-center">
                            +237 650 54 89 81
                        </p>
                        <p className="text-center">
                            +237 698 56 13 29
                        </p>
                        <p className="text-center">
                            info@alvigene.com
                        </p>
                    </div><br />
                    
                    <div className="inline-flex justify-center md:justify-between md:col-start-2 py-10 ">
                        <a href="https://www.facebook.com/AlvigeneBio/" className='border-2 rounded-full mx-auto'>
                            <svg className="w-6 h-6 text-white dark:text-white m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/alvigene" className='border-2 rounded-full mx-auto'>
                            <svg className="w-6 h-6 text-white dark:text-white m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                            </svg>
                        </a>
                        <a href="https://twitter.com/alvigene" className='border-2 rounded-full mx-auto'>
                            <svg className="w-6 h-6 text-white dark:text-white m-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            
            </div>
        
        </footer>

    )
    
}