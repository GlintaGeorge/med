import React from 'react';
import Navbar from '../../components/user/Navbar/Navbar';
import Footer from '../../components/user/Footer/Footer';
import DoctorDetailsPage from '../../components/user/SingleDoctor';



const singleDoctorDetails: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <DoctorDetailsPage/>
      <Footer />
    </>
  );
};

export default singleDoctorDetails;