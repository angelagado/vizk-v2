import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section id="footer">
      <Container fluid>
        <div className="copyright">&copy; VIZK Inc. All Right Reserved.</div>
        <div className="socials">
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100075833574946">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        {showTopBtn && <div className="go-top" onClick={goTop}></div>}
      </Container>
    </section>
  );
}

export default AppFooter;
