import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Owned() {
    return (
        <Select >
            <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Owned by anyone" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Owned by anyone">Owned by anyone</SelectItem>
                <SelectItem value="Owned by me">Owned by me</SelectItem>
                <SelectItem value="Not owned by me">Not owned by me</SelectItem>
            </SelectContent>
        </Select>
    )
}