import Image from "next/image";
import "./TopNavCss.css";


export default function TopNav() {
  return (
    <div className="TopNavContainer slideInDown">
      <a href="https://www.instagram.com/laverrierecafe/" target="_blank" rel="noreferrer">
        <Image
            className="Logo"
            src="/LaVerriereLogo.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
            </a>
        <a href="https://www.instagram.com/laverrierecafe/" target="_blank" rel="noreferrer">    
          <div className="LogoName">
              <h1>La Verrière</h1>
              <p>Best Quality Food/Drinks</p>
          </div>
        </a>
    </div>
  )
}
