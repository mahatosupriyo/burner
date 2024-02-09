import React from 'react'
import PricingToggle from '@/components/atoms/Home/PricingToggle';
import { pricingData } from '@/data/pricing';
import styles from '@/styles/pages/Membership.module.scss'
import Footer from '@/components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/components/Nav'
import FAQ from '@/components/molecules/FAQ';


const Pricing = () => {

    const [isYearly, setIsYearly] = React.useState(false);

    const handleToggle = (selectedOption: boolean) => {
        setIsYearly(selectedOption);
    };

    const billingFrequency = isYearly ? 'year' : 'month';


    return (
        <>
            <Head>
                <title>
                    Burner Membership
                </title>
            </Head>
            <Nav />
            <div className={styles.Wraper}>
                <div className={styles.Container}>
                    <div className={styles.Pricing}>
                        <div className={styles.SectionHeading}>
                            <h2 className={styles.Heading}>
                                Choose the best<br />membership plan for you
                            </h2>

                            <PricingToggle onToggle={handleToggle} />
                        </div>

                        <div className={styles.membershipPlans}>
                            {Object.keys(pricingData[isYearly ? 'yearly' : 'monthly']).map((plan, index) => {
                                const planData = pricingData[isYearly ? 'yearly' : 'monthly'][plan as keyof typeof pricingData['yearly']];
                                return (
                                    <div key={index} className={styles.Plan}>
                                        <div className={styles.Heading}>
                                            <h1 className={styles.Head}>
                                                {plan} <br />
                                                membership
                                            </h1>


                                            <div className={styles.Price}>
                                                <p className={styles.membershipPrice}>
                                                    <svg className={styles.RupeeSymbol} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.88 14V9.72C6.88 9.32 6.77333 9.01333 6.56 8.8C6.34667 8.57333 6.02 8.46 5.58 8.46H0.38V6.94H4.38C5.36667 6.94 6.12 6.71333 6.64 6.26C7.17333 5.79333 7.44 5.10667 7.44 4.2C7.44 3.28 7.17333 2.59333 6.64 2.14C6.12 1.67333 5.36667 1.44 4.38 1.44H0.38V-9.53674e-07H11.3V1.32H7.54V1.6C7.98 1.85333 8.34667 2.2 8.64 2.64C8.94667 3.08 9.1 3.63333 9.1 4.3C9.1 5.18 8.88667 5.88 8.46 6.4C8.03333 6.90667 7.51333 7.24667 6.9 7.42V7.7C7.38 7.71333 7.77333 7.87333 8.08 8.18C8.4 8.47333 8.56 8.91333 8.56 9.5V14H6.88ZM0.38 4.86V3.54H11.3V4.86H0.38Z" fill="black" />
                                                    </svg>
                                                    {planData.price}
                                                </p>
                                                <h2 className={styles.PlanDuration}>/ {billingFrequency}</h2>
                                            </div>

                                            <Link className={styles.Btn} href="/checkout">
                                                Select {plan}
                                            </Link>
                                        </div>

                                        <ul className={styles.Features}>
                                            {planData.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className={styles.Feature}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>

                    </div>

                </div>
            </div>
            <FAQ />
            <Footer />
        </>
    )
}

export default Pricing;

