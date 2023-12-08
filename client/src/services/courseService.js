import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/courses'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;

};

export const getOne = async (courseId) => {
    const result = await request.get(`${baseUrl}/${courseId}`,);

    return result;
}

export const create = async (courseData) => {

    const result = await request.post(baseUrl, courseData);

    return result;
};

export const edit = async (courseId, courseData) => {
    const result = await request.put(`${baseUrl}/${courseId}`, courseData);

    return result;
};

export const remove = async (courseId) => request.remove(`${baseUrl}/${courseId}`);


export const getBasic = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

