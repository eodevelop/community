import React from 'react';
import './PopularPosts.scss';

interface Post {
    id: number;
    title: string;
    excerpt: string;
}

interface PopularPostsProps {
    title: string;
    posts: Post[];
}

const PopularPosts: React.FC<PopularPostsProps> = ({ title, posts }) => {
    return (
        <div className="popular-posts">
            <h2 className="popular-posts__title">{title}</h2>
            <ul className="popular-posts__list">
                {posts.map((post) => (
                    <li key={post.id} className="popular-posts__item">
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularPosts;
