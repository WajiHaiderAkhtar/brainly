import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/ShareIcon";

interface CardProps{
    title : string,
    link : string,
    type : "youtube" | "twitter"
}

export function Card({title , link , type} : CardProps){
    return <div className="p-8 bg-white rounded-md border border-slate-200 shadow-md outline-slate-200 max-w-96" >
        <div className="flex items-center justify-between">
            <div className="flex items-center text-lg">
                <div className="text-gray-500 pr-2">
                    <a href={link} target="_blank">
                        <ShareIcon size = "md" />
                    </a>
                </div>
                {title}
            </div>
            <div className="flex">
                <div className="pr-2 text-gray-500">
                    <DeleteIcon size = "md" />
                </div>
                <div className="text-gray-500">
                    <ShareIcon size = "md" />
                </div>
            </div>

        </div>
        <div className="pt-5">
            {type === "youtube" && <iframe className="w-full" src={link.replace("youtu.be" , "www.youtube.com/embed").replace("?v=" , "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {type==="twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com","twitter.com")}></a></blockquote>}
        </div>
    </div>
}
