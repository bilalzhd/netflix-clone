import Input from "@/components/Input";
import { useCallback, useState } from "react";
function Auth() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((current) => current === 'login' ? 'register' : 'login')
    }, []);

    return (
    <div className="relative h-full w-full bg-url-hero bg-no-repeat bg-center bg-fixed bg-center">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <img src="/images/logo.png" alt="Logo" className="h-12" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">{variant === "login" ? 'Sign In' : 'Register'}</h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && <Input value={username} id="username" label="Username" onChange={(e: any) => setUsername(e.target.value)} />}
                        <Input value={email} id="email" type="email" label="Email" onChange={(e: any) => setEmail(e.target.value)} />
                        <Input value={password} id="password" type="password" label="Password" onChange={(e: any) => setPassword(e.target.value)} />
                    </div>
                    <button className="bg-red-700 py-3 text-white rounded-md w-full mt-10 hover:bg-red-800 transition">{variant === 'login' ? 'Login' : 'Sign Up'}</button>
                    <p className="text-neutral-500 mt-10">{variant === 'login' ? 'First time using Netflix?' : 'Already a user?'} <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                        {variant === 'login' ? 'Create an account' : 'Login here'}</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth;