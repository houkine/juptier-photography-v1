import { BsBox2Heart, BsBoxArrowInRight, BsCardImage, BsClipboard2Heart, BsEnvelopePaperHeart, BsFileEarmarkPerson, BsGear } from "react-icons/bs"

const IconSize = 20
const dashboardTabs = [
    {
        id: 1,
        title: 'Dashboard',
        href: '/admin/dashboard',
        icon: <BsClipboard2Heart size={IconSize} title="Dashboard" />
    },
    {
        id: 2,
        title: 'Inbox',
        href: '/admin/dashboard/inbox',
        icon: <BsEnvelopePaperHeart size={IconSize} title="Inbox" />
    },
    {
        id: 3,
        title: 'Enquiries',
        href: '/admin/dashboard/enquiries',
        icon: <BsBoxArrowInRight size={IconSize} title="Enquiries" />
    },
    {
        id: 4,
        title: 'Orders',
        href: '/admin/dashboard/orders',
        icon: <BsBox2Heart size={IconSize} title="Orders" />

    },
    {
        id: 5,
        title: 'Users',
        href: '/admin/dashboard/users',
        icon: <BsFileEarmarkPerson size={IconSize} title="Users" />
    },
    {
        id: 6,
        title: 'Gallery',
        href: '/admin/dashboard/gallery',
        icon: <BsCardImage size={IconSize} title="Gallery" />
    },
    {
        id: 6,
        title: 'Configuration',
        href: '/admin/dashboard/configuration',
        icon: <BsGear size={IconSize} title="Configuration" />
    },
]

export default dashboardTabs