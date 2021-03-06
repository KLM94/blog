import { Link } from "@reach/router";

export default function Homepage() {
  return (
    <div>
      <h1>Kirsty McGlynn</h1>
      <p className="sub-heading">
        {" "}
        My journey as a graduate Software Engineer!
      </p>

      <Link
        to="/blog"
        className="blog-title"
        style={{ textDecoration: "none", color: "white" }}
      >
        Blog
      </Link>

      {/* <p className="blog-title">Blog</p> */}
    </div>
  );
}
