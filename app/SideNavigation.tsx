"use client"

import { IconType } from 'react-icons';
import { HiHome } from 'react-icons/hi';
import { ImFilm } from 'react-icons/im';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { AiOutlineYoutube } from 'react-icons/ai';
import { SiYoutubemusic } from 'react-icons/si';
import { VscLibrary } from 'react-icons/vsc';
import { BsDownload } from 'react-icons/bs';
import { usePathname, useRouter } from 'next/navigation';

interface MenuItem {
    icon: IconType;
    text: string;
    pathname: string
}

const MenuItems: Array<MenuItem> = [
    {
        icon: HiHome,
        text: 'Home',
        pathname: '/'
    },
    {
        icon: ImFilm,
        text: 'Shorts',
        pathname: '/shorts'
    },
    {
        icon: MdOutlineSubscriptions,
        text: 'Subscriptions',
        pathname: '/subscriptions'
    },
    {
        icon: AiOutlineYoutube,
        text: 'Originals',
        pathname: '/originals'
    },
    {
        icon: SiYoutubemusic,
        text: 'YouTubeMusic',
        pathname: '/youtubemusic'
    },
    {
        icon: VscLibrary,
        text: 'Library',
        pathname: '/library'
    },
    {
        icon: BsDownload,
        text: 'Downloads',
        pathname: '/downloads'
    }
]

const SideNavigation = () => {
    const pathname = usePathname();
    const router = useRouter();
    const handleItemClick = (item: MenuItem) => {
        router.push(item.pathname);
    };
    return (
        <div className='p-[4px] lg:px-2 lg:w-[260px]'>
            {
                MenuItems.map(item => (
                    <div className={`cursor-pointer flex flex-col lg:flex-row gap-2 lg:gap-6 pr-2 py-2 lg:py-3 lg:pl-2 items-center hover:bg-zinc-800 rounded-full ${item.pathname === pathname && 'lg:bg-zinc-800 hover:bg-zinc-700'} rounded-md`}
                        onClick={() => handleItemClick(item)}
                    >
                        <div><item.icon size={20} /></div>
                        <span className='text-xs lg:text-base'>{item.text}</span>
                    </div>
                ))
            }
        </div>
        
    )
}

export default SideNavigation;