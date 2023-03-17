import { getRequests, saveCompletion } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()
    const clowns = getClowns()

    let html = `

<ul>
        ${requests.map(request => `<li>${request.child}'s Party for ${request.date}
        <button class="request__delete"
        id="request--${request.id}">
    Delete
</button>
<select class="clowns" id="clowns">
                    <option value="">Choose</option>
                    ${clowns.map(
        clown => {
            return `<option value="${request.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("")
        }
                </select>
</li>
        `).join("")}

</ul>


`
    return html

}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    click => {
        if (click.target.id.startsWith("request--")) {
            const [, requestId] = click.target.id.split("--")
            deleteRequest(parseInt(requestId))
        }
    })


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            let correctClown = null
            for (const clown of getClowns()) {
                if (clown.id === parseInt(clownId)) {
                    correctClown = clown
                }
            }

            let correctRequest = null
            for (const request of getRequests()) {
                if (request.id === parseInt(requestId)) {
                    correctRequest = request
                }
            }


            const completion = {
                requestId: correctRequest.id,
                clownId: correctClown.id,
                date_created: Date.now(),
            }

            saveCompletion(completion)

        }


    })
