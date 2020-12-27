import ReadyToTalk from "../components/ReadyToTalk/ReadyToTalk";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Blogpost from "../components/Blog/Blog";
import BlogIntro from "../components/Intro/Blog-intro";
import { GetStaticProps } from "next";
import { fetchAPI } from "../lib/api";
import Head from "next/head";
const siteTitle = "DSC Team";
export default function Blog({ blogs }: any) {
  console.log(blogs);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="DSC Team" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>

      <img
        src="https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-012.jpg"
        style={{ position: "fixed", opacity: 0.1, top: 0 }}
      />
      <Navbar />
      <BlogIntro />
      <section>
        {blogs.map(({ ...blog }, id: number) => {
          return <Blogpost blog={blog} key={id} layout={id} />;
        })}
      </section>
      <ReadyToTalk />
      <Footer />
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  // Run API calls in parallel
  const blogs = await fetchAPI("/blogs");
  blogs.sort((a: any, b: any) => {
    if (a.published_date < b.published_date) {
      return 1;
    } else {
      return -1;
    }
  });
  return {
    props: {
      blogs,
    },
  };
};
