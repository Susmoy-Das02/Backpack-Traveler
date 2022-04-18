import React from 'react';

const Blogs = () => {
    return (
        <div className='padding'> 

        <div>

            {/* queston 1 answer */}


            <h1 className='text-success text-center'>What is difference between authentication and Authorisation?</h1>
            <p className='ms-5'>

                <h6>Authentication</h6>

                1.Authentication confirms your identity to grant access to the system. <br />

                2.It is the process of validating user credentials to gain user access.


                <h6>Authorization</h6>

                1.Authorization determines whether you are authorized to access the resources. <br />

                2.It is the process of verifying whether access is allowed or not.
            </p>


            {/* queston 2 answer */}



            <h1 className='text-success text-center' >Why are we using firebase? What other options do you have to implement authentication?</h1>

            <p className='ms-5'>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.
            </p>

            <p className='ms-5'>
                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </p>

            {/* queston 3 answer */}



            <h1 className='text-success text-center'>What other services does firebase provide other than authentication?</h1>


            <p className='ms-5'>
                There are many services which Firebase provides, Most useful of them are:
                1.Cloud Firestore. <br />
                2.Cloud Functions.<br />
                3.Authentication.<br />
                4.Hosting.<br />
                5.Cloud Storage.<br />
                6.Google Analytics.<br />
                7.Predictions.<br />
                8.Cloud Messaging.<br />
            </p>

            </div>







        

        </div>

        




    );
};

export default Blogs;