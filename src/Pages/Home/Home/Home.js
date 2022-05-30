import React from 'react';
import useTools from '../../../hooks/useTools';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import PackageArea from '../PackageArea/PackageArea';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';
import Loading from './../../Shared/Loading/Loading';


const Home = () => {


    const { tools } = useTools();

    if (tools.length === 0) {
        return <Loading></Loading>
    }

    return (
        <main>
            <Banner></Banner>
            <Tools></Tools>
            <Summary></Summary>
            <Reviews></Reviews>
            <PackageArea></PackageArea>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    );
};

export default Home;