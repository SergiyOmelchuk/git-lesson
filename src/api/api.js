import * as axios from "axios";

const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true, // благодаря этому всегда отправляются куки вместе с запросом
    headers: {
        "API-KEY": "f44e1c37-e618-4224-90c9-47813b2460fc"
    }
});

let captchaURL = "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=FAodyMa%2BooV667YYJ7js3g%3D%3D";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
            return response.data;
        });
    },
    getUserProfile(userId) {
        console.warn("Obsolete method. Please use profileAPI")
        return profileAPI.getUserProfile(userId)
    },
    followed(userId) {
        return instanse.post(`/follow/${userId}`).then((response) => {
            return response.data;
        });
    },
    unFollowed(userId) {
        return instanse.delete(`/follow/${userId}`).then((response) => {
            return response.data;
        });
    }
};
export const profileAPI = {
    getUserProfile(userId) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`);
    },
    updateStatus(statusText) {
        return instanse.put(`profile/status/`, {status: statusText});
    },
    setProfileData(profileData) {
        debugger
        return instanse.put(`profile/`, profileData);
    },
    uploadNewProfilePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instanse.put(`profile/photo/`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    }
}
export const authAPI = {
    authMe() {
        return instanse.get(`auth/me`).then((response) => {
            return response.data;
        });
    },
    login(email, password, rememberMe = false, captcha = captchaURL) {
        debugger
        return instanse.post(`auth/login`, {email, password, rememberMe, captcha}).then((response) => {
            return response.data;
        })
    },
    logout() {
        return instanse.delete(`auth/login`).then((response) => {
            return response.data;
        })
    }
};
