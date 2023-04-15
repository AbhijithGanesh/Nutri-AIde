import supabase from "@/supabase/profile";
import { Auth } from "@supabase/ui";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";

const AuthComponent = (): JSX.Element => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [authState, setAuthState] = useState<any>();

    async () => {
        const { data, error } = await supabase.auth.getSession()
        setAuthState(data?.session)
    }

    console.log(authState);

    return (
        <>
            <section className="flex flex-col gap-2 w-full">
                <section className="text-md font-normal">Login</section>
                <input
                    className="p-2 border border-gray-300 rounded-md font-medium"
                    type="email"
                    placeholder="BeNutrious@healthy.com"
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <input
                    className="p-2 border border-gray-300 rounded-md font-medium"
                    type="password"
                    placeholder="*******"
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <section className="flex flex-1 gap-2 justify-end">
                    <section className="text-base">Forgot your password?</section>
                </section>
                <button className="p-2 bg-base text-white rounded-md font-medium">
                    <section className="flex justify-center items-center gap-2">
                        <AiOutlineLogin />
                        <section>Login</section>
                    </section>
                </button>
                <section className="font-semibold text-md flex justify-center pt-4 text-base">
                    Don't have an account? Sign up
                </section>
                <section className="h-0.5 bg-gray-200" />
                <section className="text-center font-normal border-2 border-bg-black rounded-md p-1 hover:translate-x-2">
                    <section className="flex items-center justify-center gap-2">
                        <VscGithubAlt className="text-2xl" />
                        Login with GitHub
                    </section>
                </section>
                <section className="text-center font-normal border-2 border-bg-black rounded-md p-1 hover:translate-x-2">
                    <button className="flex items-center justify-center gap-2" onClick={
                        () => {
                            supabase.auth.signInWithOtp({
                                email: 'Abhijith.Ganesh@outlook.com',
                            }).then(
                                (data: any) => {
                                    console.log(data)
                                }
                            )
                        }
                    }>
                        <TfiTwitter className="text-2xl" />
                        Login with Twitter
                    </button>
                </section>
            </section>
        </>
    );
};

const LoginComponent = (): JSX.Element => {
    return (
        <>
            <section className="flex items-center justify-center pt-32">
                <section className="flex flex-col items-center gap-4 font-semibold w-1/3">
                    <AuthComponent />
                </section>
            </section>
        </>
    );
};
export default LoginComponent;
