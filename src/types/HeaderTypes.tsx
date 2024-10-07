import { IconType } from "react-icons"

interface PopularServicePropsType {
    service: string
}

interface NavbarPropsType {
    bgColour: string
}

interface NavbarOnScrollPropsType {
    textColour: string
}

interface NavbarLinkWithIcon {
    name: string,
    icon: any
}

interface ServicesDropDownInfor {
    name: string,
    link: string
}

interface ServicesDropDownArray {
    description: string,
    services: Array<ServicesDropDownInfor>
}

interface ServicesDropDownProps {
    values: Array<ServicesDropDownArray>,
    navbarRef: any
}

export type {
    PopularServicePropsType,
    NavbarPropsType,
    NavbarOnScrollPropsType,
    NavbarLinkWithIcon,
    ServicesDropDownProps
}