import axios from "axios";

//경로 지정
const server = "http://localhost:8081";

//좋아요 여부 post 메소드
export const postLikeAPI = async (data) => {
    try{
        const response = await axios.post(`${server}/like`, data);
        return response;
    } catch (error){
        console.error("Error updating like data:", error);
        throw error;
    }
    
}