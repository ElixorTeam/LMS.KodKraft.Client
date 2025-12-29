import { helpers } from "@typed-router"

export type ItemNavbar = {
    title: string
    link: ReturnType<typeof helpers.route>
}
export const navbarItems: ItemNavbar[] = [
    { title: "Главная", link: helpers.route({ name: "index" }) },
]