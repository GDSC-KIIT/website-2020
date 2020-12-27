import styles from "./blog.module.css";
import { getStrapiMedia } from "../../lib/media";
export default function Blogpost({ blog, layout }: any) {
  console.log(blog);
  const imageUrl = getStrapiMedia(blog.image);
  return (
    <>
      {layout % 2 == 0 ? (
        <div className={styles.blog_card}>
          <div className={styles.meta}>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            ></div>
            <ul className={styles.details}>
              <li className={styles.author}>
                <i className={`${styles.blog_icon} fas fa-user fa-fw`}></i>
                {blog.author}
              </li>
              <li className={styles.date}>
                <i className={`${styles.blog_icon} far fa-calendar fa-fw`}></i>
                {blog.published_date}
              </li>
              <li className={styles.tags}>
                <ul>
                  <i className={`${styles.blog_icon} fas fa-tag fa-fw`}></i>
                  {blog.tags.map((tag: string) => {
                    return <li>{tag}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
            <h1>{blog.title}</h1>
            <h2>{blog.subtitle}</h2>
            <p>{blog.description}</p>
            <p className={styles.read_more}>
              <a href={blog.url}>Read More</a>
            </p>
          </div>
        </div>
      ) : (
        <div className={`${styles.blog_card} ${styles.alt}`}>
          <div className={styles.meta}>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            ></div>
            <ul className={styles.details}>
              <li className={styles.author}>
                <i className={`${styles.blog_icon} fas fa-user fa-fw`}></i>{" "}
                {blog.author}
              </li>
              <li className={styles.date}>
                <i className={`${styles.blog_icon} far fa-calendar fa-fw`}></i>
                {blog.published_date}
              </li>
              <li className={styles.tags}>
                <ul>
                  <i className={`${styles.blog_icon} fas fa-tag fa-fw`}></i>
                  {blog.tags.map((tag: string) => {
                    return <li className={styles.list}>{tag}</li>;
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
            <h1>{blog.title}</h1>
            <h2>{blog.subtitle}</h2>
            <p>{blog.description}</p>
            <p className={styles.read_more}>
              <a href={blog.url}>Read More</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
