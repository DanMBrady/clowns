import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./requests.js"

export const clownParty =() =>{
return `
<div class ="header">
<div class="head">
<h2>Buttons and Lollipop the Clowns</h2>
</div>
</div>

${ServiceForm()}
<div class ="request">
<section class="serviceRequests">
        <h2 class ="service">Service Requests</h2>
       ${Requests()} 
       </div>
    </section>

`
}