import React from 'react';
import Layout from '../components/layout/Layout';

const ImprintPage = () => {
    return <Layout>
        <main className="text-gray-900">
            <div className="container mx-auto px-8 lg:flex">
                <div className="text-center lg:text-left">
                    <h1 className="pt-20 text-3xl mt-4 text-left">Imprint</h1>
                    <h2 className="pt-4 text-2xl">Information according to § 5 TMG</h2>
                    <br/>
                    <p>netmedianer GmbH</p>
                    <p>Neugrabenweg 5-7</p>
                    <p>66123 Saarbrücken</p>
                    <br />
                    <p>Handelsregister: HRB 13975</p>
                    <p>Registergericht: Amtsgericht Saarbrücken</p>
                    <br />
                    <p className="text-xl">Vertreten durch:</p>
                    <p>Vertretungsberechtigte Geschäftsführer: Boris Brenner (CTO), Tim Mikša (CEO)</p>
                    <br />
                    <p className="text-xl">Kontakt</p>
                    
                    <p>Telefon: +49 681 379880</p>
                    <p>E-Mail: info@netmedia.de</p>
                    <br />
                    <p className="text-xl">Umsatzsteuer-ID</p>
                    
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                        <br />
                        DE229693944
                    </p>
                </div>
            </div>
        </main>
    </Layout>;
};

export default ImprintPage;
