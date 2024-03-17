import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function Opened() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Last opened" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Last opened">Last opened</SelectItem>
                <SelectItem value="Last modified">Last modified</SelectItem>
                <SelectItem value="Alphabateically">Alphabateically</SelectItem>
                <SelectItem value="Last created">Last created</SelectItem>
            </SelectContent>
        </Select>
    )
}