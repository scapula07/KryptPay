import axios from "axios"

export const worldIDverificationHandler=async(verificationResponse,signal)=>{
    console.log(verificationResponse)
    const {merkle_root,nullifier_hash,proof} =verificationResponse
   
    try{
        const res=await  axios({
                    method: 'post', 
                    url: 'https://developer.worldcoin.org/api/v1/verify',
                    data: {
                        signal:signal,
                        action_id:"wid_staging_5e063561c72689203042364a85690651",
                        merkle_root,
                        nullifier_hash,
                        proof


                    },
                    headers: {
                            "Content-Type": "application/json"
                          }
                    
                })

            console.log(res)
    }catch(e){
        console.log(e)
    }
}