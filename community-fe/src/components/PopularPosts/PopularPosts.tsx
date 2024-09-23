import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to={`/posts/${post.id}`}>
                            <p>{post.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopularPosts;
