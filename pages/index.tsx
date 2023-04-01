import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { pageLinks } from "@/src/pageLinks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul>
          {pageLinks.map((pageLink) => (
            <li key={pageLink.href}>
              <Link href={pageLink.href}>{pageLink.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
