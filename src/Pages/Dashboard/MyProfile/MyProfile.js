import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './MyProfile.css';



const MyProfile = () => {


    const [user] = useAuthState(auth);

    const handleMyProfile = event => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        if (phone && address) {
            toast('Profile Updated');
            event.target.reset();
        }
    }



    return (
        <section className='my-profile-section'>
            <h3 className='profile-title text-primary text-center'>My Profile</h3>
            <hr />
            <div className='my-profile-container'>
                <div>
                    {/* Image */}
                </div>
                <div className='my-profile-form'>
                    <form onSubmit={handleMyProfile}>

                        <label htmlFor="name">Your Name</label>
                        <input className='my-profile-input-field' type="text" name="name" id="" value={user.displayName} disabled readOnly required />

                        <label htmlFor="name">Email Address</label>
                        <input className='my-profile-input-field' type="email" name="email" id="" value={user.email} disabled readOnly required />


                        <label htmlFor="phone">Phone</label>
                        <input className='my-profile-input-field' type="text" name="phone" id="" placeholder='Phone' required />

                        <label htmlFor="phone">Education</label>
                        <input className='my-profile-input-field' type="text" name="education" id="" placeholder='Education' required />

                        <label htmlFor="linkedin">Linkedin Profile Link</label>
                        <input className='my-profile-input-field' type="text" name="linkedin" id="" placeholder='Linkedin profile link' required />

                        <label htmlFor="address">Your Address</label>
                        <textarea className='address-input-field' name="address" id="" cols="30" rows="2" placeholder='Enter your address' required></textarea>

                        <input className='btn btn-primary text-white font-bold confirm-btn' type="submit" value="Submit" />


                    </form>

                </div>
            </div>
        </section>
    );
};

export default MyProfile;