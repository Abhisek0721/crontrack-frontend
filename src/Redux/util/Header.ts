import {getAccessToken} from "./getUserDetailFromBrowser"


export const Header = () =>{
    const header = `Authorization : Bearer ${getAccessToken()} `
    return header;
}