import React from 'react'
import { useState } from 'react';
import styles from '@/styles/pages/Checkout.module.scss'
import Footer from '@/components/Footer';
import Head from 'next/head';
import PricingToggle from '@/components/atoms/Home/PricingToggle';
import { pricingData } from '@/data/pricing';
import Nav from '@/components/Nav';
import FAQ from '@/components/molecules/FAQ';

const Checkout = () => {


    const [billingFrequency, setBillingFrequency] = React.useState<string>('month');

    const handleToggle = (selectedOption: boolean) => {
        setBillingFrequency(selectedOption ? 'year' : 'month');
    };

    return (
        <>
            <Head>
                <title>
                    Checkout
                </title>
            </Head>
            <Nav/>
            <div className={styles.Wraper}>
                <div className={styles.Container}>

                    <form className={styles.Checkout}>
                        <div className={styles.SectionHeading}>
                            <h2 className={styles.Heading}>
                                Checkout
                            </h2>
                        </div>

                        <div className={styles.CheckOutSubContainer}>

                            <div className={styles.Product}>

                                <div className={styles.HeadingContainer}>
                                    <h2 className={styles.SubHeading}>
                                        Membership Plan
                                    </h2>
                                    <h4 className={styles.Description}>
                                        Choose the best plan that suits your needs.
                                    </h4>
                                </div>


                                <PricingToggle onToggle={handleToggle} />


                                <div className={styles.Plans}>
                                    <label className={styles.OptionCard}>
                                        <input type="radio" name="product" className={styles.RadioButton} />

                                        <div className={styles.CardDetails}>
                                            <div className={styles.HeadingMd}>Basic Plan</div>
                                            <div className={styles.DescriptionMd}>
                                                Basic Plan for 1 {billingFrequency}
                                            </div>
                                        </div>

                                    </label>

                                    <label className={styles.OptionCard}>
                                        <input type="radio" name="product" className={styles.RadioButton} />

                                        <div className={styles.CardDetails}>
                                            <div className={styles.HeadingMd}>Pro Plan</div>
                                            <div className={styles.DescriptionMd}>
                                                Pro Plan for 1 {billingFrequency}
                                            </div>
                                        </div>

                                    </label>

                                    <label className={styles.OptionCard}>
                                        <input type="radio" name="product" className={styles.RadioButton} />

                                        <div className={styles.CardDetails}>
                                            <div className={styles.HeadingMd}>Exclusive Plan</div>
                                            <div className={styles.DescriptionMd}>
                                                Exclusive Plan for 1 {billingFrequency}
                                            </div>
                                        </div>

                                    </label>
                                </div>

                                <div className={styles.HeadingContainer}>
                                    <h2 className={styles.SubHeading}>
                                        Billing Address
                                    </h2>
                                    <h4 className={styles.Description}>
                                        Complete your delivery information here.
                                    </h4>

                                    <button className={styles.AddressButton}>

                                        <svg className={styles.AddButton} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black" />
                                            <path d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5Z" fill="black" />
                                        </svg>

                                        Add your delivery address
                                    </button>
                                </div>

                            </div>

                            <div className={styles.ReviewContainer}>
                                <div className={styles.CheckoutWraper}>
                                    <div className={styles.TitleContainer}>
                                        <h3 className={styles.SubHeading}>
                                            Edu Burner Membership
                                        </h3>
                                        <h4 className={styles.Description}>
                                            starting your membership today
                                        </h4>
                                    </div>
                                </div>


                                <button className={styles.PayButton} type="submit" >
                                    Pay securely using

                                    <svg className={styles.GpayIcon} viewBox="0 0 39 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.4339 8.35778V12.8901H16.9719V1.68112H20.7732C21.6992 1.68112 22.5764 2.02226 23.2587 2.65581C23.941 3.24063 24.2821 4.11786 24.2821 5.04382C24.2821 5.96978 23.941 6.79827 23.2587 7.43182C22.5764 8.06537 21.7479 8.40652 20.7732 8.40652L18.4339 8.35778ZM18.4339 3.04569V6.94447H20.8707C21.4067 6.94447 21.9428 6.74953 22.284 6.35966C23.0637 5.62863 23.0637 4.41026 22.3327 3.67924L22.284 3.63051C21.8941 3.24063 21.4067 2.99696 20.8707 3.04569H18.4339Z" fill="#222" />
                                        <path d="M27.6448 4.99508C28.717 4.99508 29.5455 5.28749 30.179 5.87231C30.8126 6.45713 31.105 7.23688 31.105 8.21158V12.8901H29.7404V11.8179H29.6917C29.1068 12.6952 28.2784 13.1338 27.3037 13.1338C26.4752 13.1338 25.7441 12.8901 25.1593 12.4028C24.6232 11.9154 24.2821 11.2331 24.2821 10.5021C24.2821 9.72235 24.5745 9.0888 25.1593 8.60145C25.7441 8.11411 26.5726 7.91917 27.5473 7.91917C28.4246 7.91917 29.1068 8.06537 29.6429 8.40652V8.06537C29.6429 7.57802 29.448 7.09068 29.0581 6.79827C28.6682 6.45712 28.1809 6.26219 27.6448 6.26219C26.8163 6.26219 26.1828 6.60333 25.7441 7.28562L24.477 6.50586C25.2568 5.48243 26.2802 4.99508 27.6448 4.99508ZM25.7929 10.5508C25.7929 10.9407 25.9878 11.2819 26.2802 11.4768C26.6214 11.7205 27.0112 11.8667 27.4011 11.8667C27.9859 11.8667 28.5708 11.623 29.0094 11.1844C29.4967 10.7458 29.7404 10.2097 29.7404 9.62488C29.3018 9.28374 28.6682 9.0888 27.8397 9.0888C27.2549 9.0888 26.7676 9.23501 26.3777 9.52742C25.9878 9.77109 25.7929 10.1122 25.7929 10.5508Z" fill="#222" />
                                        <path d="M39 5.23876L34.1753 16.3015H32.7132L34.5164 12.4515L31.3486 5.28749H32.9082L35.1987 10.7945H35.2474L37.4892 5.28749H39V5.23876Z" fill="#222" />
                                        <path d="M12.6345 7.38309C12.6345 6.94447 12.5858 6.50586 12.537 6.06725H6.44517V8.55272H9.90534C9.75914 9.33248 9.32052 10.0635 8.63824 10.5021V12.1104H10.7338C11.9522 10.9895 12.6345 9.33248 12.6345 7.38309Z" fill="#4285F4" />
                                        <path d="M6.44517 13.6699C8.19962 13.6699 9.66167 13.0851 10.7338 12.1104L8.63824 10.5021C8.05342 10.892 7.3224 11.1357 6.44517 11.1357C4.78819 11.1357 3.32615 10.0148 2.8388 8.45525H0.69447V10.1122C1.81537 12.3053 4.00843 13.6699 6.44517 13.6699Z" fill="#34A853" />
                                        <path d="M2.8388 8.45525C2.54639 7.67549 2.54639 6.79827 2.8388 5.96978V4.31279H0.69447C-0.23149 6.11598 -0.23149 8.26031 0.69447 10.1122L2.8388 8.45525Z" fill="#FBBC04" />
                                        <path d="M6.44517 3.3381C7.37113 3.3381 8.24836 3.67924 8.93065 4.31279L10.7826 2.46087C9.61293 1.38871 8.05342 0.755157 6.49391 0.803892C4.05717 0.803892 1.81537 2.16847 0.743205 4.36153L2.88754 6.01851C3.32615 4.459 4.78819 3.3381 6.44517 3.3381Z" fill="#EA4335" />
                                    </svg>

                                </button>

                            </div>
                        </div>






                    </form>



                </div>
            </div>
            <FAQ/>
            <Footer />
        </>
    )
}

export default Checkout;

