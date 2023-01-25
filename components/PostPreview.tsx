import Link from 'next/link'
import Image from 'next/image'
import { PostMetadata } from '../components/PostMetadata'

export default function PostPreview(props: PostMetadata) {
    return (
        <div>
            <div className='w-full justify-center items-center '>
                <a className="w-screen" href={`/posts/${props.slug}`}>
                    <div className="card w-full bg-base-300 hover:bg-base-300/80 border border-gray-600 hover:border-gray-500 shadow-xl">
                        <figure>
                            {/* <Image src="https://placeimg.com/400/225/arch" width={400} height={225} alt="Shoes" /> */}
                        </figure>
                        <div className="card-body hover:text-gray-400 cursor-pointer">
                            <p className='cursor-pointer'>{props.longDate}</p>
                            <h2 className="card-title cursor-pointer">
                                <span className="cursor-pointer" >
                                    <span className='hover:text-blue-500 cursor-pointer'>{props.title}</span>
                                </span>
                                {/* href={`/posts/${props.slug}`} */}
                            </h2>
                            <p className='cursor-pointer'>{props.subtitle}</p>
                            
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                        </div>
                    </div>
                </a>
                <br />
            </div>
        </div>
        
    )
}