import axios from "axios";

//경로 지정
const server = "http://172.18.157.81:8081";

//user get 메소드
export const getUserAPI = async (userId) => { //
    try{
        //parameter: user_id -> ex) tnals2832
        const response = await axios.get(`${server}/user/${userId}`);
        return response;
    } catch(error){
        console.error("Error fetching(user_id) user data:", error);
        throw error;
    }
};

//user post 메소드
export const postUserAPI = async (data) => {
    try {
        // axois 사용해 추가하려는 데이터 담아 서버로 보냄
        console.log(data);
        const response = await axios.post(`${server}/user`, data);
        return response;
    } catch (error) {
        console.error("Error updating user data:", error);
        throw error;
    }
};