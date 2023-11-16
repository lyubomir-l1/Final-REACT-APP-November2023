import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (courseId) => {
    const query = new URLSearchParams({
        where: `courseId="${courseId}"`
    });

    const result = await request.get(`${baseUrl}`);

    // TODO: temp solution until migration to collections service 
    return Object.values(result).filter(comment => comment.courseId === courseId);
};

export const create = async (courseId, username, text) => {
    const newComment = await request.post(baseUrl, {
        courseId,
        username, 
        text,
    });

    return newComment;
};
