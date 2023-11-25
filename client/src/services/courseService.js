import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/courses'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (courseId) => {
    const result = await request.get(`${baseUrl}/${courseId}`, );

    return result;
}

export const create = async (courseData) => {
    const result = await request.post(baseUrl, courseData);

    return result;
};

