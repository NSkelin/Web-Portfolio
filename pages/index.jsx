import Head from "next/head";
import styles from "../styles/home.module.css";
import LinkCardHolder from "../components/linkCardHolder.jsx";
import SkillCardHolder from "../components/skillCardHolder.jsx";
import codeGearIcon from "../public/icon_gear_code.png";
import cubeGearIcon from "../public/icon_cube_code.png";
import serverIcon from "../public/icon_server.png";
import emailIcon from "../public/icon_email.png";
import githubIcon from "../public/icon_github.png";
import linkedInIcon from "../public/icon_linkedin.png";
import externalLinkIcon from "../public/icon_external_link.png";
import LineTitle from "../components/lineTitle.jsx";
import ContactMe from "../components/contactMe.jsx";
import BackgroundCode from "../public/background_code.png";
import TextOverImage from "../components/textOverImage.jsx";
import PortfolioImage from "../public/Portfolio.png";
import acceskenyaImage from "../public/acceskenya.png";

const skillCarder = {
    cards: [
        {
            cardType: "skill",
            title: "Front-end Development",
            imageSource: cubeGearIcon,
            array: ["HTML5", "CSS3", "ReactJS", "JavaScript"],
        },
        {
            cardType: "skill",
            title: "Back-end Development",
            imageSource: codeGearIcon,
            array: ["NodeJS", "NextJS", "Python", "Electron"],
        },
        {
            cardType: "skill",
            title: "Database & Hosting",
            imageSource: serverIcon,
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
                {image: externalLinkIcon, link: "http://localhost:3000/"},
                {image: githubIcon, link: "https://github.com/NSkelin/Web-Portfolio"},
            ],
        },
        {
            cardType: "link",
            title: "AccesKenya",
            imageSource: acceskenyaImage,
            array: [{image: externalLinkIcon, link: "https://www.acceskenya.org/"}],
        },
    ],
};

const contactLinks = [
    {text: "nick.skelin@gmail.com", icon: {source: emailIcon, height: 35, width: 35, alt: "Icon"}},
    {text: "Github", icon: {source: githubIcon, height: 35, width: 35, alt: "Icon"}, href: "https://github.com/NSkelin"},
    {
        text: "LinkedIn",
        icon: {
            source: linkedInIcon,
            height: 35,
            width: 35,
            alt: "Icon",
        },
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
                <TextOverImage imageSource={BackgroundCode} alt="Image" title="Hey, I'm Nick!" description="I design and develop websites!" />
                <div className={styles.about}>
                    <LineTitle title="About me" />
                    <div className={styles.aboutText}>
                        Im a graduate of BCIT&apos;s Computer information technology diploma program and specialize in full-stack web development. I
                        have a years worth of experience in web development and can even design your website to suit your needs. If you want to see
                        the specifics of my skill-set or previous works, just check below!
                    </div>
                </div>

                <SkillCardHolder title="Skills" cards={skillCarder.cards} style={{direction: "left", color: "#2274a5"}} />
                <SkillCardHolder title="Recent works" cards={linkCarder.cards} style={{direction: "right", color: "#eb6534"}} />
                <ContactMe
                    title="Get in Touch"
                    description="Im always available by email and will do my best to get back to you in a timely fashion. In the mean time feel free to
                            check out my Github or LinkedIn."
                    links={contactLinks}
                />
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerRow}>
                    <span className={styles.footerText}>nick.skelin@gmail.com</span>
                    <a href="https://github.com/NSkelin" className={styles.footerText}>
                        Github
                    </a>
                    <a href="https://icons8.com/" className={styles.footerText}>
                        Icons8.com
                    </a>
                </div>
                <div className={styles.footerRow}>
                    <a href="https://www.linkedin.com/in/nicholas-skelin-401014173/" className={styles.footerText}>
                        LinkedIn
                    </a>
                    <span className={styles.footerText}></span>
                    <span className={styles.footerText}></span>
                </div>
            </footer>
        </div>
    );
}
