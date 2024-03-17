import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutaion=(mutaionFunction:any)=>{
    const [pending,setPending]=useState(false);
    const apiMutation=useMutation(mutaionFunction)

    const mutation=(payload:any)=>{
        setPending(true);

        return apiMutation(payload)
                .then((result)=>{return result;})
                .catch((error)=>{return error;})
                .finally(()=>{setPending(false)});
    }
    return {mutation,pending};
}