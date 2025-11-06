const routes = [
    {
        id: 1,
        title: 'HOME',
        href: '/',
        text_color: ' text-white',
    },
    {
        id: 2,
        title: 'GALLERY',
        href: '/gallery',
        text_color: ' text-white',
    },
    {
        id: 3,
        title: 'ABOUT',
        href: '/about',
        text_color: ' text-gray-700',
    },
    {
        id: 4,
        title: 'SERVICE',
        href: '/service/personal#1',
        text_color: ' text-gray-700',
    },
    {
        id: 5,
        title: 'CONTACT',
        href: '/contact',
        text_color: ' text-gray-700',
    },

]

export type routesType = {
    id: number,
    title: string,
    href: string,
    text_color: string,
}
export default routes