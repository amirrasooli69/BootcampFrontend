import { getSession } from "next-auth/react";
import {useRouter} from "next/router";
function Auth(){
const router = useRouter();
const {status} = getSession();
if(status != "authenticated")
router.replace("/")
}


export default Auth;