import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Header() {
    return (
        <>
            <Navbar className="bg-slate-300" shouldHideOnScroll>
                <NavbarBrand>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Home
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link color="foreground" href="#">
                            About
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Skill
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Projects
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}