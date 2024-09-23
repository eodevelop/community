export const dummyPosts = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `인기 게시글 ${index + 1}`,
    excerpt: `이것은 인기 게시글 ${index + 1}의 요약입니다.`,
}));