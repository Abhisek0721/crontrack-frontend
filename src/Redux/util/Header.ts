import { useAppSelecter } from "../Hooks/store";


export const Header = () =>{
    const token = useAppSelecter((state) => state.auth.user?.access_token);
    const header = `Authorization : Bearer ${(token)} `
    return header;
}