import Head from "next/head";
import styles from "../styles/home.module.css";
import CardHolder from "../components/cardHolder.jsx";
import LineTitle from "../components/lineTitle.jsx";
import ContactMe from "../components/contactMe.jsx";
import BackgroundCode from "../public/background_code.png";
import TextOverImage from "../components/textOverImage.jsx";
import PortfolioImage from "../public/Portfolio.png";
import acceskenyaImage from "../public/acceskenya.png";
import Link from "next/link";

const skillCarder = {
    cards: [
        {
            cardType: "skill",
            title: "Front-end Development",
            imageSource: {source: "bx:code-block", width: 75, height: 75, color: "#ba55d3"},
            array: ["HTML5", "CSS3", "ReactJS", "JavaScript"],
        },
        {
            cardType: "skill",
            title: "Back-end Development",
            imageSource: {source: "akar-icons:gear", width: 75, height: 75, color: "#ba55d3"},
            array: ["NodeJS", "NextJS", "Python", "Electron"],
        },
        {
            cardType: "skill",
            title: "Database & Hosting",
            imageSource: {source: "bx:coin-stack", width: 75, height: 75, color: "#ba55d3"},
            array: ["MySQL", "MongoDB", "FireBase", "Amazon Web Services"],
        },
    ],
};
const linkCarder = {
    cards: [
        {
            cardType: "link",
            title: "Portfolio",
            imageSource: PortfolioImage,
            array: [
                {icon: {source: "line-md:external-link", width: 40, height: 40, color: "white"}, link: "http://localhost:3000/"},
                {
                    icon: {source: "akar-icons:github-fill", width: 40, height: 40, color: "white"},
                    link: "https://github.com/NSkelin/Web-Portfolio",
                },
            ],
        },
        {
            cardType: "link",
            title: "AccesKenya",
            imageSource: acceskenyaImage,
            array: [
                {
                    icon: {source: "line-md:external-link", width: 40, height: 40, color: "white"},
                    link: "https://www.acceskenya.org/",
                },
            ],
        },
    ],
};

const contactLinks = [
    {
        text: "Github",
        icon: {source: "akar-icons:github-fill", width: 40, height: 40, color: "white"},
        href: "https://github.com/NSkelin",
    },
    {
        text: "LinkedIn",
        icon: {source: "akar-icons:linkedin-box-fill", width: 40, height: 40, color: "#0077b5"},
        href: "https://www.linkedin.com/in/nicholas-skelin-401014173/",
    },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>NickSkelin</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <TextOverImage
                    imageSource={BackgroundCode}
                    alt="Image"
                    title="Hey, I'm Nick!"
                    description="I design and develop websites!"
                />
                <div className={styles.about}>
                    <LineTitle title="About me" />
                    <p className={styles.aboutText}>
                        Im a graduate of BCIT&apos;s Computer information technology diploma program and specialize in full-stack
                        web development. I have a years worth of experience in web development and can even design your website to
                        suit your needs. If you want to see the specifics of my skill-set or previous works, just check below!
                    </p>
                </div>

                <CardHolder title="Skills" cards={skillCarder.cards} style={{direction: "left", color: "#2274a5"}} />
                <CardHolder title="Recent works" cards={linkCarder.cards} style={{direction: "right", color: "#eb6534"}} />
                <ContactMe links={contactLinks} />
            </main>

            <footer className={styles.footer}>
                <p>
                    Icons by{" "}
                    <a href="https://icons8.com/">
                        <b>
                            <u>Icons8.com</u>
                        </b>
                    </a>
                    . Click{" "}
                    <Link href={"/license"} passHref>
                        <b>
                            <u>here</u>
                        </b>{" "}
                    </Link>
                    for open source software licensing.
                </p>
            </footer>
        </div>
    );
}
