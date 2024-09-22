import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { tiktok } from "../assets";

const SocialBar: React.FC = () => {
  return (
    <div
      className="text-white z-[100000] md:z-[1000] flex flex-col justify-center h-screen fixed left-0 top-0"
      style={{ width: "4rem" }}
    >
      <ul>
        <li className="flex h-[3.5rem] w-[9.4rem] md:h-[3.3rem] relative right-[6.5rem] md:w-[10.2rem] justify-between items-center rounded-lg">
          <a
            className="flex justify-between items-center w-full rounded-lg h-14 font-semibold hover:ml-[0px] duration-500"
            href="https://www.tiktok.com/@crystalfountain23"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to left, #ff0050, #00f2ea)",
              paddingRight: "7px",
              paddingLeft: "20px",
              height: "3rem",
            }}
          >
            TikTok
            <img
              src={tiktok}
              alt=""
              style={{
                height: "1.9rem",
              }}
            />
          </a>
        </li>
        <li className="flex h-[3.5rem] w-[9.4rem] md:h-[3.3rem] md:w-[10.2rem] relative right-[6.5rem] justify-between items-center rounded-lg">
          <a
            className="flex justify-between items-center w-full rounded-lg h-14 font-semibold hover:ml-[0px] duration-500"
            href="https://www.instagram.com/crystalfountainalgerie/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background:
                "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
              paddingRight: "7px",
              paddingLeft: "20px",
              height: "3rem",
            }}
          >
            Instagram{" "}
            <InstagramIcon
              style={{
                fontSize: "1.9rem",
              }}
            />
          </a>
        </li>
        <li className="flex h-[3.5rem] w-[9.4rem] md:h-[3.3rem] md:w-[10.2rem] relative right-[6.5rem] justify-between items-center rounded-lg">
          <a
            className="flex justify-between items-center w-full rounded-lg h-14 font-semibold hover:ml-[0px] duration-500"
            href="https://Wa.me/+213559797319"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              paddingRight: "7px",
              paddingLeft: "20px",
              height: "3rem",
            }}
          >
            WhatsApp{" "}
            <WhatsAppIcon
              style={{
                fontSize: "1.9rem",
              }}
            />
          </a>
        </li>
        <li className="flex h-[3.5rem] w-[9.4rem] md:h-[3.3rem] md:w-[10.2rem] justify-between items-center relative right-[6.5rem] rounded-lg">
          <a
            className="flex justify-between items-center w-full rounded-lg h-14 bg-gray-900 font-semibold hover:ml-[0px] duration-500"
            href="tel:+213559797319"
            style={{
              paddingRight: "7px",
              paddingLeft: "7px",
              height: "3rem",
            }}
          >
            025 22 71 81{" "}
            <PhoneIcon
              style={{
                fontSize: "1.9rem",
              }}
            />
          </a>
        </li>
        <li className="flex h-[3.5rem] relative right-[6.5rem] w-[9.4rem] md:h-[3.3rem] md:w-[10.2rem] justify-between items-center rounded-lg">
          <a
            className="flex justify-between items-center w-full rounded-lg h-14 bg-red-900 font-semibold  hover:ml-[0px] duration-500"
            href="mailto:contact@example.com"
            style={{
              paddingRight: "7px",
              paddingLeft: "20px",
              height: "3rem",
            }}
          >
            Email{" "}
            <EmailIcon
              style={{
                fontSize: "1.9rem",
              }}
            />
          </a>
        </li>
        <li className="flex justify-between relative right-[6.5rem] items-center rounded-lg h-[4.3rem] w-[9.4rem] md:h-[3.3rem] md:w-[10.2rem]">
          <a
            className="flex justify-between items-center w-full rounded-lg h-14 font-semibold hover:ml-[0px] duration-500"
            href="https://www.facebook.com/profile.php?id=61563788431593"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#1877F2",
              paddingRight: "7px",
              height: "3rem",
              paddingLeft: "20px",
            }}
          >
            Facebook{" "}
            <FacebookIcon
              style={{
                fontSize: "1.9rem",
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
