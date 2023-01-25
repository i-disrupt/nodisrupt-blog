/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'
import getPostMetadata from '../components/GetPostMetadata'
import PostPreview from '../components/PostPreview';


function Home() {
    // Get post metadata
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));


    return (
        <>
            <div className="h-screen">
                <div className="w-screen flex flex-col justify-center align-center px-8 md:px-24 lg:px-48">
                    {postPreviews}
                </div>
            </div>
        </>
    );
}

export default Home