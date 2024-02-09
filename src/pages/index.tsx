import React from 'react';
import styles from '../styles/pages/landing.module.scss';
import Head from 'next/head';

import { useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

type Course = {
    bannerurl: string;
    cardtitle: string;
    price: number;
    carddescription: string;
    cardcategory: string;
    username: string;
    profilelink: string;
    learners: number;
    rating: number;
    duration: number;
};


const Home: React.FC = () => {

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('data/courseData.json'); // Update path as needed
                const data = await res.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);



    return (

        <div >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <title>Edu Burner | Home</title>
                <link rel="icon" href="./favicon.ico" type="image/x-icon" />
            </Head>

            <Nav/>

            <div className={styles.Wraper}>

                <div className={styles.Container}>

                    <div className={styles.Hero}>
                        <div className={styles.HeroContainer}>
                            <h1 className={styles.BigTitle}>
                                Future-proof <br /> your skills
                            </h1>


                            <button className={styles.LoginButton}>
                                <img draggable="false" src="https://ik.imagekit.io/0h5il6u6e/members.png?updatedAt=1707053546957" className={styles.Members} />
                                join for free
                                <div className={styles.Arrow}>
                                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.RightArrow}>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3766 9.56277L27.7694 18.9557L9.44139 18.9557V21.1657L27.7694 21.1657L18.3766 30.5586L19.9393 32.1214L32 20.0607L19.9393 8L18.3766 9.56277Z" />
                                    </svg>
                                </div>

                            </button>
                        </div>

                        <img draggable="false" className={styles.Background3D} src="/m1.png" />

                    </div>



                </div>

            </div>

            <Footer/>
        </div>
    );
};

export default Home;