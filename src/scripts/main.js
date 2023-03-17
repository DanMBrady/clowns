import { clownParty } from "./clownParty.js"
import { fetchCompletions, fetchRequests } from "./dataAccess.js"
import { fetchClowns } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
    .then(() => fetchCompletions())
    .then(
        () => {
            mainContainer.innerHTML = clownParty()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)