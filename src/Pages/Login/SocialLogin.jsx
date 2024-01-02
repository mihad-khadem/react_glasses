import toast from "react-hot-toast";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate()

    const { googleLogin, gitLogin} = UseAuth()
    const handleSocialLogin = (media) => {
        media()
        .then(() => {
            toast.success(`Welcome`)
            navigate('/')

        })
        .catch((error) => console.log(error.message))
    }


    return (
        <>
            <div className="divider">continue with</div>
            <div className="">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn bg-neutral btn-outline">Google</button>
                <button onClick={() => handleSocialLogin(gitLogin)} className="btn bg-neutral btn-outline ml-2">GitHub</button>
            </div>
        </>
    );
};

export default SocialLogin;