import { Logo } from "../assets"
import { Menu } from "feather-icons-react"

class Link {
    display = ""
    href = ""

    constructor(display, href){
        this.display = display
        this.href = href
    }
}

export default function Navbar(){
    const LINKS = [
        new Link("Home", "/"),
        new Link("Product", "#product"),
        new Link("Faq", "#faq"),
        new Link("Contact", "#contact"),
    ];
    const [isShow, setIsShow] = useState(true)

    return (
        <header className="flex items-center justify-between p-2 md:px-[3rem]">
            <div className="max-w-[8rem] md:max-w-[10rem]">
                <img src={Logo} alt="" className="w-full h-full"/>
            </div>

        <Menu className="md:hidden"/>
            <nav className={`md:flex hidden items-center gap-3 ${isShow ? "":"hidden"}`}>
                {LINKS.map((link, i) => (
                    <a key={i} href={link.href}>
                        {link.display}
                    </a>
                ))}
            </nav>
        </header>
    )
}


