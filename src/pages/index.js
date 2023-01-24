import Head from "next/head";
import {
  Main,
  Rectangle,
  Content,
  Category,
  CategoryName,
  New,
  Title,
  Description,
  Buttons,
  Demo,
  Preview,
  SupportingIllustration,
} from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Project tracking intro component</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className={Rectangle}></div>
      <main className={Main}>
        <img src="/illustration-devices.svg"  
          alt="Logo"
          className={SupportingIllustration}
        
        />
        
        <div className={Content}>
          <p className={Category}>
            <div className={New}>new</div>
            <div className={CategoryName}>monograh dashboard</div>
          </p>
          <h1 className={Title}>powerful insights into your team</h1>
          <h2 className={Description}>
            Project planning and time tracking for agile teams
          </h2>
          <div className={Buttons}>
            <div className={Demo}>schedule a demo</div>
            <div className={Preview}>to see a preview</div>
          </div>
        </div>
        <Navbar />
      </main>
    </>
  );
}

{
  /* <Head>
<title></title>
<meta name="description" content="Generated by create next app" />
</Head>
<main className={styles.main}>
<div className={styles.description}>
  <p>
    Get started by editing&nbsp;
    <code className={styles.code}>pages/index.js</code>
  </p>
  <div>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      By{' '}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </a>
  </div>
</div>

<div className={styles.center}>
  <Image
    className={styles.logo}
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
  <div className={styles.thirteen}>
    <Image
      src="/thirteen.svg"
      alt="13"
      width={40}
      height={31}
      priority
    />
  </div>
</div>

<div className={styles.grid}>
  <a
    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Docs <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Find in-depth information about Next.js features and&nbsp;API.
    </p>
  </a>

  <a
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Learn <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Learn about Next.js in an interactive course with&nbsp;quizzes!
    </p>
  </a>

  <a
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Templates <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Discover and deploy boilerplate example Next.js&nbsp;projects.
    </p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2 className={inter.className}>
      Deploy <span>-&gt;</span>
    </h2>
    <p className={inter.className}>
      Instantly deploy your Next.js site to a shareable URL
      with&nbsp;Vercel.
    </p>
  </a>
</div>
</main> */
}
