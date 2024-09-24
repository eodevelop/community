import React from 'react';
import { Link } from 'react-router-dom';
import './PostListPage.scss';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
}

const PostListPage: React.FC = () => {
  // 더미 데이터 생성
  const posts: Post[] = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `게시글 제목 ${index + 1}`,
    author: `작성자 ${index + 1}`,
    date: `2023-09-${(index % 30) + 1}`,
  }));

  return (
    <div className="post-list-page">
      <div className="post-list-header">
        <h1>게시글 목록</h1>
        <div className="post-list-actions">
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>검색</button>
          <Link to="/write" className="write-button">
            글쓰기
          </Link>
        </div>
      </div>
      <table className="post-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.author}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled>&laquo;</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>&raquo;</button>
      </div>
    </div>
  );
};

export default PostListPage;
