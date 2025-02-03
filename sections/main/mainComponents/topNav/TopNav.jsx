import Image from "next/image";
import "./TopNavCss.css";


export default function TopNav() {
  return (
    <div className="TopNavContainer slideInDown">
        <Image
            className="Logo"
            src="/LaVerriereLogo.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        <div className="LogoName">
            <h1>La Verrière</h1>
            <p>Best Quality Food/Drinks</p>
        </div>
    </div>
  )
}
