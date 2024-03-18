import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface FooterProps{
    title:string,
    modifier:string,
    modified:string,
    starred:boolean
}

export default function Footer({title,modifier,modified,starred}:FooterProps){
    return (
        <div className="flex w-full mt-2 ml-2">
            <div className="flex flex-col gap-y-1">
                <div>
                    <span>{title}</span>
                </div>
                <div>
                    <span className="font-normal">{`Modified by ${modifier}, ${modified}`}</span>
                </div>
            </div>
            <div>
                <div>
                    <FontAwesomeIcon icon={faStar} size="lg" className="text-gray-400 hover:text-blue-600" />
                </div>

            </div>
        </div>
    )

}