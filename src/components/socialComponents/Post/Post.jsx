import { useContext, useEffect, useState } from "react"
import socialService from "../../../services/social.services"
import "./Post.css"
import userApiServices from "../../../services/user.services"
import { AuthContext } from "../../../contexts/auth.context"

const Post = ({ homeClick }) => {

    const [bringPost, setBringPost] = useState()

    const [infPost, setInfPost] = useState({})

    const { user } = useContext(AuthContext)






    useEffect(() => {
        socialService
            .getPost()
            .then(({ data }) => { setBringPost(data) })
    }, [homeClick])

    useEffect(() => {

        getNutriInfo()
    }, [bringPost])


    console.log("--los post---", bringPost)


    const getNutriInfo = () => {


        const allPromises =
            bringPost?.map(({ owner }, index) =>
                userApiServices.getOneUser(owner).then((res) => res.data)
            )

        if (allPromises) {
            Promise.all(allPromises)
                .then((response) => {
                    setInfPost(response)
                    console.log("el getnutriinfo", response)

                })
                .catch((err) => console.log(err));
        }
    };



    return (
        <div className="post">
            {
                bringPost?.map(({ text, image }, index) => {


                    return (
                        <div>
                            {text} {infPost[index]?.userName}
                        </div>
                    )


                })
            }
        </div>
    )
}


export default Post