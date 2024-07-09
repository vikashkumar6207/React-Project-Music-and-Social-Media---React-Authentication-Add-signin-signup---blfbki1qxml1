import { useContext } from "react";
import { UserContext } from '@/src/provider/UserProvider';


function useUser(){

    return useContext(UserContext);
}
export default useUser;