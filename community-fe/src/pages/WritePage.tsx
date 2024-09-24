import React from 'react';
import './WritePage.scss';

const WritePage: React.FC = () => {
  return (
    <div className="write-page">
      <h1>글쓰기</h1>
      <form className="write-form">
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input type="text" id="title" name="title" placeholder="제목을 입력하세요" />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea id="content" name="content" placeholder="내용을 입력하세요" rows={10}></textarea>
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default WritePage;
