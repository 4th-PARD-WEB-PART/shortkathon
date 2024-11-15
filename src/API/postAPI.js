import axios from "axios";

//경로 지정
const server = "http://172.18.157.81:8081";

//게시글 get 메소드
export const getPostAPI = async () => {
    try{
        //parameter: id
        const response = await axios.get(`${server}/post/getAll`);
        return response;
    } catch (error){
        console.error("Error fething(id) post data:", error);
        throw error;
    }
};

//게시글 post 메소드
export const postPostAPI = async (data) => {
    try{
        // axois 사용해 추가하려는 데이터 담아 서버로 보냄
        const response = await axios.post(`${server}/post`, data);
        return response;
    } catch (error){
    console.error("Error updating post data:", error);
    throw error;
    }
};


