import { sendRequest } from "./dataAccess.js"

export const ServiceForm =() =>{
return `

<div class="field">
<label class="label" for="serviceParent">Parents Name</label>
<input type="text" name="serviceParent" class="input" />
</div>
<div class="field">
<label class="label" for="serviceChild">Childs Name</label>
<input type="text" name="serviceChild" class="input" />
</div>
<div class="field">
<label class="label" for="serviceChildren">Number of Children Attending</label>
<input type="number" name="serviceChildren" class="input" />
</div>
<div class="field">
<label class="label" for="serviceAddress">Address of the Party</label>
<input type="text" name="serviceAddress" class="input" />
</div>
<div class="field">
<label class="label" for="serviceDate">Date of the Reservation</label>
<input type="date" name="serviceDate" class="input" />
</div>
<div class="field">
<label class="label" for="serviceLength">Length of Reservation</label>
<input type="number" name="serviceLength" class="input" />
</div>


<button class="button" id="submitRequest">Submit Request</button>
`

}


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParent = document.querySelector("input[name='serviceParent']").value
        const userChild = document.querySelector("input[name='serviceChild']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userLength = document.querySelector("input[name='serviceLength']").value
        const userChildren = document.querySelector("input[name='serviceChildren']").value
        
        const dataToSendToAPI = {
           child: userChild,
           parent:userParent,
           address:userAddress,
           length:userLength,
           date: userDate,
           children: userChildren,
            
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})