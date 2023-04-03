import Image from 'next/image';
import { feedVideos } from './util/data';
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="flex flex-col px-8 py-4 md:flex-row flex-wrap gap-10 lg:gap-4 flex-1">
      {feedVideos.map(video => (
          <div className='flex flex-col gap-2 w-[320px] cursor-pointer'>
            <div>
              <Image
                src={video.thumbnailUrl}
                height={80}
                width={320}
                alt='thumbnail'
                className='rounded-lg'
              />
            </div>
            <div className='flex gap-3'>
              <div><Image className='rounded-full' src={video.channelImageUrl} height={40} width={40} alt='thumbnail' /></div>
              <div>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between'>
                  <span className='font-semibold text-white max-w-[80%]'>{video.title}</span>
                  <BsThreeDotsVertical />
                  </div>
                  <div className='text-sm text-zinc-400'>
                    <span className=''>{video.channelName}</span>
                    <div className='flex items-center'>
                      <span className=''>{video.viewCount}</span>
                      <span><BsDot /></span>
                      <span>{video.createdAt.toDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
