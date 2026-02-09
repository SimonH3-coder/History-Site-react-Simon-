import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ThemeContext } from "../../../context/ThemeContext";

interface NavbarProps {
    logoNav : string;
    linkNav: Array<{ name: string; path: string }>;
}

export function Navbar(props: NavbarProps) {
    const { logoNav, linkNav } = props;
    const  { userData, logout } = useContext(AuthContext);
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
