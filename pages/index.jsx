import Head from "next/head";
import styles from "../styles/home.module.css";
import LinkCardHolder from "../components/linkCardHolder.jsx";
import SkillCardHolder from "../components/SkillCardHolder.jsx";
import codeGearIcon from "../public/icon_gear_code.png";
import cubeGearIcon from "../public/icon_cube_code.png";
import serverIcon from "../public/icon_server.png";
import emailIcon from "../public/icon_email.png";
import githubIcon from "../public/icon_github.png";
import linkedInIcon from "../public/icon_linkedIn.png";
import externalLinkIcon from "../public/icon_external_link.png";
import LineTitle from "../components/lineTitle.jsx";
import ContactMe from "../components/contactMe.jsx";
import BackgroundCode from "../public/background_code.png";
import TextOverImage from "../components/textOverImage.jsx";
import PortfolioImage from "../public/Portfolio.png";
import acceskenyaImage from "../public/acceskenya.png";

const skillCarder = {
    cards: [
        {title: "Front-end Development", imageSource: cubeGearIcon, skills: ["HTML5", "CSS3", "ReactJS", "JavaScript"]},
        {title: "Back-end Development", imageSource: codeGearIcon, skills: ["NodeJS", "NextJS", "Python", "Electron"]},
        {title: "Database & Hosting", imageSource: serverIcon, skills: ["MySQL", "MongoDB", "FireBase", "Amazon Web Services"]},
    ],
};
const linkCarder = {
    cards: [
        {
            title: "Portfolio",
            imageSource: PortfolioImage,
            links: [
                {image: externalLinkIcon, link: "http://localhost:3000/"},
                {image: githubIcon, link: "https://github.com/NSkelin/Web-Portfolio"},
            ],
        },
        {
            title: "AccesKenya",
            imageSource: acceskenyaImage,
            links: [{image: externalLinkIcon, link: "https://www.acceskenya.org/"}],
        },
    ],
};

const contactLinks = [
    {text: "nick.skelin@gmail.com", imageSource: emailIcon, imageHeight: "35", imageWidth: "35", alt: "Icon"},
    {text: "Github", imageSource: githubIcon, imageHeight: "35", imageWidth: "35", alt: "Icon", href: "https://github.com/NSkelin"},
    {
        text: "LinkedIn",
        imageSource: linkedInIcon,
        imageHeight: "35",
        imageWidth: "35",
        alt: "Icon",
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nam sed semper quam. Quisque interdum mauris nunc,
                        ut.Nisi volutpat turpis libero dui velit, ac lectus eget at. Vel porttitor scelerisque fusce venenatis sodales. Sem amet,
                        dignissim non malesuada eget purus
                    </div>
                </div>

                <SkillCardHolder title="Skills" cards={skillCarder.cards} />
                <LinkCardHolder title="Recent works" cards={linkCarder.cards} />
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
