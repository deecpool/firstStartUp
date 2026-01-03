const POSTS_WITH_STATS = `
    SELECT 
        p.id,
        p.title,
        p.content,
        p.created_at as post_created,
        u.username as author,
        COUNT(DISTINCT c.id) as comments_count,
        COUNT(DISTINCT l.id) as likes_count
    FROM posts p
    LEFT JOIN users u ON p.user_id = u.id
    LEFT JOIN comments c ON p.id = c.post_id
    LEFT JOIN likes l ON p.id = l.post_id
    GROUP BY p.id, p.title, p.content, p.created_at, u.username
    ORDER BY p.created_at DESC
    LIMIT ?
`;

module.exports = {
    POSTS_WITH_STATS
};
