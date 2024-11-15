// import axios from "axios";

// //경로 지정
// const server = "http://localhost:8081";

// //게시글 get 메소드
// export const getPostAPI = async (id) => {
//     try{
//         //parameter: id
//         const response = await axios.get(`${server}/post?id=${id}`);
//         return response;
//     } catch (error){
//         console.error("Error fething(id) post data:", error);
//         throw error;
//     }
// };

// //게시글 post 메소드
// export const postPostAPI = async (data) => {
//     try{
//         // axois 사용해 추가하려는 데이터 담아 서버로 보냄
//         const response = await axios.post(`${server}/post`, data);
//         return response;
//     } catch (error){
//     console.error("Error updating post data:", error);
//     throw error;
//     }
// };
import axios from "axios";

// Define the server URL
const server = "http://localhost:8081";

// Fetch a specific post by ID
export const getPostAPI = async (id) => {
    try {
        const response = await axios.get(`${server}/post?id=${id}`);
        return response;
    } catch (error) {
        console.error("Error fetching post data:", error);
        throw error;
    }
};

// Fetch all posts (if endpoint exists)
export const getAllPostsAPI = async () => {
    try {
        const response = await axios.get(`${server}/posts`);
        return response;
    } catch (error) {
        console.error("Error fetching all posts data:", error);
        throw error;
    }
};

// Create a new post
export const postPostAPI = async (data) => {
    try {
        const response = await axios.post(`${server}/post`, data);
        return response;
    } catch (error) {
        console.error("Error creating post data:", error);
        throw error;
    }
};
