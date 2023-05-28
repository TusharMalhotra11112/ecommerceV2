import "./footer.css";
import { FiInstagram, FiFacebook, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_brand">
        <h2 className="footer_brand__heading">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4674 1.91309H37.1848C40.9487 1.91309 44 5.28555 44 9.44569V34.5544C44 38.7145 40.9487 42.087 37.1848 42.087H14.4674C10.7034 42.087 7.65216 38.7145 7.65216 34.5544L7.65216 9.44569C7.65216 5.28555 10.7034 1.91309 14.4674 1.91309Z"
                fill="#0D6EFD"
                fillOpacity="0.2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.13044 1.91309H32.0435C36.0055 1.91309 39.2174 5.28555 39.2174 9.44569V34.5544C39.2174 38.7145 36.0055 42.087 32.0435 42.087H8.13044C4.1684 42.087 0.956527 38.7145 0.956528 34.5544L0.956528 9.44569C0.956527 5.28555 4.1684 1.91309 8.13044 1.91309Z"
                fill="#0D6EFD"
              />
              <g opacity="0.7">
                <path
                  opacity="0.3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2902 18.3563H14.3097C14.2591 18.3563 14.1842 18.4266 14.1813 18.4731L13.4589 30.1478L26.9548 30.1452L26.2253 18.4731C26.2225 18.4284 26.1457 18.3563 26.0969 18.3563H25.1164V20.3216C25.1164 20.8643 24.6765 21.3042 24.1338 21.3042C23.5911 21.3042 23.1512 20.8643 23.1512 20.3216V18.3563H17.2554V20.3216C17.2554 20.8643 16.8155 21.3042 16.2728 21.3042C15.7301 21.3042 15.2902 20.8643 15.2902 20.3216V18.3563Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.2033 11.4783C22.9153 11.4783 25.1164 13.6796 25.1164 16.3891L26.0969 16.3914C27.1835 16.3914 28.1192 17.2704 28.1867 18.3508L28.9244 30.1539C28.9921 31.2361 28.1698 32.1133 27.0865 32.1133H13.3201C12.2374 32.1133 11.4146 31.2344 11.4821 30.1539L12.2198 18.3508C12.2875 17.2686 13.2213 16.3914 14.3096 16.3914H15.2902C15.2902 13.6781 17.493 11.4783 20.2033 11.4783ZM23.1511 16.3915C23.1511 14.765 21.8299 13.4436 20.2033 13.4436C18.5778 13.4436 17.2554 14.7642 17.2554 16.3892L23.1511 16.3915ZM15.2902 18.3566H14.3096C14.2591 18.3566 14.1842 18.4269 14.1813 18.4733L13.4589 30.148L26.9548 30.1455L26.2253 18.4733C26.2225 18.4286 26.1457 18.3566 26.0969 18.3566H25.1164V20.3218C25.1164 20.8645 24.6765 21.3044 24.1338 21.3044C23.5911 21.3044 23.1512 20.8645 23.1512 20.3218V18.3566H17.2554V20.3218C17.2554 20.8645 16.8155 21.3044 16.2728 21.3044C15.7301 21.3044 15.2902 20.8645 15.2902 20.3218V18.3566Z"
                  fill="white"
                />
              </g>
            </g>
          </svg>
          <span>Brand</span>
        </h2>
        <p className="footer_brand__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea commodi
        </p>
        <div className="footer_brand__social">
          <FiInstagram />
          <FiFacebook />
          {/* <FiYoutube /> */}
          <FiLinkedin />
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_section">
          <h3 className="footer_section__heading">Heading</h3>
          <div className="footer_section__link">First</div>
          <div className="footer_section__link">Second</div>
          <div className="footer_section__link">Third</div>
          <div className="footer_section__link">Fourth</div>
        </div>
        <div className="footer_section">
          <h3 className="footer_section__heading">Heading</h3>
          <div className="footer_section__link">First</div>
          <div className="footer_section__link">Second</div>
          <div className="footer_section__link">Third</div>
          <div className="footer_section__link">Fourth</div>
        </div>
        <div className="footer_section">
          <h3 className="footer_section__heading">Heading</h3>
          <div className="footer_section__link">First</div>
          <div className="footer_section__link">Second</div>
          <div className="footer_section__link">Third</div>
          <div className="footer_section__link">Fourth</div>
        </div>
        <div className="footer_section">
          <h3 className="footer_section__heading">Heading</h3>
          <div className="footer_section__link">First</div>
          <div className="footer_section__link">Second</div>
          <div className="footer_section__link">Third</div>
          <div className="footer_section__link">Fourth</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
