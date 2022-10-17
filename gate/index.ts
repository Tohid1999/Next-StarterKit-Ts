import api from './api';

const uploadFile = {
    uploadFile: (data: FormData, onUploadProgress: ((progressEvent: any) => void) | undefined) =>
        api.file('/file-upload', data, onUploadProgress),
};

const home = {
    posts: () =>
        api.get<
            {
                userId: number;
                id: number;
                title: string;
                body: string;
            }[]
        >('posts'),
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...uploadFile,
    ...home,
};
