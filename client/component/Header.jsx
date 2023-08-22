"use client";
import Image from "next/image";
import Link from "next/link";

const handleChange = (value) => {
  console.log("handleChange ==> ", value);
};

export default function Header() {
  return (
    <>
      <nav className="header">
        <div className="main_lnb">
          <div className="header_sec">
            <div className="inner_sec">
              <div className="lnb">
                <h1>
                  <Link href="/" className="lnb_top_logo">
                    <span className="blind">JJ</span>
                  </Link>
                </h1>
              </div>

              <div>
                <ul className="">
                  <li>
                    <Link href="/">Hello World</Link>
                  </li>
                  <li>
                    <Link href="/">D2 News</Link>
                  </li>
                  <li>
                    <Link href="/">D2 Program</Link>
                  </li>
                  <li>
                    <Link href="/">About D2</Link>
                  </li>
                </ul>
              </div>

              <div className="pc_search_input">
                <fieldset>
                  <legend>검색</legend>
                </fieldset>
                <form action="/">
                  <input
                    type="search"
                    value="Blog 내용 검색"
                    className="search_area"
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <button type="submit" className="btn_search">
                    <i className="xi-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
