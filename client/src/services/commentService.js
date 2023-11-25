import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (courseId) => {
    const query = new URLSearchParams({
        where: `courseId="${courseId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (courseId, username, text) => {
    const newComment = await request.post(baseUrl, {
        courseId,
        username, 
        text,
    });

    return newComment;
};
