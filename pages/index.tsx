import Head from 'next/head'
import styles from '../styles/Home.module.css';
import utilStyles from '/styles/utils.module.css'
import Link from 'next/link'
import {getSortedPostsData} from "../lib/posts";
import Layout from "../components/layout";
import Date from '../components/date'
import {GetStaticProps} from "next";

export default function Home(
    {
        allPostsData
    }: {
        allPostsData: {
            date: string
            title: string
            id: string
        }[]
    }) {
    return (
        <Layout home>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}></Date>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}
